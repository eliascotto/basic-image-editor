// Truncate out-of-range value 0-255 for RGB pixels
const truncate = (value) => {
  if (value > 255) {
    return 255
  } else if (value < 0) {
    return 0
  }
  return value
}

// Extract the height padding to apply to the canvas rendering.
// Uses the difference between the actual canvas size
// and the visible portion inside the parent container
export const canvasImagePadding = (img, canvas) => {
  const { width: imgWidth, height: imgHeight } = img;
  const parentWidth = canvas.parentNode.offsetWidth;
  const parentHeight= canvas.parentNode.offsetHeight;
  
  if (imgWidth < parentWidth) {
    return 0;
  }

  const canvasHeight = (parentWidth / imgWidth) * imgHeight;
  const padding = (canvasHeight - parentHeight) / 2;

  return canvasHeight > parentHeight ? padding || 0 : 0;
}

export const cloneImageData = (imageData) => {
  return new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  )
}

export const updateImageData = (imageData, contrast, brightness) => {
  // source:
  //    https://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-4-brightness-adjustment/
  //    https://www.dfstudios.co.uk/articles/programming/image-programming-algorithms/image-processing-algorithms-part-5-contrast-adjustment/

  const { data } = imageData;
  const factor = (259 * (contrast + 255)) / (255 * (259 - contrast))

  // Set the image constrast + brightness
  for (let i = 0; i < data.length; i+= 4) {
    data[i] = truncate(factor * (data[i] - 128) + 128 + brightness)
    data[i+1] = truncate(factor * (data[i+1] - 128) + 128 + brightness)
    data[i+2] = truncate(factor * (data[i+2] - 128) + 128 + brightness)
  }
}

export const drawImageOnCanvas = (canvas, imgFile, onloadCallback) => {
  const reader = new FileReader()
  const ctx = canvas.getContext('2d')

  reader.onload = (event) => {
    var img = new Image()
    img.onload = () => {
      // get padding to center image inside visible canvas
      const padding = canvasImagePadding(img, canvas)

      // set size proportional to image
      canvas.width = img.width
      canvas.height = img.height
      
      // draw image full-width and adapted height
      ctx.drawImage(img, 0, -padding, img.width, img.height)

      // save initial image pixels data for future transformations
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      onloadCallback(imgData)
    }
    img.src = event.target.result
  };
  reader.readAsDataURL(imgFile)
}

<template>
  <div class="PageContent">
    <div class="PageContent__container">
      <Card class="PageContent__card">
        <ImageSlider
          name="brightness"
          v-model="brightness"
          v-on:click="onCorrectionChange"
          v-on:mousemove="onCorrectionChange"
          :color="brightnessColor"
          :disabled="!isImageUploaded"
        />
      </Card>
      <Card class="PageContent__card">
        <ImageSlider
          name="contrast"
          v-model="contrast"
          v-on:click="onCorrectionChange"
          v-on:mousemove="onCorrectionChange"
          :color="contrastColor"
          :disabled="!isImageUploaded"
        />
      </Card>
      <Card class="PageContent__card PageContent__card--border">
        <div class="canvas__container">
          <canvas class="canvas__element" ref="canvas" />
        </div>
        <ImagePicker
          buttonText="UPLOAD"
          inputText="NAME"
          :fileName="fileName"
          v-on:file-upload="onImageSelection"
        />
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '../atoms/Card.vue'
import ImageSlider from '../molecules/ImageSlider.vue'
import ImagePicker from '../molecules/ImagePicker.vue'
import {
  cloneImageData,
  updateImageData,
  drawImageOnCanvas,
} from '@/utils/canvas.js'

export default {
  name: 'PageContent',
  components: {
    Card,
    ImageSlider,
    ImagePicker,
  },
  props: {
    brightnessColor: String,
    contrastColor: String,
    initialValue: String,
  },
  data() {
    return {
      initialImageData: null,
      brightness: this.initialValue,
      contrast: this.initialValue,
      fileName: '',
    };
  },
  computed: {
    isImageUploaded() {
      return this.initialImageData;
    }
  },
  methods: {
    onImageSelection(imgFile) {
      const canvas = this.$refs.canvas;
      this.fileName = imgFile.name;

      drawImageOnCanvas(canvas, imgFile, (imgData) => {
        this.initialImageData = imgData;
      })
    },

    onCorrectionChange() {
      const { brightness: strBrightness, contrast: strContrast, initialImageData } = this
      const brightness = parseInt(strBrightness, 10)
      const contrast = parseInt(strContrast, 10)
      const ctx = this.$refs.canvas.getContext('2d')

      // Clone initial ImageData
      const imageData = cloneImageData(initialImageData)
      updateImageData(imageData, contrast, brightness)

      ctx.putImageData(imageData, 0, 0);
    },
  },
}
</script>

<style lang="scss">
.PageContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__container {
    padding: 15px 20px;
    padding-top: 0;
    max-width: 500px;
    min-width: 335px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 5px;

    &--border {
      margin-top: 35px;
      box-shadow: none;
      border: 1px solid #DCDEE4;
    }
  }
}
.canvas {
  &__container {
    width: 100%;
    overflow: hidden;
    max-height: 300px;
  }

  &__element {
    width: 100%;
  }
}
</style>

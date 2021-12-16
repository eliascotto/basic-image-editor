<template>
  <input
    type="range"
    ref="slider"
    class="Slider"
    min="-100"
    max="100"
    :name="name"
    :value="value"
    :style="cssProps"
    :disabled="disabled"
    v-on:input="onInput"
    v-on:click="onClick"
    v-on:mousedown="startDrag"
    v-on:mousemove="onDrag"
  />
</template>

<script>
import { hexToRgb } from '@/utils/utils.js'

export default {
  name: 'Slider',
  props: {
    value: String,
    name: String,
    disabled: Boolean,
    color: {
      type: String,
      default: '#606670',
    },
    alpha: {
      type: Number,
      default: .25,
      validator: value => value >= 0 && value <= 1,
    }
  },
  data() {
    return {
      isDragging: false,
    }
  },
  computed: {
    cssProps() {
      const rgbValue = hexToRgb(this.color)
      // transpose value from -100:100 to 0:100
      const val = (parseInt(this.value, 10) + 100) / 2
      // convert rgb object to rgba string using the alpha parameter
      const rgbA = (alpha) => `rgba(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b}, ${alpha})`
      // set the background dynamically for chrome browsers using a linear-gradient
      const background = `linear-gradient(to right, \
          ${rgbA(1)} 0%, ${rgbA(1)} ${val}%, \
          ${rgbA(this.alpha)} ${val}%, ${rgbA(this.alpha)} 100%)`

      // avoid wrong behaviour using css for chrome/safari
      if (this.$browserDetect.isFirefox || this.$browserDetect.isIE || this.$browserDetect.isEdge) {
        return {
          '--main-color': this.color,
          '--main-color-rgba': rgbA(this.alpha),
        }
      }

      return {
        '--main-color': this.color,
        'background': this.disabled ? '#dedede' : background,
      }
    }
  },
  methods: {
    startDrag() {
      this.isDragging = true
    },
    stopDrag() {
      this.isDragging = false
    },
    onDrag(event) {
      if (this.isDragging) {
        this.$emit('mousemove', event)
      }
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    onClick(event) {
      this.$emit('click', event.target.value)
    },
  },
  mounted() {
    window.addEventListener('mouseup', this.stopDrag)
  },
  beforeDestroy() {
    window.removeEventListener('mouseup', this.stopDrag)
  },
}
</script>

<style lang="scss">
.Slider {
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
  height: 5px;
  margin: 0;
  transition: 0.1s ease-in;
  vertical-align: middle;
  border-radius: 5px;

  @media only screen and (min-width: 768px) {
    height: 6px;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 50%;
    background-color: var(--main-color);
    height: 20px;
    width: 20px;
    border: 3px solid #FFF;
    @media only screen and (min-width: 768px) {
      height: 22px;
      width: 22px; 
    }
  }

  &[disabled]::-webkit-slider-thumb {
    background-color: #aaa;
  }

  &::-moz-range-thumb {
    border-radius: 20px;
    height: 14px;
    width: 14px;
    border: none;
    background: none;
    background-color: var(--main-color);
    border: 3px solid #FFF;

    @media only screen and (min-width: 768px) {
      height: 16px;
      width: 16px; 
    }
  }

  &[disabled]::-moz-range-thumb {
    background-color: #aaa;
  }

  &::-moz-range-progress {
    background-color: var(--main-color);
    height: 5px;
  }

  &[disabled]::-moz-range-progress {
    background-color: #dedede;
  }

  &:active::-moz-range-thumb {
    outline: none;
  }

  &::-moz-range-track {
    background-color: var(--main-color-rgba);
    height: 5px;
    border-radius: 3px;
    border: none;

    @media only screen and (min-width: 768px) {
      height: 6px;
    }
  }

  &[disabled]::-moz-range-track {
    background-color: #dedede;
    opacity: 1;
  }

  &::-moz-focus-outer {
    border: 0;  // remove dotted outline on firefox
  }

  &::-ms-track {
    color: transparent;
    border: none;
    background: none;
    height: 5px;

    @media only screen and (min-width: 768px) {
      height: 6px;
    }
  }

  &::-ms-fill-lower { 
    background-color: var(--main-color);
    border-radius: 3px;
  }

  &::-ms-fill-upper { 
    background-color: var(--main-color);
    opacity: .25;
    border-radius: 3px;
  }

  &[disabled]::-ms-fill-lower, &[disabled]::-ms-fill-upper {
    background-color: #dedede;
    opacity: 1;
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-ms-thumb { 
    border-radius: 100%;
    background-color: var(--main-color);
    height: 20px;
    width: 20px; 
    border: none;
    border: 3px solid #FFF;

    @media only screen and (min-width: 768px) {
      height: 22px;
      width: 22px; 
    }
  }

  &[disabled]::-ms-thumb {
    background-color: #aaa;
  }

  &:active::-ms-thumb {
    border: none;
  }
}
</style>

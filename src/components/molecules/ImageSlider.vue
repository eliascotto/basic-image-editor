<template>
  <div class="ImageSlider">
    <label
      class="ImageSlider__label"
      :for="name"
      :style="cssProps"
      :disabled="disabled"
    >
      {{ name }}
    </label>
    <Slider
      class="ImageSlider__slider"
      :color="color"
      :name="name"
      :value="value"
      v-on:input="changeValue"
      v-on:click="onClick"
      v-on:mousemove="onMouseMove"
      :disabled="disabled"
    />
    <label v-if="showValue" class="ImageSlider__guide" :disabled="disabled">Slide to adjust image {{ name }}!</label>
    <label v-else class="ImageSlider__guide">{{ value }}</label>
  </div>
</template>

<script>
import Slider from '../atoms/Slider.vue'

export default {
  name: 'ImageSlider',
  components: {
    Slider,
  },
  props: {
    value: String,
    name: String,
    color: String,
    disabled: Boolean,
  },
  model: {
    event: 'modified',
  },
  data() {
    return {
      changed: false,
    }
  },
  computed: {
    cssProps() {
      return { 'color': this.disabled ? '#999': this.color }
    },
    showValue() {
      return this.disabled || !this.changed
    }
  },
  methods: {
    changeValue(value) {
      this.changed = true
      this.$emit('modified', value)
    },
    onMouseMove(event) {
      this.$emit('mousemove', event)
    },
    onClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>

<style lang="scss">
.ImageSlider {
  width: 100%;
  padding: 0 28px;
  box-sizing: border-box;

  &__label {
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
    text-transform: capitalize;
    display: block;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  &__guide {
    display: block;
    padding: 7px;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }

    &[disabled] {
      color: #999;
    }
  }

  &__slider {
    margin: 10px 0;
    margin-top: 7px;
  }
}
</style>

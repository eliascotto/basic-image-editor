<template>
  <header class="Header">
    <div class="Header__image" :style="styles"></div>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    img: String,
  },
  computed: {
    styles() {
      return `background-image: url("${this.img}");`;
    }
  }
}
</script>

<style lang="scss">
.Header {
  height: 215px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
}
</style>

<template>
  <div class="HeaderBar">
    <h1 class="HeaderBar__title">{{ title }}</h1>
    <h3 class="HeaderBar__subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    title: String,
    subtitle: String,
  },
}
</script>

<style lang="scss">
.HeaderBar {
  font-family: Arial,sans-serif;
  background-color: rgb(115, 68, 192);
  padding: 0 30px;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__title, &__subtitle {
    color: #FFF;
    margin: 0;
  }

  &__title {
    font-size: 15px;
    margin-bottom: 10px;
    @media only screen and (min-width: 768px) {
      font-size: 20px; 
    }
  }

  &__subtitle {
    font-size: 13px;
    font-weight: normal;

    @media only screen and (min-width: 768px) {
      font-size: 15px; 
    }
  }
}
</style>

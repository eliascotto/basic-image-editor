<template>
  <div class="ProfilePicture">
    <img class="ProfilePicture__image" :src="img" />
  </div>
</template>

<script>
export default {
  name: 'ProfilePicture',
  props: {
    img: String,
  },
}
</script>

<style lang="scss">
.ProfilePicture {
  border: 3px solid #FFF;
  border-radius: 50%;
  width: 60px;
  min-height: 60px;
  overflow: hidden;
  background: transparent;
  margin-top: -50px;

  @media only screen and (min-width: 768px) {
    width: 80px;
    min-height: 80px;
    margin-top: -70px;
  }

  &__image {
    max-width: 100%;
    min-height: 100%;
  }
}
</style>

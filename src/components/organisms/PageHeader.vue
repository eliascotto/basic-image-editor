<template>
  <div class="PageHeader">
    <HeaderBar :title="title" :subtitle="subtitle" />
    <Header :img="imageHeader">
      <ProfilePicture :img="imageProfile" />
    </Header>
  </div>
</template>

<script>
import Header from '../molecules/Header.vue'
import HeaderBar from '../molecules/HeaderBar.vue'
import ProfilePicture from '../atoms/ProfilePicture.vue'

export default {
  name: 'PageHeader',
  components: {
    Header,
    HeaderBar,
    ProfilePicture,
  },
  props: {
    imageHeader: String,
    imageProfile: String,
    title: String,
    subtitle: String,
  },
}
</script>

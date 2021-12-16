<template>
  <div id="app">
    <PageHeader
      title="Brightness & Contrast Developer Test"
      subtitle="01 Jun, 2018 – 31 Dec, 2020"
      :imageHeader="imageHeader"
      :imageProfile="imageProfile"
    />
    <PageContent
      brightnessColor="#25A95B"
      contrastColor="#4A90E2"
      initialValue="0"
    />
  </div>
</template>

<script>
import PageContent from './components/organisms/PageContent.vue'
import PageHeader from './components/organisms/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageContent,
  },
  data() {
    return {
      imageHeader: require('./assets/top.png'),
      imageProfile: require('./assets/profile.jpeg'),
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 80px;
}
body {
  margin: 0;
}
</style>

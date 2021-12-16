<template>
  <div class="ImagePicker">
    <form class="ImagePicker__form">
      <Input :value="fileName" :prepend="inputText" :disabled="true" />
      <Button
        class="ImagePicker__uploadButton"
        v-on:click.native="onButtonClick"
      >
        {{ buttonText }}
      </Button>
      <input ref="inputFile" type="file" style="display:none" v-on:change="onFileInputChange" />
    </form>
  </div>
</template>

<script>
import Input from '../atoms/Input.vue'
import Button from '../atoms/Button.vue'

export default {
  name: 'ImagePicker',
  components: {
    Input,
    Button,
  },
  props: {
    fileName: String,
    buttonText: String,
    inputText: String,
  },
  methods: {
    onButtonClick() {
      this.$refs.inputFile.click();
    },

    onFileInputChange(event) {
      this.$emit('file-upload', event.target.files[0]);
    },
  },
}
</script>

<style lang="scss">
.ImagePicker {
  padding: 20px 10px;
  width: 100%;
  box-sizing: border-box;

  &__uploadButton {
    color: #4A90E2;
    margin-left: 20px;
    white-space: nowrap;

    &::before {
      display: inline-block;
      margin-left: 0;
      vertical-align: 2px;
      content: ' ';
      border-top: 0;
      border-right: 6px solid transparent;
      border-bottom: 6px solid;
      border-left: 6px solid transparent;
    }
  }

  &__form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

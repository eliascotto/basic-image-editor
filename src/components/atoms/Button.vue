<template>
  <span class="Button">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style lang="scss">
.Button {
  background-color: #F6F8FA;
  border: 1px solid #DCDEE4;
  color: #8392A6;
  font-size: 13px;
  font-weight: 500;
  outline: none;
  border-radius: 5px;

  padding: 7px 13px;

  &:hover {
    cursor: pointer;
  }
}
</style>

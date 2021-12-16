<template>
  <div class="Input">
    <div class="Input__prepend" v-if="prepend">
      <span>{{ prepend }}</span>
    </div>
    <input
      class="Input__element"
      :class="{ 'Input__element--prepend': prepend }"
      :value="value"
      :disabled="disabled"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    prepend: String,
    value: String,
    disabled: Boolean,
  },
}
</script>

<style lang="scss">
.Input {
  background-color: #F6F8FA;
  border: 1px solid #DCDEE4;
  color: #8392A6;
  font-size: 13px;
  font-weight: 500;
  outline: none;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  
  position: relative;
  display: flex;
  align-items: stretch;

  &__prepend {
    margin-right: -1px;
    display: flex;
    text-transform: uppercase;
    border-right: 1px solid #DCDEE4;
    z-index: 1;

    user-select: none;

    & > span {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      display: flex;
      align-items: center;
      padding: 7px 13px;
      margin-bottom: 0;
      text-align: center;
      white-space: nowrap;
    }
  }

  &__element {
    border: 0;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 5px;
    color: #25A95B;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */
    width: 100%;

    overflow:hidden; 
    white-space:nowrap; 
    text-overflow: ellipsis;

    &:focus {
      outline: none;
    }

    &--prepend {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>

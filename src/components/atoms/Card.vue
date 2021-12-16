<template>
  <div class="Card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style>
.Card {
  background-color: #FFF;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  margin: 20px 0;
  border-radius: 5px;
}
</style>

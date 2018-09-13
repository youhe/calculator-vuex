<template>
  <div id="app">
    <div class="frame">
      <display></display>
      <operation></operation>
      <number></number>
    </div>
  </div>
</template>

<style lang="scss">
@import "css/_variables";

.frame {
  box-sizing: border-box;
  border: 1px solid #333;
  padding: 0 0 20px;
  width: 340px;
}
</style>

<script>
import display from './display.vue'
import operation from './operation.vue'
import number from './number.vue'

export default {
  components: {display, operation, number}
}
</script>

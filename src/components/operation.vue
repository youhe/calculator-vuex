<template>
  <div class="op">
    <div @click="clear">c</div>
    <div @click="operation('+')">+</div>
    <div @click="operation('-')">-</div>
    <div @click="operation('*')">*</div>
    <div @click="operation('/')">/</div>
    <div @click="equal">=</div>
  </div>
</template>

<style>
  .op {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 300px;
    font-size: 20px;
  }
  .op * {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #006a6c;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: mapActions([
    'operation',
    'equal',
    'clear',
  ])
}
</script>

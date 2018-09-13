<template>
  <div class="op">
    <div @click="clear">c</div>
    <div @click="operation('+')">+</div>
    <div @click="operation('-')">-</div>
    <div @click="operation('*')">×</div>
    <div @click="operation('/')">÷</div>
  </div>
</template>

<style>
  .op {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 300px;
  }
  .op * {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #006a6c;
    width: 52px;
    height: 40px;
    font-size: 24px;
    cursor: pointer;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: mapActions([
    'operation',
    'clear',
  ])
}
</script>

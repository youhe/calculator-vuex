<template>
  <div class="num">
    <div @click="addNum('9')">9</div>
    <div @click="addNum('8')">8</div>
    <div @click="addNum('7')">7</div>
    <div @click="addNum('6')">6</div>
    <div @click="addNum('5')">5</div>
    <div @click="addNum('4')">4</div>
    <div @click="addNum('3')">3</div>
    <div @click="addNum('2')">2</div>
    <div @click="addNum('1')">1</div>
    <div @click="addNum('0')">0</div>
    <div @click="equal">.</div>
    <div @click="equal">=</div>
  </div>
</template>

<style>
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px auto 0;
    width: 300px;
  }
  .num * {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0 0;
    border: 1px solid #006a6c;
    width: 92px;
    height: 40px;
    font-size: 22px;
    cursor: pointer;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: mapActions([
    'equal',
    'addNum'
  ])
}
</script>

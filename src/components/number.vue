<template lang="pug">
.num
  .num-item(@click="addNum('7')")
    |7
  .num-item(@click="addNum('8')")
    |8
  .num-item(@click="addNum('9')")
    |9
  .num-item(@click="addNum('4')")
    |4
  .num-item(@click="addNum('5')")
    |5
  .num-item(@click="addNum('6')")
    |6
  .num-item(@click="addNum('1')")
    |1
  .num-item(@click="addNum('2')")
    |2
  .num-item(@click="addNum('3')")
    |3
  .num-item(@click="addNum('0')")
    |0
  .num-item(@click="addNum('.')")
    |.
  .num-item(@click="equal")
    |=
</template>

<style lang="scss">
@import "css/_variables";

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px auto 0;
  width: 300px;
  &-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0 0;
    border: 1px solid $color-border;
    width: 92px;
    height: 40px;
    font-size: 22px;
    cursor: pointer;
    transition: background 1s ease 0s;
    &:hover {
      transition: background .2s ease 0s;
      background: $color-bg-hover;
    }
  }
}
</style>

<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'addNum',
    'equal',
  ])
}
</script>

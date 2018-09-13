<template lang="pug">
.num
  - for (var i = 9; 0 <= i; i--)
    .num-item(
      @click="addNum('" + i + "')"
    )
      |#{i}
  .num-item(
    @click="addNum('.')"
  )
    |.
  .num-item(
    @click="equal"
  )
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
      background: #d6e9ca;
    }
  }
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: mapActions([
    'addNum',
    'equal',
  ])
}
</script>

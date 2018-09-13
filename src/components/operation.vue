<template lang="pug">
.op
  .op-item(@click="clear")
    |c
  .op-item(@click="operation('+')")
    |+
  .op-item(@click="operation('-')")
    |-
  .op-item(@click="operation('×')")
    |×
  .op-item(@click="operation('÷')")
    |÷
</template>

<style lang="scss">
@import "css/_variables";

.op {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 300px;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $color-border;
    width: 52px;
    height: 40px;
    font-size: 24px;
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
    'operation',
    'clear',
  ])
}
</script>

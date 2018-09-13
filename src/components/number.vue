<template lang="pug">
.num
  - for (var i = 9; 0 <= i; i--)
    .num-item(
      @click="addNum(" + i + ")"
    )
      |#{i}
  .num-item()
    |.
  .num-item(
    @click="equal"
  )
    |=
</template>

<style>
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px auto 0;
    width: 300px;
  }
  .num-item {
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

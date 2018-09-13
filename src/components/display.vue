<template lang="pug">
.display
  |{{ display }}
</template>

<style lang="scss">
@import "css/_variables";

.display {
  box-sizing: border-box;
  margin: 20px auto;
  border: 1px solid $color-border;
  padding: 0 10px 1px;
  width: 300px;
  font-size: 26px;
  text-align: right;
  background-color: #ebebeb;
}
</style>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: mapGetters([
    'display'
  ]),
}
</script>

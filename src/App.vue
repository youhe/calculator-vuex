<template>
  <div id="app">
    <div class="header">ヘッダー</div>
    <router-view></router-view>
    <div class="footer">フッター</div>
  </div>
</template>

<style>
  #app {
    text-align: center;
    font-size: 40px;
  }
  .header {
    height: 50px;
    background-color: #ebebeb;
    margin-bottom: 50px;
  }
  .footer {
    height: 50px;
    background-color: #ebebeb;
    margin-top: 70px;
  }
</style>

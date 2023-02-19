<template>
  <v-app>
    <v-main>
      <!-- 路由占位符 自动 - 合并-->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
#app {
  height: 1000px;
}
::v-deep .v-application--wrap {
  background-color: #fbf7ed;
}
::v-deep .v-sheet.v-toolbar {
  background: transparent;
  box-shadow: none !important;
}
</style>

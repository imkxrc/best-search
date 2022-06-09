<template>
  <v-container class="fill-height">
    <v-layout align-center align-content-center>
      <v-flex>
        <v-container>
          <h1 class="search-title">Search Trends</h1>
          <v-row class="top-bar">
            <v-col cols="12">
              <div v-on:keyup.enter="search">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      solo
                      hide-details
                      @click:append="search"
                      label="请输入关键词"
                      append-icon="mdi-magnify"
                      v-model="text"
                      class="input-search"
                      autocomplete="off"
                      v-on="on"
                      ref="searchRef"
                    ></v-text-field>
                  </template>
                  <v-list v-if="items.length > 0" class="border-list" dense>
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                      @click="itemClick(item)"
                    >
                      <v-list-item-title>{{ item.name }} </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-flex></v-layout
    ></v-container
  >
</template>

<script>
export default {
  data() {
    return {
      text: "",
      showSelect: true,
      items: [],
    };
  },
  watch: {
    text: "inputHandle",
  },
  methods: {
    itemClick(item) {
      this.text = item.name;
      this.$refs.search.blur();
      // this.$router.push()
    },
    inputHandle(text) {
      if (text.trim() !== "") {
        this.showSelect = true;
        setTimeout(() => {
          this.getEntity();
        }, 300);
      }
    },
    getEntity() {
      // 请求接口更新 items 数据
      this.items = [
        {
          key: "1234",
          name: "1234",
        },
        {
          key: "abc",
          name: "abc",
        },
        {
          key: "def",
          name: "def",
        },
        {
          key: "ccc",
          name: "ccc",
        },
        {
          key: "ccc",
          name: "ccc",
        },
        {
          key: "ccc",
          name: "ccc",
        },
      ];
    },
    search() {
      if (!this.text) {
        alert("请输入关键字");
        return;
      }
      this.$refs.searchRef.blur();
      this.$router.push(`/search/${this.text.replace(/\s/g, "+")}`);
    },
  },
};
</script>
<style scoped>
.search-title {
  text-align: center;
}
.fill-height {
  height: 50%;
}
::v-deep .theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent;
}
::v-deep .v-input__icon {
  height: 48px;
  width: 48px;
}
::v-deep .v-text-field.v-text-field--solo .v-input__append-inner {
  position: relative;
  left: 75px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
::v-deep
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  background: none;
  box-shadow: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.v-application a {
  color: #333;
  text-decoration: none;
}
.top-bar {
  justify-content: center;
  align-items: center;
}
.input-search {
  margin: auto;
}
.width-20-percent {
  width: 20%;
}
.img-div {
  margin: 16vh 0 40px 0;
  text-align: center;
}
.v-menu__content {
  box-shadow: none !important;
}
.border-list {
  border: 1px solid #eee !important;
}
</style>

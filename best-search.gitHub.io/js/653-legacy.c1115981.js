"use strict";(self["webpackChunkbest_search"]=self["webpackChunkbest_search"]||[]).push([[653],{46653:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height"},[n("v-layout",{attrs:{"align-center":"","align-content-center":""}},[n("v-flex",[n("v-container",[n("h1",{staticClass:"search-title"},[t._v("Search Trends")]),n("v-row",{staticClass:"top-bar"},[n("v-col",{attrs:{cols:"12"}},[n("div",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)}}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var c=e.on;return[n("v-text-field",t._g({ref:"searchRef",staticClass:"input-search",attrs:{solo:"","hide-details":"",label:"请输入关键词","append-icon":"mdi-magnify",autocomplete:"off"},on:{"click:append":t.search},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}},c))]}}])},[t.items.length>0?n("v-list",{staticClass:"border-list",attrs:{dense:""}},t._l(t.items,(function(e,c){return n("v-list-item",{key:c,on:{click:function(n){return t.itemClick(e)}}},[n("v-list-item-title",[t._v(t._s(e.name)+" ")])],1)})),1):t._e()],1)],1)])],1)],1)],1)],1)],1)},s=[],i=(n(68309),n(73210),n(74916),n(15306),{data:function(){return{text:"",showSelect:!0,items:[]}},watch:{text:"inputHandle"},methods:{itemClick:function(t){this.text=t.name,this.$refs.searchRef.blur()},inputHandle:function(t){var e=this;""!==t.trim()&&(this.showSelect=!0,setTimeout((function(){e.getEntity()}),300))},getEntity:function(){this.items=[{key:"1234",name:"1234"},{key:"abc",name:"abc"},{key:"def",name:"def"},{key:"ccc",name:"ccc"},{key:"ccc",name:"ccc"},{key:"ccc",name:"ccc"}]},search:function(){this.text?(this.$refs.searchRef.blur(),this.$router.push("/search-list/".concat(this.text.replace(/\s/g,"+")))):alert("请输入关键字")}}}),a=i,l=n(43736),r=n(43453),o=n.n(r),u=n(82102),f=n(4228),h=(n(68582),n(88006)),m=(0,h.Z)("flex"),d=(0,h.Z)("layout"),k=n(16816),p=n(59737),y=n(88245),v=n(54985),x=n(62877),b=n(95351),C=(0,l.Z)(a,c,s,!1,null,"0cfa3c5e",null),_=C.exports;o()(C,{VCol:u.Z,VContainer:f.Z,VFlex:m,VLayout:d,VList:k.Z,VListItem:p.Z,VListItemTitle:y.V9,VMenu:v.Z,VRow:x.Z,VTextField:b.Z})}}]);
//# sourceMappingURL=653-legacy.c1115981.js.map
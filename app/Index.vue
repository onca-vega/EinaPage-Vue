<template>
  <eina-page
  v-on:setPage="setPage"
  :currentrows="currentrows"
  :currentpage="currentpage"
  :rowcount="rowcount"
  :pagecount="pagecount"
  overlayclass="my-overlay-class"
  detailsclass="my-details-class"
  itemclass="my-item-class"
  dataclass="my-data-class">
    <template slot="details" slot-scope="data">
      Current row: {{ data.currentrows }}, Current page: {{ data.currentpage }}, Rows: {{ data.rowcount }}, Pages: {{ data.pagecount }}
    </template>
    <template slot="firstArrow">
      First
    </template>
    <template slot="lastArrow">
      Last
    </template>
  </eina-page>
</template>
<script>
  import einaPage from "./EinaPage.vue";

  export default {
    name: "Index",
    components: {
      einaPage
    },
    mixins: [],
    directives: {},
    props: {},
    data: function(){
      return {
        currentrows: 17,
        rowcount: 25100,
        currentpage: 4,
        pagecount: 1255
      };
    },
    computed: {},
    watch: {},
    filters: {},
    methods: {
      setPage(p){
        this.currentpage = p;
      }
    },
    beforeCreate: function(){},
    created: function(){},
    beforeMount: function(){},
    mounted: function(){},
    beforeUpdate: function(){},
    updated: function(){},
    activated: function(){},
    deactivated: function(){},
    beforeDestroy: function(){},
    destroyed: function(){}
  }
</script>
<style scoped>
</style>

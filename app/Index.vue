<template>
  <eina-page
  v-on:setPage="setPage"
  v-model="perpage.value"
  :currentrows="currentrows"
  :currentpage="currentpage"
  :rowcount="rowcount"
  :pagecount="pagecount"
  :perpage="perpage.options"
  perpageclass="per-page-class"
  selectclass="select-class"
  overlayclass="my-overlay-class"
  detailsclass="my-details-class"
  itemclass="my-item-class"
  dataclass="my-data-class">
    <!-- <template slot="details" slot-scope="data">
      Current row: {{ data.currentrows }}, Current page: {{ data.currentpage }}, Rows: {{ data.rowcount }}, Pages: {{ data.pagecount }}
    </template>
    <template slot="perPage" slot-scope="data">
      Options: {{ data.perpage }}
    </template>
    <template slot="firstArrow">
      First
    </template>
    <template slot="lastArrow">
      Last
    </template> -->
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
        pagecount: 1255,
        perpage: {
          value: 20,
          options: [5, 10, 15, 20, 25]
        }
      };
    },
    computed: {},
    watch: {
      "perpage.value": function(val){
        console.log("Value per page is: " + val);
      }
    },
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
<style>
</style>

<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <einapage
      v-on:setPage="setPage"
      v-model="perpage.value"
      :currentrows="currentrows"
      :currentpage="currentpage"
      :rowcount="rowcount"
      :pagecount="pagecount"
      :perpage="perpage.options"
      overlayclass="my-overlay-class"
      detailsclass="my-details-class"
      perpageclass="per-page-class"
      itemclass="my-item-class"
      selectclass="select-class"
      dataclass="my-data-class"
    >
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
    </einapage>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</template>
<script>
import einapage from "./einapage";

export default {
  name: "Index",
  components: {
    einapage,
  },
  data() {
    return {
      currentrows: 17,
      rowcount: 25100,
      currentpage: 4,
      pagecount: 1255,
      perpage: {
        value: 20,
        options: [5, 10, 15, 20, 25],
      },
    };
  },
  watch: {
    "perpage.value": function(val) {
      console.log("Value per page is: " + val);
    },
  },
  methods: {
    setPage(p) {
      this.currentpage = p;
    },
  },
};
</script>

<style src="./css/einapage.css" />
<style>
.my-overlay-class {
  margin-left: initial;
}
</style>

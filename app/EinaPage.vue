<template>
  <ul :class="overlayclass ? overlayclass : '_einapage__container'" class="_einapage__container-main">
    <li :class="detailsclass ? detailsclass : '_einapage__details'">
      <slot
      name="details"
      :currentrows="$props.currentrows"
      :rowcount="$props.rowcount"
      :currentpage="$props.currentpage"
      :pagecount="$props.pagecount">
        <span :class="dataclass ? dataclass : '_einapage__data'">
          {{ details }}
        </span>
      </slot>
    </li>
    <li :class="itemclass ? itemclass : '_einapage__item _einapage__first'">
      <a href="#" v-on:click.prevent="doPagination(1)">
        <slot name="firstArrow">
          <span :class="dataclass ? dataclass : '_einapage__data'" aria-hidden="true">&laquo;</span>
        </slot>
      </a>
    </li>
    <li v-show="shouldSeeMore[0]" :class="itemclass ? itemclass : '_einapage__item'">
      <a href="#" v-on:click.prevent>
        <span :class="dataclass ? dataclass : '_einapage__data'" aria-hidden="true">...</span>
      </a>
    </li>
    <li
    v-for="page in pageCount"
    :class="{
      'active': activePage(page),
      '_einapage__item': !itemclass,
      [itemclass]: itemclass
    }">
      <a href="#" v-on:click.prevent="doPagination(newPage(page))">
        {{ newPage(page) }}
      </a>
    </li>
    <li v-show="shouldSeeMore[1]" :class="itemclass ? itemclass : '_einapage__item'">
      <a href="#" v-on:click.prevent>
        <span :class="dataclass ? dataclass : '_einapage__data'" aria-hidden="true">...</span>
      </a>
    </li>
    <li :class="itemclass ? itemclass : '_einapage__item'">
      <a href="#" v-on:click.prevent="doPagination(pagecount)">
        <slot name="lastArrow">
          <span :class="dataclass ? dataclass : '_einapage__data'" aria-hidden="true">&raquo;</span>
        </slot>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {
    name: "ovPagination",
    components: {},
    mixins: [],
    directives: {},
    props: {
      currentrows: {
        type: Number, default: 0
      },
      currentpage: {
        type: Number, default: 1
      },
      pagecount: {
        type: Number, default: 1
      },
      rowcount: {
        type: Number, default: 0
      },

      overlayclass: String,
      detailsclass: String,
      itemclass: String,
      dataclass: String
    },
    data: function(){
      return {};
    },
    computed: {
      details: {
        get(){
          return `Mostrando ${ this.$props.currentrows } de ${ this.$props.rowcount } filas en la página ${ this.$props.currentpage } de ${ this.$props.pagecount }.`;
        },
      },
      shouldSeeMore: {
        get(){
          return [
            this.$props.currentpage > 2,
            this.$props.pagecount > 3 && this.$props.currentpage < this.$props.pagecount - 1
          ];
        }
      },
      pageCount: {
        get(){
          return this.$props.pagecount < 3 ? this.$props.pagecount : 3;
        }
      },
      activePage: {
        get(){
          return (page) => {
            return this.$props.currentpage ===
            (this.$props.currentpage > 2 ?
            this.$props.currentpage < this.$props.pagecount - 1
            ? this.$props.currentpage - (2 - page) :
            this.$props.pagecount - (3 - page) :
            page);
          };
        }
      },
      newPage: {
        get(){
          return (page) => {
            return this.$props.currentpage > 2 ?
            this.$props.currentpage < this.$props.pagecount - 1 ? this.$props.currentpage - (2 - page) :
            this.$props.pagecount - (3 - page) : page
          };
        }
      }
    },
    watch: {},
    filters: {},
    methods: {
      doPagination(page){
        this.$emit("setPage", page);
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
  ul._einapage__container-main{
    display: inline-table;
    padding-left: 0;
    list-style: none;
  }
  ul._einapage__container{
    padding-top: 20px;
  }
  @media(min-width: 992px){
    ul._einapage__container{
      float: right;
    }
  }
  li._einapage__details{
    margin-right: 5px;
  }
  li._einapage__item{
    display: inline-block;
  }
  @media(min-width: 992px){
    li._einapage__details{
      display: inline-block;
    }
  }
  @media(max-width: 991px){
    li._einapage__details{
      display: block;
      margin-bottom: 10px;
    }
  }
  span._einapage__data{
    color: #484848;
  }
  li._einapage__item a{
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 12px;
    padding-right: 12px;
    text-decoration: none;
    color: #484848;
    border-bottom: 1px solid #B8B8B8;
    border-top: 1px solid #B8B8B8;
    border-right: 1px solid #B8B8B8;
  }
  li._einapage__item._einapage__first a{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-left: 1px solid #B8B8B8;
  }
  li._einapage__item:last-child a{
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  li._einapage__item.active a{
    color: #ffffff;
    background-color: #484848;
  }
</style>

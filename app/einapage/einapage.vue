<template>
  <div class="_einapage">
    <ul
    :class="[
      '_einapage__container',
      { [overlayclass]: overlayclass }
    ]">
      <li
      :class="[
        '_einapage__details',
        { [detailsclass]: detailsclass }
      ]">
        <slot
        :currentrows="$props.currentrows"
        :rowcount="$props.rowcount"
        :currentpage="$props.currentpage"
        :pagecount="$props.pagecount"
        name="details">
          <span
          :class="[
            '_einapage__data',
            { [dataclass]: dataclass }
          ]">
            {{ details }}
          </span>
        </slot>
      </li>
      <li
      :class="[
        '_einapage__per-page',
        { [perpageclass]: perpageclass }
      ]">
        <slot
        :perpage="$props.perpage"
        name="perPage">
          <select
          v-if="$props.perpage && $props.perpage.length"
          v-model="perPage"
          :class="{ [selectclass]: selectclass }">
            <option v-for="s in $props.perpage" :value="s">{{ s }}</option>
          </select>
        </slot>
      </li>
      <li
      :class="[
        '_einapage__item _einapage__first',
        { [itemclass]: itemclass }
      ]">
        <a href="#" v-on:click.prevent="doPagination(1)">
          <slot name="firstArrow">
            <span
            :class="[
              '_einapage__data',
              { [dataclass]: dataclass }
            ]"
            aria-hidden="true">&laquo;</span>
          </slot>
        </a>
      </li>
      <li
      v-show="shouldSeeMore[0]"
      :class="[
        '_einapage__item',
        { [itemclass]: itemclass }
      ]">
        <a href="#" v-on:click.prevent>
          <span
          :class="[
            '_einapage__data',
            { [dataclass]: dataclass }
          ]"
          aria-hidden="true">...</span>
        </a>
      </li>
      <li
      v-for="page in pageCount"
      :class="[
        '_einapage__item',
        {
          'active': activePage(page),
          [itemclass]: itemclass
        }
      ]">
        <a href="#" v-on:click.prevent="doPagination(newPage(page))">
          {{ newPage(page) }}
        </a>
      </li>
      <li
      v-show="shouldSeeMore[1]"
      :class="[
        '_einapage__item',
        { [itemclass]: itemclass }
      ]">
        <a href="#" v-on:click.prevent>
          <span
          :class="[
            '_einapage__data',
            { [dataclass]: dataclass }
          ]"
          aria-hidden="true">...</span>
        </a>
      </li>
      <li
      :class="[
        '_einapage__item',
        { [itemclass]: itemclass }
      ]">
        <a href="#" v-on:click.prevent="doPagination(pagecount)">
          <slot name="lastArrow">
            <span
            :class="[
              '_einapage__data',
              { [dataclass]: dataclass }
            ]"
            aria-hidden="true">&raquo;</span>
          </slot>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  /* _____________________________________________________________________________
   * Eina Page for Vue
   *
   * Customizable VueJS component oriented to data pagination under MIT license.
   *
   * Author: Marcos Jesús Chávez Vega (onca-vega)
   *  website: https://onca-vega.com
   * _____________________________________________________________________________
   */

  export default {
    name: 'Einapage',
    props: {
      value: [ String, Number ],
      perpage: Array,

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
      dataclass: String,
      perpageclass: String,
      selectclass: String
    },
    computed: {
      perPage: {
        get(){
          return this.$props.value;
        },
        set(v){
          this.$emit('input', v);
        }
      },
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
    methods: {
      doPagination(page){
        this.$emit('setPage', page);
      }
    }
  }
</script>

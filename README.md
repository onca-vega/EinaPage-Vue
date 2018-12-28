# Eina Page for Vue
[![NPM](https://nodei.co/npm/einapage-vue.png?mini=true)](https://www.npmjs.com/package/einapage-vue)
[![Node version](https://img.shields.io/badge/package-v0.1.1-orange.svg)](https://www.npmjs.com/package/einapage-vue)
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/onca-vega/EinaPage-Vue)
[![Coverage Status](https://coveralls.io/repos/github/onca-vega/EinaPage-Vue/badge.svg?branch=master)](https://coveralls.io/github/onca-vega/EinaPage-Vue?branch=master)

Customizable VueJS component oriented to data pagination.
![EinaPage][EinaPage]

## Translations
- [Spanish]

## Installation
```bash
$ npm install --save einapage-vue
```

## Usage
### Register the component
```bash
...
<script>
  import einaPage from "einapage-vue";

  export default {
    name: "Index",
    components: {
      einaPage
    },
    mixins: [],
    directives: {},
    props: {},
...
```

### Props defined for Eina Page
name | description | type | default
------------ | ------------- | ------------- | -------------
currentrows | Number of rows that are in the current page | number | 0
rowcount | Number related to the total of rows that exists | number | 1
currentpage | Current page showed | number | 1
pagecount | Number related to the total of pages that exists | number | 0
overlayclass | CSS class at the root of the component | string | undefined
dataclass | CSS class inside every data text | string | undefined
detailsclass | CSS class at the node of the details | string | undefined
itemclass | CSS class at the node of every list element | string | undefined

Let´s see them step by step, following the next example:
```bash
...
<template>
  <eina-page
  :currentrows="17"
  :currentpage="4"
  :rowcount="25100"
  :pagecount="1255"
  overlayclass="my-overlay-class"
  detailsclass="my-details-class"
  itemclass="my-item-class"
  dataclass="my-data-class">
  </eina-page>
</template>
...
```

#### Prop: currentrows
In the example we are telling Eina Page that "currentrows" is equal to 17, resulting:
![EinaPage-currentrows][EinaPage-currentrows]

#### Prop: currentpage
In the example we are telling Eina Page that "currentpage" is equal to 4, resulting:
![EinaPage-currentpage][EinaPage-currentpage]

#### Prop: rowcount
In the example we are telling Eina Page that "rowcount" is equal to 25100, resulting:
![EinaPage-rowcount][EinaPage-rowcount]

#### Prop: pagecount
In the example we are telling Eina Page that "pagecount" is equal to 1255, resulting:
![EinaPage-pagecount][EinaPage-pagecount]

#### Prop: overlayclass
In the example we are telling Eina Page that "overlayclass" is equal to "my-overlay-class". This class is positioned at the root of the component:
![EinaPage-overlayclass][EinaPage-overlayclass]

#### Prop: detailsclass
In the example we are telling Eina Page that "detailsclass" is equal to "my-details-class". This class is positioned at the details item of the list:
![EinaPage-detailsclass][EinaPage-detailsclass]

#### Prop: itemclass
In the example we are telling Eina Page that "itemclass" is equal to "my-item-class". This class is positioned at all the others items inside the list:
![EinaPage-itemclass][EinaPage-itemclass]

#### Prop: dataclass
In the example we are telling Eina Page that "dataclass" is equal to "my-data-class". This class is positioned at the deepest child of every list item, on the span tags:
![EinaPage-dataclass][EinaPage-dataclass]

### Emitters defined for Eina Page
Eina Page has only one emitter "setPage" that is related to the page change, and return the number of the page clicked:

```bash
...
<template>
  <eina-page
  v-on:setPage="setPage">
  </eina-page>
</template>
...
    methods: {
      setPage(p){
        this.currentpage = p;
      }
    },
...
```

### Slots defined for Eina Page
Let's describe them a little bit:

name | description | scope
------------ | ------------- | -------------
details | Allows you to customize the details text | currentrows, currentpage, rowcount, pagecount
firstArrow | Allows you to customize the content of the button for the first page | none
lastArrow | Allows you to customize the content of the button for the last page | none

Then, let´s see them step by step, following the next example:
```bash
...
<template>
  <eina-page>
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
...
```

#### Slot: details
According to the previous example, the result will be:
![EinaPage-details][EinaPage-details]

#### Slot: firstArrow
According to the previous example, the result will be:
![EinaPage-firstArrow][EinaPage-firstArrow]

#### Slot: lastArrow
According to the previous example, the result will be:
![EinaPage-lastArrow][EinaPage-lastArrow]

### Full example
```bash
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
```

## Versioning
For further information, read [semver].

## Authors
* **Marcos Jesús Chávez V** - [onca-vega]

## License
MIT license.

[Spanish]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/README.md
[semver]: https://semver.org/spec/v2.0.0.html
[EinaPage]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage.png
[EinaPage-currentrows]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-currentrows.png
[EinaPage-currentpage]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-currentpage.png
[EinaPage-rowcount]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-rowcount.png
[EinaPage-pagecount]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-pagecount.png
[EinaPage-overlayclass]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-overlayclass.png
[EinaPage-detailsclass]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-detailsclass.png
[EinaPage-itemclass]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-itemclass.png
[EinaPage-dataclass]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-dataclass.png
[EinaPage-details]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-details.png
[EinaPage-firstArrow]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-firstArrow.png
[EinaPage-lastArrow]: https://github.com/onca-vega/EinaPage-Vue/blob/master/docs/image/EinaPage-lastArrow.png
[onca-vega]: https://github.com/onca-vega

# Eina Page for Vue
[![NPM](https://nodei.co/npm/einapage-vue.png?mini=true)](https://www.npmjs.com/package/einapage-vue)
[![Node version](https://img.shields.io/badge/package-v0.2.3-orange.svg)](https://www.npmjs.com/package/einapage-vue)
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://travis-ci.org/onca-vega/EinaPage-Vue)
[![Coverage Status](https://coveralls.io/repos/github/onca-vega/EinaPage-Vue/badge.svg?branch=master)](https://coveralls.io/github/onca-vega/EinaPage-Vue?branch=master)

Componente personalizable orientado a la paginación de información para VueJS.
![EinaPage][EinaPage]

## Traducciones
- [Inglés]

## Instalación
```bash
$ npm install --save einapage-vue
```

## Uso
### Registro del componente
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

### Props definidas en Eina Page
nombre | descripción | tipo | valor por defecto
------------ | ------------- | ------------- | -------------
currentrows | Número de registros que están en la pagina actual | número | 0
rowcount | Número total de registros existentes | número | 1
currentpage | Pagina actual | número | 1
pagecount | Número total de páginas existentes | número | 0
perpage | Arreglo de números que define las opciones que existen para establecer cuantos registros por página se mostrarán | arreglo | undefined
perpageclass | Clase de CSS en el nodo del contenedor del elemento 'select' definido para establecer cuantos registros por página se mostrarán | string | undefined
selectclass | Clase de CSS en el nodo del elemento 'select' definido para establecer cuantos registros por página se mostrarán | string | undefined
overlayclass | Clase de CSS en la raíz del componente | cadena de caracteres | undefined
dataclass | Clase de CSS dentro de cada texto referido a la información | cadena de caracteres | undefined
detailsclass | Clase de CSS en el nodo de los detalles | cadena de caracteres | undefined
itemclass | Clase de CSS en los nodos de cada elemento de la lista | cadena de caracteres | undefined

Veamos cada uno, a través del siguiente ejemplo:
```bash
...
<template>
  <eina-page
  :currentrows="17"
  :currentpage="4"
  :rowcount="25100"
  :pagecount="1255"
  :perpage="[5, 10, 15, 20, 25]"
  perpageclass="per-page-class"
  selectclass="select-class"
  overlayclass="my-overlay-class"
  detailsclass="my-details-class"
  itemclass="my-item-class"
  dataclass="my-data-class">
  </eina-page>
</template>
...
```

#### Prop: currentrows
En el ejemplo le decimos a Eina Page que "currentrows" es igual a 17, resultando:
![EinaPage-currentrows][EinaPage-currentrows]

#### Prop: currentpage
En el ejemplo le decimos a Eina Page que "currentpage" es igual a 4, resultando:
![EinaPage-currentpage][EinaPage-currentpage]

#### Prop: rowcount
En el ejemplo le decimos a Eina Page que "rowcount" es igual a 25100, resultando:
![EinaPage-rowcount][EinaPage-rowcount]

#### Prop: pagecount
En el ejemplo le decimos a Eina Page que "pagecount" es igual a 1255, resultando:
![EinaPage-pagecount][EinaPage-pagecount]

#### Prop: perpage
En el ejemplo le decimos a Eina Page que "perpage" es igual a [5, 10, 15, 20, 25], resultando:
![EinaPage-perpage][EinaPage-perpage]

#### Prop: perpageclass
En el ejemplo le decimos a Eina Page que "perpageclass" es igual a "per-page-class", resultando:
![EinaPage-perpageclass][EinaPage-perpageclass]

#### Prop: selectclass
En el ejemplo le decimos a Eina Page que "selectclass" es igual a "select-class", resultando:
![EinaPage-selectclass][EinaPage-selectclass]

#### Prop: overlayclass
En el ejemplo le decimos a Eina Page que "overlayclass" es igual a "my-overlay-class". Esta clase se posiciona en la raíz del componente:
![EinaPage-overlayclass][EinaPage-overlayclass]

#### Prop: detailsclass
En el ejemplo le decimos a Eina Page que "detailsclass" es igual a "my-details-class". Esta clase se posiciona en el elemento de detalle de la lista:
![EinaPage-detailsclass][EinaPage-detailsclass]

#### Prop: itemclass
En el ejemplo le decimos a Eina Page que "itemclass" es igual a "my-item-class". Esta clase de posiciona en todos los demás elementos de la lista:
![EinaPage-itemclass][EinaPage-itemclass]

#### Prop: dataclass
En el ejemplo le decimos a Eina Page que "dataclass" es igual a "my-data-class". Esta clase se posiciona en el hijo más profundo de cada elemento de la lista, en los 'span tags':
![EinaPage-dataclass][EinaPage-dataclass]

### Emitters definidos para Eina Page
Eina Page tiene solo un emitter, "setPage", el cual esta relacionado con la selección de la página, y regresa el número de la página seleccionada:

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

### v-model definido en Eina Page
La forma de obtener el valor actual de registros por página, es mediante la directiva 'v-model'. Mediante esta puedes determinar cual es el valor actual para el elemento 'select' definido para los registros por página, de acuerdo al siguiente código de ejemplo:

```bash
...
<template>
  <eina-page
  v-model="perpage.value"
  :perpage="perpage.options">
  </eina-page>
</template>
...
  data: function(){
    return {
      perpage: {
        value: 10,
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
...
```

### Slots definidos en Eina Page
Vamos a describirlos un poco:

nombre | descripción | alcance (scope)
------------ | ------------- | -------------
details | Te permite personalizar el texto de detalle | currentrows, currentpage, rowcount, pagecount
perPage | Te permite personalizar el select que posee las opciones para determinar los registros por página | perpage
firstArrow | Te permite personalizar el contenido del botón que te lleva a la primer página | ninguno
lastArrow | Te permite personalizar el contenido del botón que te lleva a la última página | ninguno

Ahora, veamos uno por uno, siguiendo el siguiente ejemplo:
```bash
...
<template>
  <eina-page>
    <template slot="details" slot-scope="data">
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
    </template>
  </eina-page>
</template>
...
```

#### Slot: details
De acuerdo al ejemplo anterior, el resultado será:
![EinaPage-details][EinaPage-details]

#### Slot: perPage
De acuerdo al ejemplo anterior, el resultado será:
![EinaPage-perPageSlot][EinaPage-perPageSlot]

#### Slot: firstArrow
De acuerdo al ejemplo anterior, el resultado será:
![EinaPage-firstArrow][EinaPage-firstArrow]

#### Slot: lastArrow
De acuerdo al ejemplo anterior, el resultado será:
![EinaPage-lastArrow][EinaPage-lastArrow]

### Ejemplo completo
```bash
<template>
  <eina-page
  v-on:setPage="setPage"
  v-model="perpage.value"
  :perpage="perpage.options"
  :currentrows="currentrows"
  :currentpage="currentpage"
  :rowcount="rowcount"
  :pagecount="pagecount"
  overlayclass="my-overlay-class"
  detailsclass="my-details-class"
  itemclass="my-item-class"
  dataclass="my-data-class"
  perpageclass="per-page-class"
  selectclass="select-class">
    <template slot="details" slot-scope="data">
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
        pagecount: 1255,
        perpage: {
          value: 10,
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
```

## Versionamiento
Para más información, puedes leer [semver].

## Autores
* **Marcos Jesús Chávez V** - [onca-vega]

## Licencia
Licencia MIT.

[Inglés]: https://github.com/onca-vega/EinaPage-Vue/blob/master/README.md
[semver]: https://semver.org/spec/v2.0.0.html
[EinaPage]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage.png
[EinaPage-currentrows]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-currentrows.png
[EinaPage-currentpage]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-currentpage.png
[EinaPage-rowcount]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-rowcount.png
[EinaPage-pagecount]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-pagecount.png
[EinaPage-perpage]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-perpage.png
[EinaPage-perpageclass]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-perpageclass.png
[EinaPage-selectclass]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-selectclass.png
[EinaPage-overlayclass]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-overlayclass.png
[EinaPage-detailsclass]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-detailsclass.png
[EinaPage-itemclass]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-itemclass.png
[EinaPage-dataclass]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-dataclass.png
[EinaPage-details]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-details.png
[EinaPage-perPageSlot]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-perPageSlot.png
[EinaPage-firstArrow]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-firstArrow.png
[EinaPage-lastArrow]: https://raw.githubusercontent.com/onca-vega/EinaPage-Vue/master/docs/image/EinaPage-lastArrow.png
[onca-vega]: https://github.com/onca-vega

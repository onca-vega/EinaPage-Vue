import { shallowMount } from '@vue/test-utils'
import Vue from "vue";
import EinaPage from "./../app/einapage";

describe("einaPage", () => {
  it('computed perPage', () => {
    const data = { "value": 17 };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();
    expect(page.perPage).toBe(17);
  });

  it('computed perPage 2', () => {
    const data = { "value": 17 };
    const einaPage = shallowMount(EinaPage, { propsData: data });
    einaPage.vm.perPage = 25;
    expect(einaPage.emitted().input[0][0]).toBe(25);
  });

  it('computed details', () => {
    const data = {
      "currentrows": 17,
      "rowcount": 1775,
      "currentpage": 17,
      "pagecount": 1255
    };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();
    expect(page.details).toBe(`Mostrando ${ data.currentrows } de ${ data.rowcount } filas en la página ${ data.currentpage } de ${ data.pagecount }.`);
  });

  it('computed shouldSeeMore', () => {
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: {
      "currentpage": 4,
      "pagecount": 1255
    }}).$mount();
    expect(page.shouldSeeMore[0]).toBeTruthy();
    expect(page.shouldSeeMore[1]).toBeTruthy();
  });
  it('computed shouldSeeMore 2', () => {
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: {
      "currentpage": 2,
      "pagecount": 1255
    }}).$mount();
    expect(page.shouldSeeMore[0]).toBeFalsy();
    expect(page.shouldSeeMore[1]).toBeTruthy();
  });
  it('computed shouldSeeMore 3', () => {
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: {
      "currentpage": 1254,
      "pagecount": 1255
    }}).$mount();
    expect(page.shouldSeeMore[0]).toBeTruthy();
    expect(page.shouldSeeMore[1]).toBeFalsy();
  });

  it('computed pageCount', () => {
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: { "pagecount": 4 }}).$mount();
    expect(page.pageCount).toBe(3);
  });
  it('computed pageCount 2', () => {
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: { "pagecount": 2 }}).$mount();
    expect(page.pageCount).toBe(2);
  });

  it('computed activePage', () => {
    const data = {
      "currentrows": 17,
      "rowcount": 1775,
      "currentpage": 17,
      "pagecount": 1255
    };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();
    expect(page.activePage(1)).toBeFalsy();
    expect(page.activePage(2)).toBeTruthy();
    expect(page.activePage(3)).toBeFalsy();
  });
  it('computed activePage 2', () => {
    const data = {
      "currentrows": 17,
      "rowcount": 1775,
      "currentpage": 1255,
      "pagecount": 1255
    };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();
    expect(page.activePage(1)).toBeFalsy();
    expect(page.activePage(2)).toBeFalsy();
    expect(page.activePage(3)).toBeTruthy();
  });
  it('computed activePage 2', () => {
    const data = {
      "currentrows": 17,
      "rowcount": 1775,
      "currentpage": 1,
      "pagecount": 1255
    };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();
    expect(page.activePage(1)).toBeTruthy();
    expect(page.activePage(2)).toBeFalsy();
    expect(page.activePage(3)).toBeFalsy();
  });

  it('computed newPage', () => {
    const data = {
      "currentrows": 17,
      "rowcount": 1775,
      "currentpage": 17,
      "pagecount": 1255
    };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();
    expect(page.newPage(1)).toBe(16);
    expect(page.newPage(2)).toBe(17);
    expect(page.newPage(3)).toBe(18);
  });
  it('computed newPage 2', () => {
    const data = {
      "currentrows": 17,
      "rowcount": 1775,
      "currentpage": 1254,
      "pagecount": 1255
    };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();
    expect(page.newPage(1)).toBe(1253);
    expect(page.newPage(2)).toBe(1254);
    expect(page.newPage(3)).toBe(1255);
  });
  it('computed newPage 2', () => {
    const data = {
      "currentrows": 17,
      "rowcount": 1775,
      "currentpage": 2,
      "pagecount": 1255
    };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();
    expect(page.newPage(1)).toBe(1);
    expect(page.newPage(2)).toBe(2);
    expect(page.newPage(3)).toBe(3);
  });

  it('method doPagination', () => {
    const data = {
      "currentrows": 17,
      "rowcount": 1775,
      "currentpage": 2,
      "pagecount": 1255
    };
    const einaPage = shallowMount(EinaPage, { propsData: data });
    einaPage.vm.doPagination(17);
    expect(einaPage.emitted().setPage[0][0]).toBe(17);
  });

  it('test styles', done => {
    const data = {
      overlayclass: "overlayclass",
      detailsclass: "detailsclass",
      itemclass: "itemclass",
      dataclass: "dataclass"
    };
    const einaPage = Vue.extend(EinaPage);
    const page = new einaPage({ propsData: data}).$mount();

    Vue.nextTick(() => {
      expect(page.$el.getElementsByClassName("overlayclass").length).toBeTruthy();
      expect(page.$el.getElementsByClassName("detailsclass").length).toBeTruthy();
      expect(page.$el.getElementsByClassName("detailsclass")[0].tagName).toBe("LI");

      expect(page.$el.getElementsByClassName("itemclass").length).toBeTruthy();
      expect(page.$el.getElementsByClassName("itemclass")[0].tagName).toBe("LI");

      expect(page.$el.getElementsByClassName("dataclass").length).toBeTruthy();
      expect(page.$el.getElementsByClassName("dataclass")[0].tagName).toBe("SPAN");
      done();
    });
  });
});

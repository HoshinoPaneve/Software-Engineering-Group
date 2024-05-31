"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tab: "order",
      menuID: 0,
      business: {
        id: 1,
        name: "香茵波克现烤汉堡asdadsadasda",
        saleVolume: 321,
        score: 4.9,
        image: "/images/bus-img/bus-2.png",
        address: "武汉市武昌区武汉大学东中区九栋一楼",
        tel: "18164297568",
        beginExpense: Number,
        deliverExpense: Number
      },
      menu: [],
      foods: [{
        name: String,
        price: Number,
        image: String,
        saleVolume: Number
      }]
    };
  },
  watch: {},
  methods: {
    tabChange(data) {
      this.tab = data;
    },
    menuChange(data) {
      this.menuID = data;
    },
    async getBusInfo(busId) {
      const res = await this.$myRequest({
        url: "/business/selectById",
        data: {
          id: busId
        }
      });
      this.business = res.data;
      console.log(res);
    },
    async getMenu(busId) {
      const res = await this.$myRequest({
        url: "/menu/select",
        data: {
          id: busId
        }
      });
      this.menu = res.data;
      console.log(res);
    },
    async getfood(busId) {
      const res = await this.$myRequest({
        url: "/food/select",
        data: {
          id: busId
        }
      });
      this.foods = res.data;
      console.log(res);
    }
  },
  onLoad: function(option) {
    this.getBusInfo(option.busId);
    this.getMenu(option.busId);
    this.getfood(option.busId);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.business.name),
    b: common_vendor.t($data.business.score),
    c: common_vendor.t($data.business.saleVolume),
    d: _ctx.$hostURL + $data.business.image,
    e: common_vendor.n($data.tab == "order" ? "tab tab-active" : "tab"),
    f: common_vendor.o(($event) => $options.tabChange("order")),
    g: common_vendor.n($data.tab == "business" ? "tab tab-active" : "tab"),
    h: common_vendor.o(($event) => $options.tabChange("business")),
    i: common_vendor.f($data.menu, (item, index, i0) => {
      return {
        a: common_vendor.t(item.type),
        b: item.id,
        c: common_vendor.n(index == $data.menuID ? "menu menu-selected" : "menu"),
        d: common_vendor.o(($event) => $options.menuChange(index), item.id)
      };
    }),
    j: common_vendor.f($data.foods, (item, index, i0) => {
      return {
        a: _ctx.$hostURL + item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price),
        d: common_vendor.t(index),
        e: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/business/business.vue"]]);
wx.createPage(MiniProgramPage);

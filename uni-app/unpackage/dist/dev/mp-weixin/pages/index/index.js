"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiper: [
        { image: "/images/swiper-img/swiper-1.png" },
        { image: "/images/swiper-img/swiper-2.png" }
      ],
      recommendList: [
        { name: "吮指原味鸡", image: "/images/goods-img/goods-1-1.png", busId: 1 },
        { name: "新奥尔良烤翅", image: "/images/goods-img/goods-1-2.png", busId: 1 }
      ]
    };
  },
  methods: {
    search() {
      console.log("search");
    },
    input() {
      console.log("input");
    },
    toBusiness(id) {
      common_vendor.index.navigateTo({
        url: "/pages/business/business?busId=" + id
      });
    }
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.o($options.input),
    c: common_vendor.p({
      bgColor: "rgba(255,255,255,1)",
      placeholder: "搜索",
      radius: "50"
    }),
    d: common_vendor.f($data.swiper, (item, k0, i0) => {
      return {
        a: _ctx.$hostURL + item.image
      };
    }),
    e: common_vendor.f($data.recommendList, (item, k0, i0) => {
      return {
        a: _ctx.$hostURL + item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.o(($event) => $options.toBusiness(item.busId))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

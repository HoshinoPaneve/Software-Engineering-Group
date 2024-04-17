"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiper: []
    };
  },
  methods: {
    //调用util/api.js中封装的链接方法，请求轮播图数据
    // async getSwiper(){
    // 	const res=await this.$myRequest({
    // 		url:''
    // 	})
    // 	this.swiper=res;
    // }
  },
  onLoad() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

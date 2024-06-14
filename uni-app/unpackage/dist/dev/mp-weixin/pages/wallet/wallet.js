"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      account: 0,
      userId: common_vendor.index.getStorageSync("userId")
    };
  },
  onShow() {
    this.load();
  },
  methods: {
    handleCharge() {
      common_vendor.index.navigateTo({
        url: "/pages/charge/charge"
      });
    },
    load() {
      this.$myRequest({
        url: "/user/selectById/" + this.userId
      }).then((res) => {
        this.account = res.data.data.account || 0;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.account),
    b: common_vendor.o((...args) => $options.handleCharge && $options.handleCharge(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/wallet/wallet.vue"]]);
wx.createPage(MiniProgramPage);

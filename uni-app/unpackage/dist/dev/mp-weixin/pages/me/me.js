"use strict";
const common_vendor = require("../../common/vendor.js");
const mylogin = () => "../../wxcomponents/my-login/my-login.js";
const _sfc_main = {
  components: {
    mylogin
  },
  data() {
    return {
      haveLogined: false,
      avatar: common_vendor.index.getStorageSync("avatar"),
      name: common_vendor.index.getStorageSync("name")
    };
  },
  methods: {
    getUserInfo() {
      const id = common_vendor.index.getStorageSync("userId");
      if (id != "") {
        this.haveLogined = true;
      }
      this.name = common_vendor.index.getStorageSync("name");
      this.avatar = common_vendor.index.getStorageSync("avatar");
    },
    logout() {
      this.haveLogined = false;
      common_vendor.index.clearStorage();
    },
    goPage(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  },
  onShow() {
    this.getUserInfo();
  }
};
if (!Array) {
  const _component_mylogin = common_vendor.resolveComponent("mylogin");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_mylogin + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.haveLogined
  }, !$data.haveLogined ? {} : {
    b: _ctx.$hostURL + $data.avatar,
    c: common_vendor.t($data.name),
    d: common_vendor.o(($event) => $options.goPage("/pages/address/address")),
    e: common_vendor.o(($event) => $options.goPage("/pages/records/records")),
    f: common_vendor.o(($event) => $options.goPage("/pages/myComment/myComment")),
    g: common_vendor.o(($event) => $options.goPage("/pages/wallet/wallet")),
    h: common_vendor.p({
      type: "person",
      size: "18"
    }),
    i: common_vendor.o(($event) => $options.goPage("/pages/person/person")),
    j: common_vendor.p({
      type: "medal",
      size: "18"
    }),
    k: common_vendor.o(($event) => $options.goPage("/pages/introduce/introduce")),
    l: common_vendor.p({
      type: "paperclip",
      size: "18"
    }),
    m: common_vendor.o(($event) => $options.goPage("/pages/agreement/agreement")),
    n: common_vendor.p({
      type: "undo",
      size: "18"
    }),
    o: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);

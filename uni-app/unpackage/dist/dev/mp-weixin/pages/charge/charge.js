"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 6,
      items: [6, 18, 68, 288, 588, 999]
    };
  },
  methods: {
    clickItem(item) {
      this.current = item;
    },
    charge() {
      this.$myRequest({
        url: "/user/charge/" + this.current,
        method: "PUT"
      }).then((res) => {
        if (res.data.code === "200") {
          common_vendor.index.showToast({
            icon: "success",
            title: "操作成功"
          });
          common_vendor.index.navigateBack();
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.msg
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.items, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.current === item ? 1 : "",
        c: common_vendor.o(($event) => $options.clickItem(item), item),
        d: item,
        e: "ada6838c-1-" + i0 + ",ada6838c-0"
      };
    }),
    b: common_vendor.p({
      span: 8
    }),
    c: common_vendor.p({
      gutter: 10
    }),
    d: common_vendor.o((...args) => $options.charge && $options.charge(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/charge/charge.vue"]]);
wx.createPage(MiniProgramPage);

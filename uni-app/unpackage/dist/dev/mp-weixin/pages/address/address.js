"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      index: 0,
      address: []
    };
  },
  methods: {
    chooseAddress(index) {
      this.index = index;
    },
    addAddress() {
      common_vendor.index.navigateTo({
        url: "../addAddress/addAddress"
      });
    },
    delAddress(index) {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定删除该地址吗？",
        cancelText: "取消",
        confirmText: "确定",
        success: (res) => {
          if (res.confirm) {
            this.$myRequest({
              url: "/address/delete/" + this.address[index].id,
              method: "DELETE"
            });
            this.address.splice(index, 1);
          }
        }
      });
    },
    toEdit(index) {
      common_vendor.index.navigateTo({
        url: "../addAddress/addAddress?id=" + this.address[index].id
      });
    },
    async getAddress() {
      const res = await this.$myRequest({
        url: "/address/selectAll",
        data: {
          userId: common_vendor.index.getStorageSync("userId")
        }
      });
      this.address = res.data.data;
    }
  },
  onShow() {
    this.getAddress();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.address, (item, index, i0) => {
      return {
        a: common_vendor.t(item.address),
        b: common_vendor.t(item.doorNo),
        c: common_vendor.t(item.userName),
        d: common_vendor.t(item.phone),
        e: common_vendor.n(this.index == index ? "quan iconfont icon-true" : "quan"),
        f: common_vendor.o(($event) => $options.chooseAddress(index)),
        g: common_vendor.o(($event) => $options.toEdit(index)),
        h: common_vendor.o(($event) => $options.delAddress(index))
      };
    }),
    b: common_vendor.o((...args) => $options.addAddress && $options.addAddress(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/address/address.vue"]]);
wx.createPage(MiniProgramPage);

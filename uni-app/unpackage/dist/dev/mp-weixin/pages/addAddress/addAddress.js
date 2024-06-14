"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      id: "",
      name: "",
      phone: "",
      address: "",
      doorNo: ""
    };
  },
  methods: {
    async addAddress() {
      await this.$myRequest({
        url: "/address/add",
        method: "POST",
        data: {
          id: this.id,
          address: this.address,
          doorNo: this.doorNo,
          userName: this.name,
          phone: this.phone,
          userId: common_vendor.index.getStorageSync("userId")
        }
      }).then((res) => {
        common_vendor.index.navigateBack();
        common_vendor.index.showToast({
          title: "添加成功",
          icon: "success"
        });
      });
    },
    async getAddressDetail(id) {
      const res = await this.$myRequest({
        url: "/address/selectById/" + id,
        method: "GET"
      });
      this.name = res.data.data.userName;
      this.phone = res.data.data.phone;
      this.address = res.data.data.address;
      this.doorNo = res.data.data.doorNo;
    }
  },
  onLoad: function(option) {
    this.id = option.id;
    if (this.id != "") {
      this.getAddressDetail(this.id);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.name,
    b: common_vendor.o(($event) => $data.name = $event.detail.value),
    c: $data.phone,
    d: common_vendor.o(($event) => $data.phone = $event.detail.value),
    e: $data.address,
    f: common_vendor.o(($event) => $data.address = $event.detail.value),
    g: $data.doorNo,
    h: common_vendor.o(($event) => $data.doorNo = $event.detail.value),
    i: common_vendor.o((...args) => $options.addAddress && $options.addAddress(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/addAddress/addAddress.vue"]]);
wx.createPage(MiniProgramPage);

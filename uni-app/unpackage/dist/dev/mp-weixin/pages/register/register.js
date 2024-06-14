"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        common_vendor.index.showToast({
          title: "两次密码输入不一致",
          icon: "none"
        });
        return;
      }
      await this.$myRequest({
        url: "/register",
        method: "POST",
        data: {
          username: this.username,
          password: this.password,
          role: "USER"
        }
      }).then((res) => {
        if (res.data.code == 200) {
          common_vendor.index.switchTab({
            url: "/pages/me/me"
          });
          common_vendor.index.showToast({
            title: "注册成功",
            icon: "success"
          });
        } else {
          common_vendor.index.showToast({
            title: res.data.msg,
            icon: "none"
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: $data.confirmPassword,
    f: common_vendor.o(($event) => $data.confirmPassword = $event.detail.value),
    g: common_vendor.o((...args) => $options.register && $options.register(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bac4a35d"], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);

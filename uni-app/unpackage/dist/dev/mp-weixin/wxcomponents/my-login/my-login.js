"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      if (!this.username || !this.password) {
        common_vendor.index.showToast({
          title: "账号或密码不能为空",
          icon: "none"
        });
        return;
      }
      await this.$myRequest({
        url: "/login",
        method: "POST",
        data: {
          username: this.username,
          password: this.password,
          role: "USER"
        }
      }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          common_vendor.index.setStorageSync("userId", res.data.data.id);
          common_vendor.index.setStorageSync("name", res.data.data.name);
          common_vendor.index.setStorageSync("token", res.data.data.token);
          common_vendor.index.setStorageSync("avatar", res.data.data.avatar);
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
          common_vendor.index.showToast({
            title: "登录成功",
            icon: "success"
          });
        } else {
          common_vendor.index.showToast({
            title: "登录失败",
            icon: "none"
          });
        }
      });
    },
    register() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
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
    e: common_vendor.o((...args) => $options.login && $options.login(...args)),
    f: common_vendor.o((...args) => $options.register && $options.register(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/wxcomponents/my-login/my-login.vue"]]);
wx.createComponent(Component);

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      form: {
        username: "",
        password: "",
        name: "",
        sex: "",
        phone: ""
      },
      rules: {
        password: {
          rules: [{
            required: true,
            errorMessage: "请填写密码"
          }]
        },
        name: {
          rules: [{
            required: true,
            errorMessage: "请填写名称"
          }]
        }
      },
      imgs: [],
      imageStyles: {
        "height": 80,
        // 边框高度
        "width": 80,
        // 边框宽度
        "border": {
          // 如果为 Boolean 值，可以控制边框显示与否
          "color": "#eee",
          // 边框颜色
          "width": "1px",
          // 边框宽度
          "style": "solid",
          // 边框样式
          "radius": "50%"
          // 边框圆角，支持百分比
        }
      },
      range: [
        { text: "男", value: "男" },
        { text: "女", value: "女" }
      ]
    };
  },
  onShow() {
    this.getUserInfo();
  },
  methods: {
    save() {
      this.$myRequest({
        url: "/user/update",
        method: "PUT",
        data: {
          username: this.form.username,
          password: this.form.password,
          name: this.form.name,
          sex: this.form.sex,
          phone: this.form.phone,
          id: common_vendor.index.getStorageSync("userId")
        }
      }).then((res) => {
        if (res.data.code === "200") {
          common_vendor.index.showToast({
            icon: "success",
            title: "操作成功"
          });
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.msg
          });
        }
      });
    },
    async getUserInfo() {
      const res = await this.$myRequest({
        url: "/user/selectById/" + common_vendor.index.getStorageSync("userId")
      });
      console.log(res);
      this.form = res.data.data;
    },
    handleImgUploadSuccess(e) {
      let _this = this;
      const filePath = e.tempFilePaths[0];
      common_vendor.index.uploadFile({
        url: _this.$baseUrl + "/files/upload",
        //自己的后端接口（默认发送post请求） 注意 _this.$baseUrl需要在全局变量定义
        filePath,
        name: "file",
        //这里应为自己后端文件形参的名字
        success(res) {
          let url = JSON.parse(res.data || "{}").data;
          _this.form.avatar = url;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_file_picker2 + _easycom_uni_forms_item2 + _easycom_uni_easyinput2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2)();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_file_picker + _easycom_uni_forms_item + _easycom_uni_easyinput + _easycom_uni_data_checkbox + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleImgUploadSuccess),
    b: common_vendor.o(($event) => $data.imgs = $event),
    c: common_vendor.p({
      limit: "1",
      ["image-styles"]: $data.imageStyles,
      ["del-icon"]: false,
      ["disable-preview"]: true,
      fileMediatype: "image",
      modelValue: $data.imgs
    }),
    d: common_vendor.p({
      label: "头像",
      name: "avatar"
    }),
    e: common_vendor.o(($event) => $data.form.username = $event),
    f: common_vendor.p({
      type: "text",
      placeholder: "",
      disabled: true,
      modelValue: $data.form.username
    }),
    g: common_vendor.p({
      label: "账号",
      name: "username"
    }),
    h: common_vendor.o(($event) => $data.form.password = $event),
    i: common_vendor.p({
      type: "password",
      placeholder: "请输入密码",
      modelValue: $data.form.password
    }),
    j: common_vendor.p({
      label: "密码",
      name: "password",
      required: true
    }),
    k: common_vendor.o(($event) => $data.form.name = $event),
    l: common_vendor.p({
      type: "text",
      placeholder: "请输入姓名",
      modelValue: $data.form.name
    }),
    m: common_vendor.p({
      label: "姓名",
      name: "name",
      required: true
    }),
    n: common_vendor.o(($event) => $data.form.sex = $event),
    o: common_vendor.p({
      localdata: $data.range,
      modelValue: $data.form.sex
    }),
    p: common_vendor.p({
      label: "性别",
      name: "sex"
    }),
    q: common_vendor.o(($event) => $data.form.phone = $event),
    r: common_vendor.p({
      type: "text",
      placeholder: "请输入电话",
      modelValue: $data.form.phone
    }),
    s: common_vendor.p({
      label: "电话",
      name: "phone"
    }),
    t: common_vendor.o((...args) => $options.save && $options.save(...args)),
    v: common_vendor.sr("formRef", "f868f1cc-0"),
    w: common_vendor.p({
      modelValue: $data.form,
      rules: $data.rules,
      ["label-width"]: "140rpx",
      ["label-align"]: "right"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/person/person.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      packExpense: 1,
      expense: 11,
      address: "启梦创业广场 1A158-159",
      notes: "",
      business: {
        id: 1,
        name: "香茵波克现烤汉堡（武大校内店）",
        saleVolume: 321,
        score: 4.9,
        image: "/images/bus-img/bus-2.png",
        address: "武汉市武昌区武汉大学东中区九栋一楼",
        tel: "18164297568",
        beginExpense: 0,
        deliverExpense: 0
      },
      foods: [{
        id: 1,
        name: "吮指原味鸡",
        price: 11,
        image: "/images/good-img/good-1-1.png",
        saleVolume: 300,
        num: 0
      }],
      addresses: []
    };
  },
  methods: {
    async submitOrder() {
      await this.$myRequest({
        url: "/orders/addOrder",
        method: "POST",
        data: {
          userId: common_vendor.index.getStorageSync("userId"),
          businessId: this.business.id,
          address: this.address.address + this.address.doorNo,
          notes: this.notes,
          price: this.expense
        }
      }).then((res) => {
        common_vendor.index.switchTab({
          url: "/pages/orders/orders"
        });
        common_vendor.index.showToast({
          title: "提交订单成功",
          icon: "success"
        });
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "提交订单失败",
          icon: "error"
        });
      });
    },
    async selectAddress() {
      const res = await this.$myRequest({
        url: "/address/selectAll",
        data: {
          userId: common_vendor.index.getStorageSync("userId")
        }
      });
      this.addresses = res.data.data;
    },
    popup() {
      this.$refs.popup.open("bottom");
    },
    toAddAddress() {
      common_vendor.index.navigateTo({
        url: "/pages/addAddress/addAddress"
      });
    },
    toEditAddress(index) {
      common_vendor.index.navigateTo({
        url: "/pages/addAddress/addAddress?id=" + this.addresses[index].id
      });
    },
    changeAddress(index) {
      this.address = this.addresses[index];
      this.$refs.popup.close();
    }
  },
  //接收商家页传过来的商家信息和商品信息，计算金额
  onLoad: function(option) {
    common_vendor.index.showLoading({
      title: "加载中",
      mask: true
    });
    this.business = JSON.parse(decodeURIComponent(option.business));
    this.foods = JSON.parse(decodeURIComponent(option.foods));
    this.expense = parseFloat(option.expense) + this.business.deliverExpense + this.packExpense;
    common_vendor.index.hideLoading();
  },
  onShow() {
    this.selectAddress();
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.address.address),
    b: common_vendor.t($data.address.doorNo),
    c: common_vendor.t($data.address.userName),
    d: common_vendor.t($data.address.phone),
    e: common_vendor.o((...args) => $options.popup && $options.popup(...args)),
    f: _ctx.$hostURL + this.business.image,
    g: common_vendor.t($data.business.name),
    h: common_vendor.o(($event) => _ctx.calling()),
    i: common_vendor.f($data.foods, (item, k0, i0) => {
      return {
        a: _ctx.$hostURL + item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price),
        d: common_vendor.t(item.num)
      };
    }),
    j: common_vendor.t($data.packExpense),
    k: common_vendor.t($data.business.deliverExpense),
    l: common_vendor.t($data.expense),
    m: $data.notes,
    n: common_vendor.o(($event) => $data.notes = $event.detail.value),
    o: common_vendor.t(this.expense),
    p: common_vendor.o(($event) => $options.submitOrder()),
    q: common_vendor.f($data.addresses, (item, index, i0) => {
      return {
        a: common_vendor.t(item.address),
        b: common_vendor.t(item.doorNo),
        c: common_vendor.t(item.userName),
        d: common_vendor.t(item.phone),
        e: common_vendor.o(($event) => $options.changeAddress(index)),
        f: common_vendor.o(($event) => $options.toEditAddress(index))
      };
    }),
    r: common_vendor.o((...args) => $options.toAddAddress && $options.toAddAddress(...args)),
    s: common_vendor.sr("popup", "0d2051e8-0"),
    t: common_vendor.p({
      type: "bottom"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0d2051e8"], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/submitOrder/submitOrder.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tab: [],
      orderList: [
        {
          businessName: "香菌波克现烤汉堡(武大校园店)",
          businessImage: "/static/restaurant.png",
          price: 24,
          quantity: 2,
          packprice: 3,
          delprice: 2,
          prefer: 3,
          address: "武汉大学南二门",
          number: 592321,
          foodList: [
            { number: 1, name: "吮指原味鸡", image: "/static/food.png" },
            { number: 1, name: "吮指原味鸡", image: "/static/food.png" }
          ]
        }
      ]
    };
  },
  methods: {
    tabChange(data, index) {
      if (this.tab[index] === data) {
        this.tab[index] = null;
      } else {
        this.tab[index] = data;
      }
    },
    async getOrders() {
      const res = await this.$myRequest({
        url: "/orders/selectAll",
        data: {
          userId: common_vendor.index.getStorageSync("userId")
        }
      });
      this.orderList = res.data.data;
      console.log(this.orderList);
      for (var i = 0; i < this.orderList.length; i++) {
        this.tab.push("null");
        const res2 = await this.$myRequest({
          url: "/orderDetail/selectAll",
          data: {
            orderId: this.orderList[i].id
          }
        });
        this.orderList[i].foodList = res2.data.data;
      }
    }
  },
  onShow() {
    this.getOrders();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.orderList, (order, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(order.businessName),
        b: _ctx.$hostURL + order.businessImage,
        c: common_vendor.f(order.foodList, (item, index2, i1) => {
          return {
            a: _ctx.$hostURL + item.image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.number),
            d: index2
          };
        }),
        d: common_vendor.t(order.price),
        e: common_vendor.t(order.foodList.length),
        f: common_vendor.n($data.tab[index] == "order" ? "tab tab-active" : "tab"),
        g: common_vendor.o(($event) => $options.tabChange("order", index), index),
        h: common_vendor.n($data.tab[index] == "info" ? "tab tab-active" : "tab"),
        i: common_vendor.o(($event) => $options.tabChange("info", index), index),
        j: $data.tab[index] == "order"
      }, $data.tab[index] == "order" ? {} : {}, {
        k: $data.tab[index] == "info"
      }, $data.tab[index] == "info" ? {
        l: common_vendor.t(order.delprice),
        m: common_vendor.t(order.price),
        n: common_vendor.t(order.address),
        o: common_vendor.t(order.id)
      } : {}, {
        p: index
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1acc51a1"], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/orders/orders.vue"]]);
wx.createPage(MiniProgramPage);

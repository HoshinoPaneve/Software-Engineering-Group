"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tab: "order",
      menuID: -1,
      curExpense: 0,
      expenseEnough: false,
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
      menu: [],
      foods: [{
        id: 1,
        name: "吮指原味鸡",
        price: 11,
        image: "/images/good-img/good-1-1.png",
        saleVolume: 300,
        num: 0
      }]
    };
  },
  methods: {
    //点击板块改变样式
    tabChange(data) {
      this.tab = data;
    },
    menuChange(data) {
      this.menuID = data;
      if (data != -1) {
        this.getMenufood(this.menu[data].id);
      } else {
        this.getfood(this.business.id);
      }
    },
    //点击菜品的加减号时，使对应菜品对象的num变化，并遍历菜品数组计算当前价格
    async add(index) {
      this.foods[index].num++;
      this.countCurExpense();
      await this.$myRequest({
        url: "/shopcar/add",
        method: "POST",
        data: {
          userId: common_vendor.index.getStorageSync("userId"),
          foodId: this.foods[index].id,
          number: this.foods[index].num
        }
      });
    },
    async reduce(index) {
      if (this.foods[index].num > 0) {
        this.foods[index].num--;
        this.countCurExpense();
        await this.$myRequest({
          url: "/shopcar/deleteAll",
          method: "DELETE",
          data: {
            userId: common_vendor.index.getStorageSync("userId"),
            foodId: this.foods[index].id,
            number: this.foods[index].num
          }
        });
      }
    },
    countCurExpense() {
      var sum = 0;
      for (var i = 0; i < this.foods.length; i++) {
        sum += this.foods[i].num * this.foods[i].price;
      }
      this.curExpense = sum;
      if (this.curExpense >= this.business.beginExpense) {
        this.expenseEnough = true;
      } else {
        this.expenseEnough = false;
      }
    },
    //跳转提交订单页面，把商家信息，选择的菜品信息，和总价格传过去。
    toSubmitOrder() {
      var chosenFoods = [];
      for (var i = 0; i < this.foods.length; i++) {
        if (this.foods[i].num != 0) {
          chosenFoods.push(this.foods[i]);
        }
      }
      var business = encodeURIComponent(JSON.stringify(this.business));
      var foods = encodeURIComponent(JSON.stringify(chosenFoods));
      common_vendor.index.navigateTo({
        url: "/pages/submitOrder/submitOrder?business=" + business + "&foods=" + foods + "&expense=" + this.curExpense
      });
    },
    //网络请求，获得相关信息
    async getBusInfo(busId) {
      const res = await this.$myRequest({
        url: "/business/selectById/" + busId
      });
      this.business = res.data.data;
      console.log(res);
    },
    async getMenu(busId) {
      const res = await this.$myRequest({
        url: "/menu/selectAll",
        data: {
          businessID: busId
        }
      });
      this.menu = res.data.data;
    },
    async getfood(busId) {
      const res = await this.$myRequest({
        url: "/food/selectAll",
        data: {
          businessID: busId
        }
      });
      this.foods = res.data.data;
      for (var i = 0; i < this.foods.length; i++) {
        this.foods[i].num = 0;
      }
      console.log(res);
    },
    async getMenufood(menuId) {
      const res = await this.$myRequest({
        url: "/food/selectAll",
        data: {
          menuID: menuId
        }
      });
      this.foods = res.data.data;
      for (var i = 0; i < this.foods.length; i++) {
        this.foods[i].num = 0;
      }
    }
  },
  //接收外卖页传来的商家id，获取商家信息和菜单，渲染页面
  onLoad: function(option) {
    common_vendor.index.showLoading({
      title: "加载中",
      mask: true
    });
    this.getBusInfo(option.busId);
    this.getMenu(option.busId);
    this.getfood(option.busId);
    common_vendor.index.hideLoading();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.business.name),
    b: common_vendor.t($data.business.score),
    c: common_vendor.t($data.business.saleVolume),
    d: _ctx.$hostURL + $data.business.image,
    e: common_vendor.n($data.tab == "order" ? "tab tab-active" : "tab"),
    f: common_vendor.o(($event) => $options.tabChange("order")),
    g: common_vendor.n($data.tab == "info" ? "tab tab-active" : "tab"),
    h: common_vendor.o(($event) => $options.tabChange("info")),
    i: $data.tab == "order"
  }, $data.tab == "order" ? common_vendor.e({
    j: common_vendor.n($data.menuID == -1 ? "menu menu-selected" : "menu"),
    k: common_vendor.o(($event) => $options.menuChange(-1)),
    l: common_vendor.f($data.menu, (item, index, i0) => {
      return {
        a: common_vendor.t(item.type),
        b: item.id,
        c: common_vendor.n(index == $data.menuID ? "menu menu-selected" : "menu"),
        d: common_vendor.o(($event) => $options.menuChange(index), item.id)
      };
    }),
    m: common_vendor.f($data.foods, (item, index, i0) => {
      return {
        a: _ctx.$hostURL + item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price),
        d: common_vendor.o(($event) => $options.reduce(index), item.id),
        e: common_vendor.t(item.num),
        f: common_vendor.o(($event) => $options.add(index), item.id),
        g: item.id
      };
    }),
    n: common_vendor.t($data.curExpense),
    o: common_vendor.t($data.business.deliverExpense),
    p: this.expenseEnough
  }, this.expenseEnough ? {
    q: common_vendor.o(($event) => $options.toSubmitOrder())
  } : {
    r: common_vendor.t($data.business.beginExpense)
  }) : {}, {
    s: $data.tab == "info"
  }, $data.tab == "info" ? {
    t: common_vendor.t($data.business.address),
    v: common_vendor.t($data.business.beginExpense),
    w: common_vendor.t($data.business.deliverExpense),
    x: common_vendor.t($data.business.tel)
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ec9204da"], ["__file", "D:/Product/Project/Software-Engineering-Group/uni-app/pages/business/business.vue"]]);
wx.createPage(MiniProgramPage);

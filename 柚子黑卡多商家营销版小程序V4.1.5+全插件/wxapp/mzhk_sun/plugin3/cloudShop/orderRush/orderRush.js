/*   time:2019-08-09 13:18:48*/
Page({
    data: {
        curindex: 0
    },
    onLoad: function(n) {},
    onTab: function(n) {
        if (console.log("----------------------"), n) {
            if (this.data.curindex == n.currentTarget.dataset.tabid) return !1;
            this.setData({
                curindex: n.currentTarget.dataset.tabid
            })
        }
    },
    onGoodsDetails: function() {
        wx.navigateTo({
            url: "/mzhk_sun/plugin3/cloudShop/orderRushDetails/orderRushDetails"
        })
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});
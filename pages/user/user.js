// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      url: "../../images/user/book.png",
      text: "我的书籍",
      navigateTo:"myBook/myBook"
    }, {
      url: "../../images/user/active.png",
      text: "我的活动",
      navigateTo: "myActive/myActive"
    }, {
      url: "../../images/user/collect.png",
      text: "我的收藏",
      navigateTo: "myCollect/myCollect"
    }, {
      url: "../../images/user/ready.png",
      text: "我的借阅",
      navigateTo: "myReady/myReady"
    }, {
      url: "../../images/user/code.png",
      text: "借书还码",
      navigateTo: "myCode/myCode"
    }, {
      url: "../../images/user/money.png",
      text: "我的押金",
      navigateTo: "myMoney/myMoney"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  navigateTo:function(event){
    let url = event.currentTarget.dataset.url;
   wx.navigateTo({
     url: "../"+url,
   })
  }
})
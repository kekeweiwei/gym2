// pages/load/load.js
// login.js
Page({
  data: {
    username: '',
    password: ''
  },

  // 输入用户名
  inputUsername: function(e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 输入密码
  inputPassword: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function() {
    var that = this;
    // 检查用户名和密码是否为空
    if (that.data.username == '' || that.data.password == '') {
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none'
      })
      return;
    }
  },
    // 发送请求到后端服务器
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
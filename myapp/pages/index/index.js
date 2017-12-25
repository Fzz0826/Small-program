//logs.js
Page({
  data: {
    imgUrls: [
      'image/1.jpg',
      'image/2.jpg',
      'image/3.jpg'
    ],
    select:false,
    ind:0,
    indicatorDots: true,
    autoplay: true,
    duration: 1000,
    interval:2000,
    circular:true,
    loop:true,
    text: [
      '推荐',
      '少儿',
      '成人',
      '父母',
      '家庭'
    ]
  },
  tab:function(e){
    this.setData({
      ind: e.currentTarget.dataset.replyType
    })
  }
})

const config = {
  // 网站基本信息
  site: {
    title: "特懒蒲 - 自动贩售机",
    logo: "./assets/favicon.ico",
    brandName: "特懒蒲",
  },

  // Banner图片配置
  banners: [
    {
      image: "./assets/7b4834dfa3447.jpg",
      alt: "Banner 1",
    },
    {
      image: "./assets/f4416fea7896e.jpg",
      alt: "Banner 2",
    },
    {
      image: "./assets/805eedcf290c5.jpg",
      alt: "Banner 3",
    }
  ],

  // 公告内容配置
  announcement: {
    title: "公告及联系",
    content: [
      "本站商品仅用于学习/游戏和测试，禁止用于任何违法行为！",
      "本站仅租售AppleID，不做任何App使用教学和服务；同时本站AppleID禁止登录iCloud",
      "本站商品7天质保（租用及特别标注说明的除外）",
      "苹果近期风控较高，异地/陌生设备登录都可能导致风控，所以建议租用账号下载你需要的App",
      "购买任意商品务必完整阅读商品介绍，不接受买错退换",
    ],
    buttons: [
      {
        text: "如何购买",
        icon: "fa-gamepad",
        url: "https://t.me/iboo_bot",
      },
      {
        text: "联系方式",
        icon: "fa-comments",
        url: "#",
      },
      {
        text: "帮助文档",
        icon: "",
        url: "#",
      },
    ],
  },

  // 商品列表配置
  products: [
    {
      icon: "./assets/c55f71fef83bd.png",
      name: "美国 - AppleID",
      url: "#product1",
      style: "color: #000000",
    },
    {
      icon: "./assets/c7a69d764aa07.jpg",
      name: "英国 - AppleID",
      url: "#product2",
      style: "color: #000000",
    },
    {
      icon: "./assets/f85df9b63b53a.png",
      name: "日本 - AppleID",
      url: "#product3",
      style: "color: #000000",
    },
    // ... 添加其他所有商品
  ],

  // 页脚链接配置
  footer: [
    {
      text: "苹果官网",
      icon: "fa-apple",
      url: "#",
    },
    {
      text: "帮助文档",
      icon: "fa-question-circle",
      url: "#",
    },
    {
      text: "Telegram",
      icon: "fa-telegram",
      url: "#",
    },
    {
      text: "Email：iboocer@gmail.com",
      icon: "fa-envelope",
      url: "#",
    },
  ],
};

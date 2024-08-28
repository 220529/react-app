module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      // 要转换的单位，默认为像素单位(px)
      unitToConvert: "PX",

      // 设计稿的基准视口宽度
      viewportWidth: 750,

      // 转换后单位的小数点精度
      unitPrecision: 5,

      // 需要转换的属性列表，'*' 表示所有属性，'!' 表示排除特定属性
      propList: ["*", "!letter-spacing", "!font-weight"],

      // 除字体外的其他属性使用的视口单位，如vw（视口宽度的百分比）
      viewportUnit: "vw",

      // 字体属性使用的视口单位，如vh（视口高度的百分比）
      //   fontViewportUnit: "vh",

      // 需要忽略的CSS选择器列表，不会进行单位转换
      //   selectorBlackList: ["body", /\.ignore-this-class/],

      // 设置最小的转换数值，小于此值的属性将不会被转换
      minPixelValue: 0.5,

      // 是否转换媒体查询内的单位
      //   mediaQuery: true,

      // 是否直接替换原属性值，而不是添加备用属性
      replace: true,

      // 忽略特定文件夹或文件的正则表达式列表
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    },
  },
};

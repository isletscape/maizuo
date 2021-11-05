module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 7'],
    // },
    'postcss-pxtorem': {
      rootValue: 37.5, //37.5px编译成1rem，为适应vant,mint-ui此类未兼容rem库
      propList: ['*'], //全部处理
      minPixelValue: 3, //小于3px不编译为rem
    },
  },
}

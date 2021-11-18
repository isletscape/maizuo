module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, //为适应vant，37.5px编译为1rem(10vw)，实现1:1转换
      propList: ['*'],
      minPixelValue: 3,
    },
  },
}

/**
 * px单位会转换为rem单位
 * 小于3的px属性不会转换为rem单位
 * PX,pX,Px单位不会转换为rem单位
 */

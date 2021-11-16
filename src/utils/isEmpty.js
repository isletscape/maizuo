//undefined，null，''，NaN，false，0，[]，{}，空白字符串：返回true
export function isEmpty(val) {
  switch (typeof val) {
    case 'undefined':
      return true
    case 'string':
      if (val.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0)
        return true
      break
    case 'boolean':
      if (!val) return true
      break
    case 'number':
      if (0 === val || isNaN(val)) return true
      break
    case 'object':
      if (null === val || val.length === 0) return true
      for (var i in val) {
        return false
      }
      return true
  }
  return false
}

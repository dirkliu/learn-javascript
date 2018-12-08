require("babel-polyfill")
// 表单数据模型
class FormModel {

  constructor (options) {
    Object.assign(this, options)
  }

  setDefaults (options) {
    Object.keys(options).forEach(key => {
      Object.defineProperty(this, key, {
        set (value) {
          this['_' + key] = value || options[key]
        },
        get () {
          console.log('key:', key)
          return this['_' + key] || options[key]
        }
      })
    })
    this.defaults = options
    return this
  }
}

let formData = new FormModel({
  ids: ''
})

formData.setDefaults({
  ids: '123'
})

console.log('id:', formData.ids)

module.exports = FormModel

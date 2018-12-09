require("babel-polyfill")
// 表单数据模型
class FormModel {

  constructor (options) {
    Object.assign(this, options)
    this._setObserve(options)
  }

  _setObserve (options) {
    !this._observeKeys && this._observeKeys = []
    Object.keys(options).forEach(key => {
      this._observeKeys(key)
      Object.defineProperty(this, key, {
        set (value) {
          this['_' + key] = value || options[key]
        },
        get () {
          // console.log('key:', key)
          return this['_' + key] || options[key]
        }
      })
    })
  }

  setDefaults (options) {
    // Object.assign(this, options)
    Object.keys(options).forEach(key => {
      Object.assign(this, {
        key: this[key] || options[key]
      })
    })
    this._setObserve(options)
    this.defaults = options
    return this
  }
}

let formData = new FormModel({
  ids: '176'
})

formData.setDefaults({
  ids: '123'
})

console.log('id:', formData.ids)

module.exports = FormModel

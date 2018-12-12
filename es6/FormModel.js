require("babel-polyfill")
// 表单数据模型
class FormModel {

  constructor (options) {
    this._observeKeys = []
    this.defaults = {}
    Object.assign(this, options)
    this._setObserve(options)
    return this
  }

  _setObserve (options) {
    Object.keys(options).forEach(key => {
      if (this._observeKeys.indexOf(key) === -1) {
        this._observeKeys.push(key)
        Object.defineProperty(this, key, {
          set (value) {
            this['_' + key] = value || options[key]
          },
          get () {
          // console.log('key:', key)
            return this['_' + key] || options[key]
          }
      })
      }
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
    Object.assign(this.defaults, options)
    return this
  }
}

let formData = new FormModel.setDefaults({
  ids: '123'
})

console.log('id:', formData.ids)

module.exports = FormModel

import qs from 'qs'

export default function (url, param) {
  var downloadUrl = url
  if (param) {
    downloadUrl += '?' + qs.stringify(param)
  }
  window.open(downloadUrl)
}

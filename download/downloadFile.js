import axios from 'axios'

export default function (url, fileName) {
  let headers = {}
  axios.get(url, {
    responseType: 'blob',
    withCredentials: true,
    headers: headers
  }).then(resp => {
    let a = document.createElement('a')
    let url = window.URL.createObjectURL(resp.data)
    a.href = url
    a.download = fileName || 'PhoneTips 文件下载'
    a.click()
    window.URL.revokeObjectURL(url)
    a.remove()
  })
}

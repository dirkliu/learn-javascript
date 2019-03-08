import axios from 'axios'

export default function (url, params) {
  let headers = {}
  axios.get(url, {
    responseType: 'blob',
    withCredentials: true,
    headers: headers,
    params: params
  }).then(resp => {
    let a = document.createElement('a')
    let filename = decodeURIComponent(resp.headers['content-disposition'].split('=').pop())
    let url = window.URL.createObjectURL(resp.data)
    a.href = url
    a.download = filename
    a.click()
    window.URL.revokeObjectURL(url)
    a.remove()
  })
}

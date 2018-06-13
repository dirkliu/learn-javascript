//date transform to YYYY-mm-dd
new Date().toLocaleString('zh-CN', {hour12: false}).replace(/\//g, '-').replace(/\b\d\b/g, '0$&').replace(/\s(\d{1,2}:)*\d{1,2}/, '')

// date transform YYYY-mm-dd HH:i:s
new Date().toLocaleString('zh-CN', {hour12: false}).replace(/\//g, '-').replace(/\b\d\b/g, '0$&')

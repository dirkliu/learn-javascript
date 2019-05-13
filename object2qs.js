JSON.stringify(payload.query).replace(/[{}"']/g, '').replace(/:/g, '=').replace(',', '&')

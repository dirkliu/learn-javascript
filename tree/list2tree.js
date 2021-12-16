var list = [{
  parentId: 0,
  id: 1,
  name: '菜单1'
}, {
  parentId: 1,
  id: 11,
  name: '菜单11'
}, {
  parentId: 1,
  id: 12,
  name: '菜单12'
}, {
  parentId:11,
  id: 111,
  name: '111'
}, {
  parentId: 11,
  id: 112,
  name: '112'
}, {
  parentId: 12,
  id: 121,
  name: '121'
}, {
  parentId: 12,
  id: 122,
  name: '122'
}, {
  parentId: 122,
  id: 1221,
  name: '1221'
}, {
  parentId: 0,
  id: 2,
  name: '2',
}, {
  parentId: 2,
  id: 21,
  name: '21'
}, {
  parentId: 2,
  id: 22,
  name: '22'
}, {
  parentId: 22,
  id: 221,
  name: '221'
}]

function list2trees (list, parentId) {
  //var trees = []
  var children = list.filter(item => item.parentId === (parentId === undefined ? 0 : parentId))
  children.forEach(child => {
    let subChildren = list2trees(list, child.id)
    child.children = subChildren
  })
  return children
}


var trees = list2trees(list)



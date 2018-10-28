var list = [
  {
    id: 1,
    parentId: 0,
    name: '日本',

    children: [
      {
        id: 11,
        parentId: 1,
        name: '北海道',

        children: [
          {
            id: 111,
            parentId: 11,
            name: '札幌'
          }, {
            id: 112,
            parentId: 11,
            name: '根室'
          }
        ]
      }, {
        id: 12,
        parentId: 1,
        name: '秋田县',

        children: [
          {
            id: 121,
            parentId: 12,
            name: '秋田'
          }, {
            id: 122,
            parentId: 12,
            name: '能代'
          }
        ]      
      }
    ]
  }, {
    id: 2,
    parentId: 0,
    name: '美国'
  }, {
    id: 3,
    parentId: 0,
    name: '中国',

    children: [
      {
        id: 31,
        name: '北京',
        parentId: 3
      }, {
        id: 32,
        name: '吉林省',
        parentId: 3,

        children: [
          {
            id: 321,
            parentId: 32,
            name: '长春'
          }, {
            id: 322,
            parentId: 32,
            name: '吉林'
          }
        ]
      }, {
        id: 33,
        name: '湖南省',
        parentId: 3,

        children: [
          {
            id: 331,
            parentId: 332,
            name: '长沙'
          }, {
            id: 332,
            parentId: 32,
            name: '益阳'
          }
        ]
      }
    ]
  }
]

// 扁平化
function flat (treeList) {
  let _list = []

  function _flat (treeList, listStack) {
    treeList.forEach(item => {
      let newItem = Object.assign({}, item)
      delete newItem.children
      listStack.push(newItem)

      if (item.children) {
        _flat(item.children, listStack)
      }
    })
  }

  _flat(treeList, _list)
  return _list
}

function search (param, list) {
  let flatList = flat(list)
  return flatList.filter(item => item.name.indexOf(param) > -1)
}

function treeSearch (param, list) {
  let treeSearchList = []
  let searchList = search(param, list)

  return treeSearchList
}

function traceback (node, nodeList) {

}

let searchList = search('秋田', list)
console.log('searchList:', searchList)

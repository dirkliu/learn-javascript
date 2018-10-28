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
    name: '中国'
  }
]

function search () {

}

function treeSearch (param, list) {

}
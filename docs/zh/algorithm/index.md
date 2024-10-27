# 算法

---

## 树

### 扁平数据转tree

> 背景：2021-07-13 早班地铁看掘金文章 [链接](https://juejin.cn/post/6983904373508145189)

---

題目: 扁平的数据结构，转成树

```javascript
let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]
```

输出结果：

```javascript
[
  {
    "id": 1,
    "name": "部门1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "name": "部门2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "name": "部门3",
        "pid": 1,
        "children": [
          // 结果 ,,,
        ]
      }
    ]
  }
]
```

我的解题思路：

```javascript
function arrToTree(arr) {
  const result = []
  const temMap = new Map();

  arr.forEach(v => {
    temMap.set(v.id, {...v, children: []})
  })

  temMap.forEach((v, k, m) => {
    if (v.pid === 0) {
      result.push(v)
    } else {
      if (temMap.has(v.pid)) {
        temMap.get(v.pid).children.push(v);
      }
    }
  })

  return result;
}
```
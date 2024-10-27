# 面试

## JS

### 闭包

#### 函数节流和防抖

```javascript
/**
 * 基础班防抖函数
 * @param func 需要执行的函数
 * @param wait 时间间隔（ms）
 * @returns {(function(): void)|*}
 */
function debounce(func, wait) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, wait)
  }
}

/**
 * 可以立即执行的防抖函数
 * @param func 需要执行的函数
 * @param wait 时间间隔（ms）
 * @param immediate 是否立即执行
 * @returns {(function(): void)|*}
 */
function debounceImmediate(func, wait, immediate) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);

      if (callNow) func.apply(this, arguments)
    } else {
      timer = setTimeout(() => {
        func.apply(this, arguments)
      }, wait);
    }
  }
}

/**
 * 基础版不使用定时器的节流函数
 * @param func 需要执行的函数
 * @param wait 时间间隔（ms）
 * @returns {(function(): void)|*}
 */
function throttle(func, wait) {
  let previous = 0;
  return function () {
    let now = Date.now()
    if (now - previous >= wait) {
      func.apply(this, arguments)
      previous = now;
    }
  }
}

/**
 * 基础版使用定时器的节流函数
 * @param func 需要执行的函数
 * @param wait 时间间隔（ms）
 * @returns {(function(): void)|*}
 */
function throttleTimeout(func, wait) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments)
        timer = null;
      }, wait)
    }
  }
}
```

### 深浅拷贝

浅拷贝：

数组：

1. Array.concat()
2. Array.slice()

对象：

1. Object.assign()

深拷贝：

通用

```javascript
JSON.parse(JSON.stringify())
```

## 网络

### 从输入url到浏览器显示页面的过程

1. 输入url。
2. 浏览器查找域名的IP地址。
3. 建立TCP链接。
4. 浏览器向web服务器发起http请求。
5. 服务器收到请求并响应。
6. 关闭TCP连接。
7. 浏览器解析资源。
8. 浏览器渲染。

### TCP/IP UDP 相关

UDP（传输层）:

1. 面向无连接
2. 有单播，多播，广播的功能5
3. UDP是面向报文的
4. 不可靠性

TCP传输层：

1. 面向连接

|        | UDP                    | TCP                 |
|:-------|:-----------------------|:--------------------|
| 是否连接   | 无连接                    | 面向连接                |
| 是否可靠   | 不可靠传输，不使用流量控制和拥塞控制     | 可靠传输，使用流量控制和拥塞控制    |
| 连接对象个数 | 支持一对一，一对多，多对一和多对多交互通信  | 只能是一对一通信            |
| 传输方式   | 面向报文                   | 面向报文                |
| 首部开销   | 首部开销小，仅8字节             | 首部最小20字节，最大60字节     |
| 适用场景   | 适用于实时应用（IP电话、视频会议、直播等） | 适用于要求可靠传输的应用，例如文件传输 |

HTTP（应用层）：
# JS进阶

## 原型和原型链

背景：2021-07-14 早班地铁 阅读 [循序渐进带你全方位剖析原型链](https://juejin.cn/post/6984322390322839559)
中描述的不是很好理解和全面，我打算全方位的队原型和原型链进行一次深入剖析。

參考：[链接](https://juejin.cn/post/6844903989088092174)

js之父在设计js原型、原型链的时候遵从以下两个准则:

```javascript
function Person() {

}

const person = new Person()

// 准则1：原型对象（即Person.prototype）的constructor指向构造函数本身
Person.prototype.constructor === Person
// 准则2：实例（即person）的__proto__和原型对象指向同一个地方
person.__proto__ === Person.prototype

// 每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性

```

JavaScript 对象入门[MDN链接](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects)

### 原型

```js
// 显式原型：  
prototype

// 隐式原型：
__proto__ === [[prototype]]

// __proto__ 与 [[prototype]] 是同一个，使用的地方不一样
// __proto__是由浏览器实现的，ES6提供了Object.getPrototypeOf()来获取对象的原型
// 在 JavaScript 语言标准中用 [[prototype]] 表示（参见 ECMAScript）
obj.__proto__ === Object.getPrototypeOf(obj)

```

### 原型链

示意图

![Javascript _Object_Layout](/images/js/javascript_object_layout.png)

### 原型底层实现顺序

首先：js中先创建的是Object.prototype这个原型对象。  
然后：在这个原型对象的基础之上创建了Function.prototype这个原型对象。  
其次：通过这个原型对象创建出来Function这个函数。   
最后: 又通过Function这个函数创建出来之后，Object（）这个对象。

```js
/*
 除了Object的原型对象（Object.prototype）的__proto__指向null
 其他内置函数对象的原型对象和自定义构造函数的__proto__都指向Object.prototype
 因为原型对象本身是普通对象
 */
```

## 继承

## 事件循环


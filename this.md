#### 箭头函数、new、bind、apply 和 call、欧比届点（obj.）、直接调用、不在函数里
符合前面的情况，后续this将不改变
# 总结点:
1. 所有的this关键字，在函数运行时，才能确定它的指向
2. this所在的函数由哪个对象调用，this就会指向谁
3. 当函数执行时，没有明确的调用对象时，则this指向window

# 出现场景总结:
1. 浏览器环境中，全局this指向window
2. 普通函数中，this指向window
3. 定时器函数中，this指向window
4. 对象方法中，this指向实例对象
5. 构造函数中，this指向实例对象
6. 事件处理函数中，this指向事件源
7. 箭头函数中，没有this；如果使用this，则把this当做普通变量对待，然后按作用域去查找即可

## 箭头函数
1. 因为箭头函数不具备自己的this，所以非常简单，假装它不存在，就像这样：
```
    var obj = { 
    show: function(){
     setTimeout(()=> {  
      console.log(this);
      },0),
}
}
```
2. 箭头函数不可以用call来改变this指向
3. 箭头函数的 this 是在创建它时外层 this 的指向
4. 箭头函数的 this 就得先知道外层 this 的指向
   
## new 
#### 当使用 new 关键字调用函数时，函数中的 this 一定是 JS 创建的新对象。
```
func = () => {}
new func() // throw error
```

## bind
#### 多次 bind 时只认第一次 bind 的值
```
function func() {
  console.log(this)
}

func.bind(1).bind(2)() // 1

```
#### 箭头函数中 this 不会被修改
```
func = () => {
  // 这里 this 指向取决于外层 this，参考口诀 7 「不在函数里」
  console.log(this)
}

func.bind(1)() // Window，口诀 1 优先
```

## apply 和 call
#### apply() 和 call() 的第一个参数都是 this，区别在于通过 apply 调用时实参是放到数组中的，而通过 call 调用时实参是逗号分隔的。
#### 箭头函数中 this 不会被修改

## 直接调用
#### 在函数不满足前面的场景，被直接调用时，this 将指向全局对象。在浏览器环境中全局对象是 Window，在 Node.js 环境中是 Global。
```
function func() {
  console.log(this)
}

func() // Window
```

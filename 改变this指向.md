## bind
#### bind 方法 会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。
```
var publicAccounts = {
    name: '程序员成长指北',
    author: 'koala',
    subscribe: function(subscriber) {
        console.log(subscriber + this.name)
    }
}

publicAccounts.subscribe('小红')   // 输出结果: "小红 程序员成长指北"

var subscribe1 = publicAccounts.subscribe.bind({ name: 'Node成长指北', author: '考拉' }, '小明 ')
subscribe1()       // 输出结果: "小明 Node成长指北"
```

## call,apply
1. call和apply的第一个参数会绑定到函数体的this上，如果不传参数，例如fun.call()，非严格模式，this默认还是绑定到全局对象
2. call函数接收的是一个参数列表，apply函数接收的是一个参数数组。
```
unc.call(thisArg, arg1, arg2, ...)        // call 用法
func.apply(thisArg, [arg1, arg2, ...])     // apply 用法
```
#### 例子
```
var person = {
    "name": "koala"
};
function changeJob(company, work) {
    this.company = company;
    this.work    = work;
};

changeJob.call(person, '百度', '程序员');
console.log(person.work); // '程序员'

changeJob.apply(person, ['百度', '测试']);
console.log(person.work); // '测试'
```
#### 这两个方法在调用的时候，如果我们传入数字或者字符串，这两个方法会把传入的参数转成对象类型。
```
var number = 1, string = '程序员成长指北';
function getThisType () {
    var number = 3;
    console.log('this指向内容',this);
    console.log(typeof this);
}
getThisType.call(number);
getThisType.apply(string); 
// 输出结果
// this指向内容 [Number: 1]
// object
// this指向内容 [String: '程序员成长指北']
// object
```
## 手写Call
- 根据call的规则设置上下文对象,也就是this的指向。
- 通过设置context的属性,将函数的this指向隐式绑定到context上
- 通过隐式绑定执行函数并传递参数。
- 删除临时属性，返回函数执行结果



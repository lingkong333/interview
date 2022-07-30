##  ajax原理
Ajax相当于在用户和服务器之间加了一个中间层,使用户操作与服务器响应异步化。
一些数据验证和数据处理等都交给Ajax引擎来做，只有确定需要从服务器读取新数据时再由Ajax引擎代为向服务器提交请求。
Ajax的原理简单来说通过XmlHttpRequest对象来向服务器发送异步请求，从服务器获得数据，然后用JavaScript来操作DOM而更新页面。
XMLHttpRequest一种支持异步请求的技术，也就是JavaScript可以及时向服务器提出请求和处理响应，而不阻塞用户。

## 原生JavaScript AJAX请求有几个步骤？分别是什么？
1. 创建 XMLHttpRequest 对象，`var xhr = new XMLHttpRequest();`
2. 发送信息至服务器时内容编码类型 `xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); `
3. 接受服务器响应数据 
```
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && (xhr.status == 200) { 
		// let data = xhr.responseText;  
    }
};
```
4. 规定请求的类型、URL 以及是否异步处理请求。`xhr.open('GET',url,true); ` 
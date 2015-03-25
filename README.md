# k_
本人常用的一些方法的整理，简称造轮子。

## 更新记录
### 20150325
缘起于aop，因此也想把aop作为k_的第一个用途。写好之后总感觉不尽如人意，因为不想改`Function.prototype`因此只能触发调用。
####beta0.2版aop用法
```javascript
  var test = k_(function (test) {  
      console.log("Main: " + arguments[arguments.length-1]);  
      console.log(test);  
      return true;  
  }).before(function (test) {  
      console.log("Before: " + arguments[0]);  
      return "before";  
  }).after(function (test) {  
      console.log("After: " + arguments[arguments.length-1]);  
      return "xixi";  
  });  
  test("haha");  
```

####beta0.1版aop用法
```javascript
  var test = k_(function (test) {  
      console.log("Main: " + arguments[arguments.length-1]);  
      console.log(test);  
      return true;  
  }).before(function (test) {  
      console.log("Before: " + arguments[0]);  
      return "before";  
  }).after(function (test) {  
      console.log("After: " + arguments[arguments.length-1]);  
      return "xixi";  
  });  
  test.run("haha");  
```

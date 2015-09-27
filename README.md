# jQuery-Plugin-Template
结合Lightweight Start模式，参考Bootstrap写出的jQuery模板
### 调用方法
使用template.js文件
#### 使用默认参数进行初始化
```
$('p').myplugin();//init()
```
#### 传入对象进行初始化
```
$('p').myplugin({
    key:value
});
```
#### 初始化之后可以根据需要，更改某些属性
```
$('p').myplugin('value',"this is text");
```
### 定义默认属性值
```
Plugin.DEFAULTS = {
		//默认参数
	};
```
### 完成初始化相关动作
通过增添原型的方法完成初始化，这里的`this`是jQuery对象，与其操作的DOM直接关联。使用链式写法`this.fun1().fun2().fun3()`.
```
Plugin.prototype.init = function(){
        //初始化
		this.fun();//业务逻辑区
    };
```
### 原型方法定义
这里的`this.element`便是实际的DOM对象所封装的`jQuery`对象。
* 当参数长度为0，也就是没有参数的时候，属于执行时传入的是对象值或者没有传值的情况，在这里直接使用`this.options.key`即可。
* 当长度不为0时，则`arugments[0]`表示传入的方法参数
```
 Plugin.prototype.fun = function(){
        if(!arguments.length){
			//针对参数传入的是对象{key:value}时的情况
        }else{
		  //针对参数传入的是方法，使用argument[0]获取参数值
        }
        return this;//为了支持链式写法
	};
```
; (function($,window,document,undefined){
    "use strict";
    var pluginName = "myplugin";//更改插件名称
    function Plugin(element,options){
        this.element = $(element);//将封装好的jQuery对象赋给构造函数
        this.options = $.extend({},Plugin.DEFAULTS,options);
        this.init();
    }
	Plugin.DEFAULTS = {
		//默认参数
	};
    Plugin.prototype.init = function(){
        //初始化
		this.fun();//业务逻辑区
    };
    Plugin.prototype.fun = function(){
        if(!arguments.length){
			//针对参数传入的是对象{key:value}时的情况
        }else{
		  //针对参数传入的是方法，使用argument[0]获取参数值
        }
        return this;//支持链式写法
	};
    $.fn[pluginName] = function(){
        var options = arguments;
        return this.each(function(){
            var $this = $(this),//把each方法里的每一个DOM对象转换为jQuery对象
			    data = $this.data(pluginName);
            if(!$this.data(pluginName)){
                //如果没有实例，则初始化一个
                $this.data(pluginName,(new Plugin(this,options[0]))); 
            }else if(typeof options[0] ==="string"){
                var args = Array.prototype.slice.call(options,1); 
				data[options[0]](args); 
			}else if(typeof options[0] ==="object" || !options){  
				//如果已经实例化且参数为对象或者未填入参数，那么执行初始化
                data.options = $.extend({},Plugin.DEFAULTS,options[0]);
                data.init();
			}else{
				//填入错误方法
			$.error('Method \''+options[0]+'\' does not exist on \''+pluginName+'\';');
			} 
        });
    };
	$.fn[pluginName].Constructor = Plugin;//重设插件构造器，可以通过该属性获取插件的真实类函数
})(window.jQuery,window,document);
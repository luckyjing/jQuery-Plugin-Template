; (function($,window,document,undefined){
    "use strict";
    var pluginName = "myplugin";
    function Plugin(element,options){
        this.element = $(element);
        this.options = $.extend({},Plugin.DEFAULTS,options);
        this.init();
    }
	Plugin.DEFAULTS = {
		//默认参数
		value:'我是文本',
		color:'pink',
		size:18,
		lHeight:1
	};
    Plugin.prototype.init = function(){
        //初始化
      this.element.html(this.options.value);
      this.color().size().lHeight();//链式表达
    };
    Plugin.prototype.color = function(){
        if(!arguments.length){
		  this.element.css("color",this.options.color);
        }else{
		  this.element.css("color",arguments[0]);//默认使用第一个参数作为需要替换的值 
        }
        return this;
	};
    Plugin.prototype.size = function(){
        if(!arguments.length){ 
		this.element.css("font-size",this.options.size);
        }else{
            this.element.css("font-size",arguments[0]); 
        }
        return this;        
	};
    Plugin.prototype.lHeight = function(){
        if(!arguments.length){
		  this.element.css("line-height",this.options.lHeight);            
        }else{
            this.element.css("line-height",arguments[0]);             
        }
        return this;        
	}; 
    $.fn[pluginName] = function(){
        var options = arguments;
        return this.each(function(){
            var $this = $(this),//把each方法里的每一个DOM对象转换为jQuery对象
			    data = $this.data(pluginName);
            if(!$this.data(pluginName)){
                //如果没有实例，则初始化一个 
                $this.data(pluginName,(new Plugin(this,options))); 
            }else if(typeof options[0] ==="string"){
                var args = Array.prototype.slice.call(options,1); 
				data[options[0]](args); 
			}else if(typeof options ==="object" || !options){          
				//如果已经实例化且参数为对象或者未填入参数，那么执行初始化
                $this.data(pluginName,options);
                data.options = $.extend({},Plugin.DEFAULTS,options);
                data.init();
			}else{
				//填入错误方法
			$.error('Method \''+options[0]+'\' does not exist on \''+pluginName+'\';');
			} 
        });
    };
	$.fn[pluginName].Constructor = Plugin;//重设插件构造器，可以通过该属性获取插件的真实类函数
})(window.jQuery,window,document); 



// 调用方法


$('p').myplugin();//init()
$('p').myplugin({
    key:value
});
$('p').myplugin('key','value');
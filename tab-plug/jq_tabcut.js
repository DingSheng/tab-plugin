
(function($){
	$.fn.tabcut=function(setting){
		
		var defaults={
		
		ev: "slide",//点击事件，如click，mouseover...
		num:2,//选项卡的个数
		on:1,//选择哪个选项卡高亮
		par:"",//父级元素的id或是class名
		tab:"",//菜单切换选项卡的id或是class名
		conid:"",//菜单切换选项卡对应内容的id或是class名
		cla:""//高亮状态的class名字
		
		} 
		var root=$(this);
		setting = $.extend(defaults,setting);
		
		function hideall(){
			
		  for(var i=1;i<=setting.num;i++){
			    var tabcl=$(setting.tab+i,root);
				var tabsconnum=$(setting.conid+i);
				var pars=$(tabsconnum,root);
				$(">a",tabcl).removeClass(setting.cla);
				$(pars).hide();
		}
	}

	for(var i=1;i<=setting.num;i++){	
	
	     var tabcl=$(setting.tab+i,root);
		 var pars=$(setting.conid,root);
		 
		$(">a",tabcl).bind(setting.ev,function(){
			  hideall();
			  var numtab=$(this).parent().attr("id").slice(-1);
			  var parnum=$(setting.conid+numtab);
			  $(parnum,root).show();
			  $(this).addClass(setting.cla);
			
			});
        }
	
	hideall();
	
    if(setting.on){
		
		 var tabon=$(setting.tab+setting.on,root);
		 var parsnum=$(setting.conid+setting.on);
		 $(">a",tabon).addClass(setting.cla);
		 $(parsnum,root).show();	
		 	
		}
}
	
})(jQuery)


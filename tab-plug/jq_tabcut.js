
(function($){
	$.fn.tabcut=function(setting){
		
		var defaults={
		
		ev: "slide",//����¼�����click��mouseover...
		num:2,//ѡ��ĸ���
		on:1,//ѡ���ĸ�ѡ�����
		par:"",//����Ԫ�ص�id����class��
		tab:"",//�˵��л�ѡ���id����class��
		conid:"",//�˵��л�ѡ���Ӧ���ݵ�id����class��
		cla:""//����״̬��class����
		
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


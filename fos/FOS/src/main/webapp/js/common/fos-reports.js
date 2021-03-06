//业务量汇总表 business.rptdesign
Fos.StatSumTab = function(){
	var RT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['0',C_BIZ_TYPE],['1',C_CARRIER],['2',C_BOOKER],['3',C_SALES],['4',C_SHLI]]});
	var t1=new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:RT_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'REPT_BUSI', url:''});
    
    this.report=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var iframe = Ext.get('IF_REPT_BUSI');
		var url = REPORT_URL+'&__report=reports/business.rptdesign&compCode=HITI';
		if(t1.value=='0') 
			iframe.dom.src=url+'&type='+t1.value+'&F='+t2.value+'&T='+t3.value;
		else 
			iframe.dom.src=url+'&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
	};
	this.expExcel=function(){
		var url = REPORT_URL+'&__report=reports/business.rptdesign';
		url += '&format=xls&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	};
	
	Fos.StatSumTab.superclass.constructor.call(this, {
    id:'REPT_BUSI',title:C_STAT_BIZ_SUM,layout:'fit',iconCls:'stats',
    		deferredRender:false,closable:true,autoScroll:true,
     tbar:[{xtype:'tbtext',text:C_STAT_TYPE},t1,'-',
		{xtype:'tbtext',text:C_CONS_DATE+C_FROM},t2,
		{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_BUSI),iconCls:'stats',
			scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_BUSI),iconCls:'print',scope:this,
		menu:{items:[{text:'Excel',scope:this,handler:function(){this.expExcel();}}]}}],items:doc});
};
Ext.extend(Fos.StatSumTab, Ext.Panel);

//利润汇总表 profit.rptdesign
Fos.StatProfitSumTab = function(){
	var RT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_BIZ_TYPE],['1',C_CARRIER],['2',C_BOOKER],['3',C_SALES],['4',C_SHLI]]});
	var t1=new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:RT_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'REPT_BUEX', url:''});
    
    this.report=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var iframe = Ext.get('IF_REPT_BUEX');
		var url = REPORT_URL+'&__report=reports/profit.rptdesign&compCode=HITI';
		if(t1.value=='0') 
			iframe.dom.src=url+'&type='+t1.value+'&F='+t2.value+'&T='+t3.value;
		else 
			iframe.dom.src=url+'&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
	};
	this.expExcel=function(){
		var url = REPORT_URL+'&__report=reports/profit.rptdesign&compCode=HITI';
		url += '&format=xls&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	};
	
	Fos.StatProfitSumTab.superclass.constructor.call(this, {
    id:'REPT_BUEX',title:C_STAT_BIZ_SUM,layout:'fit',iconCls:'stats',
    		deferredRender:false,closable:true,autoScroll:true,
     tbar:[{xtype:'tbtext',text:C_STAT_TYPE},t1,'-',
		{xtype:'tbtext',text:C_CONS_DATE+C_FROM},t2,
		{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_BUSI),iconCls:'stats',
			scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_BUSI),iconCls:'print',scope:this,
		menu:{items:[{text:'Excel',scope:this,handler:function(){this.expExcel();}}]}}],items:doc});
};
Ext.extend(Fos.StatProfitSumTab, Ext.Panel);

//业务员业务量汇总表 business_sales.rptdesign
Fos.StatSalesSumTab = function(){
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'REPT_BUSI_SALES', url:''});
	this.report=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var iframe = Ext.get('IF_REPT_BUSI_SALES');
		var url = REPORT_URL+'&__report=reports/business_sales.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		iframe.dom.src=url+'&F='+t2.value+'&T='+t3.value;		
	};
	this.expExcel=function(){
		var url = REPORT_URL+'&__report=reports/business_sales.rptdesign';		
		url += '&format=xls&F='+t2.value+'&T='+t3.value;		
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	};
	Fos.StatSalesSumTab.superclass.constructor.call(this, {    
    id:'REPT_BUSI_SALES',title:C_STAT_BIZ_SUM_SALES,layout:'fit',iconCls:'stats',
    	deferredRender:false,closable:true,autoScroll:true,
     tbar:[
		{xtype:'tbtext',text:C_CONS_DATE+C_FROM},t2,
		{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_BUEX),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_BUEX),iconCls:'print',scope:this,
		menu:{items:[{text:'Excel',scope:this,handler:function(){this.expExcel();}}]}}],items:doc});
};
Ext.extend(Fos.StatSalesSumTab, Ext.Panel);

//集装箱单箱利润汇总表 profit_teu.rptdesign
Fos.StatContProfitTab = function(){
	var RT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],data:[['1',C_CARRIER],['2',C_BOOKER],['3',C_SALES],['4',C_SHLI]]});
	var t1=new Ext.form.ComboBox({displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'3',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:RT_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'REPT_PTEU', url:''});
	this.report=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var iframe = Ext.get('IF_REPT_PTEU');		
		var url = REPORT_URL+'&__report=reports/profit_teu.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		iframe.dom.src=url+'&type='+t1.value+'&F='+t2.value+'&T='+t3.value;	
	};
	this.expExcel=function(){
		var url = REPORT_URL+'&__report=reports/profit_teu.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		url += '&format=xls&type='+t1.value+'&F='+t2.value+'&T='+t3.value;		
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	};
	Fos.StatContProfitTab.superclass.constructor.call(this, {    
    id:'REPT_PTEU',title:C_STAT_PROFIT_CONT,layout:'fit',iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
     tbar:[{xtype:'tbtext',text:C_STAT_TYPE},t1,'-',
		{xtype:'tbtext',text:C_CONS_DATE+C_FROM},t2,
		{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_PTEU),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_PTEU),iconCls:'print',scope:this,
		menu:{items:[{text:'Excel',scope:this,handler:function(){this.expExcel();}}]}}],items:doc});
};
Ext.extend(Fos.StatContProfitTab, Ext.Panel);

//业务明细统计表  business_detail.rptdesign
Fos.StatDetailTab = function(){
	var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_STAT_NO_GROUP],['4',C_BOOKER],['7',C_GROU],['5',C_SALES],['1',C_SHLI],['2',C_VOYA],['3',C_CARRIER],['6',C_OPERATOR]]});
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_CONS_DATE],['1',C_SAIL_DATE]]});
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:'STDE', url:''});    
	var check=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);
			return;
		}
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);
			return;
		}
	};
	this.getUrl=function(){
		var consCarrier=this.find('name','consCarrier')[0].getValue();
		var vessName=this.find('name','vessName')[0].getValue();
		var shliId=this.find('name','shliId')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var consOperatorId=this.find('name','consOperatorId')[0].getValue();
		
		var url = REPORT_URL+'&__report=reports/business_detail.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		url += '&g='+t1.value+'&dt='+t4.value+'&F='+t2.value+'&T='+t3.value;
		
		if(consCarrier) url+='&consCarrier='+consCarrier;
		if(vessName) url+='&vessName='+vessName;
		if(shliId) url+='&shliId='+shliId;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consNo) url+='&consNo='+consNo;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPod) url+='&consPod='+consPod;
		if(consOperatorId) url+='&consOperatorId='+consOperatorId;
		return url;
	};
	this.report=function(){
		check();
		Ext.get('IF_STDE').dom.src=this.getUrl();
	};
	this.clear=function(){
		this.find('name','sf')[0].getForm().reset();
	};
	this.expExcel=function(){
		check();
		OWW(this.getUrl()+'&format=xls');
	};
	Fos.StatDetailTab.superclass.constructor.call(this, {    
    id:'T_BUDE',title:C_STAT_BIZ_DETAIL,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
		tbar:[{xtype:'tbtext',text:C_GROUP_TYPE},t1,'-',
			t4,{xtype:'tbtext',text:C_FROM},t2,{xtype:'tbtext',text:C_TO},t3,'-',
			{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_BUDE),iconCls:'stats',scope:this,handler:this.report},'-',
			{text:C_EXPORT,disabled:NR(M1_STAT+T_BUDE),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}},'->',
			{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:4},height:120,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.25,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_CARRIER,tabIndex:1,name:'consCarrier',store:HTStore.getCS(),enableKeyEvents:true,
		            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',
		            	displayField:'custCode',valueField:'id',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		            	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
     				{fieldLabel:C_VESS,tabIndex:5,name:'vessName',store:HTStore.getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',
     					typeAhead:true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
     				{fieldLabel:C_SHLI,tabIndex:9,name:'shliId',store:HTStore.getSHLI_S(),xtype:'combo',
     						displayField:'shliName',valueField:'id',typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
	        	{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_BOOKER,name:'custId',tabIndex:2,store:HTStore.getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'id',
		        		typeAhead:true,enableKeyEvents:true,
		        		mode:'remote',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_CLASS,tabIndex:10,name:'consBizClass',store:HTStore.BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_SALES,tabIndex:3,name:'consSalesRepId',
	            		value:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1)?sessionStorage.getItem("USER_ID"):'',
	            		readOnly:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1),
	            		store:HTStore.getSALE_S(),xtype:'combo',displayField:'userName',
	            		valueField:'id',typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_CONS_NO,tabIndex:6,name:'consNo',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:11,name:'consBizType',store:HTStore.BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_OPERATOR,tabIndex:4,name:'consOperatorId',store:HTStore.getOP_S(),
	            		xtype:'combo',displayField:'userName',valueField:'id',
	            		typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:HTStore.getPS(),xtype:'combo',
	            			displayField:'portNameEn',valueField:'portCode',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
              			listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_SHIP_TYPE,tabIndex:12,name:'consShipType',store:HTStore.SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}]}	
	    	]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]
    });
};    
Ext.extend(Fos.StatDetailTab, Ext.Panel);

//利润分析表 profit_detail.rptdesign
Fos.StatProfitTab = function(){
	var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
			data:[['0',C_STAT_NO_GROUP],
			      ['1',C_BOOKER],
			      ['4',C_GROU],
			      ['2',C_SALES],
			      ['3',C_POD]
			]});
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_CONS_DATE],
		      ['1',C_SAIL_DATE]
		]});
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:'REPT_PROF', url:''});    
	var check=function(){
		if(!t2.getValue()){XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
	};
	this.getUrl=function(){		
		var shliId=this.find('name','shliId')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var grouId=this.find('name','grouId')[0].getValue();
		
		var url = REPORT_URL+'&__report=reports/profit_detail.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		url += '&g='+t1.value+'&dt='+t4.value+'&F='+t2.value+'&T='+t3.value;		
		if(shliId) url+='&shliId='+shliId;
		if(custId) url+='&custId='+custId;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consNo) url+='&consNo='+consNo;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPod) url+='&consPod='+consPod;
		if(grouId) url+='&grouId='+grouId;
		return url;
	};
	this.report=function(){
		check();
		Ext.get('IF_REPT_PROF').dom.src=this.getUrl();
	};
	this.clear=function(){
		this.find('name','sf')[0].getForm().reset();
	};
	this.expExcel=function(){
		check();
		OWW(this.getUrl()+'&format=xls');
	};
	
	Fos.StatProfitTab.superclass.constructor.call(this, {id:'T_PROF',title:C_STAT_PROFIT,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
		tbar:[{xtype:'tbtext',text:C_GROUP_TYPE},t1,'-',
			t4,{xtype:'tbtext',text:C_FROM},t2,{xtype:'tbtext',text:C_TO},t3,'-',
			{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_PROF),iconCls:'stats',scope:this,handler:this.report},'-',
			{text:C_EXPORT,disabled:NR(M1_STAT+T_PROF),iconCls:'print',
				scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}},'->',
			{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[
			{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:3},height:120,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.4,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
     				{fieldLabel:C_BOOKER,name:'custId',tabIndex:1,store:HTStore.getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'id',typeAhead:true,enableKeyEvents:true,
		        		mode:'remote',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
					{fieldLabel:C_SHLI,tabIndex:4,name:'shliId',store:HTStore.getSHLI_S(),
		              		xtype:'combo',displayField:'shliName',valueField:'id',
		              		typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
     				{fieldLabel:C_BIZ_CLASS,tabIndex:7,name:'consBizClass',store:HTStore.BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
     			]},
	        	{columnWidth:.3,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_SALES,tabIndex:2,name:'consSalesRepId',
	            			value:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1)?sessionStorage.getItem("USER_ID"):'',
	    	            	readOnly:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1),
	            			store:HTStore.getSALE_S(),xtype:'combo',displayField:'userName',
	            			valueField:'id',typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_CONS_NO,tabIndex:6,name:'consNo',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:8,name:'consBizType',store:HTStore.BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_GROU,tabIndex:3,name:'grouId',store:HTStore.getGROU_S(),xtype:'combo',
	            		displayField:'grouName',valueField:'id',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:HTStore.getPS(),xtype:'combo',
	            		displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_SHIP_TYPE,tabIndex:9,name:'consShipType',store:HTStore.SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]}
	    	]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatProfitTab, Ext.Panel);

//账款帐龄分析表 account_age_r.rptdesign account_age_p.rptdesign
Fos.StatACTab = function(t){
    var t1=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'AC'+t, url:''});
 	this.report=function(){
		if(!t1.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t2.focus();},this);
			return;
		};
		var url = REPORT_URL;
		if(t=='AR')
			url += '&__report=reports/account_age_r.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		else
			url += '&__report=reports/account_age_p.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
				
		Ext.get('IF_AC'+t).dom.src=url+'&d='+t1.value;
	};
	this.expExcel=function(){OWW(SERVICE_URL+'?A=REPT_AC'+t+'&format=xls&d='+t1.value);};
	Fos.StatACTab.superclass.constructor.call(this, {    
    	id:'T_AC'+t,title:t=='AR'?C_STAT_AR_AC:C_STAT_AP_AC,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
     	tbar:[{xtype:'tbtext',text:C_STAT_END_DATE},t1,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+(t=='AR'?T_ACAR:T_ACAP)),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+(t=='AR'?T_ACAR:T_ACAP)),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}}],
		items:[{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatACTab, Ext.Panel);

//应收费用统计 settlement_expense.rptdesign
Fos.StatArTab = function(T){
	var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_STAT_NO_GROUP],
		      ['1',C_BOOKER],
		      ['7',C_GROU],
		      ['6',C_SALES],
		      ['2',C_VOYA],
		      ['3',C_CONS_NO],
		      ['4',C_CHAR],
		      ['5',C_CURR]
		]});
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_CONS_DATE],
		      ['1',C_SAIL_DATE],
		      ['2',C_INVO_DATE]
		]});
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:T, url:''});
 	var check=function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);
			return;
		}
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);
			return;
		}
	};
	this.getUrl=function(){
		var charName=this.find('name','charName')[0].getValue();
		var vessName=this.find('name','vessName')[0].getValue();
		var currCode=this.find('name','currCode')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var expeBillStatus=this.find('name','expeBillStatus')[0].getValue();
		var expeInvoiceStatus=this.find('name','expeInvoiceStatus')[0].getValue();
		var expeWriteoffStatus=this.find('name','expeWriteoffStatus')[0].getValue();
		
		var url = REPORT_URL;
		
		if(T=='CUEX'){
			url = REPORT_URL+'&__report=reports/cust_expense.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
			url += '&dt='+t4.value+'&F='+t2.value+'&T='+t3.value+'&g='+t1.value;
		}
		else{
			url = REPORT_URL+'&__report=reports/settlement_expense.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
			url += '&dt='+t4.value+'&F='+t2.value+'&T='+t3.value;		
		}
			
		if(vessName) url+='&vessName='+vessName;
		if(charName) url+='&charName='+charName;
		if(currCode) url+='&currCode='+currCode;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consShipType) url+='&consShipType='+consShipType;
		if(expeBillStatus) url+='&expeBillStatus='+expeBillStatus;
		if(expeInvoiceStatus) url+='&expeInvoiceStatus='+expeInvoiceStatus;
		if(expeWriteoffStatus) url+='&expeWriteoffStatus='+expeWriteoffStatus;
		return url;
	};
	this.report=function(){
		check();
		Ext.get('IF_'+T).dom.src=this.getUrl();
	};
	this.clear=function(){
		this.find('name','sf')[0].getForm().reset();
	};
	this.expExcel=function(){
		check();
		OWW(this.getUrl()+'&format=xls');
	};
	var b1={text:C_GEN_REPORT,disabled:NR(M1_STAT+T_CUEX),iconCls:'stats',scope:this,handler:this.report};
	var b2={text:C_EXPORT,disabled:NR(M1_STAT+T_CUEX),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}};
	var b3={text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear};
	var tg={xtype:'tbtext',text:C_GROUP_TYPE};
	var tf={xtype:'tbtext',text:C_FROM};
	var tt={xtype:'tbtext',text:C_TO};
	Fos.StatArTab.superclass.constructor.call(this, {    
		id:T=='CUEX'?'T_CUEX':'T_SEEX',
    	title:T=='CUEX'?C_STAT_AR:C_STAT_ARC,iconCls:'stats',closable:true,autoScroll:true,
     tbar:T=='CUEX'?[tg,t1,'-',t4,tf,t2,tt,t3,'-',b1,'-',b2,'->','-',b3]:[t4,tf,t2,tt,t3,'-',b1,'-',b2,'->','-',b3],
		items:[
			{title:C_FILTER_MORE,name:'sf',xtype:'form',layout:'column',layoutConfig:{columns:4},height:150,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.4,layout:'form',tabIndex:1,labelWidth:80,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_BOOKER,name:'custId',store:HTStore.getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'remote',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
     				{fieldLabel:C_CHAR,tabIndex:4,name:'charName',store:HTStore.getCHAR_S(),
		              		xtype:'combo',displayField:'charName',valueField:'charName',
     					typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
     				{fieldLabel:C_BIZ_CLASS,tabIndex:7,name:'consBizClass',store:HTStore.BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
     				{fieldLabel:'对账状态',name:'expeBillStatus',xtype:'combo',store:HTStore.BILL_STATUS_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
     				]},
	        	{columnWidth:.3,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
	            	{fieldLabel:C_VESS,tabIndex:2,name:'vessName',store:HTStore.getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',
     					typeAhead:true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},	            	
	            	{fieldLabel:C_CURR,tabIndex:5,name:'currCode',store:HTStore.getCURR_S(),
     						xtype:'combo',displayField:'currCode',valueField:'currCode',
     						typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:8,name:'consBizType',store:HTStore.BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:'账单状态',name:'expeInvoiceStatus',xtype:'combo',store:HTStore.INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	           		{fieldLabel:C_SALES,tabIndex:6,name:'consSalesRepId',
            			value:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1)?sessionStorage.getItem("USER_ID"):'',
    	    	            	readOnly:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1),
	            		store:HTStore.getSALE_S(),xtype:'combo',displayField:'userLoginName',
	            		valueField:'userId',typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	           		{fieldLabel:C_SHIP_TYPE,tabIndex:9,name:'consShipType',store:HTStore.SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	           		{fieldLabel:'核销状态',name:'expeWriteoffStatus',xtype:'combo',store:HTStore.WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
	            ]}
	    	]},
	    	{layout:'fit',height:500,items:[doc]}]});
};
Ext.extend(Fos.StatArTab, Ext.Panel);

//应付费用统计 vendor_expense.rptdesign
Fos.StatApTab = function(){
	var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_STAT_NO_GROUP],
		      ['1',C_VENDOR],
		      ['7',C_GROU],
		      ['6',C_SALES],
		      ['2',C_VOYA],
		      ['3',C_CONS_NO],
		      ['4',C_CHAR],
		      ['5',C_CURR]
		]});
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_CONS_DATE],
		      ['1',C_SAIL_DATE],
		      ['2',C_INVO_DATE]
		]});	
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:'VEEX', url:''});
   	var check=function(){
		if(!t2.getValue()){XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
	};
	this.getUrl=function(){
		var charName=this.find('name','charName')[0].getValue();
		var vessName=this.find('name','vessName')[0].getValue();
		var currCode=this.find('name','currCode')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPolEn=this.find('name','consPolEn')[0].getValue();
		var consPodEn=this.find('name','consPodEn')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var expeBillStatus=this.find('name','expeBillStatus')[0].getValue();
		var expeInvoiceStatus=this.find('name','expeInvoiceStatus')[0].getValue();
		var expeWriteoffStatus=this.find('name','expeWriteoffStatus')[0].getValue();
		
		var url = REPORT_URL+'&__report=reports/vendor_expense.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		url += '&dt='+t4.value+'&F='+t2.value+'&T='+t3.value;
		
		if(vessName) url+='&vessName='+vessName;
		if(voyaName) url+='&voyaName='+voyaName;
		if(charName) url+='&charName='+charName;
		if(currCode) url+='&currCode='+currCode;
		if(custId) url+='&custId='+custId;
		
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPolEn) url+='&consPolEn='+consPolEn;
		if(consPodEn) url+='&consPodEn='+consPodEn;
		if(consNo) url+='&consNo='+consNo;
		if(expeBillStatus) url+='&expeBillStatus='+expeBillStatus;
		if(expeInvoiceStatus) url+='&expeInvoiceStatus='+expeInvoiceStatus;
		if(expeWriteoffStatus) url+='&expeWriteoffStatus='+expeWriteoffStatus;
		return url;
	};
	this.report=function(){
		check();
		Ext.get('IF_VEEX').dom.src=this.getUrl();
	};
	this.clear=function(){
		this.find('name','sf')[0].getForm().reset();
	};
	this.expExcel=function(){
		check();
		OWW(this.getUrl()+'&format=xls');
	};
	
	Fos.StatApTab.superclass.constructor.call(this, {    
    id:'T_VEEN',title:C_STAT_AP,iconCls:'stats',closable:true,autoScroll:true,
     tbar:[
		{xtype:'tbtext',text:C_GROUP_TYPE},t1,'-',
		t4,{xtype:'tbtext',text:C_FROM},t2,{xtype:'tbtext',text:C_TO},t3,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_VEEX),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_VEEX),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}},'->','-',
		{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[
			{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:4},height:180,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.4,layout:'form',labelWidth:80,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_VENDOR,name:'custId',tabIndex:1,store:HTStore.getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'remote',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custApFlag');},buffer:500}}},					
					{fieldLabel:C_CHAR,tabIndex:4,name:'charName',store:HTStore.getCHAR_S(),
		              		xtype:'combo',displayField:'charName',valueField:'charName',
     				//tpl:charTpl,itemSelector:'div.list-item',listWidth:300,listClass:'x-combo-list-small',
     				typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:C_POL,tabIndex:8,name:'consPolEn',store:HTStore.getPS(),xtype:'combo',
     					displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
					{fieldLabel:C_BIZ_CLASS,tabIndex:7,name:'consBizClass',store:HTStore.BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
					{fieldLabel:'对账状态',name:'expeBillStatus',xtype:'combo',store:HTStore.BILL_STATUS_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
     			]},
	        	{columnWidth:.3,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
	            	{fieldLabel:C_VESS,tabIndex:2,name:'vessName',store:HTStore.getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessNameEn',
     					typeAhead:true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
	            	{fieldLabel:C_CURR,tabIndex:5,name:'currCode',store:HTStore.getCURR_S(),
     						xtype:'combo',displayField:'currCode',valueField:'currCode',
     						typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPodEn',store:HTStore.getPS(),xtype:'combo',
     							displayField:'portNameEn',valueField:'portNameEn',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
              			listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:8,name:'consBizType',store:HTStore.BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:'开票状态',name:'expeInvoiceStatus',xtype:'combo',store:HTStore.INST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}	            	
	            ]},
    			{columnWidth:.3,layout:'form',border:false,labelWidth:80,labelAlign:'right',items:[
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	           		{fieldLabel:C_SALES,tabIndex:6,name:'consSalesRepId',
            			value:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1)?sessionStorage.getItem("USER_ID"):'',
    	    	        readOnly:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1),
	            		store:HTStore.getSALE_S(),xtype:'combo',displayField:'userLoginName',
	            		valueField:'userId',typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	           		{fieldLabel:'业务号',name:'consNo',tabIndex:12,xtype:'textfield',anchor:'95%'},
	           		{fieldLabel:C_SHIP_TYPE,tabIndex:9,name:'consShipType',store:HTStore.SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	           		{fieldLabel:'核销状态',name:'expeWriteoffStatus',xtype:'combo',store:HTStore.WRST_S,displayField:'NAME',valueField:'CODE',typeAhead: true,mode:'local',triggerAction:'all',selectOnFocus:true,anchor:'95%'}
	            ]}]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatApTab, Ext.Panel);

Fos.SalesCommissionTab = function(){
    var d=new Date();y=d.format('Y');m=d.format('m');    
    var t1=new Ext.form.ComboBox({width:80,value:y,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:HTStore.YY_S});
    var t2=new Ext.form.ComboBox({width:80,value:m,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:HTUtil.MM_S});
   	var store = new Ext.data.Store({url:SERVICE_URL,baseParams:{_A:'SACO_R',_mt:'json'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'CSalesCommission',id:'id'},CSalesCommission),
		remoteSort:true,sortInfo:{field:'sacoSalesId', direction:'ASC'}});	
   	
	this.sel =GSEL;
	var re = {scope:this,
		rowselect:function(sm,row,r){
			if(this.sel!=r.get('sacoId')){
				this.sel=r.get('sacoId');				
				var s = grid2.getStore();
				s.removeAll();
				s.reload({params:{sacoSalesId:r.get('sacoSalesId'),Y:t1.value,M:t2.value}});
			}
		}
	};	
	var sm=new Ext.grid.RowSelectionModel({singleSelect:true,listeners:re});
	var c1={header:C_SALES,width:200,dataIndex:"sacoSalesName"};
	var c2={header:C_SALES_PROFIT,dataIndex: 'baseAmount',width:120,renderer:numRender};
	var c3={header:C_SALES_COMMISSION_R,dataIndex: 'commission',width:120,renderer:numRender};
 	var cm=new Ext.grid.ColumnModel([sm,c1,c2,c3]);
	cm.defaultSortable = true;
	cm.defaultWidth=100;	
 	var grid=new Ext.grid.EditorGridPanel({id:'G_COMMISSION_R',	border:true,height:400,autoScroll:true,
	    stripeRows:true,store:store,sm:sm,cm:cm});	
	
	var cs = new Ext.data.Store({url:SERVICE_URL,baseParams:{_A:'SACO_D_R',_mt:'json'},
		reader:new Ext.data.JsonReader({totalProperty:'rowCount',root:'FConsign',id:'id'},FConsign),
		remoteSort:true,sortInfo:{field:'consId', direction:'ASC'}});	
	
	var c5={header:C_CONS_NO,width:120,dataIndex:"consNo"};
	var c6={header:C_BOOKER,width:200,dataIndex:"custSname"};
	var c7={header:C_SAIL_DATE,width:70,dataIndex:"consSailDate",renderer:formatDate};
	var c8={header:C_PROFIT,dataIndex:"grossProfit",align:'right',renderer:numRenderColor,css:'font-weight:bold;'};
	var cm=new Ext.grid.ColumnModel([c5,c6,c7,c8]);
	var grid2=new Ext.grid.EditorGridPanel({id:'G_PROFIT_DETAIL',border:true,height:400,autoScroll:true,
	    stripeRows:true,store:cs,cm:cm});	
	    
 	this.report=function(){
		if(!t1.getValue()){
			XMG.alert(SYS,M_SEL_YEAR,function(){t1.focus();},this);
			return;
		}
		else if(!t2.getValue()){
			XMG.alert(SYS,M_SEL_MONTH,function(){t2.focus();},this);
			return;
		}
		store.load({params:{Y:t1.value,M:t2.value},scope:this});		
	};
	this.expExcel=function(){
		var url = REPORT_URL+'&__report=reports/sales_commission.rptdesign'+'&format=xls&Y='+t1.value+'&M='+t2.value;
		OWW(url);
	};
	
	
	Fos.SalesCommissionTab.superclass.constructor.call(this, {    
    id:'T_SALES',title:C_STAT_SALES_COMMISSION,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,layout:'border',
     tbar:[t1,'-',t2,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_SALES),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_SALES),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}}],
		items: [{title:C_SALES_COMMISSION_R,region:'center',width:400,minSize:200,maxSize:600,layout:'fit',items:[grid]},
		{title:C_SALES_PROFIT_DETAIL,region:'east',split:true,width:400,minSize:200,maxSize:600,layout:'fit',items:[grid2]}]
	});
};
Ext.extend(Fos.SalesCommissionTab,Ext.Panel);

Fos.StatPayPlanTab = function(t){
    var d=new Date();
    var y=d.format('Y');
    var m=d.format('m');    
    var t1=new Ext.form.ComboBox({width:80,value:y,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:HTUtil.YY_S});
    var t2=new Ext.form.ComboBox({width:80,value:m,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:HTUtil.MM_S});
    var doc=new Ext.ux.IFrameComponent({id:'PP', url:''});
 	this.report=function(){
		if(!t1.getValue()){
			XMG.alert(SYS,M_SEL_YEAR,function(){t1.focus();},this);
			return;
		}
		else if(!t2.getValue()){
			XMG.alert(SYS,M_SEL_MONTH,function(){t2.focus();},this);
			return;
		}
		var url = REPORT_URL+'&__report=reports/payment_plan.rptdesign';
		Ext.get('IF_PP').dom.src=url+'&Y='+t1.value+'&M='+t2.value;
	};
	this.expExcel=function(){
		var url = REPORT_URL+'&__report=reports/payment_plan.rptdesign';
		OWW(url+'&format=xls&Y='+t1.value+'&M='+t2.value);
	};
	Fos.StatPayPlanTab.superclass.constructor.call(this, {    
    id:'T_PAY_PLAN',title:C_STAT_PAY_PLAN,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
     tbar:[t1,'-',t2,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_SALES),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_SALES),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}}],
		items:[{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatPayPlanTab, Ext.Panel);

//核销明细统计表 write_off.rptdesign
Fos.StatWOTab = function(t){
    var G_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
    	data:[['0',C_STAT_NO_GROUP],
    	      ['1',C_SETTLE_OBJECT],
    	      ['2',C_CONS_NO],
    	      ['3',C_CURR],
    	      ['4',C_WRITEOFF_DATE],
    	      ['5',C_CHAR]
    	]});
	var T_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_WRITEOFF_R],
		      ['1',C_WRITEOFF_P]
		]});
	var t1=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:G_S});
    var t2=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'0',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:T_S});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t4=new Ext.form.DateField({value:new Date(),format:DATEF});
    var doc=new Ext.ux.IFrameComponent({id:'STWO', url:''});
 	this.report=function(){
		if(!t1.getValue()){
			XMG.alert(SYS,M_SEL_WRITEOFF_DATE,function(){t3.focus();},this);
			return;
		};
		var url = REPORT_URL+'&__report=reports/write_off.rptdesign';
		Ext.get('IF_STWO').dom.src=url+'&g='+t1.value+'&dt='+t2.value+'&F='+t3.value+'&T='+t4.value;
	};
	this.exp=function(){
		var url = REPORT_URL+'&__report=reports/write_off.rptdesign';
		OWW(url+'&format=xls&g='+t1.value+'&dt='+t2.value+'&F='+t3.value+'&T='+t4.value);
	};
	
	Fos.StatWOTab.superclass.constructor.call(this, {    
    id:'T_WROF',title:C_STAT_WRITEOFF,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
    tbar:[{xtype:'tbtext',text:C_GROUP_TYPE},t1,'-',
		{xtype:'tbtext',text:C_WRITEOFF_TYPE},t2,'-',
		{xtype:'tbtext',text:C_WRITEOFF_DATE+C_FROM},t3,'-',
		{xtype:'tbtext',text:C_TO},t4,'-',
		{text:C_GEN_REPORT,disabled:NR(M1_STAT+T_WROF),iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_WROF),iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.exp}]}}],
		items:[{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatWOTab, Ext.Panel);

Fos.StatAraTab = function(t){
    var d=new Date();
    var y=d.format('Y');
    var t1=new Ext.form.ComboBox({width:80,value:y,displayField:'NAME',valueField:'CODE',triggerAction:'all',
            mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:HTUtil.YY_S});   
    var doc=new Ext.ux.IFrameComponent({id:t=='R'?'ARA':'APA', url:''});
 	this.report=function(){
		if(!t1.getValue()){
			XMG.alert(SYS,M_SEL_YEAR,function(){t1.focus();},this);
			return;
		}
		var url = REPORT_URL+'&__report=reports/expense_month_r.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		Ext.get('IF_'+(t=='R'?'ARA':'APA')).dom.src=url+'&T='+t+'&Y='+t1.value;
	};
	this.exp=function(){
		var url = REPORT_URL+'&__report=reports/expense_month_r.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
		OWW(url+'&format=xls&T='+t+'&Y='+t1.value);
	};
	Fos.StatAraTab.superclass.constructor.call(this, {    
    id:t=='R'?'T_ARA':'T_APA',title:t=='R'?C_STAT_ARA:C_STAT_APA,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
	tbar:[t1,'-',
		{text:C_GEN_REPORT,iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.exp}]}}],
		items:[{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatAraTab,Ext.Panel);

Fos.StatPrchTab = function(){
	this.charName='';
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_CONS_DATE],
		      ['1',C_SAIL_DATE]
		]});
    var t1=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t2=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t3=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'1',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var t4=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'P',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:EXTY_S});
    var t5=new Ext.form.ComboBox({displayField:'charCode',valueField:'charId',triggerAction:'all',
            tpl:charTpl,itemSelector:'div.list-item',listWidth:300,allowBlank:false,
            blankText:'',invalidText:'',mode:'remote',selectOnFocus:true,listClass:'x-combo-list-small',
            store:HTStore.getCHAR_S(),
            listeners:{scope:this,select:function(c,r,i){this.charName=r.get('charName');}}
            });     	
    var doc=new Ext.ux.IFrameComponent({id:'PRCH', url:''});    
	var check=function(){
		if(!t1.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);
			return;
		}
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);
			return;
		};
	};
	this.getUrl=function(){
		var consCarrier=this.find('name','consCarrier')[0].getValue();
		var vessId=this.find('name','vessId')[0].getValue();
		var shliId=this.find('name','shliId')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var consOperatorId=this.find('name','consOperatorId')[0].getValue();
		
		var url = REPORT_URL+'&__report=reports/profit_charge.rptdesign';
		url += '&expeType='+t4.value+'&charId='+t5.value+'&charName='+encodeURI(this.charName)+'&dt='+t3.value+'&F='+t1.value+'&T='+t2.value;		
		
		if(consCarrier) url+='&consCarrier='+consCarrier;
		if(vessId) url+='&vessId='+vessId;
		if(shliId) url+='&shliId='+shliId;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consNo) url+='&consNo='+consNo;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPod) url+='&consPod='+consPod;
		if(consOperatorId) url+='&consOperatorId='+consOperatorId;
		return url;
	};
	this.report=function(){
		check();
		Ext.get('IF_PRCH').dom.src=this.getUrl();
	};
	this.clear=function(){
		this.find('name','sf')[0].getForm().reset();
	};
	this.exp=function(){
		check();
		OWW(this.getUrl()+'&format=xls');
	};
	Fos.StatPrchTab.superclass.constructor.call(this, {    
    id:'T_PRCH',title:C_STAT_PRCH,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
	tbar:[t4,t5,t3,{xtype:'tbtext',text:C_FROM},t1,{xtype:'tbtext',text:C_TO},t2,'-',
		{text:C_GEN_REPORT,iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.exp}]}},'->',
		{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:4},height:120,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.25,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_CARRIER,tabIndex:1,name:'consCarrier',store:HTStore.getCS(),enableKeyEvents:true,
		            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',
		            	displayField:'custCode',valueField:'custId',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		            	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
     				{fieldLabel:C_VESS,tabIndex:5,name:'vessId',store:HTStore.getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',
     					typeAhead:true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
     				{fieldLabel:C_SHLI,tabIndex:9,name:'shliId',store:HTStore.getSHLI_S(),
     						xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,
     						mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
     			]},
	        	{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_BOOKER,name:'custId',tabIndex:2,store:HTStore.getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'remote',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_CLASS,tabIndex:10,name:'consBizClass',store:HTStore.BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_SALES,tabIndex:3,name:'consSalesRepId',
            			value:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1)?sessionStorage.getItem("USER_ID"):'',
    	    	        readOnly:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1),
	            		store:HTStore.getSALE_S(),xtype:'combo',displayField:'userLoginName',
	            		valueField:'userId',typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_CONS_NO,tabIndex:6,name:'consNo',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:11,name:'consBizType',store:HTStore.BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_OPERATOR,tabIndex:4,name:'consOperatorId',
	            		store:HTStore.getOP_S(),xtype:'combo',displayField:'userLoginName',
	            		valueField:'userId',typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:HTStore.getPS(),xtype:'combo',
	            			displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_SHIP_TYPE,tabIndex:12,name:'consShipType',store:HTStore.SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]}	
	    	]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};    
Ext.extend(Fos.StatPrchTab, Ext.Panel);

Fos.StatPrcoTab = function(){
	this.charName='';
	var DT_S=new Ext.data.SimpleStore({id:0,fields:['CODE','NAME'],
		data:[['0',C_CONS_DATE],
		      ['1',C_SAIL_DATE]]});
    var t1=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t2=new Ext.form.DateField({value:new Date(),format:DATEF});
    var t3=new Ext.form.ComboBox({width:80,displayField:'NAME',valueField:'CODE',triggerAction:'all',value:'1',
         	mode:'local',selectOnFocus:true,listClass:'x-combo-list-small',store:DT_S});
    var doc=new Ext.ux.IFrameComponent({id:'PRCO', url:''});    
	var check=function(){
		if(!t1.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);
			return;
		}
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);
			return;
		}
	};
	this.getUrl=function(){
		var consCarrier=this.find('name','consCarrier')[0].getValue();
		var vessId=this.find('name','vessId')[0].getValue();
		var shliId=this.find('name','shliId')[0].getValue();
		var custId=this.find('name','custId')[0].getValue();
		var voyaName=this.find('name','voyaName')[0].getValue();
		var consBizClass=this.find('name','consBizClass')[0].getValue();
		var consNo=this.find('name','consNo')[0].getValue();
		var consBizType=this.find('name','consBizType')[0].getValue();
		var consSalesRepId=this.find('name','consSalesRepId')[0].getValue();
		var consShipType=this.find('name','consShipType')[0].getValue();
		var consPod=this.find('name','consPod')[0].getValue();
		var consOperatorId=this.find('name','consOperatorId')[0].getValue();
		
		var url = REPORT_URL+'&__report=reports/profit_commission.rptdesign';
		url += '&dt='+t3.value+'&F='+t1.value+'&T='+t2.value;
		
		if(consCarrier) url+='&consCarrier='+consCarrier;
		if(vessId) url+='&vessId='+vessId;
		if(shliId) url+='&shliId='+shliId;
		if(custId) url+='&custId='+custId;
		if(voyaName) url+='&voyaName='+voyaName;
		if(consBizClass) url+='&consBizClass='+consBizClass;
		if(consBizType) url+='&consBizType='+consBizType;
		if(consNo) url+='&consNo='+consNo;
		if(consSalesRepId) url+='&consSalesRepId='+consSalesRepId;
		if(consShipType) url+='&consShipType='+consShipType;
		if(consPod) url+='&consPod='+consPod;
		if(consOperatorId) url+='&consOperatorId='+consOperatorId;
		return url;
	};
	this.report=function(){
		check();
		Ext.get('IF_PRCO').dom.src=this.getUrl();
	};
	this.clear=function(){
		this.find('name','sf')[0].getForm().reset();
	};
	this.expExcel=function(){
		check();
		OWW(this.getUrl()+'&format=xls');
	};
	Fos.StatPrchTab.superclass.constructor.call(this, {    
    id:'T_PRCO',title:C_STAT_PRCO,iconCls:'stats',deferredRender:false,closable:true,autoScroll:true,
	tbar:[t3,{xtype:'tbtext',text:C_FROM},t1,{xtype:'tbtext',text:C_TO},t2,'-',
		{text:C_GEN_REPORT,iconCls:'stats',scope:this,handler:this.report},'-',
		{text:C_EXPORT,iconCls:'print',scope:this,menu:{items:[{text:'Excel',scope:this,handler:this.expExcel}]}},'->',
		{text:C_CLEAR_FILTER,iconCls:'rotate',scope:this,handler:this.clear}],
		items:[{title:C_FILTER_MORE,layout:'column',name:'sf',xtype:'form',layoutConfig:{columns:4},height:120,frame:true,deferredRender:false,collapsible:true,collapsed:true,items:[
	        	{columnWidth:.25,layout:'form',labelWidth:60,labelAlign:'right',border:false,items:[
	            	{fieldLabel:C_CARRIER,tabIndex:1,name:'consCarrier',store:HTStore.getCS(),enableKeyEvents:true,
		            	tpl:custTpl,itemSelector:'div.list-item',listWidth:400,xtype:'combo',
		            	displayField:'custCode',valueField:'custId',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
		            	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custCarrierFlag');},buffer:500}}},
     				{fieldLabel:C_VESS,tabIndex:5,name:'vessId',store:HTStore.getVES(),enableKeyEvents:true,
     					xtype:'combo',displayField:'vessNameEn',valueField:'vessId',
     					typeAhead:true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
     					listeners:{scope:this,keydown:{fn:function(f,e){LV(f,e);},buffer:500}}},
     				{fieldLabel:C_SHLI,tabIndex:9,name:'shliId',store:HTStore.getSHLI_S(),
     						xtype:'combo',displayField:'shliName',valueField:'shliId',typeAhead: true,
     						mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
     			]},
	        	{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_BOOKER,name:'custId',tabIndex:2,store:HTStore.getCS(),
		        		xtype:'combo',displayField:'custCode',valueField:'custId',typeAhead:true,enableKeyEvents:true,
		        		mode:'remote',tpl:custTpl,itemSelector:'div.list-item',listWidth:400,triggerAction:'all',selectOnFocus:true,anchor:'95%',
		              	listeners:{scope:this,keydown:{fn:function(f,e){LC(f,e,'custBookerFlag');},buffer:500}}},
	            	{fieldLabel:C_VOYA,tabIndex:6,name:'voyaName',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_CLASS,tabIndex:10,name:'consBizClass',store:HTStore.BC_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_SALES,tabIndex:3,name:'consSalesRepId',store:HTStore.getSALE_S(),
	            		xtype:'combo',displayField:'userLoginName',valueField:'userId',
	            		typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_CONS_NO,tabIndex:6,name:'consNo',xtype:'textfield',anchor:'95%'},
	            	{fieldLabel:C_BIZ_TYPE,tabIndex:11,name:'consBizType',store:HTStore.BT_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]},
    			{columnWidth:.25,layout:'form',border:false,labelWidth:60,labelAlign:'right',items:[
	            	{fieldLabel:C_OPERATOR,tabIndex:4,name:'consOperatorId',
            			value:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1)?sessionStorage.getItem("USER_ID"):'',
    	    	        readOnly:(sessionStorage.getItem("USER_ALL_VIEW_FLAG")==0&&sessionStorage.getItem("USER_IS_SAL")==1),
	            		store:HTStore.getOP_S(),xtype:'combo',displayField:'userLoginName',
	            		valueField:'userId',typeAhead: true,mode: 'remote',triggerAction: 'all',selectOnFocus:true,anchor:'95%'},
	            	{fieldLabel:C_POD,tabIndex:8,name:'consPod',store:HTStore.getPS(),xtype:'combo',
	            			displayField:'portNameEn',valueField:'portId',typeAhead: true,mode:'remote',triggerAction:'all',selectOnFocus:true,anchor:'95%',
              			tpl:portTpl,itemSelector:'div.list-item',listWidth:C_LW,enableKeyEvents:true,
              			listeners:{scope:this,keydown:{fn:LP,buffer:BF}}},
	            	{fieldLabel:C_SHIP_TYPE,tabIndex:12,name:'consShipType',store:HTStore.SHTY_S,xtype:'combo',displayField:'NAME',valueField:'CODE',typeAhead: true,mode: 'local',triggerAction: 'all',selectOnFocus:true,anchor:'95%'}
	            ]}	
	    	]},
	    	{layout:'fit',height:600,deferredRender:false,items:[doc]}]});
};
Ext.extend(Fos.StatPrcoTab, Ext.Panel);

//快件利润报表
Fos.ExprProfitTab = function(){
    var doc=new Ext.ux.IFrameComponent({id:'EXPR_PROFIT', url:''});
    
    var t2=new Ext.form.DateField({value:(new Date()).getFirstDateOfMonth(),format:DATEF});
    var t3=new Ext.form.DateField({value:new Date(),format:DATEF});
    
    this.report=function(){
    	if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var iframe = Ext.get('IF_EXPR_PROFIT');
		var url = REPORT_URL+'&__report=reports/express_profit.rptdesign&compCode='+sessionStorage.getItem("COMP_CODE");
			iframe.dom.src=url+'&F='+t2.value+'&T='+t3.value;
	};
	this.expExcel=CREATE_E_MENU('EXCEL',function(){
		if(!t2.getValue()){
			XMG.alert(SYS,M_INPUT_START_TIME,function(){t2.focus();},this);return;};
		if(!t3.getValue()){
			XMG.alert(SYS,M_INPUT_END_TIME,function(){t3.focus();},this);return;};
		var url = REPORT_URL+'&__report=reports/express_profit.rptdesign&__format=xls&compCode='+sessionStorage.getItem("COMP_CODE")+'&F='+t2.value+'&T='+t3.value;
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	});
	this.expPdf=CREATE_P_MENU('PDF',function(){
		var url = REPORT_URL+'&__report=reports/express_profit.rptdesign&__format=pdf&compCode='+sessionStorage.getItem("COMP_CODE")+'&F='+t2.value+'&T='+t3.value;	
		window.open(url,'download','height=5,width=5,top=0,left=0,toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no,status=no');
	});
	var expM =[this.expExcel,this.expPdf];
	Fos.ExprProfitTab.superclass.constructor.call(this, {
    id:'EXPR_PROFIT',title:R_EXPR_PROFIT,layout:'fit',iconCls:'stats',
    		deferredRender:false,closable:true,autoScroll:true,
     tbar:[{xtype:'tbtext',text:C_CONS_DATE+C_FROM},t2,
   			{xtype:'tbtext',text:C_TO},t3,'-',
           {text:C_GEN_REPORT,disabled:NR(M1_STAT+T_BUSI),iconCls:'stats',
			scope:this,handler:this.report},'-',
		{text:C_EXPORT,disabled:NR(M1_STAT+T_BUSI),iconCls:'print',scope:this,
		menu:{items:expM}}],items:doc});
};
Ext.extend(Fos.ExprProfitTab, Ext.Panel);
$(document).ready(function(e){
	$(".zonghe").bind("click",function(){
		$(".zongheshow").show();
		$(".zonghe").css({"color":"#D1AB57","border-bottom":"2px solid #D1AB57"});
		$(".shipingshow").hide();
		$(".saishishow").hide();
		$(".huodongshow").hide();
		$(".shiping").css({"color":"#555555","border":"0"});
		$(".saishi").css({"color":"#555555","border":"0"});
		$(".huodong").css({"color":"#555555","border":"0"});
	});
	
	$(".shiping").bind("click",function(){
		$(".zongheshow").hide();
		$(".shiping").css({"color":"#D1AB57","border-bottom":"2px solid #D1AB57"});
		$(".shipingshow").show();
		$(".saishishow").hide();
		$(".huodongshow").hide();
		$(".zonghe").css({"color":"#555555","border":"0"});
		$(".saishi").css({"color":"#555555","border":"0"});
		$(".huodong").css({"color":"#555555","border":"0"});
	});
	
	$(".saishi").bind("click",function(){
		$(".zongheshow").hide();
		$(".saishi").css({"color":"#D1AB57","border-bottom":"2px solid #D1AB57"});
		$(".shipingshow").hide();
		$(".saishishow").show();
		$(".huodongshow").hide();
		$(".shiping").css({"color":"#555555","border":"0"});
		$(".zonghe").css({"color":"#555555","border":"0"});
		$(".huodong").css({"color":"#555555","border":"0"});
	});
	
	$(".huodong").bind("click",function(){
		$(".zongheshow").hide();
		$(".huodong").css({"color":"#D1AB57","border-bottom":"2px solid #D1AB57"});
		$(".shipingshow").hide();
		$(".saishishow").hide();
		$(".huodongshow").show();
		$(".shiping").css({"color":"#555555","border":"0"});
		$(".saishi").css({"color":"#555555","border":"0"});
		$(".zonghe").css({"color":"#555555","border":"0"});
	});
	
	$(".lunbo-one").bind("mouseover",function(){
		$(".lunbo-01").show();
		$(".lunbo-02").hide();
		$(".lunbo-03").hide();
		$(".lunbo-one").css({"color":"#E9C06C","background-color":"#303030"});
		$(".lunbo-two").css({"color":"white","background-color":"#121112"});
		$(".lunbo-tree").css({"color":"white","background-color":"#121112"});
	});
	
	
	
	$(".lunbo-two").bind("mouseover",function(){
		$(".lunbo-02").show();
		$(".lunbo-01").hide();
		$(".lunbo-03").hide();
		
		$(".lunbo-two").css({"color":"#E9C06C","background-color":"#303030"});
		$(".lunbo-one").css({"color":"white","background-color":"#121112"});
		$(".lunbo-tree").css({"color":"white","background-color":"#121112"});
	});
	
	$(".lunbo-tree").bind("mouseover",function(){
		$(".lunbo-03").show();
		$(".lunbo-02").hide();
		$(".lunbo-01").hide();
		$(".lunbo-tree").css({"color":"#E9C06C","background-color":"#303030"});
		$(".lunbo-two").css({"color":"white","background-color":"#121112"});
		$(".lunbo-one").css({"color":"white","background-color":"#121112"});
	});
	
	$(".saishi-01").bind("click",function(){
		$(".ruwei").show();
		$(".xiaozu-01").hide();
		$(".saishi-01").css({"color":"#CEA04A","border-bottom":"2px solid #CEA04A","font-weight":"bold"});
		$(".saishi-02").css({"color":"black","border-bottom":"0px solid black","font-weight":"400"});
	});
	
	$(".saishi-02").bind("click",function(){
		$(".ruwei").hide();
		$(".xiaozu-01").show();
		$(".saishi-02").css({"color":"#CEA04A","border-bottom":"2px solid #CEA04A","font-weight":"bold"});
		$(".saishi-01").css({"color":"black","border-bottom":"0px solid black","font-weight":"400"});
	});
	
	$(".xiaozu-A").bind("click",function(){
		$(".bisai-A").show();
		$(".bisai-B").hide();
		$(".bisai-C").hide();
		$(".bisai-D").hide();
		$(".xiaozu-A").css({"color":"white","background-color":"#CEA04A","font-weight":"bold"});
		$(".xiaozu-B").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
		$(".xiaozu-C").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
		$(".xiaozu-D").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
	});
	
	$(".xiaozu-B").bind("click",function(){
		$(".bisai-B").show();
		$(".bisai-A").hide();
		$(".bisai-C").hide();
		$(".bisai-D").hide();
		$(".xiaozu-B").css({"color":"white","background-color":"#CEA04A","font-weight":"bold"});
		$(".xiaozu-A").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
		$(".xiaozu-C").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
		$(".xiaozu-D").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
	});
	
	$(".xiaozu-C").bind("click",function(){
		$(".bisai-C").show();
		$(".bisai-B").hide();
		$(".bisai-A").hide();
		$(".bisai-D").hide();
		$(".xiaozu-C").css({"color":"white","background-color":"#CEA04A","font-weight":"bold"});
		$(".xiaozu-B").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
		$(".xiaozu-A").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
		$(".xiaozu-D").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
	});
	
	$(".xiaozu-D").bind("click",function(){
		$(".bisai-D").show();
		$(".bisai-B").hide();
		$(".bisai-C").hide();
		$(".bisai-A").hide();
		$(".xiaozu-D").css({"color":"white","background-color":"#CEA04A","font-weight":"bold"});
		$(".xiaozu-B").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
		$(".xiaozu-C").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
		$(".xiaozu-A").css({"color":"black","background-color":"#FAFAFA","font-weight":"400"});
	});
	
	$(".saishi-shiping li:nth-of-type(1)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(1)>a span").show();
		$(".saishi-shiping li:nth-of-type(1)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(2)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(2)>a span").show();
		$(".saishi-shiping li:nth-of-type(2)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(3)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(3)>a span").show();
		$(".saishi-shiping li:nth-of-type(3)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(4)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(4)>a span").show();
		$(".saishi-shiping li:nth-of-type(4)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(5)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(5)>a span").show();
		$(".saishi-shiping li:nth-of-type(5)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(6)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(6)>a span").show();
		$(".saishi-shiping li:nth-of-type(6)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(7)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(7)>a span").show();
		$(".saishi-shiping li:nth-of-type(7)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(8)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(8)>a span").show();
		$(".saishi-shiping li:nth-of-type(8)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(9)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(9)>a span").show();
		$(".saishi-shiping li:nth-of-type(9)").css("background-color","white");
	});
	
	$(".saishi-shiping li:nth-of-type(10)").bind("mouseover",function(){
		$(".saishi-shiping li:nth-of-type(10)>a span").show();
		$(".saishi-shiping li:nth-of-type(10)").css("background-color","white");
	});
	$(".saishi-shiping li").bind("mouseout",function(){
		$(".saishi-shiping li>a span").hide();
		$(".saishi-shiping li").css("background-color","#FAFAFA");
	});
	
});
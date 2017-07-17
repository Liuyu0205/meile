;(function($){
	var ban=$("#banner"),
	    pics=$("#pics"),
	    liWidth=$("#con_con_banner").width();
	    index=0;
	    len=pics.children().size();
	    
	    //左切右切
	    ban.swipeLeft(function(){
	    	clearInterval(set);
	    	go();
	    }).swipeRight(function(){
	    	clearInterval(set);
	    	gototo();
	    })
	    
	    var set=setInterval(go,2000);
	    function go () {
		index++;
		if(index>len-1){
			index=0;
		}
		setpics(index);
	}
	function gototo () {
		index--;
		if(index<0){
			index=len-1;
		}
		setpics(index);
	}
	
	function setpics (index) {
       var s="-"+index*liWidth+"px";
       pics.css({"-webkit-transform":"translateX("+s+")","-webkit-transition":"all 1s"});
//	   pics.css("-webkit-transform","translateX("+s+")");
	   $("#bar>span").eq(index).css("background","#FFFFFF").siblings().css("background","#88b3cb")	
	}
})(Zepto);



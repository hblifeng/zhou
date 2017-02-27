$(".show").click(function () {
	if($(".shenkai")!=undefined){
		$(".shenkai .lg_img").remove();
		$(".shenkai").removeClass("shenkai");
	} 
	$(this).addClass("shenkai");
	var lg_img = $("<div class='lg_img'><div class='container item_detail'><span>&times;</span><div class='left '><img src='' class='img-responsive'/></div><div class='right'><h1></h1><p></p></div></div></div>");
	$(this).append(lg_img);
	console.log($(this).attr('data-src'));
	$(".shenkai .left img").attr("src",$(this).attr('data-src'));
	$(".shenkai .right h1").html($(this).attr('data-h'));
	$(".shenkai .right p").html($(this).attr('data-p'));
	$(this).css("position","inherit");
	$(".lg_img span").click(function stopDefault(e){
		$(".shenkai .lg_img").remove();
		$(".shenkai").removeClass("shenkai");
        //阻止默认浏览器动作(W3C)
        if (e && e.preventDefault)
            e.preventDefault();
        //IE中阻止函数器默认动作的方式
        else
            window.event.returnValue = false;
        return false;
  });
});

//返回顶部以及点击导航栏到相应地方
function myEvent(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+ev,fn);
	}else{
		obj.addEventListener(ev,fn,false);
	}
}
myEvent(window,'load',function(){
	var oRTT=document.getElementById('rtt');
//	var pH=document.documentElement.clientHeight;
	var timer=null;
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	window.onscroll=function(){
		scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop>=200){
			oRTT.style.display='block';
		}else{
			oRTT.style.display='none';
		}
		return scrollTop;
	};
	oRTT.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var now=scrollTop;
			var speed=(0-now)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			console.log(scrollTop);
			if(scrollTop==0){
				clearInterval(timer);
			}
			document.documentElement.scrollTop=scrollTop+speed;
			document.body.scrollTop=scrollTop+speed;
		}, 30);
	};
	
	var timer2=null;
	var scroll = ["about","service","enter","gallery","aboutus"];
	for(var k=0;k<5;k++){
		(function (k) {
			$(".navbar-right a")[k+1].onclick=function () {
				var distance = $("#"+scroll[k]).offset().top;
				clearInterval(timer2);
				timer2=setInterval(function(){
					var speed=distance/10;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(distance<0){
						clearInterval(timer2);
					}
					document.documentElement.scrollTop=scrollTop+speed;
					document.body.scrollTop=scrollTop+speed;
					distance-=speed;
				}, 30);
			}
		})(k);
	}
});




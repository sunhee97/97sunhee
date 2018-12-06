  $(function(){
	  var num=$('.slides').find('img').length;
	  var dst=$('.slides').find('img').width();
	  var currentNum=0;
	  var newNum=currentNum+1;
	  var img=$('.slides>img');
	  function slideMove(){
			newNum=currentNum+1;
			if(newNum>(num-1)){ 
				newNum=0; 
			}
			$('.btns a').filter('.on').removeClass('on');
			$('.btns li').eq(newNum).find('a').addClass('on');
			img.eq(currentNum).stop().animate({left:-dst},980);
			img.eq(newNum).css({left:dst,zIndex:50});
			img.eq(newNum).stop().animate({left:0},980,function(){
				currentNum=newNum;
			});
	  }
	  var timer=setInterval(slideMove,3000);
	  $('.btns a').on('click',function(event){
			event.preventDefault();
			clearInterval(timer);
			newNum=$(this).parent().index();
			if(currentNum!=newNum){
				$('.btns a').filter('.on').removeClass('on');
				$('.btns li').eq(newNum).find('a').addClass('on'); 
				img.eq(currentNum).stop().animate({left:-dst},980);
				img.eq(newNum).css({left:dst,zIndex:50});
				img.eq(newNum).stop().animate({left:0},980,function(){
				currentNum=newNum;
				});
			};
			timer=setInterval(slideMove,3000);
	    });
	  $('.next').click(function(event){
			event.preventDefault();
			clearInterval(timer);
			slideMove();
			timer=setInterval(slideMove,3000);
		});
		
		$('.prev').click(function(event){
				event.preventDefault();
				clearInterval(timer);
				newNum=currentNum-1;
				if(newNum<0){
					newNum=num-1;
				}
				$('.btns a').filter('.on').removeClass('on');
				$('.btns li').eq(newNum).find('a').addClass('on'); 
				img.eq(currentNum).stop().animate({left:dst},980);
				img.eq(newNum).css({left:-dst,zIndex:50});
				img.eq(newNum).stop().animate({left:0},980,function(){
				currentNum=newNum;
				});
				timer=setInterval(slideMove,3000);
			});
	  });
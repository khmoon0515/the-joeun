


let now = 1,  //현재 보여지는 이미지를 now 변수에 지정 
width = 100;  // 이미지의 가로사이즈를 width변수에 지정
setInterval(function () {

 // if(조건){참일경우 실행문}else{거짓일 경우}
 //첫번째 두번째 이미지일 경우
 if(now<3){
     $(".slide ul").animate({
         left : (width * now* (-1)) + '%'
     })
     now++ //now  = now+1 (결론 2>3>4 ...계속 늘어남 )  

 }else{
     $('.slide ul').animate({left :0})
     now = 1

 }



},3000) // 3초마다 실행하기



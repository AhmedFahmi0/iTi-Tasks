$("#im2,#im3,#im4,#im5,#im6").css("display","none")
var imgArr=[$("#im1"),$("#im2"),$("#im3"),$("#im4"),$("#im5"),$("#im6")]
var index=0;
    
var sl=setInterval(imgSlide,2000)

function imgSlide(){
    if(index>5){index=0;}
    
    imgArr[index].css("display","none")
    
    if(index<5){
        imgArr[index+1].css("display","flex")
    }else{
        imgArr[0].css("display","flex")
    }
        index++;
}
$("#stop").on("click",function(){
    clearInterval(sl)
})    


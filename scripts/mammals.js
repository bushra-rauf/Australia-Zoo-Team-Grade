let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;
const btnPrev=document.querySelector("#btn-prev");
const btnNext=document.querySelector("#btn-next");


btnPrev.addEventListener('click',function(){
    PrevSlide();
});
btnNext.addEventListener('click',function(){    
    NextSlide();
});

function updatePosition(){
    sliders.forEach(Slide=>{
        Slide.classList.remove('active');
        Slide.classList.add('hidden');

    });

    sliders[slidePosition].classList.add('active');
    sliders[slidePosition].classList.remove('hidden');
}
function PrevSlide(){
    if(slidePosition=== 0){
        slidePosition=totalSlider-1;
    }else{
    slidePosition--;
    }
    updatePosition();

}
function NextSlide(){
    if(slidePosition===totalSlider-1){
       slidePosition=0;
    }else{
    slidePosition++;
    }
    updatePosition();
}

    
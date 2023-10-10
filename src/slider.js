let offset = 0;
const slider = document.querySelector('.container__image_scrolling');

const ellipse1 = document.querySelector('.ellipse1');
const ellipse2 = document.querySelector('.ellipse2');
const ellipse3 = document.querySelector('.ellipse3');
const ellipse4 = document.querySelector('.ellipse4');
const ellipse5 = document.querySelector('.ellipse5');
const ellipse6 = document.querySelector('.ellipse6');


document.querySelector('.container__switch_prew1').addEventListener('click', function(){
    if (offset == 2240 || offset == 1120){
        offset = 0;
        ellipse1.style.display = 'block';
        ellipse2.style.display = 'none';
        ellipse3.style.display = 'none';
        ellipse4.style.display = 'block';
        ellipse5.style.display = 'none';
        ellipse6.style.display = 'block';
    }
    slider.style.left = 0 + 'px';
});

document.querySelector('.container__switch_prew2').addEventListener('click', function(){
    if (offset == 2240 || offset == 0){
        offset = 1120;
        ellipse1.style.display = 'none';
        ellipse2.style.display = 'block';
        ellipse3.style.display = 'block';
        ellipse4.style.display = 'none';
        ellipse5.style.display = 'none';
        ellipse6.style.display = 'block';
    }
    slider.style.left = -1120 + 'px';
});

document.querySelector('.container__switch_prew3').addEventListener('click', function(){
    if (offset == 1120 || offset == 0){
        offset = 2240;
        ellipse1.style.display = 'none';
        ellipse2.style.display = 'block';
        ellipse3.style.display = 'none';
        ellipse4.style.display = 'block';
        ellipse5.style.display = 'block';
        ellipse6.style.display = 'none';
    }
    slider.style.left = -2240 + 'px';
});

let left = 0;
let timer;
function autoSlider (){
    timer = setTimeout(function(){
        const scrolling = document.querySelector('.container__image_scrolling');
        left = left - 1120;
        if (left == 0){
            ellipse1.style.display = 'block';
            ellipse2.style.display = 'none';
            ellipse3.style.display = 'none';
            ellipse4.style.display = 'block';
            ellipse5.style.display = 'none';
            ellipse6.style.display = 'block';
        }else if (left == 1120){
            ellipse1.style.display = 'none';
            ellipse2.style.display = 'block';
            ellipse3.style.display = 'block';
            ellipse4.style.display = 'none';
            ellipse5.style.display = 'none';
            ellipse6.style.display = 'block';
        }else if(left == 2240){
            ellipse1.style.display = 'none';
            ellipse2.style.display = 'block';
            ellipse3.style.display = 'none';
            ellipse4.style.display = 'block';
            ellipse5.style.display = 'block';
            ellipse6.style.display = 'none';
        }

        if (left < -2240){
            left = 0;
            clearTimeout(timer);
        }
        scrolling.style.left = left + 'px';
        autoSlider();
    }, 5000);
}
autoSlider();
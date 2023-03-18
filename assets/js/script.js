
$(document).ready(function () {

    // let leftIcon = $('.slider .left');
    // let rightIcon = $('slider right');

    $('.right').on('click', function () {
        let activeImage = $('.active-img');
        let rightImg = activeImage.right();


        if (rightImg.length) {
            activeImage.removeClass('active-img').css('z-index', -10);
            rightImg.addClass('active-img').css('z-index', -10)
        }
    });

    $('.left').on('click', function () {
        let activeImage = $('.active-img');
        let leftImg = activeImage.left();


        if (leftImg.length) {
            activeImage.removeClass('active-img').css('z-index', -10);
            leftImg.addClass('active-img').css('z-index', -10)
        }
    });






});

// let leftIcon = document.querySelector(".slider .left");
// let rightIcon = document.querySelector(".slider .right");

// function rightSlider(){
//     let activeImage = document.querySelector(".active-img");
//     activeImage.classList.remove("active-img");
//     if(activeImage.nextElementSibling != null){
//         activeImage.nextElementSibling.classList.add("active-img");
//     }else{
//         activeImage.parentNode.firstElementChild.classList.add("active-img");
//     }
// }


// function leftSlider(){
//     let activeImage = document.querySelector(".active-img");
//     activeImage.classList.remove("active-img");
//     if(activeImage.previousElementSibling != null){
//         activeImage.previousElementSibling.classList.add("active-img");
//     }else{
//         activeImage.parentNode.lastElementChild.classList.add("active-img");
//     }
// }


// rightIcon.addEventListener("click",rightSlider);


// leftIcon.addEventListener("click",leftSlider);


// rightIcon.addEventListener("mouseover",rightSlider)


// leftIcon.addEventListener("mouseover",leftSlider)


// setInterval(rightSlider,3000);
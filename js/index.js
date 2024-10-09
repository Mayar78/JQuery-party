
$('.openSideNav').click(function () {
    $('.open').animate({ "left": "0" }, 400)
})

$('.close').click(function () {
    $('.open').animate({ "left": "-270" }, 400)
})

// $(".")

$(".Slider h3").on("click", function () {
    $(this).next().slideToggle();
    $(".Slider div").not($(this).next()).slideUp();


})

window.onload = function () {

    timer("15 october 2024 9:00:00");
}

function timer(Counter) {

    let futureDate = new Date(Counter);
    futureDate = (futureDate.getTime() / 1000);

    let dateNow = new Date();
    dateNow = (dateNow.getTime() / 1000);

    dateDiff = (futureDate - dateNow);

    let days = Math.floor(dateDiff / (24 * 60 * 60));
    let hours = Math.floor(dateDiff % (24 * 60 * 60) / (60 * 60));
    let minutes = Math.floor(dateDiff % (60 * 60) / 60);
    let seconds = Math.floor(dateDiff % 60);


    $(".days").html(`${days} d`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${minutes} m`);
    $('.seconds').html(`${seconds} s`)

    if (dateDiff < 0) {
        clearInterval(timer(Counter));
        $(".modal").toggleClass("d-block", "d-none");

    }
    setInterval(function () { timer(Counter); }, 1000);
}

$("#closeModal ,#ok").on("click", function () {
    $(".modal").toggleClass("d-none", "d-block");
})

$("textarea").keyup(function(){
    let charLength = $(this).val().length;
   $("#limit").text(
    100 - charLength <= 0 ? "You've reached the limit" : 100 - charLength
   )
    
})

$(".open a").click(function(){
    
    var myHref= $(this).attr("href");
    
    var positionOfSection = $(myHref).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},1000);
    
})


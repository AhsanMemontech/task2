
let canvas = $('canvas')[0];
let ctx = canvas.getContext('2d');

$('.col-sm-6').addClass('hidden');
$('.output').addClass('hidden');

$('.outer-background').click(function(){
    $('.col-sm-6').removeClass('hidden');
    $('.output').removeClass('hidden');
    $('.outer-background').css("background-color","white");
});

// $('.thumb').on('click', function(){
//     let color = $(this).css('background-color');
//     $('.canvas').css('background-color', color)
//     });
 
$('.thumb').on('click', function(){
    let color = $(this).css('background-color');
    ctx.clearRect(0, 0 , canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(10,10,180,180);
});
 
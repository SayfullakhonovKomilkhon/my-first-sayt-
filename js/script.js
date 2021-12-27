$(document).ready(function () {
    function filterImg(random){
        $('.all').filter(random).show();
        $('.all').not(random).hide();
    }
    $('.btn').click(function(){
        var dataSoul = $(this).attr('data-soul');
        filterImg('.' + dataSoul);
        $('.btn').removeClass('active');
        $(this).addClass('active');
    })
});
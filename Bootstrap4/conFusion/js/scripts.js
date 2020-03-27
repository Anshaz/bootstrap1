

    $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
$("#carouselButton").children("span").removeClass('fa-pause');
$("#carouselButton").children("span").addClass('fa-play');
}
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
$("#carouselButton").children("span").removeClass('fa-play');
$("#carouselButton").children("span").addClass('fa-pause');
}
});





        $(document).ready(function () {
            $('#login').click(function () {
                $('#loginModal').modal();
            });
    });

        $(document).ready(function () {
            $('#dismiss').click(function () {
                $('#loginModal').modal('hide');
            });
    });
        $(document).ready(function () {
            $('#dismiss1').click(function () {
                $('#loginModal').modal('hide');
            });
    });






        $(document).ready(function () {
            $('#reservemodal').click(function () {
                $('#reservemodal1').modal();
            });
    });

        $(document).ready(function () {
            $('#hideoncancel').click(function () {
                $('#reservemodal1').modal('hide');
            });
    });
        $(document).ready(function () {
            $('#reservehide1').click(function () {
                $('#reservemodal1').modal('hide');
            });
    });



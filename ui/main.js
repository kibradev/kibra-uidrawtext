$(function() {
    window.addEventListener('message', function(event) {
        if (event.data.type === "SendInfo"){
            $('.MainClass').css({"animation":"fadeInBottom 0.8s both"});
            $('.MainClass').css({"display":"flex"});
            $('.MainClass').fadeIn(500);
            $('#Button').html(event.data.ButtonKey);
            $('#UIText').html(event.data.Text);
        } else if(event.data.type === "CloseUI") {
            $('.MainClass').css({"animation":"fadeOutBottom 0.8s both"});
            setTimeout(() => {
                $('.MainClass').css({"display":"none"});
                $('.MainClass').hide();
            }, 1000);
        }
    });
});


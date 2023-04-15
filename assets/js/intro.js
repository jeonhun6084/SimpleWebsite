$( document ).ready(function() {
    $("#banner").hide();
    
    $(".nextPage").on("click", function(){
        $("#intro").hide(); 
        $("link[title='title1']").attr("href","assets/css/main.css");
        $("#banner").fadeIn(600);
        return;
    });

    $(".hex-cell").on("click", function(){
        $("#banner").fadeOut(600); 
        return;
    });
    
});
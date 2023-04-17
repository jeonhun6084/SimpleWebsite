$( document ).ready(function() {
    $("#banner").hide();
    $("#gallery").hide();
    
    $(".nextPage").on("click", function(){
        $("#intro").hide(); 
        $("link[title='title1']").attr("href","assets/css/main.css");
        $("#banner").fadeIn(600);
        return;
    });

    $(".hex-cell").on("click", function(){
        let indexNo = $(this).index();
        switch (indexNo) {
            case 1:
                // 1_CoChampionsKorea
                $("#banner").fadeOut(600, function () {
                    $("link[title='title1']").attr("href","assets/css/magnific.css");
                    $("#gallery").fadeIn(600);
                });
                break;
            case 2:
                // 2_CWU
                $("#banner").fadeOut(600, function () {
                    $("link[title='title1']").attr("href","assets/css/magnific.css");
                    $("#gallery").fadeIn(600);
                });
                break;
            case 3:
                // 3_GGBZ
                $("#banner").fadeOut(600, function () {
                    $("link[title='title1']").attr("href","assets/css/magnific.css");
                    $("#gallery").fadeIn(600);
                });
                break;
            case 4:
                // 4_SN
                $("#banner").fadeOut(600, function () {
                    $("link[title='title1']").attr("href","assets/css/magnific.css");
                    $("#gallery").fadeIn(600);
                });
                break;
            case 5:
                // 5_MKSI
                $("#banner").fadeOut(600, function () {
                    $("link[title='title1']").attr("href","assets/css/magnific.css");
                    $("#gallery").fadeIn(600);
                });
                break;
            case 6:
                // 6_YSU
                $("#banner").fadeOut(600, function () {
                    $("link[title='title1']").attr("href","assets/css/magnific.css");
                    $("#gallery").fadeIn(600);
                });
                break;
            case 7:
                // 7_insta
                $("#banner").fadeOut(600, function () {
                    $("link[title='title1']").attr("href","assets/css/magnific.css");
                    $("#gallery").fadeIn(600);
                });
                break;
        }
    });

    $("#btn_back").on("click", function(){
        $("#gallery").fadeOut(600,function(){
            $("link[title='title1']").attr("href","assets/css/main.css");
            $("#banner").fadeIn(600);
        });
    });

    $('.gallery-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: function(item) {
            return item.el.find('figcaption').text() || item.el.attr('title');
          }
        },
        zoom: {
          enabled: true
        },
        // duration: 300
        gallery: {
          enabled: true,
          navigateByImgClick: false,
          tCounter: ''
        },
        disableOn: function() {
          return $(window).width() > 640;
        }
    });

    // let img_list = ["./assets/img/aa.gif"]
    // let img_text = ["1111"]
    // String.prototype.format = function() {
    //   var formatted = this;
    //   for( var arg in arguments ) {
    //       formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    //   }
    //   return formatted;
    // };
    // $.each(img_list, function(index, item){
    //   $(".gallery").text("<a class='gallery-link' href='./assets/img/aa.gif'><figure class='gallery-image'><img height='1600' src='./assets/img/aa.gif' width='1600'><figcaption>1111</figcaption></figure></a>").format;
    // })
    
});
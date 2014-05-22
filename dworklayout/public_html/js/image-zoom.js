var scale = 1, angle = 0;
var zoom_slider = $('#zoom_slider'),
        rotate_slider = $('#rotate_slider'),
        img_div = $('#img_div');
var img_zoomst = [{width: 587, height: 918, url: "http://digi.ub.uni-heidelberg.de/diglitData/image/cpg848/1/008r.jpg"},
    {width: 746, height: 1166, url: "http://digi.ub.uni-heidelberg.de/diglitData/image/cpg848/2/008r.jpg"},
    {width: 947, height: 1482, url: "http://digi.ub.uni-heidelberg.de/diglitData/image/cpg848/3/008r.jpg"},
    {width: 1192, height: 1864, url: "http://digi.ub.uni-heidelberg.de/diglitData/image/cpg848/4/008r.jpg"}];
var img_width, img_height;
function transform_str(scale, angle) {
    var f = 1.2599210499, transl = ",0,0";
    if (scale >= 0 && scale <= 3) {
        $('#img').attr("src", img_zoomst[scale].url);
        img_width = img_zoomst[scale].width;
        img_height = img_zoomst[scale].height;
        scale = 0;
    }
    else if (scale > 3) {
        scale -= 3;
    }
    if (angle == -1) {
        transl = ",0," + (img_width * Math.pow(f, scale)).toFixed(6);
    }
    if (angle == 1) {
        transl = "," + (img_height * Math.pow(f, scale)).toFixed(6) + ",0";
    }
    if (angle == 2) {
        transl = "," + (img_width * Math.pow(f, scale)).toFixed(6) + "," + (img_height * Math.pow(f, scale)).toFixed(6);
    }
    return "matrix("
            + (+Math.cos(-angle * Math.PI / 2) * Math.pow(f, scale)).toFixed(6) + ","
            + (-Math.sin(-angle * Math.PI / 2) * Math.pow(f, scale)).toFixed(6) + ","
            + (+Math.sin(-angle * Math.PI / 2) * Math.pow(f, scale)).toFixed(6) + ","
            + (+Math.cos(-angle * Math.PI / 2) * Math.pow(f, scale)).toFixed(6)
            + transl + ")";
}
$("#zoom_slider").slider();
$("#zoom_slider").on('slide', function(slideEvt) {
    $("#zoom_sliderSliderVal").text(slideEvt.value);
    scale = Math.round(slideEvt.value);
    img_div.css("transform", transform_str(scale, angle));
});
$("#rotate_slider").slider();
$("#rotate_slider").on('slide', function(slideEvt) {
    $("#rotate_sliderSliderVal").text(slideEvt.value);
    angle = Math.round(slideEvt.value);
    img_div.css("transform", transform_str(scale, angle));
});


function changeImg()
{
    var image = document.getElementById('myImg');
    if (image.src.match("img/ascending-aorta.png")) {
        image.src = "img/art_image.png";
    }
    else {
        image.src = "ascending-aorta.png";
    }
};
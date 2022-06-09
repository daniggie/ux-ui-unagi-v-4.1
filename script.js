import { texts as data } from './data.js';

function getCurrentCarouselIndex() {
    return ($('.carousel-item.active').index());
}

$(document).ready(function () {
    const myCarousel = document.getElementById('carouselExampleDark');

    $('#text').html(data[getCurrentCarouselIndex()].text);
    $('#code').html(data[getCurrentCarouselIndex()].code);

    myCarousel.addEventListener('slid.bs.carousel', event => {
        $('#text').html(data[getCurrentCarouselIndex()].text);
        $('#code').html(data[getCurrentCarouselIndex()].code);
        hljs.initHighlightingOnLoad();
    })


})

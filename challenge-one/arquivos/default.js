var products;
var ingredientLi;
var i;

function setLightbox(dataId, src, ingredientLi) {
    var potion = products.potions[dataId];
    $('.lightbox img.potion-img').attr('src', src);
    $('.lightbox .potion-title').html(potion.name);
    $('.lightbox .effect span').html(potion.effect);
    $('.lightbox .price span').html('$' + potion.price);
    for (i = 0; i < potion.ingredients.length; i++) {
        $('.lightbox .ingredients ul .ingredient.clean').html('<span>' + potion.ingredients[i] + "</span>").removeClass('clean');
        if (i < potion.ingredients.length - 1) {
            $('.lightbox .ingredients ul').append(ingredientLi);
        }
    }
    $('.lightbox, #modal ').css('display', 'block');
}

function requireProducts(spot) {
    $.ajax({
        'url' : 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json'
    }).done(function (data) {
        products = data;
        for (property in products) {
            $('.shelf-title').html(property);
        }
        $.each (products.potions, function(index, key){
            $('.spot.clean:last-child').attr('data-id', key.id);
            $('.spot.clean:last-child img').attr('src',$('.spot.clean:last-child img').attr('src') + key.image);
            $('.spot.clean:last-child .title').html( key.name + ' - ' +$('.spot.clean:last-child .title').html());
            $('.spot.clean:last-child .price').text('$' + key.price);
    
            $('.spot.clean:last-child').removeClass('clean');
            if (index == 6){
                return false;
            }
            $('#recebe-potions').append(spot);
        })
    })
}

$(document).ready(function(){
    var spot = $('.spot').parent().html();
    var ingredientFrame =$('.lighbox ul').html();
    requireProducts(spot);
    $('.lightbox .close, #modal ').click(function(){
        $('.lightbox, #modal ').css('display', 'none');
        $('.menu-container.mobile-menu').animate({width:'0px'},500);
    })
    ingredientLi = $('.lightbox .ingredients ul').html();

    $('.fecha-menu-mobile').after($('.header-search').clone())
    //abre menu mobile
    $('.mobile-menu-icon').on('click', function(){
        if(window.innerWidth < 768) {
            if ( $('.menu-container .header-search').length==0) {
                $('.fecha-menu-mobile').after($('.header-search').clone())
            }
            $('.menu-container').addClass('mobile-menu')
            $('.menu-container.mobile-menu').animate({width:'315px'},500);
            $('#modal').show()
        }else{
            $('.menu-container .menu').removeClass('mobile-menu')
        }
    });
    $('fecha-menu-mobile')
})
$(document).on('click','.spot',function (){
    $('.lightbox .ingredients ul').html(ingredientLi);
    setLightbox($(this).attr('data-id'), $(this).find('img').attr('src'),ingredientLi);
})

    

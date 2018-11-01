var products;


function setLightbox(el) {
    console.log($(el))
    $('.lightbox .potion-title').html($(el).find('.title').text().replace(' - ',''))
    console.log(el.attr('data-id'))
    $('.lightbox .effect').html(products.potions[el.attr('data-id')].effect)
    var ingredientsArray = []
    for (var i = 0; i < products.potions[el.attr('data-id')].ingredients.length)

    $('.lightbox, #modal ').css('display', 'block')
    
}

function requireProducts(spot) {
    $.ajax ({
        'url':'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json'
    }).done(function(data){
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
            if(index == 6){
                return false;
            }
            $('#recebe-potions').append(spot);
        })
    })
}

$(document).ready(function(){
    var spot = $('.spot').parent().html();
    var ingredientFrame =$('.lighbox ul').html()
    requireProducts(spot)
    console.log($('.spot'))
    
    $('.lightbox .close, #modal ').click(function(){
        $('.lightbox, #modal ').css('display', 'none')
    })
})
$(document).on('click','.spot',function (){
    var $spot = $(this)
    setLightbox($(this));
})

    

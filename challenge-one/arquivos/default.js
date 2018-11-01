var products;
var spot = $('.spot').parent().html();









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
        console.log(index)
        if(index == 6){
            return false;
        }
        $('#recebe-potions').append(spot);
    })
})
    

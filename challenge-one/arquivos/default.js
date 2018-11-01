var products;

$.ajax ({
    'url':'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json'
}).done(function(data){
    products = data;
})
// Write your Pizza Builder JavaScript in this file.

//buttons

var btnPeperoni = $('.btn-pepperonni')
var btnPeppers = $('.btn-green-peppers')
var btnMushrooms = $('.btn-mushrooms')
var btnSauce = $('.btn-sauce')
var btnCrust = $('.btn-crust')

//prices
var mushPrice = $('.price li:contains(mushrooms)')
var pepperoniPrice = $('.price li:contains(pepperonni)')
var pepperPrice = $('.price li:contains(peppers)')
var crustPrice = $('.price li:contains(crust)')
var saucePrice = $('.price li:contains(sauce)')
var priceItem = $('strong')
var price = parseInt(priceItem.text().substr(1,priceItem.text().length))

//ingredientes

var peppers = $('.green-pepper')
var mushrooms = $('.mushroom')
var pepperonnis = $('.pep')
var sauce = $('.sauce')
var crust = $('.crust')


//funciones

function updatePrice(ingredient, value){
    if(!ingredient.hasClass('active')){        
        price -= value        
        priceItem.text('$'+price)
    }else{
        price += value
        priceItem.text('$'+price)
    }
}

btnPeperoni.on('click', function(){
    console.log(price)
    pepperonnis.toggle()
    btnPeperoni.toggleClass('active')
    pepperoniPrice.toggle()
    updatePrice(btnPeperoni, 1)
})

btnMushrooms.on('click', function(){
    mushrooms.toggle()
    btnMushrooms.toggleClass('active')
    mushPrice.toggle()
    updatePrice(btnMushrooms, 1)
})

btnPeppers.on('click', function(){
    peppers.toggle()
    btnPeppers.toggleClass('active')
    pepperPrice.toggle()
    updatePrice(btnPeppers, 1)
})

btnSauce.on('click', function(){
    sauce.toggleClass('sauce-white')
    btnSauce.toggleClass('active')
    saucePrice.toggle()
    updatePrice(btnSauce, 3)
})

btnCrust.on('click', function(){
    crust.toggleClass('crust-gluten-free')
    btnCrust.toggleClass('active')
    crustPrice.toggle()
    updatePrice(btnCrust, 5)
})




let city = document.querySelector('.tab-city-header');
let private = document.querySelector('.tab-private-header');
let tabCity = document.querySelector('.tab-city');
let tabPrivate = document.querySelector('.tab-private');

// вешаем городу активность
city.classList.add('tab-active');
tabPrivate.classList.add('tab-hide');
// делаем обработчик по клику 

private.addEventListener('click', function(){
    city.classList.remove('tab-active');
    private.classList.add('tab-active');
    tabPrivate.classList.remove('tab-hide');
    tabCity.classList.add('tab-hide');
})
city.addEventListener('click', function(){
    private.classList.remove('tab-active');
    city.classList.add('tab-active');
    tabPrivate.classList.add('tab-hide');
    tabCity.classList.remove('tab-hide');
})
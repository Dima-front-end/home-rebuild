const numberInput = document.querySelector('#square-input');
const numberRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');
const totalPriceElement = document.querySelector('#total-price');



//Задаем радиокнопки
const radioTypes = document.querySelectorAll('input[name="type"]')
const radioTypeHouses = document.querySelectorAll('input[name="building"]')
const radioTypeRooms = document.querySelectorAll('input[name="rooms"]')

const radioCeiling = document.querySelector('input[name="ceiling"]')
const radioWalls = document.querySelector('input[name="walls"]')
const radioFloor = document.querySelector('input[name="floor"]')

//Задаем базовую цену
const defaultPrice = 12000;

//ползунок связали с цифрами
numberRange.addEventListener('input', function(){
    numberInput.value = numberRange.value;
});
numberInput.addEventListener('input',function(){
    numberRange.value = numberInput.value;
});


//Функция итоговой стоимости и отобразить на экран
function calcuate() {
    let totalPrice = defaultPrice * parseInt(numberInput.value);


    for(const radio of radioTypes) {
        if (radio.checked){
            totalPrice *= parseFloat(radio.value);
        }
    }


    for(const point of radioTypeHouses) {
        if (point.checked) {
            totalPrice *= parseFloat(point.value);
        }
    }

    for(const room of radioTypeRooms) {
        if (room.checked) {
            totalPrice *= parseFloat(room.value);
        }
    }
    
        if (radioCeiling.checked) {
            totalPrice += parseFloat(radioCeiling.value) * numberInput.value;
        }
    


        if (radioFloor.checked) {
            totalPrice *= parseFloat(radioFloor.value);
        }


        if (radioWalls.checked) {
            totalPrice *= parseFloat(radioWalls.value);
        }
    

        

    const formatter = new Intl.NumberFormat('ua');
    totalPriceElement.innerText = formatter.format(totalPrice);
}


//запускаем функцию
calcuate()

//Запуск функции рассчета при каждом срабатывании input
for (const input of inputs) {
    input.addEventListener('input', function(){
        calcuate()
    })
};






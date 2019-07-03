var number = +prompt ('Введите число:');
var exponent = +prompt ('Введите степень числа:');
var base = 1;

// for  //мне такой вариант записи больше всего нравится, коротко и понятно 

for (var i = exponent; i; i--){    
    base *= number;
}

alert ('Метод "for" // ' + 'Число ' + number + ' в степени ' + exponent + ' равно ' + base);

// while

base = 1; //вернем к начальному значению
var j = 0;
while (j < exponent){
    base *= number;
    j++;
}

alert ( 'Метод "while" // ' +  'Число ' + number + ' в степени ' + exponent + ' равно ' + base);

// do .. while

base = 1; //вернем к начальному значению
var k = exponent;
var m = 1;
do {
    base *= m;
    m = number;
    k--;
} while ( k + 1 );

alert ( 'Метод "do...while" // ' +  'Число ' + number + ' в степени ' + exponent + ' равно ' + base);
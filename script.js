var number = +prompt ('Введите число:');
var base = 1;
var exponent = +prompt ('Введите степень числа:');

// for  //мне такой вариант записи больше всего нравится, коротко и понятно 

for (i = exponent; i; i--){    
    base = base * number;
}

alert ('Метод "for" // ' + 'Число ' + number + ' в степени ' + exponent + ' равно ' + base);

// while

base = 1; //вернем к начальному значению
j = 0;
while (j < exponent){
    base = base * number;
    j++;
}

alert ( 'Метод "while" // ' +  'Число ' + number + ' в степени ' + exponent + ' равно ' + base);

// do .. while

base = 1; //вернем к начальному значению
k = exponent;
do {
    base = base * number;
    k--;
} while ( k > 0);

alert ( 'Метод "do...while" // ' +  'Число ' + number + ' в степени ' + exponent + ' равно ' + base);
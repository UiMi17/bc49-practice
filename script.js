// const result = 108 + 223 - 2 ** 5;
// console.log(result);

// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock.`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// const message = "Your body mass index is: "
// const bmi = Number(weight.replace(",", ".")) / (Number(height.replace(",", ".")) ** 2);

// console.log(message + bmi.toFixed(1)); // 28.8


// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).



// null || undefined ?? "foo"; // raises a SyntaxError
// true && undefined ?? "foo"; // raises a SyntaxError
// (null || undefined) ?? "foo"; // returns "foo"

// const incomingValue = (null || undefined) ?? 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);


// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". 
// Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"
// const input = prompt("Яка офіційна назва JavaScript?");
// let message = "";

// const trueAnswer = "ECMAScript";

// if (input.toLowerCase() === trueAnswer.toLowerCase()) {
//    console.log(message = "Правильно!");
// } else {
//     console.log(message = "Не знаєте? ECMAScript!");
// }

// Напиши скрипт який буде просити нас ввести число більше за 100, доки
//   ми таке не введемо
    
//   Скористайся циклом while

// let input = 0;

// while (input <= 100) {
//     input = Number(prompt("Введіть число більше за 100."));
// }
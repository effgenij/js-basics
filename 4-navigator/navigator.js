// Написать код рассчитывающий дистанцию до объекта
// addressLat - адрес назначения lat
// addressLong - адрес назначения long
// positionLat - текущее положение lat
// positionLong - текущее положение long

const addressLat = 20;
const addressLong = 30;
const positionLat = 5;
const positionLong = 10;

const distanceLength = Math.sqrt((positionLat - addressLat) ** 2 + (positionLong - addressLong) **  2); 

console.log(`Дистанция до объекта: ${distanceLength}`);
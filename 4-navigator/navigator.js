// Написать код рассчитывающий дистанцию до объекта
// addressLat - адрес назначения lat
// addressLong - адрес назначения long
// positionLat - текущее положение lat
// positionLong - текущее положение long

let addressLat;
let addressLong;
let positionLat;
let positionLong;

const distanceLength = Math.sqrt((positionLat - addressLat) ** 2 + (positionLong + addressLong) **  2); 

console.log(`Дистанция до объекта: ${distanceLength}`);
"use strict";
// BlooAlcoholTest
function bloodAlcoholContent(drinks, weight, sex, time) {
  drinks = drinks.ounces * drinks.abv;
  return parseFloat(
    sex == "male"
      ? ((drinks * 5.14) / weight) * 0.73 - 0.015 * time
      : ((drinks * 5.14) / weight) * 0.66 - 0.015 * time
  ).toFixed(4);
}

console.log(bloodAlcoholContent({ ounces: 180, abv: 0.05 }, 160, "female", 1));

// Total amount of points

function points(games) {
  let total = 0;
  games.forEach((score) => {
    const [point1, point2] = score.split(":").map(Number);
    if (point1 > point2) {
      total += 1 * 3;
    } else if (point1 < point2) {
      total -= 0;
    } else {
      total += 1;
    }
  });
  return total;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);

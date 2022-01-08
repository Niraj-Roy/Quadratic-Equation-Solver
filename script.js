// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = ("Enter the first number: ");
let b = ("Enter the second number: ");
let c = ("Enter the third number: ");

var form = document.getElementById('form');
    number = document.getElementById('number');
form.onsubmit = function() {
   var variable = number.value;
   alert( variable );
};

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    window.alert(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

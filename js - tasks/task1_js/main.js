// 1
var num = +window.prompt("Enter Number");

console.log("Your number is " + num);

//---------------------------------------------------------------------

//2
var num = +window.prompt("Enter Number");

if(num % 3 == 0){
    console.log("YES -> " + num + " can divide by 3" );
}
else if (num % 4 == 0){
    console.log("YES -> " + num + " can divide by 4" );
}
else{
    console.log("NO -> " + num + " can't divide by 3 or 4" );
}

//2 - another solve
var num = +window.prompt("Enter Number");

if(num % 3 == 0 && num % 4 == 0){
    console.log("YES -> " + num + " can divide by 3 and 4" );
}
else{
    console.log("NO -> " + num + " can't divide by 3 and 4" );
}

//------------------------------------------------------------------------

//3
var num1 = +window.prompt("Enter First Number");
var num2 = +window.prompt("Enter Second Number");

if (num1 > num2){
    console.log(num1 + " is bigger" );
}
else if (num2 > num1){
    console.log(num2 + " is bigger" );
}
else{
     console.log(num1 + " is equal " + num2 );
}

//---------------------------------------------------------------------------

//4
var num = +window.prompt("Enter Number");

if(
    num > 0
) console.log(num + " is positive "  );
else if(
    num < 0
)console.log(num + " is Negative "  );
else console.log(num + " is Zeroo "  );

//---------------------------------------------------------------------------

//5
var num1 = +window.prompt("Enter First Number");
var num2 = +window.prompt("Enter Second Number");
var num3 = +window.prompt("Enter Theerd Number");

if (
    num1 > num2 && num1 > num3

 )console.log(num1 + " is bigger" );
else if (
    num2 > num1 && num2 > num3

 )console.log(num2 + " is bigger" );
else if (
    num3 > num1 && num3 > num2

 )console.log(num3 + " is bigger" );
else console.log("The Three Numbers are Equal");


//---------------------------------------------------------------------------

//6
 var num = +window.prompt("Enter Number");

 if (
    num % 2 == 0
 )console.log(num + " is Even");
 else console.log(num + " is Ood");

//---------------------------------------------------------------------------

//7 //16  Vowel -> (a,e,I,o,u)
var char = window.prompt("Enter Character");

switch (char) {
    case 'A':
    case 'a':
    case 'E':
    case 'e':
    case 'I':
    case 'i':
    case 'O':
    case 'o':
    case 'U':
    case 'u':
        console.log(char + " is a Vowel");
        break;

    default:
        console.log(char + " is a Consonant");
        break;
}


//---------------------------------------------------------------------------

//8 
var num = +window.prompt("Enter Number");

for(var i = 1; i <= num; i++){
    console.log(i);
} 

//---------------------------------------------------------------------------

//9 
var num = +window.prompt("Enter Number");
for (var i = 1; i <= 12; i++){
    console.log(`${num} * ${i} = `+ num*i);

}

//---------------------------------------------------------------------------

//10
var num = +window.prompt("Enter Number");

for(var i = 1; i <= num; i++){
   if (i % 2 == 0 ) {
      console.log(i);
   }
} 


//---------------------------------------------------------------------------

//11
var num1 = +window.prompt("Ente Base Number");
var num2 = +window.prompt("Enter Power Number");

var result = 1;
for (var i = 1; i <= num2; i++) {
    result *= num1;
}
console.log(`${num1}^${num2} = ${result}`);


//---------------------------------------------------------------------------

//12 
var numOfSub;
var deg;
var total = 0;
var avg;
var percent;

numOfSub = +window.prompt("Enter Number of Subject ")

for (var i = 1; i <= numOfSub; i++) {
    deg = +window.prompt("Enter Marks of Subject " + i + ":");
    total += deg;
}

avg = total / numOfSub;
percent = (total / (numOfSub*100) ) * 100;

console.log("Total Marks = " + total);
console.log("Average Marks = " + avg);
console.log("Percentage = " + percent + "%");

//---------------------------------------------------------------------------

//13 // 15
var month = +window.prompt("Enter Month Number (1-12):");

switch (month) {
    case 1:  // January
    case 3:  // March
    case 5:  // May
    case 7:  // July
    case 8:  // August
    case 10: // October
    case 12: // December
        console.log("Days in Month: 31");
        break;

    case 4:  // April
    case 6:  // June
    case 9:  // September
    case 11: // November
        console.log("Days in Month: 30");
        break;

    case 2:  // February
        console.log("Days in Month: 28 or 29 (leap year)");
        break;

    default:
        console.log("Invalid Month");
        break;
}

//---------------------------------------------------------------------------

//14
var physics = +window.prompt("Enter marks for Physics:");
var chemistry = +window.prompt("Enter marks for Chemistry:");
var biology = +window.prompt("Enter marks for Biology:");
var mathematics = +window.prompt("Enter marks for Mathematics:");
var computer = +window.prompt("Enter marks for Computer:");


var total = physics + chemistry + biology + mathematics + computer;
var percent = (total / 500) * 100;

var flag;

switch (true) {
    case (percent >= 90):
        flag = "A";
        break;
    case (percent >= 80):
        flag = "B";
        break;
    case (percent >= 70):
        flag = "C";
        break;
    case (percent >= 60):
        flag = "D";
        break;
    case (percent >= 40):
        flag = "E";
        break;
    default:
        flag = "F";
        break;
}

//---------------------------------------------------------------------------

//17 
var num1 = +window.prompt("Enter First Number:");
var num2 = +window.prompt("Enter Second Number:");

switch (true) {
    case (num1 > num2):
        console.log(num1 + " is Maximum");
        break;

    case (num2 > num1):
        console.log(num2 + " is Maximum");
        break;

    default:
        console.log("Both numbers are Equal");
        break;
}

//------------------------------------------------------------

//18 
var num = +window.prompt("Enter Number:");

switch (num % 2 == 0) {
    case true:
        console.log(num + " is Even");
        break;

    case false:
        console.log(num + " is Odd");
        break;
}

//------------------------------------------------------------

//19 
var num = +window.prompt("Enter Number:");

switch (true) {
    case (num > 0):
        console.log(num + " is Positive");
        break;

    case (num < 0):
        console.log(num + " is Negative");
        break;

    default:
        console.log(num + " is Zero");
        break;
}

//------------------------------------------------------------

//20 
var num1 = +window.prompt("Enter First Number:");
var operator = window.prompt("Enter Operator (+, -, *, /):");
var num2 = +window.prompt("Enter Second Number:");

switch (operator) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;

    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;

    case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;

    case '/':
        if (num2 == 0)
            console.log("Error! Division by zero");
        else
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;

    default:
        console.log("Invalid Operator");
        break;
}







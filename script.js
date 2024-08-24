let firstEmail = document.getElementById("firstEmail");
let lastEmail = document.getElementById("lastEmail");
function Email() {
  let numbers = firstEmail.value.replace(/[^0-9]/g, "");
  let chars = firstEmail.value.slice(0, -10);
  if (
    firstEmail.value.slice(-10) == "@gmail.com" &&
    numbers.length >= 1 &&
    chars.length >= 5
  ) {
    window.alert("valid Email");
  } else {
    window.alert("Invalid Email");
  }
}
function Email2() {
  let numbers = lastEmail.value.replace(/[^0-9]/g, "");
  let chars = lastEmail.value.slice(0, -10);
  if (
    lastEmail.value.slice(-10) == "@gmail.com" &&
    numbers.length >= 1 &&
    chars.length >= 5
  ) {
    window.alert("valid Email");
  } else {
    window.alert("Invalid Email");
  }
}
let first1 = document.getElementById("first1");
let first2 = document.getElementById("first2");
let first3 = document.getElementById("first3");
let first4 = document.getElementById("first4");
let first5 = document.getElementById("first5");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

function more1() {
  if (counter1 % 2 == 0) {
    first1.style.display = "block";
    first2.style.display = "none";
    first3.style.display = "none";
    first4.style.display = "none";
    first5.style.display = "none";
    document.getElementById("onclick1").src = "first/images/i_plus.png";
    document.getElementById("onclick2").src = "first/images/icon.png";
    document.getElementById("onclick3").src = "first/images/icon.png";
    document.getElementById("onclick4").src = "first/images/icon.png";
    document.getElementById("onclick5").src = "first/images/icon.png";
  } else {
    first1.style.display = "none";
    document.getElementById("onclick1").src = "first/images/icon.png";
  }
  counter1++;
}
function more2() {
  if (counter2 % 2 == 0) {
    first1.style.display = "none";
    first2.style.display = "block";
    first3.style.display = "none";
    first4.style.display = "none";
    first5.style.display = "none";
    document.getElementById("onclick2").src = "first/images/i_plus.png";
    document.getElementById("onclick1").src = "first/images/icon.png";
    document.getElementById("onclick3").src = "first/images/icon.png";
    document.getElementById("onclick4").src = "first/images/icon.png";
    document.getElementById("onclick5").src = "first/images/icon.png";
  } else {
    first2.style.display = "none";
    document.getElementById("onclick2").src = "first/images/icon.png";
  }
  counter2++;
}
function more3() {
  if (counter3 % 2 == 0) {
    first1.style.display = "none";
    first2.style.display = "none";
    first3.style.display = "block";
    first4.style.display = "none";
    first5.style.display = "none";
    document.getElementById("onclick3").src = "first/images/i_plus.png";
    document.getElementById("onclick2").src = "first/images/icon.png";
    document.getElementById("onclick1").src = "first/images/icon.png";
    document.getElementById("onclick4").src = "first/images/icon.png";
    document.getElementById("onclick5").src = "first/images/icon.png";
  } else {
    first3.style.display = "none";
    document.getElementById("onclick3").src = "first/images/icon.png";
  }
  counter3++;
}

function more4() {
  if (counter4 % 2 == 0) {
    first1.style.display = "none";
    first2.style.display = "none";
    first3.style.display = "none";
    first4.style.display = "block";
    first5.style.display = "none";
    document.getElementById("onclick4").src = "first/images/i_plus.png";
    document.getElementById("onclick1").src = "first/images/icon.png";
    document.getElementById("onclick2").src = "first/images/icon.png";
    document.getElementById("onclick3").src = "first/images/icon.png";
    document.getElementById("onclick5").src = "first/images/icon.png";
  } else {
    first4.style.display = "none";
    document.getElementById("onclick4").src = "first/images/icon.png";
  }
  counter4++;
}

function more5() {
  if (counter5 % 2 == 0) {
    first1.style.display = "none";
    first2.style.display = "none";
    first3.style.display = "none";
    first4.style.display = "none";
    first5.style.display = "block";
    document.getElementById("onclick5").src = "first/images/i_plus.png";
    document.getElementById("onclick1").src = "first/images/icon.png";
    document.getElementById("onclick2").src = "first/images/icon.png";
    document.getElementById("onclick3").src = "first/images/icon.png";
    document.getElementById("onclick4").src = "first/images/icon.png";
  } else {
    first5.style.display = "none";
    document.getElementById("onclick5").src = "first/images/icon.png";
  }
  counter5++;
}

let counternav = 0;
function clickmore() {
  if (counternav % 2 == 0) {
    document.getElementById("moree").classList.add("animate");
    document.getElementById("moree").classList.remove("less");
    document.getElementById("moree").style.display = "block";
    
  } else {
    document.getElementById("moree").classList.remove("animate");
    document.getElementById("moree").classList.add("less");
  }
  counternav++;
}


// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
    // the value a of a is 3
}

//#2
var a = 0;
function q2() {
    a = 5;
}


function q22() {
    alert(a);
}
// a is 0 if it is called before q2 or a is 5 if it is called after q2


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
//  if a q32 is called before q3 it will show an integer if it is called after it will show hello

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
//  test will show after calling q4()
//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// 

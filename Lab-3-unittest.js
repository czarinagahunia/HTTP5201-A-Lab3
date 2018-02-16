//LAB 3 - UNIT TESTING
//alert("lab 3");//please delete this line once connected.
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
var flag = false;
function checkHumbrId(idIn) {
    "use strict";
    var pattern = /^(n|N)\d{8}$/;
    if (!(pattern.test(idIn))) {
        flag = false;
    }
    if (pattern.test(idIn) === true) {
        flag = true;
    }
    return flag;
}//end of checkHumbrId

function test__checkHumbrId(valueIn, expected) {
    "use strict";
    var dataIn = document.getElementById("data");
    var result = checkHumbrId(valueIn);
    var resultPass = "==PASSED==";
    var resultFail = "xxFAILEDxx";
    var outPut;
    if (flag === true) {
        outPut = "Student ID: " + valueIn + " | Expected result: " + expected + " | Result: " + "<span style='color:green'>" + resultPass + "</span>" + "<br />";
        dataIn.innerHTML += outPut;
    } else {
        outPut = "Student ID: " + valueIn + " | Expected result: " + expected + " | Result: " + "<span style='color:red'>" + resultFail + "</span>" + "<br />";
        dataIn.innerHTML += outPut;
    }
}//end of test__checkHumbrId

test__checkHumbrId("N01261508", true); //passed
test__checkHumbrId("n01261508", true); //passed
test__checkHumbrId("n0126150", false); //passed
test__checkHumbrId("N0126150", false); //passed
test__checkHumbrId("N012615089", false); //passed
test__checkHumbrId("M01261508", false); //passed
test__checkHumbrId(1234, false); //passed
test__checkHumbrId(12345678, false); //passed
test__checkHumbrId(123456789, false); //passed
test__checkHumbrId(1234567890, false); //passed
test__checkHumbrId("abcdefgh", false); //passed
test__checkHumbrId("abcdef", false); //passed
//test__checkHumbrId(n01261508, false); //throws error
test__checkHumbrId(1, false); //passed
test__checkHumbrId("", false); //passed
test__checkHumbrId(null, false); //passed

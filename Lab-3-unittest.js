//LAB 3 - UNIT TESTING
//alert("lab 3");//please delete this line once connected.
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumbrId(idIn) {
    "use strict";
    var flag = false;
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
    if (result === expected) {
        outPut = "Value tested: " + valueIn + " | Expected result: " + expected + "<span style='color:green'> " + resultPass + "</span>" + "<br />";
        dataIn.innerHTML += outPut;
    } else {
        outPut = "Value tested: " + valueIn + " | Expected result: " + expected + "<span style='color:red'> " + resultFail + "</span>" + "<br />";
        dataIn.innerHTML += outPut;
    }
}//end of test__checkHumbrId

//Testing the function
test__checkHumbrId("N01261508", true);
test__checkHumbrId("n01261508", true);
test__checkHumbrId("n0126150", false);
test__checkHumbrId("N0126150", false);
test__checkHumbrId("N012615089", false);
test__checkHumbrId("M01261508", false);
test__checkHumbrId(1234, false);
test__checkHumbrId(12345678, false);
test__checkHumbrId(123456789, false);
test__checkHumbrId(1234567890, false);
test__checkHumbrId("abcdefgh", false);
test__checkHumbrId("abcdef", false);
test__checkHumbrId(1, false);
test__checkHumbrId("", false);
test__checkHumbrId(null, false);

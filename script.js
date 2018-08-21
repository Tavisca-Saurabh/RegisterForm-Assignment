"use strict";
var IsTrue = 0;
var alphaExp = /^[a-zA-Z]+$/;

function CssOperation(error) {
    error.style.color = "white";
    error.style.backgroundColor = "#f44336";
    error.style.fontSize = "larger";
}

function CheckFirstName() {
    var FirstName = document.getElementById("fname").value;
    if (FirstName.length < 1) {
        var UserEmptyErrorMessage = "*FirstName Field is Empty";
        document.getElementById("FirstNameError").innerHTML = UserEmptyErrorMessage;
        CssOperation(first);
        IsTrue = 0;
    } else if (FirstName.match(alphaExp)) {
        document.getElementById("FirstNameError").innerText = " ";
        IsTrue = 1;
    } else if (!FirstName.match(alphaExp)) {
        document.getElementById("FirstNameError").innerText = "* For your First Name please use alphabets only *";
        CssOperation(first);
        IsTrue = 0;
    } else {
        document.getElementById("FirstNameError").innerHTML = "";
        IsTrue = 1;
    }
    //console.log("first: " + IsTrue);
    return IsTrue;
}

function CheckLastName() {
    var LastName = document.getElementById("lname").value;
    if (LastName != "") {
        if (LastName.match(alphaExp)) {
            document.getElementById("LastNameError").innerText = " ";
            IsTrue = 1;
        } else if (!LastName.match(alphaExp)) {
            document.getElementById("LastNameError").innerText = "* For your Last Name please use alphabets only *";
            CssOperation(last);
            IsTrue = 0;
        }
    }
    //console.log("last: " + IsTrue);
    return IsTrue;
}

function CheckContactNumber() {
    var PhoneNumber = document.getElementById("phone-number").value;
    var numericExpression = /^[0-9]+$/;
    if (PhoneNumber.length < 1) {
        document.getElementById("PhoneNumberError").innerHTML = "* PhoneNumber Field is Empty *";
        CssOperation(phoneerror);
        IsTrue = 0;
    } else if (!PhoneNumber.match(numericExpression)) {
        document.getElementById("PhoneNumberError").innerHTML = "* PhoneNumber must contains numbers only *";
        CssOperation(phoneerror);
        IsTrue = 0;
    } else if (PhoneNumber.length < 10) {
        document.getElementById("PhoneNumberError").innerHTML = "* PhoneNumber must be 10 Number *";
        CssOperation(phoneerror);
        IsTrue = 0;
    } else {
        document.getElementById("PhoneNumberError").innerHTML = " ";
        IsTrue = 1;
    }
    // console.log("contact: " + IsTrue);
    return IsTrue;
}

function CheckEmail() {
    var Email = document.getElementById("email").value;
    var emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email.length < 1) {
        document.getElementById("EmailError").innerHTML = "* Email Field is Empty *";
        CssOperation(emailerror);
        IsTrue = 0;
    } else if (Email.match(emailExp)) {
        document.getElementById("EmailError").innerHTML = " ";
        IsTrue = 1;
    } else if (!Email.match(emailExp)) {
        document.getElementById("EmailError").innerHTML = "* Email is Invalid *";
        CssOperation(emailerror);
        IsTrue = 0;
    } else {
        document.getElementById("EmailError").innerHTML = " ";
        IsTrue = 1;
    }
    // console.log("email: " + IsTrue);
    return IsTrue;
}

function CheckAddress() {
    var Address = document.getElementById("address").value;
    if (Address.length < 1) {
        document.getElementById("AddressError").innerHTML = "* Address Field is Empty *";
        CssOperation(addresserror);
        IsTrue = 0;
    } else {
        document.getElementById("AddressError").innerHTML = "";
        IsTrue = 1;
    }
    // console.log("addre: " + IsTrue);
    return IsTrue;
}

function CheckCity() {
    var City = document.getElementById("city");
    var strUser = City.options[City.selectedIndex].value;

    var strUser1 = City.options[City.selectedIndex].text;
    if (strUser == 0) {
        document.getElementById("CityError").innerHTML = "* City Field is Required *";
        CssOperation(cityerror);
        IsTrue = 0;
    } else {
        IsTrue = 1;
        document.getElementById("CityError").innerHTML = " ";
    }
    //console.log("city: " + IsTrue);
    return IsTrue;
}

function CheckGender() {
    var radios = document.getElementsByName("gender");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) {
            formValid = true;
            document.getElementById("GenderError").innerHTML = "";
            IsTrue = 1;
            console.log(radios.length);
        }
        i++;
    }

    if (!formValid) {
        document.getElementById("GenderError").innerHTML = "* Gender Field is Required *";
        CssOperation(gendererror);
        IsTrue = 0;
    }
    //console.log("gender: " + IsTrue);
    return IsTrue;
}

function Reset() {
    document.getElementById("formid").reset();
    document.getElementById("FirstNameError").innerText = " ";
    document.getElementById("LastNameError").innerText = " ";
    document.getElementById("PhoneNumberError").innerHTML = " ";
    document.getElementById("EmailError").innerHTML = " ";
    document.getElementById("AddressError").innerHTML = "";
    document.getElementById("CityError").innerHTML = " ";
    document.getElementById("GenderError").innerHTML = "";
}

function formValidation() {
    if (CheckFirstName() == 1 && CheckLastName() == 1 && CheckContactNumber() == 1 && CheckEmail() == 1 && CheckAddress() == 1 && CheckCity() == 1 && CheckGender() == 1) {
        alert("Successfull");
        return true;
    } else {
        alert("Error");
        return false;
    }
}

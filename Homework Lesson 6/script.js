

//Task 1 solved
function myfunc1() {
    let input = document.getElementById("myTextBox").value;

    if (!isNaN(input) && input.length == 9) {
        console.log(true);
        return true;
    }

    console.log(false);
    return false;
}

// Task 2 solved
function myfunc2() {
    let input = document.getElementById("myTextBox").value;
    let number = parseInt(input);
    let count;

    if (number < 2) {
        console.log("מספר לא ראשוני");
        return;
    }

    for (count = 2; count < number; count++) {
        if (number % count == 0) {
            break;
        }
    }

    if (count == number) {
        console.log("מספר ראשוני");
    } else {
        console.log("מספר לא ראשוני");
    }

}


//Task 3 solved
function myfunc3() {
    let input = document.getElementById("myTextBox").value;
    let result = input;
    let letter = null;
    let spaceLetter = null;

    for (let count = 0; count < input.length; count++) {
        letter = input.charAt(count);
        if (letter == letter.toUpperCase()) {
            spaceLetter = " " + letter;
            result = result.replace(letter, spaceLetter);
        }
    }
    console.log(result)
}

//Task 4 solved
function myfunc4(longString, shortString) {

    let count = 0;
    for (let index = 0; index < longString.length - shortString.length; index++) {
        if (longString.substring(index, index + shortString.length) == shortString) {
            count++;
        }
    }
    console.log(count);
}

//Task 5
function myfunc5() {
    let inputString = document.getElementById("myTextBox").value;
    let newStr = inputString.split("");
    let n = newStr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (newStr[j] > newStr[j + 1]) {
                let temp = newStr[j];
                newStr[j] = newStr[j + 1];
                newStr[j + 1] = temp;
            }
        }
    }
    let newInput = newStr.toString()

    for (let p = 0; p < newInput.length - 1; p++) {
        if (newInput.includes(",")) {
            newInput = newInput.replace(",", "")
        }
    }

    console.log(newInput)
}





// Task calculator
function appearOnDisplay(selectedValue) {
  document.getElementById('display').value += selectedValue;
}

function clearDisplay() {
  document.getElementById('display').value = "";
}

function result() {
  let equasion = document.getElementById('display').value;
  let a = "";
  let b = "";
  let resulted = equasion;

    if (equasion.includes("*")) {
    let splitted = equasion.split('*');
    a = parseInt(splitted[0]);
    b = parseInt(splitted[1]);
    resulted = a * b;
    document.getElementById('display').value = resulted;

  } else if (equasion.includes("/")) {
    let splitted = equasion.split('/');
    a = parseInt(splitted[0]);
    b = parseInt(splitted[1]);
    resulted = a / b;
    document.getElementById('display').value = resulted;

  } else if (equasion.includes("-")) {
    let splitted = equasion.split('-');
    a = parseInt(splitted[0]);
    b = parseInt(splitted[1]);
    resulted = a - b;
    document.getElementById('display').value = resulted;

  } else if (equasion.includes("+")) {
    let splitted = equasion.split('+');
    a = parseInt(splitted[0]);
    b = parseInt(splitted[1]);
    resulted = a + b;
    document.getElementById('display').value = resulted;

  }



}

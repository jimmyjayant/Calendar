var currentyear = document.getElementById("currentyear");
currentyear.innerText = new Date().getFullYear();

var curmonthyear = document.getElementById("monthandyear");
switch(new Date().getMonth())
{
    case 0:
    curmonthyear.innerText = `January, ${currentyear.innerText}`;
    break;

    case 1:
    curmonthyear.innerText = `February, ${currentyear.innerText}`;
    break;

    case 2:
    curmonthyear.innerText = `March, ${currentyear.innerText}`;
    break;

    case 3:
    curmonthyear.innerText = `April, ${currentyear.innerText}`;
    break;

    case 4:
    curmonthyear.innerText = `May, ${currentyear.innerText}`;
    break;

    case 5:
    curmonthyear.innerText = `June, ${currentyear.innerText}`;
    break;

    case 6:
    curmonthyear.innerText = `July, ${currentyear.innerText}`;
    break;

    case 7:
    curmonthyear.innerText = `August, ${currentyear.innerText}`;
    break;

    case 8:
    curmonthyear.innerText = `September, ${currentyear.innerText}`;
    break;

    case 9:
    curmonthyear.innerText = `October, ${currentyear.innerText}`;
    break;

    case 10:
    curmonthyear.innerText = `November, ${currentyear.innerText}`;
    break;

    case 11:
    curmonthyear.innerText = `December, ${currentyear.innerText}`;
    break;
}

function previousyear() {
    currentyear.innerText = (Number(currentyear.innerText) - 1);
}

function nextyear() {
    currentyear.innerText = (Number(currentyear.innerText) + 1);
}

function jan() {
    curmonthyear.innerText = `January, ${Number(currentyear.innerText)}`;
}

function feb() {
    curmonthyear.innerText = `February, ${Number(currentyear.innerText)}`;
}

function mar() {
    curmonthyear.innerText = `March, ${Number(currentyear.innerText)}`;
}

function apr() {
    curmonthyear.innerText = `April, ${Number(currentyear.innerText)}`;
}

function may() {
    curmonthyear.innerText = `May, ${Number(currentyear.innerText)}`;
}

function jun() {
    curmonthyear.innerText = `June, ${Number(currentyear.innerText)}`;
}

function jul() {
    curmonthyear.innerText = `July, ${Number(currentyear.innerText)}`;
}

function aug() {
    curmonthyear.innerText = `August, ${Number(currentyear.innerText)}`;
}

function sep() {
    curmonthyear.innerText = `September, ${Number(currentyear.innerText)}`;
}

function oct() {
    curmonthyear.innerText = `October, ${Number(currentyear.innerText)}`;
}

function nov() {
    curmonthyear.innerText = `November, ${Number(currentyear.innerText)}`;
}

function dec() {
    curmonthyear.innerText = `December, ${Number(currentyear.innerText)}`;
}


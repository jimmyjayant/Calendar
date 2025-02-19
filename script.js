var currentyear = document.getElementById("currentyear");
currentyear.innerText = new Date().getFullYear();
var today = new Date().getDate();
var month = new Date().getMonth();
var day = new Date().getDay();
var year = new Date().getFullYear();
var defaultexpression = `${year}-${month + 1}-01`;

function displaydates(exp, inputmonth, inputyear) {
    var firstday = new Date(`${exp}`).getDay();
    var displaydatetable = document.getElementById("displaydates").childNodes[1];
    var col;
/*
    var row = (today / 7);
    var remainder = (today % 7);
    if(remainder == 0)
    {
        row = row;
    }
    else
    {
        row = Math.ceil(row);
    }
*/
    switch(firstday)
    {
        case 0:
        col = 1;
        break;

        case 1:
        col = 3;
        break;

        case 2:
        col = 5;
        break;

        case 3:
        col = 7;
        break;

        case 4:
        col = 9;
        break;

        case 5:
        col = 11;
        break;

        case 6:
        col = 13;
        break;
    }

    // Loop for clearing the table's data cell for displaying dates. So that when the user clicks on one month and then on another, the dates from previous month does not remain present in the current month. 
    for(let i = 1; i <= 6; i++)
    {
        for(let j = 1; j <= 13; j += 2)
        {
            displaydatetable.childNodes[`${2*i}`].childNodes[`${j}`].innerHTML = "";
        }
    }

    for(let i = 1, counter = 1, date = 1; i <= 6; i++, counter++)
    {
        let j = 1;
        if(counter == 1)
        {
            j = col;
        }

        for(; date <= 31, j <= 13; j += 2, date++)
        {
            // For February Month, when the year is leap year, the last date is 29 else 28
            if(inputmonth == 1)
            {
                // Leap Year 
                if((inputyear % 4) == 0)
                {
                    if(date == 30)
                    break;
                }
                else
                {
                    if(date == 29)
                    break;
                }
            }

            // Condition for 30 days month
            if((inputmonth == 3) || (inputmonth == 5) || (inputmonth == 8) || (inputmonth == 10))
            {
                if(date == 31)
                    break;
            }
            // Condition for 31 days month 
            else
            {
                if(date == 32)
                    break;
            }

            if((inputmonth == month) && (inputyear == year) && (date == today))
            {
                displaydatetable.childNodes[`${2*i}`].childNodes[`${j}`].style.border = "2px solid black";
            }
            else
            {
                displaydatetable.childNodes[`${2*i}`].childNodes[`${j}`].style.border = "";
            }

            displaydatetable.childNodes[`${2*i}`].childNodes[`${j}`].innerHTML = date;
        }
    }
/*
    let date = today;

    for(let i = row, counter = 1; i <= 5; i++, counter++)
    {
        let j = 1;

        if(counter == 1)
        {
            j = col;
        }
        //console.log(i);
        //console.log(j);
        //console.log(counter);

        for(; date <= 31, j <= 13; j += 2, date++)
        {
            if(month == 1)
            {
                if((new Date().getFullYear() % 4) == 0)
                {
                    if(date == 30)
                    break;
                }
                else
                {
                    if(date == 29)
                    break;
                }
            }

            if((month == 3) || (month == 5) || (month == 8) || (month == 10))
            {
                if(date == 31)
                    break;
            }
            
            displaydatetable.childNodes[`${2*i}`].childNodes[`${j}`].innerHTML = date;
        }
    }

    date = today-1;

    for(let x = row, counter = 1; x > 0; x--, counter++)
    {
        let m = 13;

        if(counter == 1)
        {
            m = col-2;
        }
        console.log(x);
        console.log(m);
        console.log(counter);

        for(; date >= 1, m>=1; m -= 2, --date)
        {
            displaydatetable.childNodes[`${2*x}`].childNodes[`${m}`].innerHTML = date;
        }
    }
*/
}

displaydates(defaultexpression, month, year);

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
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 0;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function feb() {
    curmonthyear.innerText = `February, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 1;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function mar() {
    curmonthyear.innerText = `March, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 2;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function apr() {
    curmonthyear.innerText = `April, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 3;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function may() {
    curmonthyear.innerText = `May, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 4;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function jun() {
    curmonthyear.innerText = `June, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 5;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function jul() {
    curmonthyear.innerText = `July, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 6;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function aug() {
    curmonthyear.innerText = `August, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 7;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function sep() {
    curmonthyear.innerText = `September, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 8;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function oct() {
    curmonthyear.innerText = `October, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 9;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function nov() {
    curmonthyear.innerText = `November, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 10;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function dec() {
    curmonthyear.innerText = `December, ${Number(currentyear.innerText)}`;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 11;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
}

function menu() {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.style.width = "calc(50%)";
    if(sidebar.style.display == "block")
    sidebar.style.display = "none";
    else
    sidebar.style.display = "block";
}

window.addEventListener("resize", () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.style.width = "";
    sidebar.style.display = "";
});

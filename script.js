var currentyear = document.getElementById("currentyear");
var curmonthyear = document.getElementById("monthandyear");
currentyear.innerText = new Date().getFullYear();
var today = new Date().getDate();
var month = new Date().getMonth();
var selectedmonth = month;
var day = new Date().getDay();
var year = new Date().getFullYear();
var defaultexpression = `${year}-${month + 1}-01`;

var nolocalstorage = document.getElementById("nolocalstorage");

var eventsdiv = document.querySelector(".events");

var entereventdescriptiondiv = document.getElementById("entereventdescription");

var eventdescriptiondiv_second_p = document.querySelector(".eventdescription p:nth-child(2)");

var enterevents = document.getElementById("enterevents");

var eventdate;

var eventlist = document.getElementById("eventlist");

var noevent = document.getElementById("noevent");

var sidebar = document.querySelector(".sidebar");

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
            displaydatetable.childNodes[`${2*i}`].childNodes[`${j}`].style.backgroundColor = "";
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

            if(typeof(Storage) != "undefined")
            {
                let eventdate = `${date} ${curmonthyear.innerText}`;
                                
                let currentdayevent = localStorage.getItem(eventdate) ? 
                                      JSON.parse(localStorage.getItem(eventdate)) : [];

                if(currentdayevent.length != 0)
                {
                    displaydatetable.childNodes[`${2*i}`].childNodes[`${j}`].style.backgroundColor = "lightgreen";
                }
            }
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

function previousyear() {
    currentyear.innerText = (Number(currentyear.innerText) - 1);
}

function nextyear() {
    currentyear.innerText = (Number(currentyear.innerText) + 1);
}

function jan() {
    curmonthyear.innerText = `January, ${Number(currentyear.innerText)}`;
    selectedmonth = 0;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 0;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function feb() {
    curmonthyear.innerText = `February, ${Number(currentyear.innerText)}`;
    selectedmonth = 1;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 1;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function mar() {
    curmonthyear.innerText = `March, ${Number(currentyear.innerText)}`;
    selectedmonth = 2;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 2;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function apr() {
    curmonthyear.innerText = `April, ${Number(currentyear.innerText)}`;
    selectedmonth = 3;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 3;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function may() {
    curmonthyear.innerText = `May, ${Number(currentyear.innerText)}`;
    selectedmonth = 4;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 4;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function jun() {
    curmonthyear.innerText = `June, ${Number(currentyear.innerText)}`;
    selectedmonth = 5;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 5;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function jul() {
    curmonthyear.innerText = `July, ${Number(currentyear.innerText)}`;
    selectedmonth = 6;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 6;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function aug() {
    curmonthyear.innerText = `August, ${Number(currentyear.innerText)}`;
    selectedmonth = 7;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 7;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function sep() {
    curmonthyear.innerText = `September, ${Number(currentyear.innerText)}`;
    selectedmonth = 8;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 8;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function oct() {
    curmonthyear.innerText = `October, ${Number(currentyear.innerText)}`;
    selectedmonth = 9;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 9;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function nov() {
    curmonthyear.innerText = `November, ${Number(currentyear.innerText)}`;
    selectedmonth = 10;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 10;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function dec() {
    curmonthyear.innerText = `December, ${Number(currentyear.innerText)}`;
    selectedmonth = 11;
    let inputyear = Number(currentyear.innerText);
    let inputmonth = 11;
    displaydates(`${inputyear}-${inputmonth + 1}-01`, inputmonth, inputyear);
    eventsdiv.style.display = "none";
}

function menu() {
    if(sidebar.style.display == "block")
    {
        sidebar.style.display = "none";
        sidebar.style.width = "";
    }
    else
    {
        sidebar.style.display = "block";
        sidebar.style.width = "calc(50%)";
    }
}

window.addEventListener("resize", () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.style.width = "";
    sidebar.style.display = "";
});


function addevent() {
    if(typeof(Storage) != undefined)
    {
        entereventdescriptiondiv.style.display = "block";
    }
    
    else
    {
        nolocalstorage.style.display = "block";
    }
}

function showevent(eventdate) {

    eventsdiv.style.display = "block";

    // eventdate is in the format `Date Month(Name), Year`
    if(typeof(Storage) != "undefined")
    {
        var getcurrentdayevent = localStorage.getItem(eventdate) ? 
                                JSON.parse(localStorage.getItem(eventdate)) : [];

        nolocalstorage.style.display = "none";

        if((getcurrentdayevent.length) != 0)
        {
            eventdescriptiondiv_second_p.style.display = "block";
            eventlist.style.display = "block";
            noevent.style.display = "none";

            let eventarray = "";

            for(let i = 0; i < getcurrentdayevent.length; i++)
            {
                if(getcurrentdayevent[i] == "")
                continue;

                eventarray += "<li>" + getcurrentdayevent[i] + "<li>";
            }
            eventlist.innerHTML = eventarray;
        }
        else
        {
            eventdescriptiondiv_second_p.style.display = "none";
            eventlist.style.display = "none";
            noevent.style.display = "block";
        }
    }
    else
    {
        eventdescriptiondiv_second_p.style.display = "none";
        eventlist.classList.style.display = "none";
        nolocalstorage.style.display = "block";
    }
}

//showevent(`${today} ${curmonthyear.innerText}`);

const td = Array.from(document.querySelectorAll("td"));

var lastClicked = null;

td.forEach((td) => {
    td.addEventListener("click", (event) => {
        eventdate = event.target.innerText + " " + curmonthyear.innerText;
        entereventdescriptiondiv.style.display = "none";
        eventsdiv.style.display = "";
        if(lastClicked)
        {
            if((lastClicked.innerText == today) && 
                ((curmonthyear.innerText).slice(-4) == year) && 
                (selectedmonth == month))
            {
                lastClicked.style.border = "2px solid black";
            }
            else
            {
                lastClicked.style.border = "none";
            }
        }

        td.style.border = "2px solid blue";

        lastClicked = td;
        showevent(eventdate);
    });
});

function add(eventdate = `${today} ${curmonthyear.innerText}`) {
    if(enterevents.value == "")
    {
        alert("Please enter the event.");
    }
    else
    {
        console.log(eventdate);
        var setcurrentdayevent = localStorage.getItem(eventdate) ? 
                                JSON.parse(localStorage.getItem(eventdate)) : [];

        console.log(setcurrentdayevent);

        setcurrentdayevent.push(enterevents.value);

        localStorage.setItem(eventdate, JSON.stringify(setcurrentdayevent));

        location.reload(); 
    }

    console.log(setcurrentdayevent);
}

function cancel() {
    entereventdescriptiondiv.style.display = "none";
}

function reset() {
    enterevents.value = "";
}

function hideevents() {
    eventsdiv.style.display = "none";
}

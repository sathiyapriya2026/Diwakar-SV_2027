// Load saved data
window.onload = function () {
    loadData();
};

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// NOTES
function addNote() {
    let input = document.getElementById("noteInput");
    let notes = getData("notes");

    notes.push(input.value);
    saveData("notes", notes);
    input.value = "";

    loadData();
}

// TIMETABLE
function addTime() {
    let input = document.getElementById("timeInput");
    let times = getData("times");

    times.push(input.value);
    saveData("times", times);
    input.value = "";

    loadData();
}

// EVENTS
function addEvent() {
    let input = document.getElementById("eventInput");
    let events = getData("events");

    events.push(input.value);
    saveData("events", events);
    input.value = "";

    loadData();
}

// LOAD DATA
function loadData() {
    display("notes", "notesList");
    display("times", "timeList");
    display("events", "eventList");
}

// DISPLAY FUNCTION
function display(key, listId) {
    let data = getData(key);
    let list = document.getElementById(listId);
    list.innerHTML = "";

    data.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item;

        // Delete on click
        li.onclick = () => {
            data.splice(index, 1);
            saveData(key, data);
            loadData();
        };

        list.appendChild(li);
    });
}
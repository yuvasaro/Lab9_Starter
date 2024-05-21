document.addEventListener("DOMContentLoaded", (event) => {
    let output = document.querySelector('output');
    let buttons = document.querySelector('#error-btns');
    let form = document.querySelector('form');
    
    let log = document.querySelector('#log');
    let error = document.querySelector('#error');
    let count = document.querySelector('#count');
    let warn = document.querySelector('#warn');
    let assert = document.querySelector('#assert');
    let clear = document.querySelector('#clear');
    let dir = document.querySelector('#dir');
    let dirxml = document.querySelector('#dirxml');
    let groupStart = document.querySelector('#group-start');
    let groupEnd = document.querySelector('#group-end');
    let table = document.querySelector('#table');
    let timerStart = document.querySelector('#timer-start');
    let timerEnd = document.querySelector('#timer-end');
    let trace = document.querySelector('#trace');
    let trigger = document.querySelector('#trigger');

    log.addEventListener('click', () => {
        console.log("The output is " + output.innerHTML);
    });
    error.addEventListener('click', () => {
        console.error("Error, I don't like the output " + output.innerHTML);
    });
    count.addEventListener('click', () => {
        console.count("Number of times the output has been " + output.innerHTML);
    });
    warn.addEventListener('click', () => {
        console.warn("Warning: The output is " + output.innerHTML);
    });
    assert.addEventListener('click', () => {
        console.assert(typeof(output.innerHTML) === typeof(0), "%o", output.innerHTML + " is actually still a string");
    });
    clear.addEventListener('click', () => {
        console.clear();
    });
    dir.addEventListener('click', () => {
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        formObject['output'] = output.innerHTML;
        console.dir(formObject);
    });
    dirxml.addEventListener('click', () => {
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        formObject['output'] = output.innerHTML;
        console.dirxml(formObject);
    });
    groupStart.addEventListener('click', () => {
        console.group("Group " + output.innerHTML);
    });
    groupEnd.addEventListener('click', () => {
        console.groupEnd();
        console.log("Group ended");
    });
    table.addEventListener('click', () => {
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        formObject['output'] = output.innerHTML;
        console.table(formObject);
    });
    timerStart.addEventListener('click', () => {
        console.time();
        console.log("Timer started");
    });
    timerEnd.addEventListener('click', () => {
        console.timeEnd();
    });
    trace.addEventListener('click', () => {
        console.trace();
    });
    trigger.addEventListener('click', () => {
        throw new Error(output.innerHTML + " is a bad output");
    });
});

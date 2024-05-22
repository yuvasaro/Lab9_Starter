document.addEventListener("DOMContentLoaded", (event) => {
    // step 5
    window.onerror = function (errorMessage, url, lineNumber) {
        console.log("Some blunder transpired. Quite the tragedy.");
    }

    let output = document.querySelector('output');
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
        console.count("Spam counter");
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
        console.group("Group");
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

    function traceThrough() {
        console.trace();
    }

    trace.addEventListener('click', () => {
        traceThrough();
    });

    trigger.addEventListener('click', () => {
        throw new Error(output.innerHTML + " is a bad output");
    });

    let ghost = document.querySelector("#ghost");
    ghost.addEventListener('click', () => {
        try {
            let ghostText = document.querySelector("ghost-text"); // oops, I used let instead of var
            ghostText.textContent = "Found the ghost!";
        } catch (error) {
            console.error("[try/catch] tried to access ghost text");
        } finally {
            console.log("[finally] oh well, the ghost remains a ghost");
        }
    });

    let nerd = document.querySelector("#nerd");
    nerd.addEventListener('click', () => {
        let important = document.querySelector("#important");
        important.textContent = "Important message! Check console!!!";
        throw new NerdError("You are a nerd");
    });                
});

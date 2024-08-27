// Access to the id from the html document
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

// addEventListener() checkBtn 
checkBtn.addEventListener("click",() => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    if(!userInput.value) {
        alert("Please provide a phone number");
    } else if (regex.test(userInput.value)){
        result.innerText = `Valid US number: ${userInput.value}`;
    } else {
        result.innerText = `Invalid US number: ${userInput.value}`;
    }  
});

// addEventListener() clearBtn 
clearBtn.addEventListener("click", () => result.innerText = "");


/*
Regex:
Optional "1" with a space => (1\s?)?
3 digits with optional ( ) => (\(\d{3}\)|\d{3})
Optional - or space => ([\s-]?)
3 digits => \d{3}
Optional - or space => ([\s-]?)
4 digits => \d{4}
*/
// Access to the id from the html document
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

// addEventListener() checkBtn 
checkBtn.addEventListener("click",() => {
    if(!userInput.value){
        alert("Please provide a phone number");
    }
})

// addEventListener() clearBtn 
clearBtn.addEventListener("click", () => result.innerText = "");

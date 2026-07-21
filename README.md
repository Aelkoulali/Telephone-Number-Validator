# 🗂️ Telephone Number Validator 📞
The Telephone Number Validator is a web project made with HTML, CSS, and JavaScript. It uses a regular expression (regex) to check whether a user’s input matches valid US phone number formats, including different separators like spaces, dashes, or parentheses.

The app runs validation with addEventListener(), gets the input using getElementById(), and uses regex.test() to display whether the phone number is valid or not.

## ✅ Key Features
- Validates a user’s US telephone number format.
- Supports multiple input styles (spaces, dashes, parentheses, or no separators).
- Ensures the area code is required.
- If a country code is included, it must be 1 (US) to be accepted.
- Shows a clear success/error message based on the validation result.

## 🛠️ Tech Stack
- HTML
- CSS
- JavaScript: 
   - regex to define the allowed US phone formats
   - regex.test() to check if the entered number matches the pattern
   - addEventListener() to run validation on submit/button click
   - getElementById() to read the input value and update the result text


## ▶️ How to Run
1. Open `index.html` in your browser.


## ℹ️ In the US, phone numbers can be formatted in many ways. Here are some examples of valid formats for US phone numbers:
### ☎️ 1 555-555-5555
### ☎️ 1 (555) 555-5555
### ☎️ 1(555)555-5555
### ☎️ 1 555 555 5555
### ☎️ 5555555555
### ☎️ 555-555-5555
### ☎️ (555)555-5555
### Note that the area code is required. Also, if the country code is provided, you must confirm that the country code is 1.

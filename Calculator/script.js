const display = document.getElementById("display");

// 1. Adds numbers or operators to the display
function appendToDisplay(input) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input;
}

// 2. Clears the entire screen (AC button)
function clearDisplay() {
    display.value = "";
}

// 3. Deletes only the last character (DEL button)
function deleteLast() {
    // .slice(0, -1) removes the very last character in the string
    display.value = display.value.slice(0, -1);
}

// 4. Performs the math (Equal button)
function calculate() {
    try {
        let expression = display.value
            .replace(/÷/g, "/")
            .replace(/x/g, "*")
            .replace(/−/g, "-");

        // --- PERCENTAGE LOGIC ---
        // Converts "50%" to "(50/100)" so eval can solve it
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        if (!expression.trim()) {
            display.value = "";
            return;
        }

        // Calculate the result
        let result = eval(expression);

        // Limit long decimals to 8 places to keep the display clean
        display.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));

    } catch (error) {
        display.value = "Error";
    }
}
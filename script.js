
function speak(message) {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "te-IN";
    speech.rate = 0.85;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}

function calculateBudget() {
    const incomeInput = document.getElementById("income");
    const expensesInput = document.getElementById("expenses");
    const result = document.getElementById("result");

    const income = Number(incomeInput.value);
    const expenses = Number(expensesInput.value);

    if (incomeInput.value === "" || expensesInput.value === "") {
        result.textContent = "Please enter both amounts.";
        return;
    }

    if (income < 0 || expenses < 0) {
        result.textContent = "Please enter amounts greater than or equal to zero.";
        return;
    }

    const savings = income - expenses;

    if (savings >= 0) {
        result.textContent =
            "Your monthly savings: ₹" + savings.toLocaleString("te-IN");
    } else {
        result.textContent =
            "You are spending ₹" +
            Math.abs(savings).toLocaleString("te-IN") +
            " more than your income.";
    }
}

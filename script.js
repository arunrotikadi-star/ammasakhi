
function speak(message, language = "en-IN") {
    if (!("speechSynthesis" in window)) {
        alert("Speech is not supported in this browser.");
        return;
    }

    const speech = new SpeechSynthesisUtterance(message);
    const voices = window.speechSynthesis.getVoices();

    let voice;

    if (language === "te-IN") {
        voice = voices.find(v =>
            v.lang.toLowerCase().startsWith("te")
        );
    }

    if (!voice) {
        voice = voices.find(v =>
            v.lang === language
        );
    }

    if (voice) {
        speech.voice = voice;
    }

    speech.lang = language;
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
            "Your monthly savings: ₹" + savings.toLocaleString("en-IN");
    } else {
        result.textContent =
            "You are spending ₹" +
            Math.abs(savings).toLocaleString("en-IN") +
            " more than your income.";
    }
}

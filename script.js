document.getElementById("quizForm").addEventListener("submit", function(event){
    event.preventDefault();
    if (validateAnswers()) {
        calculateResults();
    } else {
        const errorElement = document.getElementById('errorMessage');
        displayError("Ответьте на все вопросы, пожалуйста", "red");
    }

    
});

function validateAnswers() {
    const existingErrors = document.querySelectorAll('.error');
    existingErrors.forEach(existingError => {
        existingError.parentNode.removeChild(existingError);
    });

    const questions = document.querySelectorAll('.question');
    let allAnswered = true;
    questions.forEach(question => {
        const answer = question.querySelector('input[type="radio"]:checked');
        if (!answer) {
            allAnswered = false;
            displayError("Ответьте на этот вопрос.", "red", question);
        }
    });
    return allAnswered;
}

function calculateResults() {
    let categoryPoints = {
        "Вспоможение": 0,
        "Лидерство": 0,
        "Гостеприимство": 0,
        "Восстановление": 0,
        "Управление": 0,
        "Различение": 0,
        "Вера": 0,
        "Даяние": 0,
        "Милосердие": 0,
        "Мудрость": 0,
        "Увещевание": 0,
        "Учительство": 0,
        "Пасторство": 0,
        "Миссионерство": 0,
        "Евангелизм": 0,
        "Ходатайство": 0,
        "Поклонение": 0
    };

    document.querySelectorAll(".question").forEach(function(question){
        let selectedOption = question.querySelector("input[type='radio']:checked");
        if(selectedOption) {
            let points = parseInt(selectedOption.value);
            let category = question.getAttribute("data-category");
            categoryPoints[category] += points;
        }
    });

    // Output the category points
    console.log(categoryPoints);

     // Show results section
    document.getElementById("results").style.display = "block";
    
    document.getElementById("category1Results").innerHTML = `Вспоможение: ${categoryPoints["Вспоможение"]}`;
    document.getElementById("category2Results").innerHTML = `Лидерство: ${categoryPoints["Лидерство"]}`;
    document.getElementById("category3Results").innerHTML = `Гостеприимство: ${categoryPoints["Гостеприимство"]}`;
    document.getElementById("category4Results").innerHTML = `Восстановление: ${categoryPoints["Восстановление"]}`;
    document.getElementById("category5Results").innerHTML = `Управление: ${categoryPoints["Управление"]}`;
    document.getElementById("category6Results").innerHTML = `Различение: ${categoryPoints["Различение"]}`;
    document.getElementById("category7Results").innerHTML = `Вера: ${categoryPoints["Вера"]}`;
    document.getElementById("category8Results").innerHTML = `Даяние: ${categoryPoints["Даяние"]}`;
    document.getElementById("category9Results").innerHTML = `Милосердие: ${categoryPoints["Милосердие"]}`;
    document.getElementById("category10Results").innerHTML = `Мудрость: ${categoryPoints["Мудрость"]}`;
    document.getElementById("category11Results").innerHTML = `Увещевание: ${categoryPoints["Увещевание"]}`;
    document.getElementById("category12Results").innerHTML = `Учительство: ${categoryPoints["Учительство"]}`;
    document.getElementById("category13Results").innerHTML = `Пасторство: ${categoryPoints["Пасторство"]}`;
    document.getElementById("category14Results").innerHTML = `Миссионерство: ${categoryPoints["Миссионерство"]}`;
    document.getElementById("category15Results").innerHTML = `Евангелизм: ${categoryPoints["Евангелизм"]}`;
    document.getElementById("category16Results").innerHTML = `Ходатайство: ${categoryPoints["Ходатайство"]}`;
    document.getElementById("category17Results").innerHTML = `Поклонение: ${categoryPoints["Поклонение"]}`;
}

function displayError(message, color, element) {
    const error = document.createElement("p");
    error.textContent = message;
    error.style.color = color;
    error.classList.add("error");

    if (element) {
        element.appendChild(error);
    } else {
        document.getElementById("app").appendChild(error);
    }
}
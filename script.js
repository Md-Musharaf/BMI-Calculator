function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight === "" || height === "") {
        document.getElementById('result').innerHTML = "Please fill in both fields.";
        return;
    }

    // Convert height from cm to meters
    height = height / 100;

    // Calculate BMI
    let bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display result
    document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category})`;
}

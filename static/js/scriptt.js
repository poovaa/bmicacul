function calculateBMI() {
    // Get the values from the input fields
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const heightUnit = document.getElementById('heightUnit').value;

    // Check if the inputs are valid
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Convert height to meters if needed
    let heightInMeters;
    if (heightUnit === "cm") {
        heightInMeters = height / 100; // Convert cm to meters
    } else {
        heightInMeters = height * 0.3048; // Convert feet to meters
    }

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Display the result
    document.getElementById('result').value = bmi;

    // Categorize the result
    categorizeBMI(bmi);
}

function categorizeBMI(bmi) {
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    alert(`Your BMI is ${bmi} and you are categorized as: ${category}`);
}

function resetForm() {
    document.getElementById('bmiForm').reset();
    document.getElementById('result').value = "";
}

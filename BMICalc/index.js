//Kilograms, Meters
function bmiCalculator (weight, height) {

  let bmi = (weight/(Math.pow(height, 2)));

  bmi = Math.round(bmi);

  let interpretation;

  if (bmi >= 35) {
     interpretation = "Your BMI is " + bmi + ", so you are extremely obese."
     } else if (bmi < 35 && bmi >= 30) {
        interpretation = "Your BMI is " + bmi + ", so you are obese."
     } else if (bmi < 30 && bmi >= 25) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight."
     } else if (bmi < 25 && bmi >= 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
     } else {
        interpretation = "Your BMI is " + bmi + ", so you are underweight."
     }

    return interpretation
}

bmiCalculator(42, 1.5)

document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const calculateButton = document.getElementById('calculate');
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');
    const stepsDiv = document.getElementById('steps');

    calculateButton.addEventListener('click', calculateGCD);

    function calculateGCD() {
        const num1 = parseInt(num1Input.value);
        const num2 = parseInt(num2Input.value);

        errorDiv.textContent = '';
        resultDiv.textContent = '';
        stepsDiv.innerHTML = '';

        if (isNaN(num1) || isNaN(num2)) {
            errorDiv.textContent = 'Please enter valid numbers.';
            return;
        }

        if (num1 <= 0 || num2 <= 0) {
            errorDiv.textContent = 'Please enter positive integers.';
            return;
        }

        const steps = [];
        let a = Math.abs(num1);
        let b = Math.abs(num2);

        while (b !== 0) {
            steps.push(`GCD(${a}, ${b}):`);
            steps.push(`${a} = ${b} × ${Math.floor(a / b)} + ${a % b}`);
            const remainder = a % b;
            a = b;
            b = remainder;
        }

        steps.push(`GCD(${num1}, ${num2}) = ${a}`);

        displaySteps(steps);
        resultDiv.textContent = `The GCD of ${num1} and ${num2} is ${a}.`;
    }

    function displaySteps(steps) {
        steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.textContent = step;
            stepElement.classList.add('step');
            if (index === steps.length - 1) {
                stepElement.classList.add('final-step');
            }
            stepsDiv.appendChild(stepElement);
        });
    }
});

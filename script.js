document.addEventListener("DOMContentLoaded", function () {
    // Решение уравнений
    function solveEquation() {
        try {
            let equation = document.getElementById('equationInput').value;
            let result = math.algebra.solve(equation, 'x'); // Решаем уравнение
            document.getElementById('equationResult').innerText = "Решение: x = " + result;
        } catch (error) {
            document.getElementById('equationResult').innerText = "Ошибка! Проверьте ввод.";
        }
    }

    // Вычисление производной
    function solveDerivative() {
        try {
            let expression = document.getElementById('derivativeInput').value;
            let derivative = math.derivative(expression, 'x').toString();
            document.getElementById('derivativeResult').innerText = "Производная: " + derivative;
        } catch (error) {
            document.getElementById('derivativeResult').innerText = "Ошибка! Проверьте ввод.";
        }
    }

    // Вычисление интеграла
    function solveIntegral() {
        try {
            let expression = document.getElementById('integralInput').value;
            let integral = math.evaluate('integrate(' + expression + ', x)'); // Вычисляем интеграл
            document.getElementById('integralResult').innerText = "Интеграл: " + integral;
        } catch (error) {
            document.getElementById('integralResult').innerText = "Ошибка! Проверьте ввод.";
        }
    }

    document.getElementById('equationInput').addEventListener("keydown", (e) => {
        if (e.key === "Enter") solveEquation();
    });

    document.getElementById('derivativeInput').addEventListener("keydown", (e) => {
        if (e.key === "Enter") solveDerivative();
    });

    document.getElementById('integralInput').addEventListener("keydown", (e) => {
        if (e.key === "Enter") solveIntegral();
    });

    document.querySelector("button[onclick='solveEquation()']").addEventListener("click", solveEquation);
    document.querySelector("button[onclick='solveDerivative()']").addEventListener("click", solveDerivative);
    document.querySelector("button[onclick='solveIntegral()']").addEventListener("click", solveIntegral);
});

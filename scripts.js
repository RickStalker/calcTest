document.addEventListener('DOMContentLoaded', function () {
    console.log(2);

    let pricePerDay = 3700;
    let countDays = document.getElementById("countDays");

    const calculatorStart = document.querySelector('#calculatorStart');
    calculatorStart.addEventListener('click', calculateAmountCheck)

    function calculateAmountCheck() {
        console.log(1);
        if (countDays <= 0) alert('Не указано количество дней.');
    };

    function calculateAmount(pricePerDay, countDays) {
        let amount = 0;

        return amount;
    };
});
function getElementWidth(content, padding, border) {
    // Перетворюємо значення рядків в числа, відкидаючи "px" і використовуючи parseFloat
    var contentWidth = parseFloat(content);
    var paddingWidth = parseFloat(padding);
    var borderWidth = parseFloat(border);

    // Розрахунок загальної ширини з урахуванням box-sizing: border-box
    var totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    return totalWidth;
}

// Приклади використання функції для перевірки
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
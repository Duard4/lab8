function close_block(button) {
    var parentBlock = button.parentNode;

    if (parentBlock) {
        parentBlock.style.display = "none";
    } else {
        console.error("Не вдалося знайти батьківський блок для кнопки.");
    }
}
function print() {
    var table = document.getElementById("num_table");
    var numbers = [];
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var cellValue = parseInt(table.rows[i].cells[j].innerHTML);
            if (!isNaN(cellValue)) {
                numbers.push(cellValue);
            }
        }
    }
    numbers.sort(function(a, b) {
        return a - b;
    });
    var html = "<p>" +numbers.join(", ") + "</p>"
    document.getElementById("print").innerHTML = html;

}
function clear_all() {
    var html = "<p> </p>"
    document.getElementById("print").innerHTML = html;
}

"use strict";
console.log("test!");
$(document).ready(function () {
    var button = $(".testButton");
    button.click(function (element) {
        if (button)
            button.css("background", "red");
    });
});
//# sourceMappingURL=test.js.map
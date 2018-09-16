console.log("test!");

$(document).ready(() => {
  let button = $(".testButton");

  button.click(element => {
    if (button) button.css("background", "red");
  });
});

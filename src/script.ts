$(() => {
  $("input:not(:checked) + span").css("background-color", "yellow");
  $("input").attr("disabled", "disabled");
});

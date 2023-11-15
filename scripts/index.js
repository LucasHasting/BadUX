$(document).ready(function () {
  $(".box").on("click", function () {
    console.log($(this));
    //change border color to green
    $(this).toggleClass('clicked');

    let box_count = 0;
    $(".box").each(function () {
      //if something is selected
      if ($(this).css("border-color") === "rgb(0, 128, 0)") {
        //count it
        box_count++;
      }
    });

    //if all items are selected, fade
    if (box_count === 2) {
      $(".box").fadeOut(1500)
    }
  });
});

function reset() {
  $(".box").each(function () {
    //if something is selected, unselect it
    if ($(this).css("border-color") === "rgb(0, 128, 0)") {
      $(this).toggleClass('clicked');
    }
  });
  //show boxss
  $(".box").show();
}
$(function () {
    $("#draggable-2").draggable();
    $("#imgContainer").hover(function () {
      $("#imgContainer").effect("shake", {
        distance: 2,
      });
    });
    $("#droppable-2").droppable({
      drop: function (event, ui) {
        $("#draggable-2").draggable(false);
        $("#draggable-2").css("visibility", "hidden");
      },
    });
  });
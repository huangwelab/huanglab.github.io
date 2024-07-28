var $ = jQuery.noConflict();

// video carousel

var carousel = $('#leaders');
var leaders = document.getElementsByClassName('leader');


function careersVideoClicked(screenshot) {
  var parent = screenshot.parentElement;
  var parentId = parent.id;

  var leader1 = document.getElementById('leader_1');
  var leader2 = document.getElementById('leader_2');
  var leader3 = document.getElementById('leader_3');
  var leader4 = document.getElementById('leader_4');
  var leader5 = document.getElementById('leader_5');

  if (parentId == "leader_1") {
    carousel.empty();
    carousel.append(leader4);
    carousel.append(leader5);
    carousel.append(leader1);
    carousel.append(leader2);
    carousel.append(leader3);
  } else if (parentId == "leader_2") {
    carousel.empty();
    carousel.append(leader5);
    carousel.append(leader1);
    carousel.append(leader2);
    carousel.append(leader3);
    carousel.append(leader4);
  } else if (parentId == "leader_3") {
    carousel.empty();
    carousel.append(leader1);
    carousel.append(leader2);
    carousel.append(leader3);
    carousel.append(leader4);
    carousel.append(leader5);
  } else if (parentId == "leader_4") {
    carousel.empty();
    carousel.append(leader2);
    carousel.append(leader3);
    carousel.append(leader4);
    carousel.append(leader5);
    carousel.append(leader1);
  } else if (parentId == "leader_5") {
    carousel.empty();
    carousel.append(leader3);
    carousel.append(leader4);
    carousel.append(leader5);
    carousel.append(leader1);
    carousel.append(leader2);
  }
}







// benefits

$(".benefit").click(function(){
  $(this).toggleClass("is-active");
});

$(document).ready(function() {
  $("#gList").submit(function(event){
    var list = [];
    var nums = [".1", ".2", ".3", ".4"];
    nums.forEach(function(num){
      list.push($(num).val().toUpperCase());
    });
    list.sort();
    list.forEach(function(item) {
      $("#output ul").append("<li>" + item + "</li>");
    });
    event.preventDefault();
    $("#gList").hide();
  });

});

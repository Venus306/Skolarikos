

// ======== Main Function ==============
$(document).ready(function() {
  // ------- Tooltip ---------
  $('[data-toggle="tooltip"]').tooltip(); 

  // ------- Modal -----------
  $("#myLogin").click(function(){
    $("#myModal_Login").modal();
  });

  $("#mySignup").click(function(){
    $("#myModal_Login").modal("hide");
    $("#myModal_Signup").modal();
  });

  $("#goLogin").click(function(){
    $("#myModal_Signup").modal("hide");
    $("#myModal_Login").modal();
  });

});
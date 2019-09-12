


function myContactFilter() {
  var filterDiv = document.getElementById("contact-filter");

  if (filterDiv.style.display === "none") {
    filterDiv.style.display = "block";
    document.getElementById("myfilter").textContent = "Hide Filter ";
    
    
  } else {
    filterDiv.style.display = "none";
    document.getElementById("myfilter").textContent = "Show Filter";
  }
}


function mySwitch() {
  var checkBox = document.getElementById("togBtn");
  var myTable = document.getElementById("myTable");
  var myCard = document.getElementById("myCard");
  if (checkBox.checked == true){
    myTable.style.display = "none";
    myCard.style.display = "block";
    
  } else {
    myTable.style.display = "block";
    myCard.style.display = "none";
    
  }  
}
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
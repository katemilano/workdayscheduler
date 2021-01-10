function run(){
  /////////// Global Variables
  var now = moment();
  var date = $("#currentDay").text(now.format('MMMM Do YYYY'));
  var input = $("#description").text
  var hour = Number(now.format('H'));
  
  ////////// Grabbing each hour
  $(".hour").each(function(i, obj) {
    var str = $(this).text();
    var numString = str.substring (0, str.length - 2);
    
      // Change hour to military time if necessary
    if(numString.length === 3){
      numString = str.substring (0, str.length - 3);
    }

    var num = Number(numString);

    if(num < 8) {
      num = num + 12;
    } else {
    }

      //   Looping through each input box
      var textArea = $(".description")[i];
      
      // Comparing hour to real time and changed the input box color
      // if the time is the same as the actual time the its present styling
      if (num === hour) {
          $(textArea).removeClass("present");
          $(textArea).removeClass("future");
          $(textArea).removeClass("past");
          $(textArea).addClass("present");

      // if the time is the future as the actual time the its future styling
      } else if (num > hour){
          $(textArea).removeClass("present");
          $(textArea).removeClass("future");
          $(textArea).removeClass("past");
          $(textArea).addClass("future");

      // if the time is the past as the actual time the its past styling
      } else if (num < hour){
          $(textArea).removeClass("present");
          $(textArea).removeClass("future");
          $(textArea).removeClass("past");
          $(textArea).addClass("past");
      }

  });
    
}

//If saved button is pressed
$(".saveBtn").click(function(){
      var buttonAttr = $(this).attr("data-time");
      var storedItem = localStorage.getItem(buttonAttr);
      var textA = $("[data-time=" + buttonAttr +"]");
      var toDo = textA.val();
      localStorage.setItem(buttonAttr, toDo);

  });      

  // When page is refeshed the values will fill to saved values
  $(window).on('load',function get(){
     
      localStorage.getItem("storedItem");
      var time = $(".description").attr("data-time");

      for (var i = 0; i < 9; i++) {
          var textArea = $(".description")[i];
          var time = $(textArea).attr("data-time");

          if (localStorage.getItem(time)){
              var textAreaInput = $(textArea);
              textAreaInput.text(localStorage.getItem(time));
          }     
      }
  });

run();
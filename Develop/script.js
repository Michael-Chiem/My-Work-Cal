// Wrap all the code that interacts the DOM
$(document).ready(function() {

// Creating a saveBtn varible array
var saveBtn = $(".saveBtn");
console.log(saveBtn);

// Creating a function for the time format on the header
function displayCurrentDay() {
    var currentDate = moment().format('dddd MMMM do YYYY, h:mm:ss A');
    $("#currentDay").text(currentDate);
}

// Creating function varible with if statement to apply color code for the times.
function timeColorCode() {
  var hour = moment().hours();
  console.log("Current hour:", hour);

  $(".time-block").each(function() {
    var currentHour = parseInt($(this).attr("id").split("-")[1]);
    console.log("Block hour:", currentHour);

    if (currentHour > hour) {
      $(this).addClass("future").removeClass("past present");
    } else if (currentHour === hour) {
      $(this).addClass("present").removeClass("past future");
    } else { //<condition
      $(this).addClass("past").removeClass("present future");
    }
  });
}

// Creating a click event for the saveBtn
saveBtn.on("click", function() {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".description").val();
  localStorage.setItem(time, plan);
});

// Creating a function for local storage
function schedulePlanner() {
  $(".hour").each(function() {
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour);
    if(currentPlan !== null) {
      $(this).siblings(".description").val(currentPlan);
    }
  });
}

// Calling the function variables
schedulePlanner();
timeColorCode();
displayCurrentDay();

// Adding a clear button
$("#clearFieldsBtn").click(function(event) {
  event.preventDefault;
  $("textArea").val("");
  localStorage.clear();
});

}); // Closing the wrapping tag



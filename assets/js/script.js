// variables 
var time = moment();
var displayMoment = document.getElementById("currentDay");
displayMoment.innerHTML = time.format("M-D-YYYY, H:MMA");
var currentTime = moment().hours();


//Change textarea background color based on time
$(".hour").each(function() {

    var currentTime = moment().hours()

    if (parseInt($(this).data("time")) < currentTime) {
          $(this).next().addClass("bg-secondary")
    }
    if (parseInt($(this).data("time")) == currentTime) {
          $(this).next().addClass("bg-success")
    }
    if (parseInt($(this).data("time")) > currentTime) {
          $(this).next().addClass("bg-danger")
    }
});

// save user input to local storage
$(".saveBtn").click (function() {
    $(this).siblings("textarea").val()

    var text = $(this).siblings("textarea").val()

    localStorage.setItem("input", text)

    localStorage.getItem("input")
});

// checkTime every 5 minutes
setInterval(currentTime(), (1000 * 60) * 5);
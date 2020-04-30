//Retrieve myDay from localStorage or reset
var myDay = localStorage.getItem("myDay") ? JSON.parse(localStorage.getItem("myDay")) : [
    {time: "9AM",
    event: ""},
    {time: "10AM",
    event: ""},
    {time: "11AM",
    event: ""},
    {time: "12PM",
    event: ""},
    {time: "1PM",
    event: ""},
    {time: "2PM",
    event: ""},
    {time: "3PM",
    event: ""},
    {time: "4PM",
    event: ""},
    {time: "5PM",
    event: ""}    
];

//Create schedule
for(let i = 0; i < myDay.length; i++) {
    //Add row to schedule
    var nextRow = $("<div>");
    nextRow.addClass("row");
    nextRow.attr("id", myDay[i].time);
    $("#schedule").append(nextRow);

    //Add time to row
    var newTime = $("<div>");
    newTime.text(myDay[i].time);
    newTime.addClass("col-xs-2 col-sm-2 col-md-2 col-lg-2 hour");
    nextRow.append(newTime);

    //Add event
    var newEvent = $("<input>");
    newEvent.val(myDay[i].event);
    newEvent.addClass("col-xs-8 col-sm-8 col-md-8 col-lg-8 input");
    newEvent.attr("data-name", myDay[i].time);
    nextRow.append(newEvent);

    //Add save button
    var saveBtn = $("<button>");
    saveBtn.text("Save");
    saveBtn.addClass("col-xs-2 col-sm-2 col-md-2 col-lg-2 btn btn-primary saveBtn");
    saveBtn.attr("type", "submit");
    saveBtn.attr("data-name", i);
    nextRow.append(saveBtn);  
}

//Click button to save event
$(".input").on("keyup", function() {
    var inputText = this.value;
    $(".saveBtn").on("click", function(){
        event.preventDefault();
        var index = $(this).attr("data-name");
        myDay[index].event = inputText;
        localStorage.setItem("myDay", JSON.stringify(myDay));
    });
})

//Determine past, present, future from current time
//set classes for each
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

var hour = moment().format('HH');

//Create schedule
for(let i = 0; i < myDay.length; i++) {
    //Add row to schedule
    var nextRow = $("<div>");
    nextRow.addClass("row time-block");
    nextRow.attr("id", myDay[i].time);
    $("#schedule").append(nextRow);

    //Add time to row
    var newTime = $("<div>");
    newTime.text(myDay[i].time);
    newTime.addClass("col-xs-2 col-sm-2 col-md-2 col-lg-2 hour");
    nextRow.append(newTime);

    //Add event
    var newEvent = $("<textarea>");
    newEvent.val(myDay[i].event);
    //Determine past, present, future color from current time
    newEvent.addClass(`col-xs-8 col-sm-8 col-md-8 col-lg-8 description ${i+9 < hour ? 'past': i+9> hour ? 'future' : 'present'}`);
    newEvent.attr("data-name", myDay[i].time);
    newEvent.attr("style", "overflow-wrap:break-word;");
    nextRow.append(newEvent);

    //Add save button
    nextRow.append(`<button class="col-xs-2 col-sm-2 col-md-2 col-lg-2 btn btn-primary saveBtn" type='submit'
    data-name=${i}><i class="fas fa-save"></i></button>`);  
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

//Display today's date
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDate);
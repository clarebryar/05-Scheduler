// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    //this is referencing the click event on the save button
 // TODO: Add a listener for click events on the save button. This code should   
  $('.saveBtn').on('click', function() {
 // use the id in the containing time-block as a key to save the user input in    
var hour- = $(this).siblings('.description').val();
var hour = $(this).parent().attr('id');
  // local storage. HINT: What does `this` reference in the click listener
localStorage.setItem(hour, hour-)
console.log(hour-);
console.log(hour);
  })

  
  // function? How can DOM traversal be used to get the "hour-x" if the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function hourX () {
    var hour = dayjs().hour(); 
  $('.time-block').each(function() {
    var hourBox = parseInt($(this).attr('id').split('-')[1]);
    console.log(hourBox)
     if (hourBox < hour) {
 $(this).addClass('past'); 

} else if (hourBox === hour)  {
      $(this).removeClass('past');
      $(this).addClass('present');
  
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }   
  });
}

  hourX();

  setInterval(hourX, 60000);

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-'));
$('#hour-13 .description').val(localStorage.getItem('hour-'));
$('#hour-14 .description').val(localStorage.getItem('hour-'));
$('#hour-15 .description').val(localStorage.getItem('hour-'));
$('#hour-16 .description').val(localStorage.getItem('hour-'));
$('#hour-17 .description').val(localStorage.getItem('hour-'));

 // TODO: Add code to display the current date in the header of the page.
 $('#currentDay').text(dayjs().format('dddd, MMM DD, YYYY hh:mm:ss'), 1000);

})
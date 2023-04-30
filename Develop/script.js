// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
 
 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
    //this is referencing the click event on the save button
   
  $('.saveBtn').on('click',function() {
var task = $(this).siblings('.description').val();
var hour = $(this).parent().attr('id');
localStorage.setItem(task, hour);

  })
  
  // function? How can DOM traversal be used to get the "hour-x" if the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  function hourX () {
    var hour = dayjs().hour; 
  $('.time-block').each(function() {
    var hourBox = parseInt($('.time-block')).attr('id')
    console.log(hourBox).split('-')[1];
  
     if (hourBox < hour) {
 $('.time-block').addClass('past'); 
}
    else if (hourBox == currentHour)  {
      $('.time-block').removeClass('past');
      $('.time-block').addClass('present');
    }
    else {
      $('.time-block').removeClass('past');
      $('.time-block').removeClass('present');
      $('.time-block').addClass('future');
    }   
  });
 
  hourX();

 // TODO: Add code to display the current date in the header of the page.
 $('#currentDay').text(dayjs().format('dddd, MMM DD, YYYY hh:mm:ss'));

})
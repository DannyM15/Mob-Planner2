$(function () {

  $('.saveBtn').on('click', function () {
    console.log($(this).siblings('textarea').val());
    console.log($(this).parent('div').attr('id'));
    localStorage.setItem($(this).parent('div').attr('id'), $(this).siblings('textarea').val())
  })


  function updateBlockClass() {

    var currentHour = dayjs().hour();

    $('.time-block').each(function () {

      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

  updateBlockClass();

  var textareas = document.querySelectorAll('.description');
  console.log(textareas);
  for (let i = 0; i < textareas.length; i++) {
    textareas[i].value = localStorage.getItem(textareas[i].id)

    console.log(localStorage.getItem(textareas[i].id))
  }

  document.querySelector('#currentDay').textContent = dayjs().format('MMM DD, YYYY');
});

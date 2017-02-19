$(function() {
  $.ajax('https://www.codeschool.com/users/msharp9.json', {
    dataType: 'jsonp'
    ,success: function(result) {
      //console.log(result);
      var badges = $.map(result.courses.completed, function(completedCourse,i){
        var div = $('<div></div>');
        div.addClass('course');
        $('<h3>'+completedCourse.title+'</h3>').appendTo(div);
        $('<img src='+completedCourse.badge+'></img>').appendTo(div);
        $('<a href='+completedCourse.url+' target=_blank class="btn btn-primary">See Course</a>').appendTo(div);
        return div
      });
      $('#badges').detach().html(badges).appendTo($('.container'))
    }
  });

});

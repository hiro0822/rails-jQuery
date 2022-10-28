let title = "javascriptが使えるようになりました";
alert(title);

$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});
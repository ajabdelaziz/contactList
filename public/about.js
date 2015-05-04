function aboutMe(){
  var $container = $('#empty');
    //calling div container
  $container.empty();
  var $html = $('script[data-id="aboutMe"]').text()
  $container.append($html)
}
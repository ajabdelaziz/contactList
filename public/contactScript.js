console.log("contacts loaded")


function contacts(){
  $.ajax({
    method: "GET",
    url: "/categories",
  }).done(function(res){
    //checking results
    var $container = $('#empty');
     //calling div container
    $container.empty();
      //emptying it
    var $html = $('<main class="ui page stackable grid"><section class="eight column wide centered"><h1>Future Contacts</h1><div class = "template-holder"></div></section></main>');

    $container.append($html);
    var catEls = [];
    var $template =  $('script[data-id="templateContacts"]').text();
    res.forEach(function(categories) {
      var html = Mustache.render($template, categories);
         catEls.push(html);
    });

    $('.template-holder').append(catEls);
    $.ajax({
      method: "GET",
      url: "/contacts",
    }).done(function(res){
      var conEls = [];
      var $templateContacts =  $('script[data-id="templateCards"]').text();
      res.forEach(function(contacts) {
        var html = Mustache.render($templateContacts, contacts);
           conEls.push(html);
      });
      for(i=0; i<conEls.length; i++){
        debugger
        if(parseInt($("article").eq([i]).attr('class')) === parseInt(i+1)){
        $("article").eq([i]).append(conEls);
        }else(
          console.log("error"))
      }
    })
  })
}
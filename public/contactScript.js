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
    var $html = $('<main class="ui page stackable grid"><section class="eight column wide centered"><h1>Future Contacts</h1><div class="ui black button" onclick=location.href="#/home">Home</div></section><div class = "template-holder"></div></section></main>');

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
      var arrayofId1= []
      var arrayofId2=[]
      var arrayofId3=[]
      var arrayofId4=[]

      var $templateContacts =  $('script[data-id="templateCards"]').text();
      for(i=0; i<res.length; i++){
        if(res[i].categorieId === 1){
          arrayofId1.push(res[i])
        } else if(res[i].categorieId === 2){
          arrayofId2.push(res[i])
        }else if(res[i].categorieId === 3){
          arrayofId3.push(res[i])
        }else if(res[i].categorieId === 4){
          arrayofId4.push(res[i])
        }
      }

      appendEls1 = []
      arrayofId1.forEach(function (contacts){
      var html = Mustache.render($templateContacts, contacts);
           appendEls1.push(html);
      })
      $("article").eq(0).append(appendEls1)

      appendEls2 = []
      arrayofId2.forEach(function (contacts){
      var html = Mustache.render($templateContacts, contacts);
           appendEls2.push(html);
      })
      $("article").eq(1).append(appendEls2)

      appendEls3 = []
      arrayofId3.forEach(function (contacts){
      var html = Mustache.render($templateContacts, contacts);
           appendEls3.push(html);
      })
      $("article").eq(2).append(appendEls3)
      appendEls4 = []
      arrayofId4.forEach(function (contacts){
      var html = Mustache.render($templateContacts, contacts);
           appendEls4.push(html);
      })
      $("article").eq(3).append(appendEls4)
    //   var conEls = [];
    //   var $templateContacts =  $('script[data-id="templateCards"]').text();
    //   res.forEach(function(contacts) {
    //     var html = Mustache.render($templateContacts, contacts);
    //        conEls.push(html);
    //   })
    //   for(i=0; i<conEls.length; i++){
    //     debugger
    //     while(parseInt($("article").eq(i).attr('class')) === parseInt(res[i].categorieId)){
    //       $("article").eq(i).append(conEls[i]);
    //       if(parseInt($("article").eq(i).attr('class')) === parseInt(res[(i + 1)].categorieId)){
    //         $("article").eq(i).append(conEls[(i+1)]);
    //         break;
    //       }else{
    //         break;
    //       }
    //     }
    //   }
    })
  })
}

//look into making the id part of the cards and seeing what category they are into.  might be easier to work with that....

function savedContact(){
  $('.ui.cards').on('click', '[data-action="save"]', function(e) {  
    var row = $(e.target).parents(".clickable");
    var id = row.attr('data-num');
    var contact_name = row.find('[data-attr="contact_name"]').text();
    var Phone = row.find('[data-attr="Phone"]').text();
    var Email = row.find('[data-attr="Email"]').text();
    var City = row.find('[data-attr="City"]').text();
    var Img_url = row.find('[data-attr="Img_url"]').text();
    var saveItAll = JSON.stringify({name: contact_name,
                                    phone: Phone,
                                    city: City,
                                    email: Email,
                                    image_url: Img_url});

    $.ajax({
      method: "PUT",
      url: "/contacts/" + id,
      data: saveItAll,
      contentType: 'application/json'
    }).done(function() {
      alert('Saved!');
    })
  })
} 

function deleteContact(){
  $('.ui.cards').on('click', '[data-action="delete"]', function(e) {
    var row = $(e.target).parents(".clickable");
    var id = row.attr('data-num');

    $.ajax({
      method: "DELETE",
      url: '/contacts/' + id
    }).done(function() {
      row.remove();
      alert('Deleted!')
    })
  });
}

function addContact(){
  $('.ui.label.green').on('click', function(e) {
    var row = $(e.target).parents(".clickable");
    var id = row.attr('data-article');
    $.ajax({
      method: "POST",
      url: "/contacts",
      data: JSON.stringify({categorieId: id,
                            name: "Enter Your new Friend",
                            phone: "Enter Your new Friends Phone",
                            city: "Enter Your new Friends city",
                            email: "Enter Your new Friends email",
                            image_url:"Enter Your new Friends image"}),
      contentType: 'application/json'
    }).done(function(data) {
      var template = $('script[data-id="templateCards"]').text();
      var html = Mustache.render(template, data);

      $('.template-holder').append(html);
    })
  })
}
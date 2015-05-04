console.log("categories loaded")

function categories(){
  $.ajax({
    method: "GET",
    url: "/categories",
  }).done(function(res){
    console.log(res);
    //checking results
    var $container = $('#empty');
     //calling div container
    $container.empty();
      //emptying it
    var $html = $('<main class="ui page stackable grid"><section class="eight column wide centered"><h1>Future Categories</h1><table class="ui table celled striped"><thead><th>Name</th></thead><tbody></tbody></table><a class="ui label green"><i class="terminal icon" onclick=location.href="#categories/added"></i>.Add(newContact)</a><div class="ui black button" onclick=location.href="#/home">Home</div></section></main>');

    $container.append($html);
    var template = $('script[data-id="templateCategories"]').text();
    // var templated = Mustache.render(template, categories);
    // $('tbody').append(templated)
      // reappending it   
     var catEls = [];

    res.forEach(function(categories) {
      var html = Mustache.render(template, categories);
         catEls.push(html);
    });

    $('tbody').append(catEls);
  })
}

function addCategory(){
  $('.ui.label.green').on('click', function() {
    $.ajax({
      method: "POST",
      url: "/categories",
      data: JSON.stringify({name: "Enter your new category"}),
      contentType: 'application/json'
    }).done(function(data) {
      var template = $('script[data-id="templateCategories"]').text();
      var html = Mustache.render(template, data);

      $('tbody').append(html);
    })
  })
}

function savedCategory(){
  $('tbody').on('click', '[data-action="save"]', function(e) {
    var row = $(e.target).parents('tr');
    var id = row.attr('data-id');
    var category_name = row.find('[data-attr="category_name"]').text();
    var saveItAll = JSON.stringify({name: category_name});

    $.ajax({
      method: "PUT",
      url: "/categories/" + id,
      data: saveItAll,
      contentType: 'application/json'
    }).done(function() {
      alert('Saved!');
    })
  })
} 

function deleteCategory(){
  $('tbody').on('click', '[data-action="delete"]', function(e) {
    var row = $(e.target).parents('tr');
    var id = row.attr('data-id');

    $.ajax({
      method: "DELETE",
      url: '/categories/' + id
    }).done(function() {
      row.remove();
      alert('Deleted!')
    })
  });
}
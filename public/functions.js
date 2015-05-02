console.log("functions loaded")

function home(){
  var $container = $('#empty');
    //calling div container
  $container.empty();
  var $html = $("<div class='ui sixteen column wide stackable center aligned page grid'><div class ='six column row''><div class = 'containHeader'><h1>Future Contacts</h1></div></div><div class = 'twelve column row'><div class='ui vertical buttons centered'><div class ='containButtons'><div class='ui green button' onclick=location.href='#/categories'>categories list</div><div class='ui green button' onclick=location.href='#/add%20categories'>Add Categories</div><div class='ui green button' onclick=location.href='#/add%20contact'>Add Contact</div><div class='ui green button' onclick=location.href='#/about%20AJs'>About AJ</div></div></div></div></div>")
  $container.append($html)
}

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
    var $html = $('<main class="ui page grid"><section class="eight column wide centered"><h1>Future Categories</h1><table class="ui table celled striped"><thead><th>Name</th></thead><tbody></tbody></table><a class="ui label blue"><i class="plus icon" onclick=location.href="#categories/added"></i> Add new...</a><div class="ui green button" onclick=location.href="#/home">Home</div></section></main>');

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
$('.ui.label.blue').on('click', function() {
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
};
function saved(){
$('tbody').on('click', '[data-action="save"]', function(e) {
  var row = $(e.target).parents('tr');
  var id = row.attr('data-id');
  debugger
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
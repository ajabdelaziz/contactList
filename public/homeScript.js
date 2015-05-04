console.log("HomeScript Loaded")

function home(){
  var $container = $('#empty');
    //calling div container
  $container.empty();
  var $html = $(" <div class='ui sixteen column wide stackable center aligned page grid'><div class ='six column row'><div class = 'containHeader'><h1>Future Contacts</h1></div></div><div class = 'twelve column row'><div class='ui vertical buttons centered'><div class ='containButtons'><div class='ui green button' onclick=location.href='#/categories'>Category list</div><div class='ui green button' onclick=location.href='#/contacts'>Contact List</div><div class='ui green button' onclick=location.href='#/aboutAJ'>About AJ</div></div></div></div>")
  $container.append($html)
}

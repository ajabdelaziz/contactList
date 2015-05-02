console.log("HomeScript Loaded")

function home(){
  var $container = $('#empty');
    //calling div container
  $container.empty();
  var $html = $("<div class='ui sixteen column wide stackable center aligned page grid'><div class ='six column row''><div class = 'containHeader'><h1>Future Contacts</h1></div></div><div class = 'twelve column row'><div class='ui vertical buttons centered'><div class ='containButtons'><div class='ui green button' onclick=location.href='#/categories'>categories list</div><div class='ui green button' onclick=location.href='#/add%20categories'>Add Categories</div><div class='ui green button' onclick=location.href='#/add%20contact'>Add Contact</div><div class='ui green button' onclick=location.href='#/about%20AJs'>About AJ</div></div></div></div></div>")
  $container.append($html)
}
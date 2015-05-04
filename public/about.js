function aboutMe(){
  var $container = $('#empty');
    //calling div container
  $container.empty();
  var $html = $("<div class='ui sixteen column wide stackable center aligned page grid'><div class ='six column row'><div class = 'containHeader'><h1>Future by A J</h1></div></div><div class='ui link cards'><div class='card'><div class='image'><img src='https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/383062_10152706996795284_1650916552_n.jpg?oh=a1498fa9672a00873edb9a8c25b7ce7f&oe=55D900A6&__gda__=1440007725_f467b51584e3d55d83321852e767bb4b'></div><div class='content'><div class='header'>A J</div><div class='meta'><a>Been alive 23 yrs and counting</a></div><div class='description'>This is cool. I'm also exhausted.</div></div><div class='extra content'><span class='right floated'>WDI March 2015</span><span><i class='user icon'></i>Too much Stress</span></div></div></div>")
  $container.append($html)
}
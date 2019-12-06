$(document).ready(function(){

	function jumbotron(data){
     var htmlcode  = 
    '<div class="jumbotron">'+
    '<div class="container">'+
    '<h1>'+data.heading+'</h1>'
    +'<p>'+data.subheading+'</p>'
    +'</div>' + '</div>';
		$("#main").append(htmlcode);
};

var content = {
          "navbar": [ 
          {
            "title": "Home",
            "url": "index.html"
          },
          {
            "title": "About Us",
            "url": "about.html"
          },
          {
            "title": "Our Team",
            "url": "team.html"
          },
          {
            "title": "Contact Us",
            "url": "contact.html"
          }
         ],

         "index.html" : {
         	 "blocks" : [
         	 	{

         	 		"type" : "jumbotron",
         	 		"heading" : "This is our home page",
         	 		"subheading" : " subheading"

         	 	}

         	 ]
         },
 		"about.html" : {
         	"blocks" : [
         	 	{

         	 		"type" : "jumbotron",
         	 		"heading" : "This is our about page",
         	 		"subheading" : "This is our cool subheading"

         	 	}

         	 ]
         },

         "contact.html" : {
         	 "blocks" : [
         	 	{

         	 		"type" : "jumbotron",
         	 		"heading" : "This is our contact page",
         	 		"subheading" : "This is our cool subheading"

         	 	}

         	 ]
         },
        "team.html" : {
         	"blocks" : [
         	 	{

         	 		"type" : "jumbotron",
         	 		"heading" : "This is our team page",
         	 		"subheading" : "This  subheading"

         	 	}

         	 ]
         }

       }

       for(i = 0; i<content.navbar.length; i++){
        console.log(content.navbar[i].title + ' | ' + content.navbar[i].url);

        $("#mynav").append('<li class= "nav-item"> <a class="nav-link" href= "'+ content.navbar[i].url+'"> '+ content.navbar[i].title + '</a></li>');
        
       }

       console.log(window.location);
       var pagefile = window.location.pathname.split("/").pop();
       console.log(pagefile);
      // jumbotron();

       var blocks = content[pagefile].blocks;
       console.log(blocks);
       for(var i=0; i<blocks.length; i++){
       	if(blocks[i].type == 'jumbotron'){
       		jumbotron(blocks[i]);
       	}
       }
      

      $.ajax({
      url: 'https://randomuser.me/api/?results=25',
      dataType: 'json',
      success: function(data) {
        console.log(data);

        for(i = 0; i<25; i++){
        var firstname = data.results[i].name.first;
        var lastname = data.results[i].name.last;
        var mediumpicture = data.results[i].picture.medium;
        var gender = data.results[i].gender;
        var nat = data.results[i].nat.toLowerCase();


        $("#users").append('<div class = "col-md-2>"><img src="' +mediumpicture+'" class= fluid rounded-circle;></h1>'+'<span class= "name"><li>'+firstname+ " " +lastname+ '</li>'+'<li class= "gender">' +gender+'</li>'+'<li class= "flag">'+nat+'</li></span></div>');
        if(gender == "female"){
          $("#users").append('<li class = "gender">'+'<i class="fas fa-female"></i></li>');
        
        } else{
             $("#users").append('<li class = "gender">'+'<i class="fas fa-male"></i></li>');
         }
      

      }
       
  }

}); 
});


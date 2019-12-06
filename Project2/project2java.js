$(document).ready(function(){

       
         
	/*function jumbotron(){
     var htmlcode  = 
    '<div class="jumbotron">'+'<div class="container">'+'<h1>Headline Text</h1>'+'<p>Some paragraph text</p>'+'</div>' + '</div>';
		console.log(htmlcode);
		$("#main").append(htmlcode); 
};*/



var content = {
          "navbar": [ 
          {
            "title": "HOME",
            "url": "pg1project2.html"
          },
          {
           "title": "ABOUT ME",
            "url": "aboutp2.html" 
          },
          {
            "title": "RESUME",
            "url": "resumep2.html"
          },
          {
            "title": "SKILLS",
            "url": "skillsp2.html"
          },
          {
             "title": "JOB EXPERIENCE",
            "url": "jobp2.html"
          },
          {
           "title": "CONTACT ME",
            "url": "contactp2.html" 
          }
         ]
        

       
       }
 

       for(i = 0; i<content.navbar.length; i++){
        console.log(content.navbar[i].title + ' | ' + content.navbar[i].url);

        $("#mynav").append('<li class= "nav-item"> <a class="nav-link" href= "'+ content.navbar[i].url+'"> '+ content.navbar[i].title + '</a></li>');
        
       }



       console.log(window.location);
      var pagefile = window.location.pathname.split("/").pop();
      console.log(pagefile);
      $('#mynav > li > a[href="'+pagefile+'"]').parent().addClass('active');

      // jumbotron();


       
});
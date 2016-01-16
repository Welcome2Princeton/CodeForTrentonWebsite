
            $(document).ready(function(){
                
                var change;
          
                
                
                if($("header").attr('data-home')) {
                 change= 400;   
                    
                }
                
                else {
                    
                 change = 200;   
                }
                
        
        var opac = 0;
        $(window).on("scroll", function(){
            
            
            
            console.log ($("html").scrollTop());
            
            
  if($("html").scrollTop() >= change){

    opac = opac + .05;
      
    $("header").css({'background-color': '#1e1e1e', opacity: opac});
                         
      
  }
            
            
            else {
                    opac = 0;
    $('header').css('background-color', 'transparent');
             
   }
                                       
                                       
                                       

            });
                
                
            });
                  
                  
                     
                     
        
        
        $(document).ready(function(){
            $('#subscribe').submit(function(e){
                
                // don't submit the form, please
					e.preventDefault();	
 
        //do our ajax stuff here
        var form = $(this),
    responseMsg = $('#sign-up-response')
                
             responseMsg.hide().addClass('response-waiting').text('Please Wait...').fadeIn(200);
                
                $.ajax({
   
                    method: "POST",
                    url: "subscribe.php",
                    data: form.serialize(),
                    dataType: "json"
                    }).done(function( json ) {
                    
						//setup variables
                
                var    klass = '';
 
                //response conditional
                switch(json.status){
                    case 'error':
                        klass = 'response-error';
                    break;
                    case 'success':
                        klass = 'response-success';
                    break;  
                }
                    
                    
                    //show reponse message
                responseMsg.fadeOut(500,function(){
                    $(this).removeClass('response-waiting')
                           .addClass(klass)
                           .text(json.message)
                           .fadeIn(200,function(){
                               //set timeout to hide response message
                               setTimeout(function(){
                                   responseMsg.fadeOut(500,function(){
                                       $(this).removeClass(klass);
                                   });
                               },5000);
                            });
                 });
                    
					  });

    });
});
    
        $('.projects').masonry({
  // options
  itemSelector: '.project'

});
        
        
             $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -80
        }, 1000);
        return false;
      }
    }
  });
});
        
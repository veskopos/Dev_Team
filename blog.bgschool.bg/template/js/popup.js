$( document ).ready(function() {
 
 
     $("#reg").leanModal({top : 20, overlay : 0.6, closeButton: ".modal_close" });

         
            $(".reg_but").click(function(){
            
         var reg_name1 = $("#reg_name1").val();
         var reg_name2 = $("#reg_name2").val();
         var reg_email = $("#reg_email").val();
         var reg_user = $("#reg_user").val();
         var reg_pass = $("#reg_pass").val();
         var reg_pass1 = $("#reg_pass1").val();
         var reg_egn = $("#reg_egn").val();
         $("#reg_loader").val("Зареждане..");
         $("#reg_pass").val("");
		 $("#reg_pass1").val("");
            $.ajax({
            type: 'POST',
            url: 'index.php',
            dataType: 'json',
            data: {
                reg_user: reg_user,
                reg_name1 : reg_name1,
                reg_name2 : reg_name2,
                reg_email : reg_email,
                reg_pass: reg_pass,
                reg_pass1: reg_pass1,
                reg_egn: reg_egn
            },
            success: $.proxy(function(data){
            $("#reg_loader").text("Регистрация");
            if (data.error == true){
                $(".msg_reg").html(data.response).fadeIn("fast").delay(2000).fadeOut("fast");
            }else{
                $(".msg_reg").html(data.response).fadeIn("fast");
				$( "#reg_name1" ).val("");
			    $( "#reg_name2" ).val("");
		        $( "#reg_email" ).val("");
			    $( "#reg_user" ).val("");
			    $( "#reg_pass" ).val("");
		        $( "#reg_pass1" ).val("");
			    $( "#reg_egn" ).val("");
            }
		
            }, this)
    
            });
            
       });
	   
	   
	   $(".new_pass").click(function(){  
         var forgot_useroremail = $("#forgotuseroremail").val();
         
         $(".new_pass").text("Зареждане..");
         
            $.ajax({
            type: 'POST',
            url: 'index.php',
            dataType: 'json',
            data: {
                forgot_useroremail: forgot_useroremail
            },
            success: $.proxy(function(data){
            $(".new_pass").text("Изпрати");
            if (data.error == true){
                    $(".msg_forgot").html(data.response).fadeIn("fast").delay(2000).fadeOut("fast");
					$( "#forgotuseroremail" ).val("");
                }else{
                    $(".msg_forgot").html(data.response).fadeIn("fast");
                }
			}, this)
	
            });
            
       });
	   
	   
     $("#login").leanModal({top : 30, overlay : 0.6, closeButton: ".modal_close" });
     
         $(".login_but").click(function(){  
         var login_useroremail = $("#login_useroremail").val();
         var login_pass = $("#login_pass").val();
         
         $(".login_but").text("Зареждане..");
         
            $.ajax({
            type: 'POST',
            url: 'index.php',
            dataType: 'json',
            data: {
                login_useroremail: login_useroremail,
                login_pass: login_pass
            },
            success: $.proxy(function(data){
            $(".login_but").text("Login");
            if (data.error == true){
                    $(".msg_reg").html(data.response).fadeIn("fast").delay(2000).fadeOut("fast");
					$( "#login_pass" ).val("");
                }else{
                    $(".msg_reg").html(data.response).fadeIn("fast");
                }
			}, this)
	
            });
            
       });
       
  
    	$(".forgot_password").click(function(){
			$(".panel1").hide();
			$(".panel2").show();
			return false;
		}) ;
		
		
		$("#back").click(function(){
			$(".panel2").hide();
			$(".panel1").show();
			return false;
		}) ;
		
		$(".modal_close").click(function(){
			$(".panel2").hide();
			$(".panel1").show();
			return false;
		}) ;

	}) ;
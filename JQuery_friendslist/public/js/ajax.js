

var $friends = $('#friends')
var $friend = $('#friend')
var $age = $('#age')

var friendTemplate = " " + 
	"<li>" +
	"<p><strong> friend: </strong> {{friend}} </p>" +
	"<p><strong>age:</strong> {{age}}</p>" +
	"<button id='{{id}}' class='remove' >X</button>" +
	"</li>";

function addFriend(){ //hopefully this works with different variable ages
	$friends.append(Mustache.render(friendTemplate, friend));
	};


//////////////actual jquery function start ///////////

// $(document).ready(function(){
// 	alert("ajax working properly ");
// });

//////////////////////////////////////////////////

$(document).ready(function(){
	alert("ajax working properly ");


	$.ajax ({
		type: 'GET' ,   //GET = read     ==-- BELOW THIS LINE IS THE ERROR --==
		url: 'http://rest.learncode.academy/api/sam/friends' , 
		success: function(friends) {               
				$.each(friends, function(i, friend){
					addFriend(friend);
			});
		   },
			
		error: function(){                  
			alert('error loading friend list');

				},
		});
	   //                            	==-- ABOVE IS THE ERROR --==

	$('#add-friend').on('click',function(){
		var friend = {
			friend: $friend.val(),
			age: $age.val(),
				};
	});

		$.ajax ({
			type : 'POST',
			url  : 'http://rest.learncode.academy/api/sam/friends',
			data: friend ,
			success: function(newfriend){
				addfriend(newfriend);
			},
			error: function(){
				alert("error saving address")
			}

  });


//\\\\\\\\\\\\\\\\\\\\FOR SURE BROKEN ABOVE \\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////POTENTIALLY BROKEN BELOW ////////////////////////

	$friends.delegate('.remove', 'click', function(){

		var $li = $(this).closest('li');
		//Ajax delete function - click the .remove class button to remove 
		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/learncode/friends/',
			success: function(){
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});
	})


});
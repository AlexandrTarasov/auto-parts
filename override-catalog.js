<script type="text/javascript">
	let id_of_models = '';
	let model_id_get = '';
	let msg = new Array();
	
	$(document).ready(function(){
		$(".first_models_list").delegate("button", "click", function(){
			
			let model_id = $(this).val();
			id_of_models = model_id +" "+ id_of_models;
			$(".modelsin:first").append("<div class='carmodel'>"+model_id+"</div>");
			$(".get-models-id:first").val(id_of_models);
			//$(".carmodel").append("<input class=\"get-data\" type=\"hidden\" value=\""+id_of_models+"\">");
			//alert("-"+id_of_models);
			//$(this).hide();	
		});
		$(".btn-danger").click(function(){
		  model_id_get = $(".get-models-id:first").val();
		  prod_id_get = $(".get-prod-id:first").val();
			
			msg = "models_id="+model_id_get+"&prod_id="+prod_id_get;	

		  //msg = model_id_get+":"+prod_id_get;	
		  if(model_id_get==''){alert("nothing added"); }
		  else{
		  			
					$.ajax({
						type: 'POST',
						url: 'ajax/get_orders.php?carmodels=1',
						data: msg,
						success: function(data) {
							alert(data);
							//$('#results'+poliu).html(data);
							//$('#results'+poliu).prop('disabled', false);
							
						},
						error:  function(xhr, str){
							alert('Возникла ошибка: ' + xhr.responseCode);
						}
					});
			  //let chage_id = $(this).attr("id");
				id_of_models = '';

				$(".listmoduls:first").remove();
			}
		});

	});


function get_models_list(){
	
	let new_makr='';
	new_mark = $(".add_marks").val();

	//console.log(new_mark);

	$.ajax({
	  type: 'POST',
	  url: 'ajax/get_models_list.php?action=1',
	  data: 'automarka='+new_mark,
	  	success: function(data){
    		$('.first_models_list').html(data);
  		}
	});
	$("#one_list").hide();
}
	
</script>

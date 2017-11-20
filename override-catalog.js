<script type="text/javascript">
	let id_of_models = '';
	let model_id_get = '';
	
	$(document).ready(function(){
		$(".molelstyle").click(function(){

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
		  if(model_id_get==''){alert("nothing added")}
		  //let chage_id = $(this).attr("id");
			alert(model_id_get);
			id_of_models = '';

			$(".listmoduls:first").remove();
		});

	});
	
</script>

$(document).ready(function(){
		$("#msHead").click(function(){
				$('#msHead').animate({color:'white'}, 'fast');
				$("#msBody").animate({height:'toggle'}, 'slow');
				$('#msHead').animate({ color:'#000000'}, 'fast');
		});
		
		$("#asHead").click(function(){
				$('#asHead').animate({color:'white'}, 'fast');
				$("#asBody").animate({height:'toggle'}, 'slow');
				$('#asHead').animate({ color:'#000000'}, 'fast');
		});
		
		$("#psHead").click(function(){
				$('#psHead').animate({color:'white'}, 'fast');
				$("#psBody").animate({height:'toggle'}, 'slow');
				$('#psHead').animate({ color:'#000000'}, 'fast');
		});
		$("#coopHead").click(function(){
				$("#coopBody").toggle('slow');
		});
		$("#graffitiHead").click(function(){
				$("#graffitiBody").toggle('slow');
		});
		$("#picassoHead").click(function(){
				$("#picassoBody").toggle('slow');
		});
		$("#tribHead").click(function(){
				$("#tribBody").toggle('slow');
		});
		
		$("#lsHead").click(function(){
				$('#lsHead').animate({color:'whitehege'}, 'fast');
				$("#lsBody").animate({height:'toggle'}, 'slow');
				$('#lsHead').animate({ color:'#000000'}, 'fast');
		});
		
		$("#msHead").hover(function(){
				$("#msHead").css("color","#FFCC00");
		},function(){
			$("#msHead").css("color","#000000");
		});
		$("#asHead").hover(function(){
				$("#asHead").css("color","#FFCC00");
		},function(){
			$("#asHead").css("color","#000000");
		});
		$("#psHead").hover(function(){
				$("#psHead").css("color","#FFCC00");
		},function(){
			$("#psHead").css("color","#000000");
		});
		$("#lsHead").hover(function(){
				$("#lsHead").css("color","#FFCC00");
		},function(){
			$("#lsHead").css("color","#000000");
		});
		
});

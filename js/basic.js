
	console.info("works");
		$("body").on("click","#click", function(){
			console.info("aqui?");
			//getPlayers("getPlayersDb");
		});
		getPlayers("getPlayersDb");

		
		var numbers = [], max = 0;

			function getPlayers(data){
				var url = "https://fbapp.brm.com.co/Unilever/weekplayer/";
				var _url = url + data;
				//console.info(url);
					 $.ajax({
					 	url: _url,
					 	async: false,
					 	type: "GET",
					 	 success: function(result){
			        	console.info(result);

			        	for (var i = 0; i <= result.length -1 ; i++) {
			        		if ( i == 0) {
			        			max = parseInt( result[i].votes );
			        		}
				             var clone_ = $(".counter-cont:first-child").clone();
				             	 clone_.attr("style","");
				             	 clone_.find(".bar .graph-3").attr("data-content", result[i].votes).css( calc(result[i].votes) );
				             	 clone_.find(".player h5").not(".vote").text(result[i].hashtag);
				             	 clone_.find("img").attr("src", result[i].image);
				             	 console.info(clone_);
				             	 calc(result[i].votes);

				             $(".box").append(clone_);
				          }
			    	}});
			}


	function calc(nmbr){
      if ( isNaN(nmbr) == false ){
        var x =  (nmbr*85) / max;
        var t = 100 - x;

        return {'height': x+'%', 'top': t+"%" };
        /*console.info("max", max);
        console.info("x", x);
        console.info("top", t);*/
      }
    }


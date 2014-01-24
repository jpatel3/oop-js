//ourside this function $ sign can be anything, in
//this function it will be represented nby jQuery
(function( $ ){
	
	var o = $( {} );
  	// console.dir(o); 

  	$.each({
  		trigger: 'publish',
  		on: 'subscribe',
  		off: 'unsubscribe'
  	}, function(key, val){

  		jQuery[val] = function(){
  			o[key].apply( o, arguments );
  		};
  	});

})(jQuery);
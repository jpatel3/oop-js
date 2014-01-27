//Source - http://www.bennadel.com/blog/2282-Global-Events-vs-Entity-Bound-Events-In-JavaScript-Application-Architecture.htm
// Author: Ben Nadel
// Define the friends-controller class.
define(
	[ /* No dependencies. */ ],
	function(){
 
 
		// Define the constructor method.
		function Controller( container ){
 
			// Store the container reference for DOM access.
			this.dom = {};
			this.dom.container = container;
 
			// Return this object reference.
			return( this );
 
		}
 
 
		// Define the class methods.
		Controller.prototype = {
 
 
			// I update the list display based on the current filter.
			displayUsingFilter: function( filter ){
 
				// Loop over each of the lists.
				this.dom.container.children().each(
					function(){
 
						// Get the current friend.
						var friend = $( this );
 
						// Check to see if the current friend should
						// be shown or hidden.
						var showFriend = filter(
							$.trim( friend.text() ),
							{
								funny: friend.is( ".funny" ),
								sassy: friend.is( ".sassy" ),
								smart: friend.is( ".smart" ),
								witty: friend.is( ".witty" )
							}
						);
 
						// Check to see if the friend should be shown
						// or hidden.
						if (showFriend){
 
							friend.show();
 
						} else {
 
							friend.hide();
 
						}
 
					}
				);
 
			}
 
 
		};
 
 
		// -------------------------------------------------- //
		// -------------------------------------------------- //
 
 
		// Return the controller constructor.
		return( Controller );
 
 
	}
);
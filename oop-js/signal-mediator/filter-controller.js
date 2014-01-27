//Source - http://www.bennadel.com/blog/2282-Global-Events-vs-Entity-Bound-Events-In-JavaScript-Application-Architecture.htm
// Author: Ben Nadel
// Define the filter-controller class.
define(
	[ "signal" ],
	function( Signal ){
 
 
		// Define the constructor method.
		function Controller( container ){
 
			// Store the container reference for DOM access.
			this.dom = {};
			this.dom.container = container;
 
			// Create an event surface.
			this.events = {
				filterSelected: new Signal( this, "filterselected" ),
				filterDeselected: new Signal( this, "filterdeselected" )
			};
 
			// Delegate the filter click.
			this.dom.container.delegate(
				"a",
				"click",
				$.proxy( this, "handleFilterClick" )
			);
 
			// Return this object reference.
			return( this );
 
		}
 
 
		// Define the class methods.
		Controller.prototype = {
 
 
			// I return the collection of active filters.
			getActiveFilters: function(){
 
				// Get the collection of active filters.
				var activeFilters = $.map(
					this.dom.container.find( "a.on" ),
					function( node ){
 
						// Return the text of the active filter.
						return( $( node ).text() );
 
					}
				);
 
				// Return the active filters.
				return( activeFilters );
 
			},
 
 
			// I handle the clicks on filters.
			handleFilterClick: function( event ){
 
				// Get the link that was clicked.
				var filter = $( event.target );
 
				// Toggle the filter on /off.
				filter.toggleClass( "on off" );
 
				// Check to see if the filter is no on.
				if (filter.is( ".on" )){
 
					// Announce the filter selection.
					this.events.filterSelected.dispatch(
						filter.text()
					);
 
				} else {
 
					// Announce the filter deselection.
					this.events.filterDeselected.dispatch(
						filter.text()
					);
 
				}
 
			}
 
 
		};
 
 
		// -------------------------------------------------- //
		// -------------------------------------------------- //
 
 
		// Return the controller constructor.
		return( Controller );
 
 
	}
);
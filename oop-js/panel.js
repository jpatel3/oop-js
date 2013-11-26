function Panel(width, height, $parent){
	//default everything is public

	/*

	var _privateProperty
	this.publicProperty = "";

	function privateMethod(){

	}

	this.publicMethod =  function(){

	}
	*/

	//to make width and height mandatory, it won't work without it.
	if(arguments.length < 2){
		return false;
	}

	var _open = false;
	var _self = this;


	var $_element = $(document.createElement('div'));
	$_element.attr({
		"class": "panel"
	});

	$_element.css({
		"width": width,
		"height": height,
		"position": "absolute",
		"top": "50%",
		"left": "50%",
		"display": "none",
		"margin-left": -width/2,
		"margin-top": -height/2,
		"z-index": "100"
	});

	//you can also use argument[0], argument[1] etc.
	//good to check for undefined, if its optional.
	if(typeof $parent == 'undefined'){
		$parent = $(document.documentElement);
	}
	else if (!$parent){
		return false;
	}

	$parent.append($_element);

	this.isOpened = function(){
		return _open;
	}

	this.open = function(callback){
		if(_open){
			return false;
		}
		_open = true;
		$_element.stop(true).fadeIn(500, callback);
	};

	this.close = function(callback){
		if(!_open){
			return false;
		}
		$_element.fadeOut(500, function() {
			_open = false;
			if(callback && callback.call){
				callback.apply(this, arguments);
			}
		});
	}

	this.add = function(content){
		if(typeof content == 'string'){
			$_element.html($_element.html() + content);
		}else{
			$_element.append(content);
		}
	}

	this.clear = function(){
		$_element.children().remove();
	}

	//before using this.close make sure its defined. 
	//order matters.
	$_element.on('click', this.close);
}

//prototype is blue print o the class.
/*
Panel.prototype.property = "";
Panel.prototype.method = function(){


}
var p = new Panl

*/
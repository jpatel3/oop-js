var Class = function() {
	var pri = "private";
	var pub = "value";
	var pubMethod = function(){
		return pub + pri;
	}
	return {
		pub: pub,
		pubMethod: pubMethod
	}
}
var instance = Class();

// Class.prototype.pub = "value";
// Class.prototype.pubMethod = function(){
// 	return this.pub;

//console.log((new Class()).pubMethod());
console.log(instance.pub, instance.pubMethod());

function extend(ChildClass, ParentClass) {
	ChildClass.prototype = new ParentClass();
    ChildClass.prototype.constructor = ChildClass;
    ChildClass.prototype.superclass = ParentClass;
}

var Class = function() {
    var pubMethod = function() {
        return "Class";
    }
    return {
        pubMethod: pubMethod,
        pub: "public"
    }
}
var Class2 = function() {
    var parent = Class();
    parent.pubMethod = function() {
        return "Class2";
    }
    return parent;
}
var instance = Class();
var instance2 = Class2();
console.log(instance.pubMethod(), instance2.pubMethod());
const {classes: Cc, interfaces: Ci, utils: Cu, results: Cr} = Components;
Cu.import('resource://gre/modules/Services.jsm');
Cu.import('resource://gre/modules/devtools/Console.jsm');
console.error('pre func');

addEventListener('DOMWindowCreated', function() {
	console.error('created');
}, false)

(function() {
	var window = content;
	var js = window.wrappedJSObject;
	
	console.error('noida loc: ' + window.location);
})();
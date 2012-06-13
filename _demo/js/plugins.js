// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
(function($,d){
    var doc = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+d.title+' - Responsive test</title><link rel="stylesheet" href="http://responsive.victorcoulon.fr/assets/css/app.css"><script src="http://responsive.victorcoulon.fr/assets/js/app.min.js"></script></head><body><header><div class="close"><a href="#">&times;</a></div><div id="size"></div><div id="devices"><a href="#" class="tablet-portrait"><span>Tablet Portrait</span></a><a href="#" class="tablet-landscape"><span>Tablet Landscape</span></a><a href="#" class="smartphone-landscape"><span>iPhone Landscape</span></a><a href="#" class="smartphone-portrait"><span>iPhone Portrait</span></a><a href="#" class="auto active"><span>Auto</span></a></div></header><section><iframe id="wrapper" src="'+d.URL+'" onLoad="resbook.changeUrl(this.contentWindow.location,this.contentDocument.title);"></iframe></section></body></html>';
    $('#responsive-bookmarklet').attr('href', 'javascript:void(0);').click(function(){d.write(doc);return false;});
})(jQuery,document);
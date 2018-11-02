(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#602020").s().p("EAZUAyjMg0hhWzQgIgOAAgPIAAtRQAAg1AzgOQA0gOAbAtMA0hBWyQAIAPAAAPIAANRQAAA1gzAOQgMAEgLAAQgjAAgVgjg");
	this.shape.setTransform(107,107,0.297,0.297);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#602020").s().p("EgDgAqMMAAAhUXIHBAAMAAABUXg");
	this.shape_1.setTransform(177.9,107,0.297,0.297,0,0,0,0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#602020").s().p("EgDgAqMMAAAhUXIHBAAMAAABUXg");
	this.shape_2.setTransform(36.2,107,0.297,0.297,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#602020").s().p("EgNRA4QIAAruIPnAAMAAAhZDIvnAAIAAruIajAAMAAABwfg");
	this.shape_3.setTransform(188.8,107,0.297,0.297,0,0,0,0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#602020").s().p("EgNRA4QMAAAhwfIajAAIAALuIvnAAMAAABZDIPnAAIAALug");
	this.shape_4.setTransform(25.3,107,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,214,214);
// library properties:
lib.properties = {
	id: 'CB32F4BBCD426148B269525A86225E7B',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CB32F4BBCD426148B269525A86225E7B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
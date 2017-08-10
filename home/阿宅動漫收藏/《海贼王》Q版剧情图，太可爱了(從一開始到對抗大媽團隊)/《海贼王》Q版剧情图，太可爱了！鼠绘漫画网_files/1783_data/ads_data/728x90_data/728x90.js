(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 18,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/black.jpg", id:"black"},
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/btnflash1.png", id:"btnflash1"},
		{src:"images/btnflash2.png", id:"btnflash2"},
		{src:"images/choosebtn.png", id:"choosebtn"},
		{src:"images/D15.jpg", id:"D15"},
		{src:"images/GM.png", id:"GM"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,250);


(lib.black = function() {
	this.initialize(img.black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,149);


(lib.btnflash1 = function() {
	this.initialize(img.btnflash1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,124);


(lib.btnflash2 = function() {
	this.initialize(img.btnflash2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,149);


(lib.choosebtn = function() {
	this.initialize(img.choosebtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,45);


(lib.D15 = function() {
	this.initialize(img.D15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.GM = function() {
	this.initialize(img.GM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,19);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.GM();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,19);


(lib.gai_1_259_47860 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btnflash1.png
	this.instance = new lib.btnflash1();
	this.instance.setTransform(-62,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-62,124,124);


(lib.gai_1_255_75571 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn1();
	this.instance.setTransform(-104,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-70,200,149);


(lib.gai_1_251_49902 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgkAOQgPgOABgPQACgRAQgJQAQgJAQAZQAUgZAPAIQAQAJAAARQAAAQgQAOQgOAPgVAQg");
	this.shape.setTransform(19.4,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiICJQg4g5gBhQQABhPA4g5QA5g4BPgBQBQABA5A4QA4A5AABPQAABQg4A5Qg5A4hQAAQhPAAg5g4gAgggnQgRAJgBASQgBAOAPAOIAkAgQAVgRAOgPQAQgOAAgPQAAgRgQgJQgPgJgUAaQgLgTgNAAQgEAAgEACg");
	this.shape_1.setTransform(19.4,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.8,38.8);


(lib.gai_1_247_12067 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AALhjQAQALANAbIAKAXABBhiQAQALALAbIAFANABBhiIgBgBQgVgOggAOAg0hXQAlgfAaATIAAAAABBhiQAbgLAZAWQAUASASAoQAcA6gFBUQAbgMALAbIACAIQgEAigbAWQheBDhJgEQg3gIAlgtAg0hXQAQAZAdAjIAIALAhwgKIAAgBQh8iNAWg9QAHgWAZgLQA8gfAXBXQANAmATAmIACADIANAYAhkA0QANAVAXgKIAOgJACyBxIgBAUABIATQAgAuACAzAAVAsQAPAqApAqAB+ACQAWAygMAyAAcDMIgDAAIgJgBIgOgBQh6gLgihhQgXg5BBgvAhAA/QAEgfg0gq");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYDwIAAgWIADAAIgDAAIgIgBQikg+ARhSQAMgYATARQAMAVAXgKIAOgJQACgjgvgpQhChFgXhMQgagWgDgYQAHgWAYgLQA9gfAWBXQAOAmATAmIABADIANAYQARAZAdAjQgBgSgLgSQgFgSAigSIABAAQAPALAOAbQgBgcAZgKIABABQAQALALAbIAEANIgEgNQgCggAaAFQAUASATAoQAbA6gEBUQAbgMAKAbQhUBjhUAAQgLAAgMgBgACwCTIACgUgABNCOQgpgqgQgqQAQAqApAqgABpCCQgBgzghguQAhAuABAzgACIB0QAEgRAAgRQAAghgPghQAPAhAAAhQAAARgEARgAAAgCIgHgLgAAygYIgKgXg");
	this.shape_1.setTransform(0.1,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAUDqQg3gIAlgsQh6gLgihhQgXg6BBgvIAAAAQh8iOAWg9QADAYAaAXQAXBLBDBFQAvArgCAiIgOAJIAAgFQAAgegwgnQAwAnAAAeIAAAFQgXAKgNgVQgTgRgLAYQgSBRCkA/IgOgBIAOABIAJAAIAAAWQBfAQBghxIACAHQgEAigbAXQhYA/hHAAIgIgBgAAQC3gAg0hsQAlgfAaATQgjASAFASQALASABATQgdgjgQgagABBh3QAbgLAZAXQgagFABAfQgLgbgQgLgAALh3QAggPAVAOQgYALAAAcQgNgbgQgLg");
	this.shape_2.setTransform(0,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-26.5,45.7,53.1);


(lib.gai_1_234_447 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7692").s().p("AgzBdQgZgYgcgSQgdgUgWgbQgYgZgCgjQgEgmAagaQAagcAnABQAlAAAZAcQAUAXALAdIAKgeQAWgmAsgFQAjgFAgARQAhASAGAhQAGAhgRAeQgRAbgVAPQgVANgiAZQgjAXgTARQgTARgLAZQgSgfgagYgAiWhqQgXAWAEAhQACAdAWAWQAUAXAcASQAaAQAXATQAYAVARAbQAKgVATgPQARgPAggUIAzggQATgMAQgXQAQgagFgcQgGgdgfgPQgegPghAEQgpAEgUAgIgJAaQgKgYgUgUQgXgYgiAAIgFAAQghAAgXAXg");
	this.shape.setTransform(-4.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFCCCC","#FF3366"],[0,0.886],-8.6,-4.2,0,-8.6,-4.2,25.7).s().p("AgvBQQgXgUgagQQgcgRgUgYQgWgVgCgeQgEggAXgXQAYgYAlABQAiAAAXAZQAUATAKAYIAJgZQAUghApgEQAhgDAeAPQAfAPAGAdQAFAcgQAZQgQAXgTAMIgzAhQggAUgRAOQgTAPgKAVQgRgbgYgUg");
	this.shape_1.setTransform(-4.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-14.7,36.6,29.8);


(lib.gai_1_231_14377 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCCCC","#FF3366"],[0,0.886],-3.2,-1.6,0,-3.2,-1.6,9.6).s().p("AgRAdIgSgNQgLgHgHgIQgJgHAAgLQgCgMAJgJQAJgJAOABQAMAAAJAJIALAQIADgKQAHgMAPgBQANgCALAGQAMAGACAKQACALgGAKIgNAMIgUAMIgSAMIgJAOQgHgKgJgIg");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7692").s().p("AgSAiIgnghQgJgIgBgNQgBgOAKgKQAJgLAPABQAOAAAJAKIALAUIADgMQAIgOARgBQANgCAMAGQANAHACAMQACANgGALIgPAOIgUAOIgUAQQgIAGgCAJgAg3gnQgJAJACAMQAAALAJAHQAHAIALAHIASANQAJAIAHAKIAJgOIASgMIAUgMIANgMQAGgKgCgLQgCgKgMgGQgLgGgNACQgPABgHAMIgDAKIgLgQQgJgJgMAAIgDAAQgMAAgIAIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-5.5,13.7,11.1);


(lib.D15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// D15
	this.instance = new lib.D15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.choosebtn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,45);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.black();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.btnflash2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,149);


(lib.元件8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg6pAI/IAAx9MB1TAAAIAAR9g");
	this.shape.setTransform(375.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,751,115.1);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,250);


(lib.gai_1_260_41369 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_259_47860();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9.3},1).to({scaleX:0.99,scaleY:0.99,rotation:28.3},2).to({scaleX:0.99,scaleY:0.99,rotation:56.9},3).to({scaleX:1,scaleY:1,rotation:180},13).to({scaleX:1,scaleY:1,rotation:189.3},1).to({scaleX:0.99,scaleY:0.99,rotation:208.3},2).to({scaleX:0.99,scaleY:0.99,rotation:227.4},2).to({scaleX:1,scaleY:1,rotation:360},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-62,124,124);


(lib.gai_1_257_70098 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件9();
	this.instance.setTransform(1.5,1.5,1,1,0,0,0,74.5,74.5);
	this.instance.alpha = 0.398;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-73,149,149);


(lib.gai_1_248_23607 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_247_12067("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-26.5,45.7,53.1);


(lib.gai_1_235_5000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_234_447("synched",0);
	this.instance.setTransform(74.5,125,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:63.6,y:57.9},13).to({x:57.3,y:-9.9},8).to({x:46.4,y:-118.2},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66.9,120,12.5,10.1);


(lib.gai_1_233_13455 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_231_14377("synched",0);
	this.instance.setTransform(-19.5,130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-11.4,y:-106.1},40).to({x:-6,y:-123},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,125,13.7,11.1);


(lib.gai_1_232_43951 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_231_14377("synched",0);
	this.instance.setTransform(-50.5,119.3,0.584,0.584);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-59.2,y:3.4},16).to({x:-47.7,y:-64.1},11).to({x:-59.1,y:-101.9},5).to({x:-60.5,y:-119},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,116.1,8,6.5);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gai_1_251_49902("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.8,38.8);


(lib.gai_1_261_43324 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.gai_1_260_41369();
	this.instance.setTransform(-0.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19));

	// Layer 1
	this.instance_1 = new lib.gai_1_257_70098();
	this.instance_1.setTransform(-0.6,15.2,0.915,0.915);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.88,scaleY:0.88},1).to({scaleX:0.84,scaleY:0.84},1).to({scaleX:0.8,scaleY:0.8},1).to({scaleX:0.77,scaleY:0.77},1).to({scaleX:0.76,scaleY:0.76},1).to({scaleX:0.75,scaleY:0.75},1).to({scaleX:0.74,scaleY:0.74},1).to({scaleX:0.75,scaleY:0.75},1).to({scaleX:0.75,scaleY:0.75},1).to({scaleX:0.76,scaleY:0.76,y:15.1},1).to({scaleX:0.77,scaleY:0.77,y:15.2},1).to({scaleX:0.79,scaleY:0.79},1).to({scaleX:0.82,scaleY:0.82,y:15.1},1).to({scaleX:0.84,scaleY:0.84,y:15.2},1).to({scaleX:0.86,scaleY:0.86,y:15.3},1).to({scaleX:0.9,scaleY:0.9},2).to({scaleX:0.92,scaleY:0.92,y:15.2},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-51.6,136.4,136.4);


(lib.gai_1_252_95797 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.元件13();
	this.instance.setTransform(19.4,19.4,1,1,0,0,0,19.4,19.4);
	this.instance.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 76.5, 0, 0, 0)];
	this.instance.cache(-2,-2,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.8,38.8);


(lib.gai_1_249_56887 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_248_23607();
	this.instance.setTransform(67.3,70.5,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.68,scaleY:0.68,x:64.6,y:67},12).to({scaleX:0.85,scaleY:0.85,x:67.3,y:70.5},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.5,48.6,37.6,43.9);


(lib.gai_1_236_517 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 25
	this.instance = new lib.gai_1_235_5000();
	this.instance.setTransform(-4.7,-46.8,0.64,0.64,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 23
	this.instance_1 = new lib.gai_1_233_13455();
	this.instance_1.setTransform(-26.6,-17,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 21
	this.instance_2 = new lib.gai_1_232_43951();
	this.instance_2.setTransform(28.5,-29,0.8,0.8,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer 19
	this.instance_3 = new lib.gai_1_233_13455();
	this.instance_3.setTransform(36.9,-47.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer 17
	this.instance_4 = new lib.gai_1_235_5000();
	this.instance_4.setTransform(-16.4,-74.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 15
	this.instance_5 = new lib.gai_1_232_43951();
	this.instance_5.setTransform(45.5,-62,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer 13
	this.instance_6 = new lib.gai_1_232_43951();
	this.instance_6.setTransform(3,6.5,1.1,1.1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-14.4,146.4,172.9);


(lib.gai_1_262_23383 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_261_43324();
	this.instance.setTransform(-3.5,-13.5,0.998,0.998,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},1).to({scaleX:1,scaleY:1,y:-13.7},1).to({y:-13.6},2).to({scaleX:1,scaleY:1,y:-13.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-81.1,166.7,166.7);


(lib.gai_1_253_48111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.gai_1_252_95797();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.52,scaleY:2.52,x:-29.5,y:-29.5,alpha:0},12).to({_off:true},1).wait(23));

	// Layer 5
	this.instance_1 = new lib.gai_1_252_95797();
	this.instance_1.alpha = 0.602;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({scaleX:2.52,scaleY:2.52,x:-29.5,y:-29.5,alpha:0},12).to({_off:true},1).wait(12));

	// Layer 3
	this.instance_2 = new lib.gai_1_252_95797();
	this.instance_2.alpha = 0.602;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({scaleX:2.69,scaleY:2.69,x:-32.8,y:-32.8,alpha:0},13).wait(1));

	// Layer 1
	this.instance_3 = new lib.gai_1_252_95797();
	this.instance_3.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.8,38.8);


(lib.gai_1_254_24036 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_253_48111();
	this.instance.setTransform(-2.3,-2.3,1.063,1.063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.3,41.3,41.3);


(lib.gai_1_245_66796 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件12();
	this.instance.setTransform(82.6,66.5,1,1,0,0,0,47,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.gai_1_254_24036();
	this.instance_1.setTransform(18.7,4,3.618,3.618);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,-4.3,149.2,149.2);


(lib.gai_1_246_42649 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gai_1_245_66796();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1,x:-8.5,y:-8.2},14).to({scaleX:1,scaleY:1,x:0,y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,-4.3,149.2,149.2);


(lib.gai_1_250_35635 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 29
	this.instance = new lib.gai_1_249_56887();
	this.instance.setTransform(41.7,-30.3,1.331,1.331);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 27
	this.instance_1 = new lib.gai_1_246_42649();
	this.instance_1.setTransform(-22.4,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.gai_1_236_517();
	this.instance_2.setTransform(53.8,-260.7,2.56,2.56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.3,-297.5,326.6,415.7);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.a=2;
	}
	this.frame_204 = function() {
		stage.canvas.a--;
		if(stage.canvas.a<=0){
			this.stop();
		}else{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(204).call(this.frame_204).wait(1));

	// btn
	this.instance = new lib.gai_1_262_23383();
	this.instance.setTransform(669.6,44,0.81,0.81,0,0,0,0.1,0.2);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.gai_1_255_75571();
	this.instance_1.setTransform(671.4,42.7,0.81,0.81,0,0,0,0.1,0.1);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 15, 178))];
	this.instance_1.cache(-106,-72,204,153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1}]},204).wait(1));

	// black
	this.instance_2 = new lib.元件8_1();
	this.instance_2.setTransform(149.6,303,1,1,0,0,0,159.5,311.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(198));

	// choose
	this.instance_3 = new lib.gai_1_250_35635();
	this.instance_3.setTransform(67.5,23.5,0.729,0.729);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.gai_1_248_23607();
	this.instance_4.setTransform(283.1,69.8,0.825,0.825);

	this.instance_5 = new lib.元件12();
	this.instance_5.setTransform(231.4,52.4,0.729,0.729,0,0,0,47.1,22.6);

	this.instance_6 = new lib.gai_1_252_95797();
	this.instance_6.setTransform(178.6,0.7,2.803,2.803);
	this.instance_6.alpha = 0.602;

	this.instance_7 = new lib.gai_1_252_95797();
	this.instance_7.setTransform(178.6,0.7,2.803,2.803);
	this.instance_7.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},38).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},38).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},38).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},38).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).wait(38).to({alpha:0},6,cjs.Ease.get(1)).wait(1).to({x:187.5},0).to({alpha:1},6,cjs.Ease.get(1)).wait(38).to({alpha:0},6,cjs.Ease.get(1)).wait(1).to({x:347.5},0).to({alpha:1},6,cjs.Ease.get(1)).wait(38).to({alpha:0},6,cjs.Ease.get(1)).wait(1).to({x:497.5},0).to({alpha:1},6,cjs.Ease.get(1)).wait(38).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// bg
	this.instance_8 = new lib.元件7();
	this.instance_8.setTransform(595.5,245,1,1,0,0,0,595.5,245);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:85},50).wait(1).to({y:245},50).wait(1).to({y:85},50).wait(1).to({y:245},50).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-193.3,763,443.4);


// stage content:



(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var myDate = new Date().getTime();
		var toDate=new Date('2017/8/8 23:00:00').getTime();
		if(myDate>toDate){//年月日时分
			this.blackmc.visible = false;
		}else{
			this.blackmc.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// D15
	this.instance = new lib.D15_1();
	this.instance.setTransform(12.5,77.5,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// GM
	this.instance_1 = new lib.元件8();
	this.instance_1.setTransform(696.5,9.5,1,1,0,0,0,31.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// black
	this.blackmc = new lib.元件10();
	this.blackmc.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.blackmc).wait(1));

	// main
	this.instance_2 = new lib.main();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(354.1,-148.3,763,443.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
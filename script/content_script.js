var d = document,
	b = 'body',
	c = 'createElement',
	a = 'appendChild',
	e = 'addEventListener',
	s = 'style',
	ct = 'cssText',
	//dom element
	frame = d[c]('div'),
	line = d[c]('div'),
	lineBtn = d[c]('div'),
	logo = d[c]('div'),
	control = d[c]('div'),
	like = d[c]('div'),
	pop = d[c]('div'),
	del = d[c]('div'),
	next = d[c]('div'),
	ntc = d[c]('a'),
	ntcImage = new Image(),
	ntcTitle = d[c]('div'),
	port = chrome.extension.connect({name: "zmoe"});
frame[s][ct] += ';position:fixed;top:0;left:0;right:0;height:3px;z-index:10000;-webkit-transition:height 0.3s linear;cursor:pointer;font-family:arial,sans-serif;';

logo[s][ct] += ';background-color:#3D9400;background-repeat:no-repeat;background-image:url(http://2.agreatbeginning.sinaapp.com/images/logo.png),-webkit-linear-gradient(top,#3D9400,#398A00);border: 1px solid #29691D;text-shadow: 0 1px rgba(0, 0, 0, 0.1);position:absolute;top:0;left:0;width:100px;height:26px;line-height:26px;text-align:center;font-weight:bold;box-shadow:0px 0px 3px #000;color:#fff;font-size:20px;border-bottom-right-radius:3px;-webkit-transition:top 0.5s ease;';

control[s][ct] += ';background-color:#3D9400;background-image:-webkit-linear-gradient(top,#3D9400,#398A00);border: 1px solid #29691D;text-shadow: 0 1px rgba(0, 0, 0, 0.1);;position:absolute;top:0;left:0;width:100px;height:26px;line-height:26px;text-align:center;font-weight:bold;box-shadow:0px 0px 3px #000;color:#fff;font-size:25px;border-bottom-right-radius:3px;-webkit-transform-origin: 0 0;-webkit-transform:rotateX(90deg);-webkit-transition:-webkit-transform 0.5s ease;';
like[s][ct]    += ';float:left;width:19px;height:20px;margin:3px;background-image:url(http://2.agreatbeginning.sinaapp.com/images/btn.png);background-position:0px -89px; background-position:0px -67px;';
pop[s][ct]     += ';float:left;width:19px;height:20px;margin:3px;background-image:url(http://2.agreatbeginning.sinaapp.com/images/btn.png);background-position:1px 0px;  background-position:0px -25px;';
del[s][ct]  += ';float:left;width:19px;height:20px;margin:3px;background-image:url(http://2.agreatbeginning.sinaapp.com/images/btn.png);background-position:0px -111px;';
next[s][ct]    += ';float:left;width:19px;height:20px;margin:3px;background-image:url(http://2.agreatbeginning.sinaapp.com/images/btn.png);background-position:-1px -44px;';

line[s][ct] += ';position:absolute;bottom:0;left:100px;right:0;height:15px;background:-webkit-linear-gradient(top,#222 0%, #444 20%, #444 80%, #222 100%);';
lineBtn[s][ct] += ';background-color:#357AE8;background-image:-webkit-linear-gradient(top,#4D90FE,#357AE8);height:95%;width:0%;-webkit-transition:width 0.5s linear;box-shadow:0px 0px 5px #357AE8;border-top-right-radius:1px;border-bottom-right-radius:1px;';

ntc[s][ct] += 'position:absolute;top:0;left:2px;display:none;opacity:0;-webkit-transition:opacity 0.5s ease;background:#fff;text-decoration:none;';
ntcTitle[s][ct] += 'position:absolute;bottom:3px;right:3px;left:3px;text-align:center;background-image:-webkit-linear-gradient(left,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.5) 100%);color:#fff;font-size:14px;line-height:100%;padding:5px;box-shadow:0px 0px 1px #000;';
ntcImage[s][ct] += 'display:block;border:3px solid #357AE8;border-radius:2px;box-shadow:1px 1px 3px #000;';

d[b][a](frame);
frame[a](ntc);
frame[a](line);
frame[a](logo);
frame[a](control);
control[a](like);
control[a](pop);
control[a](del);
control[a](next);
line[a](lineBtn);
ntc[a](ntcTitle);
ntc[a](ntcImage);
//logo
//logo.innerHTML = 'moe.fm';
logo._ = {};
logo._.visiable = true;
logo._.show = function(){
	logo[s]['top'] = '0';
}
logo._.hide = function(){
	logo[s]['top'] = '-25px';
}
logo._.vis = function(b){
	if(logo._.visiable != b){
		logo._.visiable = b;
		if(logo._.visiable) logo._.show();
		else logo._.hide();
	}
}
// control
control._ = {};
control._.timer;
control._.show = function(){
	control[s][ct] += ';-webkit-transform:rotateX(0);';
	clearTimeout(control._.timer);
}
control._.hide = function(){
	control._.timer = setTimeout(function(){
		control[s][ct] += ';-webkit-transform:rotateX(90deg);';
		},1000);
}
control._.ispaused = true;
control._.pop = function(b){
	if(control._.ispaused != b){
		control._.ispaused = b;
		pop[s]['backgroundPosition'] = control._.ispaused?'1px 0px':'0px -25px';
	}
}
control._.isliked = false;
control._.like = function(b){
	if(control._.isliked != b){
		control._.isliked = b;
		like[s]['backgroundPosition'] = control._.isliked?'0px -89px':'0px -67px';
	}
}
KISSY.Event.on(frame,'mouseenter',control._.show);
KISSY.Event.on(frame,'mouseleave',control._.hide);
//ntc
ntc._ = {};
ntc._.timer;
ntc._.show = function(){
	ntc[s]['display'] = 'block';
	setTimeout(function(){ntc[s]['opacity'] = '1';},100);
	clearTimeout(ntc._.timer);
};
ntc._.hide = function(){
	ntc._.timer = setTimeout(function(){
		ntc[s]['opacity'] = '0';
		ntc._.timer = setTimeout(function(){ntc[s]['display'] = 'none';},500);
	},1000);
};
ntc._.set = function(imgSrc,href,info){
	if(imgSrc != ntcImage.src) ntcImage.src = imgSrc;
	if(info != ntcTitle.innerHTML) ntcTitle.innerHTML = info;
	if(href != ntc.href) ntc.href = href;
}
KISSY.Event.on(frame,'mouseenter',ntc._.show);
KISSY.Event.on(frame,'mouseleave',ntc._.hide);
// line
line._ = {};
line._.timer;
line._.show = function(){
	frame[s]['height'] = '15px';
	clearTimeout(line._.timer);
};
line._.hide = function(){
	line._.timer = setTimeout(function(){
		frame[s]['height'] = '3px';
	},1000);
};
KISSY.Event.on(frame,'mouseenter',line._.show);
KISSY.Event.on(frame,'mouseleave',line._.hide);
line._.flag = false;
line[e]('mousedown',function(){
line._.flag = true;
lineBtn[s][ct] += ';-webkit-transition-duration:0s;';
},false);
d[e]('mousemove',function(e){
	if(line._.flag == false) return false;
	var m = e.clientX;
	m < 100 ? m = 100 : 0;
	m > d[b]['offsetWdith'] ? m = d[b]['offsetWdith'] :0;
	lineBtn[s]['width'] = m - 100+'px';
},false);
d[e]('mouseup',function(e){
	if(line._.flag == false) return false;
	line._.flag = false;
	var m = e.clientX,p;
	m < 100 ? m = 100 : 0;
	m > d[b]['offsetWdith'] ? m = d[b]['offsetWdith'] :0;
	lineBtn[s]['width'] = m - 100+'px';
	p = lineBtn.offsetWidth/line.offsetWidth;
	port.postMessage({'cmd':'set','type':'cTime','cTime':p});
	lineBtn[s][ct] += ';-webkit-transition-duration:1s;';
},false);
//nextSong
next[e]('click',function(){port.postMessage({'cmd':'set','type':'next'});},false);
//pop
pop[e]('click',function(){port.postMessage({'cmd':'set','type':'pop'});},false); 
//like
like[e]('click',function(){port.postMessage({'cmd':'set','type':'like'});},false); 
//del
del[e]('click',function(){port.postMessage({'cmd':'set','type':'del'});},false); 
port.onMessage.addListener(function(msg){
	if(! line._.flag) lineBtn[s]['width'] = msg.playedTime*100+'%';
	logo._.vis(msg.logoVisiable);
	control._.pop(msg.ispaused);
	control._.like(msg.isliked);
	ntc._.set(msg.songInfo.cover.medium,msg.songInfo.sub_url,msg.songInfo.title);
	//console.log(msg);
});
setInterval(function(){port.postMessage({'cmd':'get'});},500);






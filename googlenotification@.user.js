// ==UserScript==
// @name           Google+ notification
// @include        https://plus.google.com/*
// ==/UserScript==

if(document.getElementById('gbi1')) (function(d){
  function $(x){return d.getElementById(x)}
  function N(x){return d.createElement(x)}
  function Q(x){return d.querySelector(x)}

  function S(id,x){id='___gn__style__'+id;var s=$(id);if(!s){s=N('style');s.setAttribute('id',id);d.head.appendChild(s)}s.textContent=x}

  var z=[$('gbi1'),$('gbi4t')],ic=new Image(),c=N('canvas'),ctx=c.getContext('2d'),s=Q("link[rel=shortcut\\ icon]");

  ic.src = "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AJubm3guLi7/Ly8v/zExMf8yMjL/MjIy/zMzM/8yMjL/MjIy/zExMf8vLy//Li4u/y0tLf+enp50////AP///wAvLy//MTEx/zMzM/80NDT/NTU1/zY2Nv8mJib/JiYm/zU1Nf80NDT/MjIy/zAwMP8uLi7/LS0t/////wD///8AMjIy/zQ0NP82Njb/ODg4/zo6Ov87Ozv/09HR/9PR0f86Ojr/ODg4/zY2Nv80NDT/MjIy/y8vL/////8A////ADU1Nf84ODj/Ozs7/z09Pf8/Pz//QEBA/+Pi4v/j4uL/Pz8//z09Pf87Ozv/ODg4/zU1Nf8yMjL/////AP///wA5OTn/PDw8/z8/P/8tLS3/Ly8v/y8vL//o5+f/6Ofn/y8vL/8tLS3/LCws/zw8PP85OTn/NTU1/////wD///8APDw8/0BAQP9CQkL/7ezs/+3s7P/t7Oz/7ezs/+3s7P/t7Oz/7ezs/+3s7P8/Pz//Ozs7/zg4OP////8A////AD8/P/9CQkL/RUVF//Hx8f/x8fH/8fHx//Hx8f/x8fH/8fHx//Hx8f/x8fH/QkJC/z4+Pv86Ojr/////AP///wBAQED/RERE/0dHR/9JSUn/SUlJ/0lJSf/29fX/9vX1/0lJSf9JSUn/R0dH/0RERP9AQED/PDw8/////wD///8AQkJC/0ZGRv9ISEj/SUlJ/0lJSf9JSUn/+fn5//n5+f9ISEj/SEhI/0dHR/9GRkb/QkJC/z4+Pv////8A////AENDQ/9HR0f/SUlJ/0lJSf9JSUn/SUlJ//39/f/9/f3/SUlJ/0lJSf9JSUn/R0dH/0NDQ/8/Pz//////AP///wBERET/R0dH/0lJSf9JSUn/SUlJ/0lJSf9JSUn/SUlJ/0lJSf9JSUn/SUlJ/0dHR/9DQ0P/Pz8//////wD///8ANzc3/zo6Ov88PDz/PDw8/zw8PP88PDz/PDw8/zw8PP88PDz/PDw8/zw8PP86Ojr/Nzc3/zQ0NP////8A////AA8P1f8PD9X/Dw/V/+hpM//oaTP/6Gkz/+hpM/8lmQD/JZkA/yWZAP8mkwP/EbLu/xGy7v8Rsu7/////AP///wCHh+p+Dw/V/w8P1f/oaTP/6Gkz/+hpM//oaTP/JZkA/yWZAP8lmQD/JpQE/xGy7v8Rsu7/jNr2ef///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A//8AAMADAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAADAAwAA//8AAA==";
  ctx.font = '8px Arial';

  function updateIcon(){
    var n=parseInt(z[0].textContent),s2=s.cloneNode(true)
    c.width=c.height=0;c.width=c.height=16;ctx.drawImage(ic,0,0);
    if(n>0){ctx.fillStyle='#e33';ctx.fillRect(8,8,8,8);ctx.fillStyle='#000';ctx.fillText(n,9.5,14.5);ctx.fillStyle='#fff';ctx.fillText(n,10,15)}
    s2.href=c.toDataURL();s2.type='image/png';s.parentNode.replaceChild(s2,s);s=s2
  }
  z[0].addEventListener('DOMNodeInserted', updateIcon, true);

  function fullWidthCss(){
    var root='#content>div',leftCol=root+'>div:first-child',contentCol='#contentPane',rightCol=root+'>div:last-child',post='div[aria-live="polite"]>div:first-child',
        pcontent=post+'>div:nth-child(2)',pres=post+'>div:nth-last-child(2)',fw=window.innerWidth,lcw=188/*Q(leftCol).offsetWidth*/,rcw=195/*Q(rightCol).offsetWidth*/,cw=fw-lcw-rcw-30

    return ['div#notify-widget-pane+div+div>div{width:100%}',
            root+'{width:100%}',
	    leftCol+'{width:'+lcw+'px;float:left;display:inline-block}',
	    rightCol+'{width:'+rcw+'px;float:left;display:inline-block}',
	    contentCol+'{max-width:100%;width:auto;text-align:center;display:inline-block;float:left}',
	    contentCol+'>div{width:'+cw+'px;float:left}',
	    contentCol+'>div>div{width:auto;max-width:100%;text-align:left}',
	    pcontent+'{width:59%;float:left !important}',
	    pres+'{width:39%;float:right !important;display:inline-block;background:#ddd;padding:6px;padding-top:2px;margin-top:3px;-moz-box-shadow: 5px 5px 5px #ccc;-webkit-box-shadow: 5px 5px 5px #ccc;box-shadow: 5px 5px 5px #ccc}',
	    pres+'>div:first-child>div,'+pres+'>div:nth-child(3)>div{padding:0 !important;margin:6px 10px 0px 10px !important}',
	    post+'>div:last-child{display:block !important;visibility:hidden;clear:both;width:0;height:0}',
	    pres+'>div:nth-child(2)>div:last-child>div{border-bottom:none !important}'
	   ].join('');
  }

  S('fullWidth',fullWidthCss());
  window.addEventListener('resize',function(){S('fullWidth',fullWidthCss())},true);
})(document);

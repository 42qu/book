/*
 * jQuery corner plugin
 *
 * version 1.7 (1/26/2007)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
jQuery.fn.corner=function(o){function hex2(s){var s=parseInt(s).toString(16);return(s.length<2)?'0'+s:s;};function gpc(node){for(;node&&node.nodeName.toLowerCase()!='html';node=node.parentNode){var v=jQuery.css(node,'backgroundColor');if(v.indexOf('rgb')>=0){rgb=v.match(/\d+/g);return'#'+hex2(rgb[0])+hex2(rgb[1])+hex2(rgb[2]);}
if(v&&v!='transparent')
return v;}
return'#ffffff';};function getW(i){switch(fx){case'round':return Math.round(width*(1-Math.cos(Math.asin(i/width))));case'cool':return Math.round(width*(1+Math.cos(Math.asin(i/width))));case'sharp':return Math.round(width*(1-Math.cos(Math.acos(i/width))));case'bite':return Math.round(width*(Math.cos(Math.asin((width-i-1)/width))));case'slide':return Math.round(width*(Math.atan2(i,width/i)));case'jut':return Math.round(width*(Math.atan2(width,(width-i-1))));case'curl':return Math.round(width*(Math.atan(i)));case'tear':return Math.round(width*(Math.cos(i)));case'wicked':return Math.round(width*(Math.tan(i)));case'long':return Math.round(width*(Math.sqrt(i)));case'sculpt':return Math.round(width*(Math.log((width-i-1),width)));case'dog':return(i&1)?(i+1):width;case'dog2':return(i&2)?(i+1):width;case'dog3':return(i&3)?(i+1):width;case'fray':return(i%2)*width;case'notch':return width;case'bevel':return i+1;}};o=(o||"").toLowerCase();var keep=/keep/.test(o);var cc=((o.match(/cc:(#[0-9a-f]+)/)||[])[1]);var sc=((o.match(/sc:(#[0-9a-f]+)/)||[])[1]);var width=parseInt((o.match(/(\d+)px/)||[])[1])||10;var re=/round|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dog/;var fx=((o.match(re)||['round'])[0]);var edges={T:0,B:1};var opts={TL:/top|tl/.test(o),TR:/top|tr/.test(o),BL:/bottom|bl/.test(o),BR:/bottom|br/.test(o)};if(!opts.TL&&!opts.TR&&!opts.BL&&!opts.BR)
opts={TL:1,TR:1,BL:1,BR:1};var strip=document.createElement('div');strip.style.overflow='hidden';strip.style.height='1px';strip.style.backgroundColor=sc||'transparent';strip.style.borderStyle='solid';return this.each(function(index){var pad={T:parseInt(jQuery.css(this,'paddingTop'))||0,R:parseInt(jQuery.css(this,'paddingRight'))||0,B:parseInt(jQuery.css(this,'paddingBottom'))||0,L:parseInt(jQuery.css(this,'paddingLeft'))||0};if(jQuery.browser.msie)this.style.zoom=1;if(!keep)this.style.border='none';strip.style.borderColor=cc||gpc(this.parentNode);var cssHeight=jQuery.curCSS(this,'height');for(var j in edges){var bot=edges[j];strip.style.borderStyle='none '+(opts[j+'R']?'solid':'none')+' none '+(opts[j+'L']?'solid':'none');var d=document.createElement('div');var ds=d.style;bot?this.appendChild(d):this.insertBefore(d,this.firstChild);if(bot&&cssHeight!='auto'){if(jQuery.css(this,'position')=='static')
this.style.position='relative';ds.position='absolute';ds.bottom=ds.left=ds.padding=ds.margin='0';if(jQuery.browser.msie)
ds.setExpression('width','this.parentNode.offsetWidth');else
ds.width='100%';}
else{ds.margin=!bot?'-'+pad.T+'px -'+pad.R+'px '+(pad.T-width)+'px -'+pad.L+'px':(pad.B-width)+'px -'+pad.R+'px -'+pad.B+'px -'+pad.L+'px';}
for(var i=0;i<width;i++){var w=Math.max(0,getW(i));var e=strip.cloneNode(false);e.style.borderWidth='0 '+(opts[j+'R']?w:0)+'px 0 '+(opts[j+'L']?w:0)+'px';bot?d.appendChild(e):d.insertBefore(e,d.firstChild);}}});};

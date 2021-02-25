/*
 Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){var q,g,l;CKEDITOR.plugins.add("colorbutton",{requires:"panelbutton,floatpanel",lang:"af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"bgcolor,textcolor",hidpi:!0,init:function(a){function b(d){function b(){var d=a.config["colorButton_"+f+"Style"];d.childRule="back"==f?function(a){return e(a)}:
function(a){return!(a.is("a")||a.getElementsByTag("a").count())||e(a)};return d}function A(d,r,h){var c={};d&&(c.color=d);r&&(c.colorName=r);r=!CKEDITOR.tools.isEmpty(c)&&new CKEDITOR.style(b(),c);a.execCommand(m,{newStyle:r});if(d&&h)for(h.addColor(d.substr(1).toUpperCase()),d=u.element.find("[role\x3doption]").toArray(),h=0;h<d.length;h++)d[h].setAttributes({"aria-posinset":h+1,"aria-setsize":d.length})}var k=d.name,f=d.type,g=d.title,C=d.order,m=d.commandName;d=d.contentTransformations||{};var B=
new CKEDITOR.style(t["colorButton_"+f+"Style"]),q=CKEDITOR.tools.getNextId()+"_colorBox",y={type:f},z=new CKEDITOR.style(t["colorButton_"+f+"Style"],{color:"inherit"}),x=function(){return CKEDITOR.tools.addFunction(function(d,r,b){a.focus();a.fire("saveSnapshot");"?"==d?a.getColorFromDialog(function(a){a&&A(a,r,v)},null,y):A(d&&"#"+d,r,v);b&&(b.setAttribute("cke_colorlast",!0),a.once("selectionChange",function(){b.removeAttribute("cke_colorlast")}))})}(),v=l.getRowLimit(a)?new l(a,"back"==f?"background-color":
"color",x):void 0,u;a.addCommand(m,{contextSensitive:!0,exec:function(a,d){if(!a.readOnly){var b=d.newStyle;a.removeStyle(z);a.focus();b&&a.applyStyle(b);a.fire("saveSnapshot")}},refresh:function(a,d){z.checkApplicable(d,a,a.activeFilter)?z.checkActive(d,a)?this.setState(CKEDITOR.TRISTATE_ON):this.setState(CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_DISABLED)}});a.ui.add(k,CKEDITOR.UI_PANELBUTTON,{label:g,title:g,command:m,editorFocus:0,toolbar:"colors,"+C,allowedContent:B,requiredContent:B,
contentTransformations:d,panel:{css:CKEDITOR.skin.getPath("editor"),attributes:{role:"listbox","aria-label":n.panelTitle}},select:function(a){var d=t.colorButton_colors.split(",");a=CKEDITOR.tools.array.find(d,a);a=p(a);w(u,a);u._.markFirstDisplayed()},onBlock:function(d,b){u=b;b.autoSize=!0;b.element.addClass("cke_colorblock");b.element.setHtml(c(q,x,v?v.getLength():0));b.element.getDocument().getBody().setStyle("overflow","hidden");CKEDITOR.ui.fire("ready",this);var h=b.keys,f="rtl"==a.lang.dir;
h[f?37:39]="next";h[40]="next";h[9]="next";h[f?39:37]="prev";h[38]="prev";h[CKEDITOR.SHIFT+9]="prev";h[32]="click";v&&v.setContainer(b.element.findOne(".cke_colorhistory"))},onOpen:function(){var d=a.getSelection(),b=d&&d.getStartElement(),c=a.elementPath(b),k="back"==f?"background-color":"color";if(c){b=c.block||c.blockLimit||a.document.getBody();do c=b&&b.getComputedStyle(k)||"transparent";while("back"==f&&"transparent"==c&&b&&(b=b.getParent()));c&&"transparent"!=c||(c="#ffffff");t.colorButton_enableAutomatic&&
u.element.findOne("#"+q).setStyle("background-color",c);if(b=d&&d.getRanges()[0]){for(var d=new CKEDITOR.dom.walker(b),e=b.collapsed?b.startContainer:d.next(),b="";e;){e.type!==CKEDITOR.NODE_ELEMENT&&(e=e.getParent());e=p(e.getComputedStyle(k));b=b||e;if(b!==e){b="";break}e=d.next()}"transparent"==b&&(b="");"fore"==f&&(y.automaticTextColor="#"+p(c));y.selectionColor=b?"#"+b:"";w(u,b)}return c}}})}function c(b,c,e){var k=[],f=t.colorButton_colors.split(","),g=a.plugins.colordialog&&t.colorButton_enableMore;
e=f.length+e+(g?1:0);var p=1;t.colorButton_enableAutomatic&&(e+=1,p+=1,k.push('\x3ca class\x3d"cke_colorauto" _cke_focus\x3d1 hidefocus\x3dtrue',' title\x3d"',n.auto,'"',' draggable\x3d"false"',' ondragstart\x3d"return false;"',' onclick\x3d"CKEDITOR.tools.callFunction(',c,',null);return false;"'," href\x3d\"javascript:void('",n.auto,"')\"",' role\x3d"option" aria-posinset\x3d"1" aria-setsize\x3d"',e,'"\x3e','\x3ctable role\x3d"presentation" cellspacing\x3d0 cellpadding\x3d0 width\x3d"100%"\x3e',
"\x3ctr\x3e",'\x3ctd colspan\x3d"',a.config.colorButton_colorsPerRow,'" align\x3d"center"\x3e','\x3cspan class\x3d"cke_colorbox" id\x3d"',b,'"\x3e\x3c/span\x3e',n.auto,"\x3c/td\x3e","\x3c/tr\x3e","\x3c/table\x3e","\x3c/a\x3e"));k.push('\x3ctable role\x3d"presentation" cellspacing\x3d0 cellpadding\x3d0 width\x3d"100%"\x3e\x3ctbody\x3e');for(b=0;b<f.length;b++){0===b%a.config.colorButton_colorsPerRow&&k.push("\x3c/tr\x3e\x3ctr\x3e");var m=f[b].split("/"),w=m[0],m=new q(a,{color:m[1]||w,label:m[1]?w:
void 0},c);m.setPositionIndex(p+b,e);k.push(m.getHtml())}l.getRowLimit(a)&&l.renderContainer(k,a);g&&k.push("\x3c/tr\x3e","\x3ctr\x3e",'\x3ctd colspan\x3d"',a.config.colorButton_colorsPerRow,'" align\x3d"center"\x3e','\x3ca class\x3d"cke_colormore" _cke_focus\x3d1 hidefocus\x3dtrue',' title\x3d"',n.more,'"',' draggable\x3d"false"',' ondragstart\x3d"return false;"',' onclick\x3d"CKEDITOR.tools.callFunction(',c,",'?');return false;\""," href\x3d\"javascript:void('",n.more,"')\"",' role\x3d"option" aria-posinset\x3d"',
e,'" aria-setsize\x3d"',e,'"\x3e',n.more,"\x3c/a\x3e","\x3c/td\x3e");k.push("\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e");return k.join("")}function e(a){return"false"==a.getAttribute("contentEditable")||a.getAttribute("data-nostyle")}function w(a,b){var c=a._.getItems(),e=a.element.findOne("[aria-selected]"),f=a.element.findOne("[cke_colorlast]");e&&e.removeAttribute("aria-selected");if(f)f.setAttribute("aria-selected",!0);else for(e=0;e<c.count();e++)if(f=c.getItem(e),b&&b==p(f.getAttribute("data-value"))){f.setAttribute("aria-selected",
!0);break}}function p(a){return CKEDITOR.tools.normalizeHex("#"+CKEDITOR.tools.convertRgbToHex(a||"")).replace(/#/g,"")}var t=a.config,n=a.lang.colorbutton;if(!CKEDITOR.env.hc){b({name:"TextColor",type:"fore",commandName:"textColor",title:n.textColorTitle,order:10,contentTransformations:[[{element:"font",check:"span{color}",left:function(a){return!!a.attributes.color},right:function(a){a.name="span";a.attributes.color&&(a.styles.color=a.attributes.color);delete a.attributes.color}}]]});var g,x=a.config.colorButton_normalizeBackground;
if(void 0===x||x)g=[[{element:"span",left:function(a){var b=CKEDITOR.tools;if("span"!=a.name||!a.styles||!a.styles.background)return!1;a=b.style.parse.background(a.styles.background);return a.color&&1===b.object.keys(a).length},right:function(b){var c=(new CKEDITOR.style(a.config.colorButton_backStyle,{color:b.styles.background})).getDefinition();b.name=c.element;b.styles=c.styles;b.attributes=c.attributes||{};return b}}]];b({name:"BGColor",type:"back",commandName:"bgColor",title:n.bgColorTitle,order:20,
contentTransformations:g})}}});q=CKEDITOR.tools.createClass({$:function(a,b,c){this.$=new CKEDITOR.dom.element("td");this.color=b.color;this.clickFn=c;this.label=b.label||q.colorNames(a)[this.color]||this.color;this.setHtml()},statics:{colorNames:function(a){return a.lang.colorbutton.colors}},proto:{getElement:function(){return this.$},getHtml:function(){return this.getElement().getOuterHtml()},setHtml:function(){this.getElement().setHtml('\x3ca class\x3d"cke_colorbox" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"'+
this.label+'" draggable\x3d"false" ondragstart\x3d"return false;" onclick\x3d"CKEDITOR.tools.callFunction('+this.clickFn+",'"+this.color+"','"+this.label+"', this); return false;\" href\x3d\"javascript:void('"+this.color+'\')" data-value\x3d"'+this.color+'" role\x3d"option"\x3e\x3cspan class\x3d"cke_colorbox" style\x3d"background-color:#'+this.color+'"\x3e\x3c/span\x3e\x3c/a\x3e')},setPositionIndex:function(a,b){this.getElement().getChild(0).setAttributes({"aria-posinset":a,"aria-setsize":b})}}});
g=CKEDITOR.tools.createClass({$:function(){this.$=new CKEDITOR.dom.element("tr");this.$.addClass("cke_colorhistory_row");this.boxes=[]},proto:{getElement:function(){return this.$},removeLastColor:function(){this.getElement().getLast().remove();return this.boxes.pop()},addNewColor:function(a){this.boxes.unshift(a);this.getElement().append(a.getElement(),!0)},extractColorBox:function(a){var b=CKEDITOR.tools.getIndex(this.boxes,function(b){return b.color===a});if(0>b)return null;this.boxes[b].getElement().remove();
return this.boxes.splice(b,1)[0]}}});l=CKEDITOR.tools.createClass({$:function(a,b,c){this.editor=a;this.cssProperty=b;this.clickFn=c;this.rows=[];this._.addNewRow();if(this.editor.config.colorButton_renderContentColors)this.editor.once("instanceReady",function(){this.renderContentColors()},this)},statics:{renderContainer:function(a,b){a.push('\x3c/tbody\x3e\x3ctbody class\x3d"cke_colorhistory" style\x3d"display:none;"\x3e',"\x3ctr\x3e",'\x3ctd colspan\x3d"',b.config.colorButton_colorsPerRow,'" align\x3d"center"\x3e',
"\x3cspan\x3e\x3chr\x3e\x3c/span\x3e","\x3c/td\x3e","\x3c/tr\x3e","\x3c/tbody\x3e\x3ctbody\x3e")},getRowLimit:function(a){return a.config.colorButton_historyRowLimit},getCapacity:function(a){return l.getRowLimit(a)*a.config.colorButton_colorsPerRow},colorList:CKEDITOR.tools.style.parse._colors},_:{countColors:function(){var a=CKEDITOR.tools.getStyledSpans(this.cssProperty,this.editor.editable());return CKEDITOR.tools.array.reduce(a,function(a,c){var e=this._.getHexCode(c,this.cssProperty,l.colorList);
a[e]=a[e]||0;a[e]+=1;return a},{},this)},getHexCode:function(a,b,c){var e=a.getStyle(b);return e in c?c[e].substr(1):this._.normalizeColor(a.getComputedStyle(b)).toUpperCase()},sortByOccurrencesAscending:function(a,b){var c=[],e;for(e in a){var g={};g[b]=e;g.frequency=a[e];c.push(g)}c.sort(function(a,b){return b.frequency-a.frequency});this._.trimToCapacity(c);return c.reverse()},trimToCapacity:function(a){a.splice(l.getCapacity(this.editor))},addColors:function(a){CKEDITOR.tools.array.forEach(a,
function(a){this.addColor(a.colorCode)},this)},extractColorBox:function(a){for(var b=0;b<this.rows.length;b++){var c=this.rows[b].extractColorBox(a);if(c)return c}return null},moveToBeginning:function(a){this.rows[0].addNewColor(a)},createAtBeginning:function(a){this._.moveToBeginning(new q(this.editor,{color:a},this.clickFn))},addNewRow:function(){this.rows.push(new g);this.container&&this.container.append(this.rows[this.rows.length-1].getElement())},alignRows:function(){for(var a=0;a<l.getRowLimit(this.editor)&&
!(this.rows[a].boxes.length<=this.editor.config.colorButton_colorsPerRow);a++)this.rows[a+1]?this._.moveLastBoxToNextRow(a):a<l.getRowLimit(this.editor)-1?(this._.addNewRow(),this._.moveLastBoxToNextRow(a)):this.rows[a].removeLastColor()},moveLastBoxToNextRow:function(a){this.rows[a+1].addNewColor(this.rows[a].removeLastColor())},refreshPositions:function(){var a=this._.countPanelElements(),b=this._.calculateFirstPosition(a);CKEDITOR.tools.array.forEach(this.rows,function(c){CKEDITOR.tools.array.forEach(c.boxes,
function(c){c.setPositionIndex(b,a);b+=1})})},countPanelElements:function(){var a=this.editor.config.colorButton_colors.split(",").length+this.getLength();this.editor.plugins.colordialog&&this.editor.config.colorButton_enableMore&&(a+=1);this.editor.config.colorButton_enableAutomatic&&(a+=1);return a},calculateFirstPosition:function(a){return this.editor.plugins.colordialog&&this.editor.config.colorButton_enableMore?a-this.getLength():a-this.getLength()+1},attachRows:function(){CKEDITOR.tools.array.forEach(this.rows,
function(a){this.container.append(a.getElement())},this)},normalizeColor:function(a){return CKEDITOR.tools.normalizeHex("#"+CKEDITOR.tools.convertRgbToHex(a||"")).replace(/#/g,"")}},proto:{setContainer:function(a){this.container=a;this._.attachRows();this.getLength()&&this.show()},show:function(){this.container&&this.container.show()},renderContentColors:function(){var a=this._.countColors();CKEDITOR.tools.isEmpty(a)||(a=this._.sortByOccurrencesAscending(a,"colorCode"),this._.addColors(a),this._.refreshPositions())},
addColor:function(a){var b=this._.extractColorBox(a);this.container&&!this.container.isVisible()&&this.show();b?this._.moveToBeginning(b):this._.createAtBeginning(a);this._.alignRows()},getLength:function(){return CKEDITOR.tools.array.reduce(this.rows,function(a,b){return a+b.boxes.length},0)}}})})();CKEDITOR.config.colorButton_enableMore=!0;CKEDITOR.config.colorButton_colors="1ABC9C,2ECC71,3498DB,9B59B6,4E5F70,F1C40F,16A085,27AE60,2980B9,8E44AD,2C3E50,F39C12,E67E22,E74C3C,ECF0F1,95A5A6,DDD,FFF,D35400,C0392B,BDC3C7,7F8C8D,999,000";
CKEDITOR.config.colorButton_foreStyle={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}]};CKEDITOR.config.colorButton_backStyle={element:"span",styles:{"background-color":"#(color)"}};CKEDITOR.config.colorButton_enableAutomatic=!0;CKEDITOR.config.colorButton_colorsPerRow=6;CKEDITOR.config.colorButton_historyRowLimit=1;CKEDITOR.config.colorButton_renderContentColors=!0;
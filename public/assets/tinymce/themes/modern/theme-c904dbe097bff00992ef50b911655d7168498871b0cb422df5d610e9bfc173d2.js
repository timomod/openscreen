tinymce.ThemeManager.add("modern",function(a){function b(b,c){var d,e=[];if(b)return n(b.split(/[ ,]/),function(b){function f(){function c(a){return function(c,d){for(var e,f=d.parents.length;f--&&(e=d.parents[f].nodeName,"OL"!=e&&"UL"!=e););b.active(c&&e==a)}}var d=a.selection;"bullist"==g&&d.selectorChanged("ul > li",c("UL")),"numlist"==g&&d.selectorChanged("ol > li",c("OL")),b.settings.stateSelector&&d.selectorChanged(b.settings.stateSelector,function(a){b.active(a)},!0),b.settings.disabledStateSelector&&d.selectorChanged(b.settings.disabledStateSelector,function(a){b.disabled(a)})}var g;"|"==b?d=null:m.has(b)?(b={type:b,size:c},e.push(b),d=null):(d||(d={type:"buttongroup",items:[]},e.push(d)),a.buttons[b]&&(g=b,b=a.buttons[g],"function"==typeof b&&(b=b()),b.type=b.type||"button",b.size=c,b=m.create(b),d.items.push(b),a.initialized?f():a.on("init",f)))}),{type:"toolbar",layout:"flow",items:e}}function c(a){function c(c){return c?(d.push(b(c,a)),!0):void 0}var d=[];if(tinymce.isArray(l.toolbar)){if(0===l.toolbar.length)return;tinymce.each(l.toolbar,function(a,b){l["toolbar"+(b+1)]=a}),delete l.toolbar}for(var e=1;10>e&&c(l["toolbar"+e]);e++);return d.length||l.toolbar===!1||c(l.toolbar||s),d.length?{type:"panel",layout:"stack",classes:"toolbar-grp",ariaRoot:!0,ariaRemember:!0,items:d}:void 0}function d(){function b(b){var c;return"|"==b?{text:"|"}:c=a.menuItems[b]}function c(c){var d,e,f,g,h;if(h=tinymce.makeMap((l.removed_menuitems||"").split(/[ ,]/)),l.menu?(e=l.menu[c],g=!0):e=r[c],e){d={text:e.title},f=[],n((e.items||"").split(/[ ,]/),function(a){var c=b(a);c&&!h[a]&&f.push(b(a))}),g||n(a.menuItems,function(a){a.context==c&&("before"==a.separator&&f.push({text:"|"}),a.prependToContext?f.unshift(a):f.push(a),"after"==a.separator&&f.push({text:"|"}))});for(var i=0;i<f.length;i++)"|"==f[i].text&&(0===i||i==f.length-1)&&f.splice(i,1);if(d.menu=f,!d.menu.length)return null}return d}var d,e=[],f=[];if(l.menu)for(d in l.menu)f.push(d);else for(d in r)f.push(d);for(var g="string"==typeof l.menubar?l.menubar.split(/[ ,]/):f,h=0;h<g.length;h++){var i=g[h];i=c(i),i&&e.push(i)}return e}function e(b){function c(a){var c=b.find(a)[0];c&&c.focus(!0)}a.shortcuts.add("Alt+F9","",function(){c("menubar")}),a.shortcuts.add("Alt+F10","",function(){c("toolbar")}),a.shortcuts.add("Alt+F11","",function(){c("elementpath")}),b.on("cancel",function(){a.focus()})}function f(b,c){function d(a){return{width:a.clientWidth,height:a.clientHeight}}var e,f,g,h;e=a.getContainer(),f=a.getContentAreaContainer().firstChild,g=d(e),h=d(f),null!==b&&(b=Math.max(l.min_width||100,b),b=Math.min(l.max_width||65535,b),o.setStyle(e,"width",b+(g.width-h.width)),o.setStyle(f,"width",b)),c=Math.max(l.min_height||100,c),c=Math.min(l.max_height||65535,c),o.setStyle(f,"height",c),a.fire("ResizeEditor")}function g(b,c){var d=a.getContentAreaContainer();k.resizeTo(d.clientWidth+b,d.clientHeight+c)}function h(){function c(){return a.contextToolbars||[]}function d(b){var c,d,e;return c=tinymce.DOM.getPos(a.getContentAreaContainer()),d=a.dom.getRect(b),e=a.dom.getRoot(),"BODY"==e.nodeName&&(d.x-=e.ownerDocument.documentElement.scrollLeft||e.scrollLeft,d.y-=e.ownerDocument.documentElement.scrollTop||e.scrollTop),d.x+=c.x,d.y+=c.y,d}function e(){n(a.contextToolbars,function(a){a.panel&&a.panel.hide()})}function f(b){var c,f,g,h,i,j,k;if(!a.removed){if(!b||!b.toolbar.panel)return void e();k=["tc-bc","bc-tc","tl-bl","bl-tl","tr-br","br-tr"],i=b.toolbar.panel,i.show(),g=d(b.element),f=tinymce.DOM.getRect(i.getEl()),h=tinymce.DOM.getRect(a.getContentAreaContainer()||a.getBody()),g.w=b.element.clientWidth,g.h=b.element.clientHeight,a.inline||(h.w=a.getDoc().documentElement.offsetWidth),a.selection.controlSelection.isResizable(b.element)&&(g=p.inflate(g,0,8)),c=p.findBestRelativePosition(f,g,h,k),c?(n(k.concat("inside"),function(a){i.classes.toggle("tinymce-inline-"+a,a==c)}),j=p.relativePosition(f,g,c),i.moveTo(j.x,j.y)):(n(k,function(a){i.classes.toggle("tinymce-inline-"+a,!1)}),i.classes.toggle("tinymce-inline-inside",!0),g=p.intersect(h,g),g?(c=p.findBestRelativePosition(f,g,h,["tc-tc","tl-tl","tr-tr"]),c?(j=p.relativePosition(f,g,c),i.moveTo(j.x,j.y)):i.moveTo(g.x,g.y)):i.hide())}}function g(){function b(){a.selection&&f(k(a.selection.getNode()))}tinymce.util.Delay.requestAnimationFrame(b)}function h(){l||(l=a.selection.getScrollContainer()||a.getWin(),tinymce.$(l).on("scroll",g),a.on("remove",function(){tinymce.$(l).off("scroll")}))}function i(a){var c;return a.toolbar.panel?(a.toolbar.panel.show(),void f(a)):(h(),c=m.create({type:"floatpanel",role:"application",classes:"tinymce tinymce-inline",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:b(a.toolbar.items)}),a.toolbar.panel=c,c.renderTo(document.body).reflow(),void f(a))}function j(){tinymce.each(c(),function(a){a.panel&&a.panel.hide()})}function k(b){var d,e,f,g=c();for(f=a.$(b).parents().add(b),d=f.length-1;d>=0;d--)for(e=g.length-1;e>=0;e--)if(g[e].predicate(f[d]))return{toolbar:g[e],element:f[d]};return null}var l;a.on("click keyup setContent",function(b){("setcontent"!=b.type||b.selection)&&tinymce.util.Delay.setEditorTimeout(a,function(){var b;b=k(a.selection.getNode()),b?(j(),i(b)):j()})}),a.on("blur hide",j),a.on("ObjectResizeStart",function(){var b=k(a.selection.getNode());b&&b.toolbar.panel&&b.toolbar.panel.hide()}),a.on("nodeChange ResizeEditor ResizeWindow",g),a.on("remove",function(){tinymce.each(c(),function(a){a.panel&&a.panel.remove()}),a.contextToolbars={}})}function i(b){function f(){if(n&&n.moveRel&&n.visible()&&!n._fixed){var b=a.selection.getScrollContainer(),c=a.getBody(),d=0,e=0;if(b){var f=o.getPos(c),g=o.getPos(b);d=Math.max(0,g.x-f.x),e=Math.max(0,g.y-f.y)}n.fixed(!1).moveRel(c,a.rtl?["tr-br","br-tr"]:["tl-bl","bl-tl","tr-br"]).moveBy(d,e)}}function g(){n&&(n.show(),f(),o.addClass(a.getBody(),"mce-edit-focus"))}function i(){n&&(n.hide(),q.hideAll(),o.removeClass(a.getBody(),"mce-edit-focus"))}function j(){return n?void(n.visible()||g()):(n=k.panel=m.create({type:p?"panel":"floatpanel",role:"application",classes:"tinymce tinymce-inline",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!!p,border:1,items:[l.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:d()},c(l.toolbar_items_size)]}),a.fire("BeforeRenderUI"),n.renderTo(p||document.body).reflow(),e(n),g(),h(),a.on("nodeChange",f),a.on("activate",g),a.on("deactivate",i),void a.nodeChanged())}var n,p;return l.fixed_toolbar_container&&(p=o.select(l.fixed_toolbar_container)[0]),l.content_editable=!0,a.on("focus",function(){b.skinUiCss?tinymce.DOM.styleSheetLoader.load(b.skinUiCss,j,j):j()}),a.on("blur hide",i),a.on("remove",function(){n&&(n.remove(),n=null)}),b.skinUiCss&&tinymce.DOM.styleSheetLoader.load(b.skinUiCss),{}}function j(b){function g(){return function(a){"readonly"==a.mode?i.find("*").disabled(!0):i.find("*").disabled(!1)}}var i,j,n;return b.skinUiCss&&tinymce.DOM.loadCSS(b.skinUiCss),i=k.panel=m.create({type:"panel",role:"application",classes:"tinymce",style:"visibility: hidden",layout:"stack",border:1,items:[l.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:d()},c(l.toolbar_items_size),{type:"panel",name:"iframe",layout:"stack",classes:"edit-area",html:"",border:"1 0 0 0"}]}),l.resize!==!1&&(j={type:"resizehandle",direction:l.resize,onResizeStart:function(){var b=a.getContentAreaContainer().firstChild;n={width:b.clientWidth,height:b.clientHeight}},onResize:function(a){"both"==l.resize?f(n.width+a.deltaX,n.height+a.deltaY):f(null,n.height+a.deltaY)}}),l.statusbar!==!1&&i.add({type:"panel",name:"statusbar",classes:"statusbar",layout:"flow",border:"1 0 0 0",ariaRoot:!0,items:[{type:"elementpath"},j]}),l.readonly&&i.find("*").disabled(!0),a.fire("BeforeRenderUI"),a.on("SwitchMode",g()),i.renderBefore(b.targetNode).reflow(),l.width&&tinymce.DOM.setStyle(i.getEl(),"width",l.width),a.on("remove",function(){i.remove(),i=null}),e(i),h(),{iframeContainer:i.find("#iframe")[0].getEl(),editorContainer:i.getEl()}}var k=this,l=a.settings,m=tinymce.ui.Factory,n=tinymce.each,o=tinymce.DOM,p=tinymce.geom.Rect,q=tinymce.ui.FloatPanel,r={file:{title:"File",items:"newdocument"},edit:{title:"Edit",items:"undo redo | cut copy paste pastetext | selectall"},insert:{title:"Insert",items:"|"},view:{title:"View",items:"visualaid |"},format:{title:"Format",items:"bold italic underline strikethrough superscript subscript | formats | removeformat"},table:{title:"Table"},tools:{title:"Tools"}},s="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image";k.renderUI=function(b){var c=l.skin!==!1?l.skin||"lightgray":!1;if(c){var d=l.skin_url;d=d?a.documentBaseURI.toAbsolute(d):tinymce.baseURL+"/skins/"+c,tinymce.Env.documentMode<=7?b.skinUiCss=d+"/skin.ie7.min.css":b.skinUiCss=d+"/skin.min.css",a.contentCSS.push(d+"/content"+(a.inline?".inline":"")+".min.css")}return a.on("ProgressState",function(a){k.throbber=k.throbber||new tinymce.ui.Throbber(k.panel.getEl("body")),a.state?k.throbber.show(a.time):k.throbber.hide()}),l.inline?i(b):j(b)},k.resizeTo=f,k.resizeBy=g});

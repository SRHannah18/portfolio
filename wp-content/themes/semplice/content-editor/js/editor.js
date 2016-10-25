!function(e){"use strict";e(document).ready(function(){function t(){e("#semplice").off("click",".add-column"),p.addColumn(e(this))}function n(t){e("#semplice").off("click",".save"),e("#semplice").off("click",".duplicate");var n=e(this);p.save(e(n),t.data.duplicate)}function o(t){e("#semplice").off("click",".save-mc"),e("#semplice").off("click",".duplicate-mc");e(this);p.saveColumnContent(e(this),t.data.duplicate)}function a(){e("#semplice").off("click",".save-se"),p.saveSingleEdit(e(this))}function i(){e("#semplice").hasClass("show-all-layers")?p.hideLayers(e(this),!0):(e("#semplice").off("click",".content-container"),p.edit(e(this)))}function c(e){function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}if(!e)return"transparent";var n=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return n?"#"+t(n[1])+t(n[2])+t(n[3]):e}function s(e){sweetAlert({title:"Whooops",text:'The value for "'+e+'" contains invalid characters. Please avoid double quotes ("), single quotes (\') and backslashes (\\).',confirmButtonText:"Ok fine!"})}function l(){e(window).scroll(function(){e.each(e(".sticky-mc-atts"),function(){var t=10,n=e(this).height(),o=e(this).parent().offset().top,a=e(this).parent().height(),i=e(window).scrollTop();i>o-t&&o-t+a-n>i?e(this).hasClass("is-sticky")||(e(this).addClass("is-sticky"),e(this).css("top",t+50),e(this).show()):e(this).hasClass("is-sticky")&&(e(this).removeClass("is-sticky"),e(this).css("top",o),e(this).hide())})})}var d={fontset:"",modules:[],branding:{}},r=!1,u=/["'\\]/g,m=!1,p={init:function(){e(".branding-bg-color").wpColorPicker(v),e("head").append('<style id="semplice-decss"></style>'),e("#semplice").on("click",".content-container a, .mc-content-container a, .mc-sub-content-container a, .mailchimp-submit-button",function(e){e.preventDefault()});var t=function(e){e=e||window.event;var t="Do you really want to close the page without saving your progress?";return e&&(e.returnValue=t),t};if(window.onbeforeunload=t,e(".semplice-content").val()){e(".loader").show();var n=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",edit_mode:"init",post_id:wordpress.post_id},dataType:"json"});n.done(function(t){d=e.parseJSON(t.rom);var n=e(".fontset").val();void 0===d.branding&&(d.branding={}),void 0===d.modules&&(d.modules=[]),e("#semplice-content").css({"background-color":d.branding["background-color"],"background-size":d.branding["background-size"],"background-position":d.branding["background-position"],"background-repeat":d.branding["background-repeat"],"background-attachment":d.branding["background-attachment"]}),d.branding["background-image"]&&(e("#semplice-content").css({"background-image":"url("+d.branding["background-image"]+")"}),e(".branding-bg-image-preview").attr("src",d.branding["background-image"]).show(),e("input[name=branding-bg-image]").val(d.branding["background-image"])),e("#semplice-content").children("#content-holder").remove(),e("#semplice-content").append(t.html),e.trim(e("#semplice-content #content-holder").html()).length||e(".semplice-ce-default").clone(!0).appendTo("#semplice-content").stop().fadeIn(500),e(".is-masonry").each(function(){var t=e(this).attr("id");void 0!==t&&e("#"+t).masonry()}),e(".image-link").click(function(e){return!1}),"default"!==n?(e(".custom-fontset").find("option").each(function(){e(this).val()===n?e(this).attr("selected","selected"):e(this).removeAttr("selected")}),p.customFontset(n)):p.customFontset("default"),e(".save-to-wp").addClass("save-to-wp-activated"),e(".loader").fadeOut("slow")}),n.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"JSON Parse Error: "+n,confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")}),n.error(function(e){sweetAlert({title:"Error",type:"error",text:e.responseText,confirmButtonText:"Ok fine!"})})}else p.customFontset("default"),e("#semplice-content").html(""),e("#semplice-content").append('<div id="content-holder"></div>'),e(".semplice-ce-default").clone(!0).appendTo("#semplice-content").stop().fadeIn(500),e(".save-to-wp").addClass("save-to-wp-activated")},add:function(t){e(".loader").show(),e("#semplice-content").find(e(".semplice-ce-default")).is(":visible")&&e("#semplice-content").find(e(".semplice-ce-default")).remove();var n=g("content"),o="#"+n,a=e(t).data("content-type"),i={"background-color":"transparent","background-image":"","background-size":"none","background-position":"50% 0%","background-repeat":"no-repeat","padding-top":"0px","padding-bottom":"0px","padding-right":"0px","padding-left":"0px"};d[o]="multi-column"===a?{columns:{},styles:{}}:{styles:{}};var c=e(t).data("module-id");c&&(d[o].custom_module=c,e(".modules-sub").fadeOut("fast")),d[o].styles=i;var s=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",id:n,content_type:a,edit_mode:"new",rom:d[o]},dataType:"html"});s.done(function(t){"ModuleNotFound"===t?(sweetAlert({title:"Whooops",text:"Module not found! Please make sure the selected module is installed.",confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")):(e("#content-holder").append(t),e(o).find(".color-picker").wpColorPicker(h),e(o).find(".wp-picker-default").remove(),e(o).find(".padding-left, .padding-right").remove(),"multi-column"===a&&(e(o).find(".save").attr("class","save-mc"),e(o).find(".duplicate").attr("class","duplicate-mc"),l()),e(o).addClass("in-edit-mode"),e(o).find(".fadein").transition({opacity:1},500,"ease",function(){e(this).removeClass("fadein")}),e(".loader").fadeOut("slow"),e(e.browser.webkit?"body":"html").animate({scrollTop:e(o).offset().top-100},0))}),s.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")})},addColumn:function(n){e(".loader").show();var o="#"+e(n).data("content-id"),a=e(o).find(".column").length+1,i=g("column"),c="#"+i,s={"background-color":"transparent","background-image":"","background-size":"none","background-position":"50% 0%","background-repeat":"no-repeat","padding-top":"0px","padding-bottom":"0px","padding-right":"0px","padding-left":"0px"};void 0===d[o].columns[c]&&(d[o].columns[c]={}),d[o].columns[c]={styles:{}},d[o].columns[c].styles=s;var l=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",id:i,parent_id:o,rom:d[o],column_count:a,content_type:"add-column",edit_mode:"new"},dataType:"html"});l.done(function(n){e(o).find(".columns").append(n),e(c).find(".save").remove(),e(c).find(".color-picker").wpColorPicker(h),e(c).find(".fadein").transition({opacity:1},500,"ease",function(){e(this).removeClass("fadein")}),e(c+" .column-body").show(),e(".loader").fadeOut("slow"),e("#semplice").on("click",".add-column",t),e(e.browser.webkit?"body":"html").animate({scrollTop:e(c).offset().top-100},0)}),l.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")})},addColumnContent:function(t){e(".loader").show();var n="#"+t.data("content-id"),o=g("column_content"),a="#"+t.data("column-id"),i="#"+o,c=e(t).data("content-type"),s={"background-color":"transparent","background-image":"","background-size":"none","background-position":"50% 0%","background-repeat":"no-repeat","padding-top":"0px","padding-bottom":"0px","padding-right":"0px","padding-left":"0px"};void 0===d[n].columns[a]&&(d[n].columns[a]={}),d[n].columns[a][i]={styles:{}},d[n].columns[a][i].styles=s;var l=e(t).data("module-id");l&&(d[n].columns[a][i].custom_module=l,e(".modules-sub").fadeOut("fast"));var r=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",id:o,ccId:n,content_type:c,rom:d[n],column_id:a,edit_mode:"new",is_column_content:!0},dataType:"html"});r.done(function(t){"ModuleNotFound"===t?(sweetAlert({title:"Whooops",text:"Module not found! Please make sure the selected module is installed.",confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")):(e(a).find(".column-inner").append(t),l&&e(i).attr("data-module-id",l),e(i).find(".save").remove(),e(i).prev(".placeholder").remove(),e(i).find(".color-picker").wpColorPicker(h),e(i).find(".wp-picker-default").remove(),e(i).addClass("in-edit-mode"),e(i).find(".fadein").transition({opacity:1},500,"ease",function(){e(this).removeClass("fadein")}),e(".loader").fadeOut("slow"),e(e.browser.webkit?"body":"html").animate({scrollTop:e(i).offset().top-140},0))}),r.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")})},save:function(t,o){e(".loader").show();var a,i=e(t).data("content-id"),l="#"+e(t).data("content-id"),r=e(t).data("content-type");if(m=!1,d[l]={content:"",styles:{},options:{},custom_module:"",content_type:r},e(l).find(".is-content").each(function(){d[l].content=e(this).val(),0===e(this).val().length&&(a=!0)}),e(l).find(".is-option").each(function(){e.isArray(e(this).val())?d[l].options[e(this).attr("name")]=e(this).val():e(this).val().match(u)?(m=!0,s(e(this).attr("name"))):d[l].options[e(this).attr("name")]=e(this).val()}),e(l).find(".is-style").each(function(){e(this).val().match(u)?(m=!0,s(e(this).attr("name"))):d[l].styles[e(this).attr("name")]=e(this).val()}),e(l).find(".is-custom-module").each(function(){d[l].custom_module=e(this).val().replace(/["']/g,"")}),d[l].styles["background-color"]=c(d[l].styles["background-color"]),a||m)m||sweetAlert({title:"Whooops",text:"Please add some content before save!",confirmButtonText:"Ok fine!"}),e("#semplice").on("click",".save",{duplicate:!1},n),e("#semplice").on("click",".duplicate",{duplicate:!0},n),e(".loader").fadeOut("slow");else{var f=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",id:i,content_type:r,rom:d[l],post_id:wordpress.post_id},dataType:"html"});f.done(function(a){e(l).append(a),e("#semplice").on("click",".save",{duplicate:!1},n),e("#semplice").on("click",".duplicate",{duplicate:!0},n),e(l).find(".edit-content").remove(),e(l).removeClass("in-edit-mode"),e(l).find(".fadein-view").transition({opacity:1},500,"ease",function(){e(this).removeClass("fadein-view")}),e(".loader").fadeOut("slow"),e(e.browser.webkit?"body":"html").animate({scrollTop:e(l).offset().top-100},0),o&&p.duplicate(t)}),f.fail(function(t,o){sweetAlert({title:"Error",type:"error",text:"Request failed: "+o,confirmButtonText:"Ok fine!"}),e("#semplice").on("click",".save",n),e(".loader").fadeOut("slow")})}},saveSingleEdit:function(t){e(".loader").show();{var n,o="#"+e(t).data("container-id"),i=e(t).data("container-id"),l=(e(t).data("content-id"),"#"+e(t).data("content-id")),r=e(t).data("column-id");e(t).data("content-type")}if(m=!1,e(l).find(".is-content").each(function(){d[o].columns[r][l].content=e(this).val(),0===e(this).val().length&&(n=!0)}),e(l).find(".is-cc-option").each(function(){e(this).val().match(u)?(m=!0,s(e(this).attr("name"))):d[o].columns[r][l].options[e(this).attr("name")]=e(this).val()}),e(l).find(".is-cc-style").each(function(){e(this).val().match(u)?(m=!0,s(e(this).attr("name"))):d[o].columns[r][l].styles[e(this).attr("name")]=e(this).val()}),d[o].columns[r][l].styles["background-color"]=c(d[o].columns[r][l].styles["background-color"]),n||m)m||sweetAlert({title:"Whooops",text:"Please add some content before save!",confirmButtonText:"Ok fine!"}),e("#semplice").on("click",".save-se",a),e(".loader").fadeOut("slow");else{var p=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",id:i,rom:d[o],content_type:"multi-column",post_id:wordpress.post_id},dataType:"html"});p.done(function(t){e(o).find(l).remove(),e(o).append(t),e("#semplice").on("click",".save-se",a),e(o).removeClass("in-edit-mode"),e(o).find(".fadein-view").transition({opacity:1},500,"ease",function(){e(this).removeClass("fadein-view")}),e(".loader").fadeOut("slow"),e(e.browser.webkit?"body":"html").animate({scrollTop:e(o).offset().top-100},0)}),p.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e("#semplice").on("click",".save-se",a),e(".loader").fadeOut("slow")})}},saveColumnContent:function(t,n){e(".loader").show();var a,i=e(t).data("content-id"),l="#"+e(t).data("content-id");m=!1;var r=e(t).data("content-type");if(d[l]={columns:{},styles:{},options:{},content_type:r},e(l).find(".is-option").each(function(){e(this).val().match(u)?m=!0:d[l].options[e(this).attr("name")]=e(this).val()}),e(l).find(".is-style").each(function(){e(this).val().match(u)?m=!0:d[l].styles[e(this).attr("name")]=e(this).val()}),d[l].styles["background-color"]=c(d[l].styles["background-color"]),e(l).find(".column").each(function(){var t="#"+e(this).attr("id");d[l].columns[t]={options:{},styles:{}},e(e(this)).find(".is-option").each(function(){"column-name"==e(this).attr("name")&&e(this).val().match(u)?(m=!0,s(e(this).attr("name"))):d[l].columns[t].options[e(this).attr("name")]=e(this).val()}),e(t).find(".is-column-style").each(function(){e(this).val().match(u)?(m=!0,s(e(this).attr("name"))):d[l].columns[t].styles[e(this).attr("name")]=e(this).val()}),d[l].columns[t].styles["background-color"]=c(d[l].columns[t].styles["background-color"]),e(this).find(".column-content").each(function(){var t=(e(this),"#"+e(this).data("content-id")),n="#"+e(this).data("in-column"),o=e(this).data("content-type");d[l].columns[n][t]={content:{},styles:{},options:{},custom_module:"",content_type:o},e(this).find(".is-content").each(function(){d[l].columns[n][t].content=e(this).val(),0===e(this).val().length&&(a=!0)}),e(this).find(".is-cc-option").each(function(){e(this).val().match(u)?(m=!0,s(e(this).attr("name"))):d[l].columns[n][t].options[e(this).attr("name")]=e(this).val()}),e(this).find(".is-cc-style").each(function(){e(this).val().match(u)?(m=!0,s(e(this).attr("name"))):d[l].columns[n][t].styles[e(this).attr("name")]=e(this).val()}),e(this).find(".is-cc-custom-module").each(function(){d[l].columns[n][t].custom_module=e(this).val().replace(/["']/g,"")}),d[l].columns[n][t].styles["background-color"]=c(d[l].columns[n][t].styles["background-color"])})}),0===e(l).find(".column").length||0===e(l).find(".column-content").length||a||m)m||sweetAlert({title:"Whooops",text:"Please add some content before save!",confirmButtonText:"Ok fine!"}),e("#semplice").on("click",".save-mc",{duplicate:!1},o),e("#semplice").on("click",".duplicate-mc",{duplicate:!0},o),e(".loader").fadeOut("slow");else{var f=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",id:i,rom:d[l],content_type:r,post_id:wordpress.post_id},dataType:"html"});f.done(function(a){e(l).append(a),e("#semplice").on("click",".save-mc",{duplicate:!1},o),e("#semplice").on("click",".duplicate-mc",{duplicate:!0},o),e(l).find(".edit-content").remove(),e(l).removeClass("in-edit-mode"),e(l).find(".fadein-view").transition({opacity:1},500,"ease",function(){e(this).removeClass("fadein-view")}),e(".loader").fadeOut("slow"),e(e.browser.webkit?"body":"html").animate({scrollTop:e(l).offset().top-100},0),n&&p.duplicate(t)}),f.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e("#semplice").on("click",".save-mc",{duplicate:!1},o),e("#semplice").on("click",".duplicate-mc",{duplicate:!0},o),e(".loader").fadeOut("slow")})}},edit:function(t){e(".loader").show(),l();var n=e(t).data("content-id"),o="#"+e(t).data("content-id"),a=e(t).data("content-type"),c=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",edit_mode:"edit",id:n,content_type:a,rom:d[o]},dataType:"html"});c.done(function(t){"ModuleNotFound"===t?(sweetAlert({title:"Whooops",text:"Module not found! Please re-install the module used in this content.",confirmButtonText:"Ok fine!"}),e("#semplice").on("click",".content-container",i),e(".loader").fadeOut("slow")):(e(o).append(t),"multi-column"===a?e(o).find(".mc-content-container").remove():(e("#semplice").on("click",".content-container",i),e(o).find(".content-container").remove()),e(o).find(".background-upload-box").each(function(){e(this).children("input[name=background-image]").val()&&e(this).children(".bg-image-preview, .column-bg-image-preview").show()}),e("input[name=img]").val()&&e(o).find("img.image-preview").show(),e(o).find(".color-picker").wpColorPicker(h),e(o).find(".wp-picker-default").remove(),"multi-column"===a?(e(o).find(".save").attr("class","save-mc"),e(o).find(".duplicate").attr("class","duplicate-mc"),e(o).find(".padding-left").first().remove(),e(o).find(".padding-right").first().remove()):e(o).find(".padding-left, .padding-right").remove(),e(o).find(".fadein").transition({opacity:1},500,"ease",function(){e(this).removeClass("fadein")}),e(o).addClass("in-edit-mode"),e(".loader").fadeOut("slow"),e(e.browser.webkit?"body":"html").animate({scrollTop:e(o).offset().top-100},0))}),c.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),"multi-column"!==a&&e("#semplice").on("click",".content-container",i),e(".loader").fadeOut("slow")})},singleEdit:function(t,n){e(".loader").show();var o="#"+e(t).data("content-id"),a=e(n).data("single-edit-column-id"),i=e(n).data("single-edit-content-id"),c="#"+e(n).data("single-edit-content-id"),s=e(n).data("single-edit-content-type"),l=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",edit_mode:"single-edit",id:i,ccId:o,column_id:a,content_type:s,rom:d[o].columns[a][c]},dataType:"html"});l.done(function(t){e(o).append(t),e(o).find(".mc-content-container").remove(),e(o).find(".background-upload-box").each(function(){e(this).children("input[name=background-image]").val()&&e(this).children(".bg-image-preview, .column-bg-image-preview").show()}),e("input[name=img]").val()&&e(o).find("img.image-preview").show(),e(o).find(".color-picker").wpColorPicker(h),e(o).find(".wp-picker-default").remove(),e(c).find(".fadein").transition({opacity:1},500,"ease",function(){e(this).removeClass("fadein")}),e(o).addClass("in-edit-mode"),e(".loader").fadeOut("slow"),e(e.browser.webkit?"body":"html").animate({scrollTop:e(o).offset().top-100},0)}),l.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")})},duplicate:function(t){var n=(e(t).data("content-id"),"#"+e(t).data("content-id")),o=e(t).data("content-type"),a=g("content"),i="#"+a;d[i]=jQuery.extend(!0,{},d[n]),e(n).clone().insertAfter(n).attr("id",a).html("");var c=e('<a data-content-id="'+a+'" data-content-type="'+o+'">');"multi-column"!==o&&e("#semplice").off("click",".content-container"),p.edit(c)},remove:function(t){var n="#"+e(t).data("content-id");e(n).transition({opacity:0,scale:.6},400,"ease",function(){delete d[n],e(n).remove(),!e.trim(e("#content-holder").html()).length&&e(".show-all-layers").length<=0&&e(".semplice-ce-default").clone(!0).appendTo("#semplice-content").stop().fadeIn(500)})},removeColumn:function(t){var n="#"+e(t).data("content-id"),o=e(t).data("parent-id");e(n).transition({opacity:0,marginTop:-40},400,"ease",function(){void 0!==d[o]&&delete d[o][n],e(n).remove()})},collapseColumn:function(t,n){var o=e(t).attr("data-column-id"),a=e(t).attr("data-status");n?(e("#"+o+" .column-collapse").attr("data-status","closed").removeClass("open").addClass("closed").text("Expand"),e("#"+o+" .column-body").stop().hide(),e(e.browser.webkit?"body":"html").animate({scrollTop:e("#"+o).offset().top-120},0)):"open"!==a?(e(t).attr("data-status","open").removeClass("closed").addClass("open").text("Collapse"),e("#"+o+" .column-body").stop().show()):(e(t).attr("data-status","closed").removeClass("open").addClass("closed").text("Expand"),e("#"+o+" .column-body").stop().hide())},up:function(t){var n="#"+e(t).data("content-id"),o=e(n).prev().attr("id");if("column-up"===e(t).attr("class")){var a=e(n).attr("data-order"),i=e(n).prev().attr("data-order");void 0!==i&&(e(n).attr("data-order",i),e(n).find(".column-count").text(i),e("#"+o).attr("data-order",a),e("#"+o).find(".column-count").text(a))}e(n).insertBefore("#"+o),e(e.browser.webkit?"body":"html").animate({scrollTop:e(n).offset().top-100},0)},down:function(t){var n="#"+e(t).data("content-id"),o=e(n).next().attr("id");if("column-down"===e(t).attr("class")){var a=e(n).attr("data-order"),i=e(n).next().attr("data-order");i<=e(".column").length&&(e(n).attr("data-order",i),e(n).find(".column-count").text(i),e("#"+o).attr("data-order",a),e("#"+o).find(".column-count").text(a))}e(n).insertAfter("#"+o),e(e.browser.webkit?"body":"html").animate({scrollTop:e(n).offset().top-100},0)},removeMedia:function(t,n){var o="#"+e(t).data("content-id");e(o).find(".is-"+n).first().val(""),e(o).find("."+n+"-upload").first().text("Upload "+n),e(o).find("."+n+"-preview").first().attr("src",""),e(o).find("."+n+"-preview").first().hide(),"branding-bg-image"===n&&(e(o).find(".is-"+n).val(""),e("#semplice-content").css("background-image","none"),d.branding["background-image"]="")},removeBg:function(t){var n="#"+e(t).data("content-id");e(n).find(".is-bg-image").val(""),e(n).find(".bg-upload").text("Upload Image"),e(n).find(".bg-preview").attr("src",""),e(n).find(".bg-preview").hide()},customFontset:function(t){var n=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",edit_mode:"custom-fontset",fontset_id:t},dataType:"html"});n.done(function(n){d.fontset=t?t:"default",e("[data-fontset-id=ce-fontset]").remove(),e("style[id=ce-fontset]").remove(),e("head").append(n),e(".loader").fadeOut("slow")}),n.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")})},loadTemplate:function(t,n){e(".loader").show(),e(".templates-sub").fadeOut(250,function(){var o=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",edit_mode:"load-template",template_id:t,template_type:n},dataType:"json"});o.done(function(t){e("#semplice-content").html(t.html),d=e.parseJSON(t.rom),void 0===d.branding&&(d.branding={}),void 0===d.modules&&(d.modules=[]),d.branding=e.parseJSON(t.branding),e("#semplice-content").css({"background-color":d.branding["background-color"],"background-image":"url("+d.branding["background-image"]+")","background-size":d.branding["background-size"],"background-position":d.branding["background-position"],"background-repeat":d.branding["background-repeat"]}),e(".branding-bg-color").val(d.branding["background-color"]),e(".branding-sub .wp-color-result").css("backgroundColor",d.branding["background-color"]);var n=[d.branding["background-size"],d.branding["background-position"],d.branding["background-repeat"]],o=0;if(e(".branding-sub .select-box").each(function(){var t=n[o];e(this).find("option").each(function(){e(this).val()===t?e(this).attr("selected","selected"):e(this).removeAttr("selected")}),o++}),d.branding["background-image"]&&(e(".branding-bg-image-preview").attr("src",d.branding["background-image"]).show(),e("input[name=branding-bg-image]").val(d.branding["background-image"])),d.fontset){var a=d.fontset;"default"!==a?(e(".custom-fontset").find("option").each(function(){e(this).val()===a?e(this).attr("selected","selected"):e(this).removeAttr("selected")}),p.customFontset(a)):p.customFontset("default")}e(".loader").fadeOut("slow")}),o.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")}),o.error(function(e){sweetAlert({title:"Error",type:"error",text:e.responseText,confirmButtonText:"Ok fine!"})})})},showLayers:function(t){e(".options-sub .show-layers").addClass("checked");var n=t.data("content-id");e("#semplice").addClass("show-all-layers"),e(".content-container, .mc-content-container").hide(),e("#content-holder").sortable({axis:"y",cancel:".edit-content, .top-layer"});var o;e("#content-holder > div").each(function(){var t=!1,a="",i="#"+e(this).attr("id"),c=e(this).attr("id"),s=e(this).children(".content-container, .mc-content-container").attr("data-content-type"),l="module-"+e(this).children(".content-container").attr("data-modules-array");if(l||(l=""),e(this).hasClass("in-edit-mode")){e(this).find(".edit-content").hide(),e(this).addClass("layer-mode"),t="edit",a="In edit mode";var r=e(this).find('input[name="layer-name"]').val()}else var r=d[i].options["layer-name"];n==c?(e(this).append('<div class="layer"><div class="icon '+l+'"></div><p class="layer-name">'+r+'</p><a class="edit-layer" data-content-id="'+c+'" data-content-type="'+s+'" data-edit-mode="'+t+'"></a><a class="remove" data-content-id="'+c+'"></a><p class="in-edit-mode">'+a+'</p><div class="active-layer"></div><div class="drag-icon"></div>'),o=i):e(this).append('<div class="layer"><div class="icon '+l+'"></div><p class="layer-name">'+r+'</p><a class="edit-layer" data-content-id="'+c+'" data-content-type="'+s+'" data-edit-mode="'+t+'"></a><a class="remove" data-content-id="'+c+'"></a><p class="in-edit-mode">'+a+'</p><div class="drag-icon"></div>'),e(this).children(".layer").stop().fadeIn(300)}),e("#semplice-content").prepend('<div class="layer top-layer hide-layers" data-content-id="'+n+'"><div class="icon"></div><p class="layer-name">Back to edit mode</p></div>'),e(".top-layer").fadeIn(300),o&&e(e.browser.webkit?"body":"html").animate({scrollTop:e(o).offset().top-150},0),e(t).addClass("checked")},hideLayers:function(t,n){e(".options-sub .show-layers").removeClass("checked");var o=e(t).data("content-id"),a=e(t).data("edit-mode"),i=e(t).data("content-type");e("#semplice").removeClass("show-all-layers"),e(".content-container, .mc-content-container").show(),e("#content-holder > div").each(function(){e(this).children(".layer").remove(),e(this).hasClass("in-edit-mode")&&(e(this).find(".edit-content").show(),e(this).removeClass("layer-mode"))}),e(".top-layer").remove(),e("#content-holder").sortable("destroy"),e.trim(e("#content-holder").html()).length||e(".semplice-ce-default").clone(!0).appendTo("#semplice-content").stop().fadeIn(500),n&&"edit"!==a?("multi-column"!==i&&e("#semplice").off("click",".content-container"),p.edit(t)):"undefined"!==o&&e(e.browser.webkit?"body":"html").animate({scrollTop:e("#"+o).offset().top-100},0)},codeEditor:function(t){e(".overlay").fadeIn(200),e(".loader").fadeIn("slow");var n=e(t).data("content-id"),o=e("#code_mirror_"+n).val(),a=e.ajax({url:ajaxurl,type:"POST",data:{action:"semplice_ce_ajax",edit_mode:"code-editor",id:n,code:o},dataType:"html"});a.done(function(t){e("#semplice").append(t),e("#code-editor").transition({opacity:1,scale:1},350,"ease"),e(".loader").fadeOut("slow")}),a.fail(function(t,n){sweetAlert({title:"Error",type:"error",text:"Request failed: "+n,confirmButtonText:"Ok fine!"}),e(".loader").fadeOut("slow")}),a.error(function(e){sweetAlert({title:"Error",type:"error",text:e.responseText,confirmButtonText:"Ok fine!"})})},codeEditorSave:function(t){var n=e(t).data("content-id");e("#code_mirror_"+n).val(e("#code_mirror").val()),e(".overlay").fadeOut(350),e("#code-editor").transition({opacity:0,scale:.9},350,"ease",function(){e("#code-editor").remove()})},saveToWp:function(){e(".loader").show(),e("#semplice-content").find(e(".semplice-ce-default")).is(":visible")&&e("#semplice-content").find(e(".semplice-ce-default")).remove(),e("head").find("[data-fontset-id=ce-fontset]").each(function(){e(this).remove()}),e("#ce-fontset").remove(),e(".is-shortcode").each(function(){e(this).find(".executed").html(e(this).find(".unexecuted").html().replace("unex_",""))}),e(".oembed-content, .code-content").each(function(){var t=e(this).html().replace("unex_","");e(this).html(t)});var t=e("#semplice-content").html();e(".semplice-content").val(t),d.branding={"background-color":e(".branding-bg-color").val(),"background-image":e(".branding-bg-image").val(),"background-size":e(".branding-bg-size").val(),"background-position":e(".branding-bg-pos").val(),"background-repeat":e(".branding-bg-repeat").val(),"background-attachment":e(".branding-bg-attachment").val()},0===d.fontset.length&&(d.fontset="default"),e(".fontset").val(d.fontset),e(".rom").val(JSON.stringify(d));var n=e(".content-p").length,o=e(".content-img").length,a=e(".content-video").length,i=e(".mc-sub-content-container").length,c=e(".content-gallery").length,s=e(".content-audio").length,l=e(".content-spacer").length,u=e(".content-thumbnails").length,m='<span class="comment">// Content stats</span><br /><br /><span class="num">'+n+'</span> paragraph(s), <span class="num">'+o+'</span> image(s)<br /><span class="num">'+a+'</span> video(s), <span class="num">'+i+'</span> column content(s)<br /><span class="num">'+c+'</span> gallery(s), <span class="num">'+s+'</span> audio file(s)<br /><span class="num">'+l+'</span> spacer(s), <span class="num">'+u+"</span> thumbview";e(".branding").val(JSON.stringify(d.branding)),e("[data-modules-array]").each(function(){d.modules.push(e(this).data("modules-array"))}),e(".modules").val(JSON.stringify(d.modules)),e(".stats").val(m),e(".content-code").html(m),r=!0,e(".why-deactivated").remove(),e("#post-preview").attr("href","").css({pointerEvents:"none",opacity:".4"}).after('<div class="why-deactivated"><a href="http://help.semplicelabs.com/customer/en/portal/articles/2346038-why-is-the-preview-changes-button-disabled-" target="_blank">Why deactivated?</div></div>'),e("#wpwrap").show(),e(".wp-pointer").show(),e("#semplice").fadeOut(300,function(){e(e.browser.webkit?"body":"html").animate({scrollTop:0},0)})}};e(document).on("click",".add-semplice-editor",function(){r?sweetAlert({title:"Whooops",text:"Please update or save your page / project before reopen the content editor!",confirmButtonText:"Ok fine!"}):(e("#semplice").appendTo("body"),e(e.browser.webkit?"body":"html").animate({scrollTop:0},0,function(){e("#semplice").fadeIn(300,function(){e("#wpwrap").hide(),e(".wp-pointer").hide(),p.init()})}))}),e("#semplice").on("click",".add-content",function(){e("#semplice").hasClass("show-all-layers")?sweetAlert({title:"Whooops",text:"Please exit the layer mode to add new content",confirmButtonText:"Ok fine!"}):p.add(e(this))}),e("#semplice").on("click",".add-column-content",function(){p.addColumnContent(e(this))}),e("#semplice").on("click",".add-column",t),e("#semplice").on("click",".save",{duplicate:!1},n),e("#semplice").on("click",".duplicate",{duplicate:!0},n),e("#semplice").on("click",".save-mc",{duplicate:!1},o),e("#semplice").on("click",".duplicate-mc",{duplicate:!0},o),e("#semplice").on("click",".save-se",a),e("#semplice").on("click",".edit",function(){p.edit(e(this))}),e("#semplice").on("click",".content-container",i),e("#semplice").on("click",".edit-layer",i),e("#semplice").on("click",".video",function(e){e.stopPropagation()}),e("#semplice").on("click",".mc-sub-content-container",function(t){var n=e(this),o=e(this).offset().left,a=e(this).offset().top;e(this).children(".single-edit").css({top:t.pageY-a,left:t.pageX-o}).show(),e(this).find(".edit-column").unbind().click(function(){e(n).children(".single-edit").remove(),p.edit(e(n))}),e(this).find(".edit-single").unbind().click(function(){e(n).children(".single-edit").remove(),p.singleEdit(e(n),e(this))})}),e("#semplice").on("click","a.column-duplicate",function(){p.duplicateColumn(e(this))}),e("#semplice").on("click",".remove",function(){e(".remove-confirm").data({"content-id":e(this).data("content-id"),"is-column":"","parent-id":""}),e(".overlay").fadeIn(100),e(".confirm").fadeIn(100)}),e("#semplice").on("click",".remove-column",function(){e(".remove-confirm").data({"content-id":e(this).data("column-id"),"is-column":"is-column","parent-id":e(this).data("parent-id")}),e(".overlay").fadeIn(100),e(".confirm").fadeIn(100)}),e("#semplice").on("click",".remove-confirm",function(){e(".overlay").fadeOut(100),e(".confirm").fadeOut(100);var t=e(this);"is-column"===e(this).data("is-column")?p.removeColumn(e(t)):p.remove(e(t))}),e("#semplice").on("click",".remove-decline",function(){e(".overlay").fadeOut(100),e(".confirm").fadeOut(100)}),e("#semplice").on("click",".column-collapse",function(){p.collapseColumn(e(this),!1)}),e("#semplice").on("click",".column-collapse-hide-only",function(){p.collapseColumn(e(this),!0)}),e("#semplice").on("click",".cancel-to-wp",function(){
e(".overlay").fadeIn(100),e(".cancel").fadeIn(100)}),e("#semplice").on("click",".cancel-confirm",function(){e(".overlay").fadeOut(100),e(".cancel").fadeOut(100,function(){e("#wpwrap").show(),e("#semplice").fadeOut(300,function(){window.onbeforeunload=null})})}),e("#semplice").on("click",".cancel-decline",function(){e(".overlay").fadeOut(100),e(".cancel").fadeOut(100)}),e("#semplice").on("click",".show-layers",function(){e("#semplice").hasClass("show-all-layers")?p.hideLayers(e(this)):e("#semplice-content").find(e(".semplice-ce-default")).is(":visible")?sweetAlert({title:"Whooops",text:"To re-order your layers you have to add content first!",confirmButtonText:"Ok fine!"}):p.showLayers(e(this))}),e("#semplice").on("click",".code-editor",function(){p.codeEditor(e(this))}),e("#semplice").on("click",".code-save",function(){p.codeEditorSave(e(this))}),e("#semplice").on("click",".code-cancel",function(){e(".overlay").fadeOut(350),e("#code-editor").transition({opacity:0,scale:.9},500,"ease",function(){e("#code-editor").remove()})}),e("#semplice").on("click",".hide-layers",function(){p.hideLayers(e(this))}),e("#semplice").on("click",".up",function(){p.up(e(this))}),e("#semplice").on("click",".down",function(){p.down(e(this))}),e("#semplice").on("click",".column-up",function(){p.up(e(this))}),e("#semplice").on("click",".column-down",function(){p.down(e(this))}),e("#semplice").on("click",".remove-media",function(){p.removeMedia(e(this),e(this).data("media"))}),e("#semplice").on("click",".save-to-wp-activated",function(){e("#semplice-content").find(".in-edit-mode").length?sweetAlert({title:"Whooops",text:"Please save or delete open edit fields.",confirmButtonText:"Ok fine!"}):e("#semplice").hasClass("show-all-layers")?sweetAlert({title:"Whooops",text:"Please exit the layer mode before save.",confirmButtonText:"Ok fine!"}):p.saveToWp()}),e("#semplice").on("change",".select-box",function(){var t=e(this).val();e(this).find("option").each(function(){e(this).val()===t?e(this).attr("selected","selected"):e(this).removeAttr("selected")})}),e("#semplice").on("change",".branding-bg-select",function(){var t=e(this).data("css-attribute");e("#semplice-content").css(t,e(this).val())}),e("#semplice").on("change",".custom-fontset",function(){e(".loader").show();var t=e(this).val();e(this).find("option").each(function(){e(this).val()===t?e(this).attr("selected","selected"):e(this).removeAttr("selected")}),p.customFontset("default"!==t?t:"default")}),e("#semplice").on("click","a.background",function(){e(this).next(".background-sub").fadeIn(150)}),e("#semplice").on("click","a.ce-dismiss",function(){e(".overlay").fadeOut(150),e(".no-images").fadeOut(250)}),e("#semplice").on("change",".select-project, .select-page",function(){var t=e(this).val();"default"!==t&&(e(".loader").show(),e(".template-confirm").data({"template-id":t,"template-type":"object"}),e(".overlay").fadeIn(100),e(".confirm-template").fadeIn(100))}),e("#semplice").on("click","a.load-template",function(){e(".template-confirm").data({"template-id":e(this).data("template-id"),"template-type":"semplice"}),e(".overlay").fadeIn(100),e(".confirm-template").fadeIn(100)}),e("#semplice").on("click",".template-confirm",function(){e(".overlay").fadeOut(100),e(".confirm-template").fadeOut(100),p.loadTemplate(e(this).data("template-id"),e(this).data("template-type"))}),e("#semplice").on("click",".template-decline",function(){e(".loader").hide(),e(".overlay").fadeOut(100),e(".confirm-template").fadeOut(100)}),e("#semplice").on("click","a.branding",function(){e(".branding-sub").fadeIn(150)}),e("#semplice").on("click","a.show-templates",function(){e(".templates-sub").fadeIn(150)}),e("#semplice").on("click","a.show-options",function(){e(".options-sub").fadeIn(150)}),e("#semplice").on("click","a.show-modules",function(){if(e(this).data("in-column")){var t=e(this).data("column-id");e(".modules-sub-"+t).fadeIn(150)}else e(".modules-sub-global").fadeIn(150)}),e("#semplice").on("click","a.padding",function(){e(this).next(".padding-sub").fadeIn(150)}),e("#semplice").on("change","select[name=wysiwyg_bg_color]",function(){e("#semplice-decss").append("white"===e(this).val()?"#cke_"+e(this).data("content-id")+" .cke_wysiwyg_div { background-color: #ffffff; }":"#cke_"+e(this).data("content-id")+" .cke_wysiwyg_div { background-color: #000000; }")}),e("#semplice").on("click",".ce-help",function(){e(this).children("span").css("display","inline")}),e("#semplice").mouseup(function(t){{var n=e(".background-sub"),o=e(".media-modal-content");e(".overlay-preview")}n.is(t.target)||o.is(t.target)||0!==n.has(t.target).length||n.fadeOut(150);var a=e(".branding-sub");a.is(t.target)||0!==a.has(t.target).length||a.fadeOut(150);var i=e(".options-sub");i.is(t.target)||0!==i.has(t.target).length||i.fadeOut(150);var c=e(".templates-sub");c.is(t.target)||0!==c.has(t.target).length||c.fadeOut(250);var s=e(".modules-sub");s.is(t.target)||0!==s.has(t.target).length||s.fadeOut(250);var l=e(".padding-sub");l.is(t.target)||0!==l.has(t.target).length||l.fadeOut(150);var d=e(".single-edit");d.is(t.target)||0!==d.has(t.target).length||d.hide();var r=e(".ce-help span");r.is(t.target)||0!==r.has(t.target).length||r.css("display","none")}),e(".show-grid").toggle(function(){e("#grid").fadeIn("300"),e(this).addClass("checked")},function(){e("#grid").fadeOut("300"),e(this).removeClass("checked")}),e("#semplice").on({mouseenter:function(){var t=e(this).find(".tooltip").width();t=(t-60)/2,e(this).find(".tooltip").css("marginLeft",-t),e(this).find(".tooltip").stop().fadeIn(120)},mouseleave:function(){e(this).find(".tooltip").stop().fadeOut(120)}},"ul.types li"),e("#semplice").on({mouseenter:function(){var t=e(this).find(".tooltip").width();t=(t-e(this).width())/2,e(this).find(".tooltip").css("marginLeft",-t),e(this).find(".tooltip").stop().fadeIn(120)},mouseleave:function(){e(this).find(".tooltip").stop().fadeOut(120)}},"ul.atts-save li");var f=!0;wordpress.color_palette&&(f=wordpress.color_palette.split(","));var h={defaultColor:!1,change:function(e,t){},hide:!0,palettes:f},v={defaultColor:!1,change:function(t,n){e("#semplice-content").css("background-color",n.color.toString())},hide:!0,palettes:f},g=function(e){return e+"_"+Math.random().toString(36).substr(2,9)}})}(jQuery);
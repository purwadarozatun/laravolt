function debounce(e,t,a){var n;return function(){var o=this,i=arguments,r=function(){n=null,a||e.apply(o,i)},l=a&&!n;clearTimeout(n),n=setTimeout(r,t),l&&e.apply(o,i)}}$((function(){var e=$('[data-role="sidebar"] .sidebar__scroller');if(e.length>0){new SimpleBar(e[0]);var t=$('[data-role="sidebar-visibility-switcher"]');t.length>0&&t.on("click",(function(){e.parent().toggleClass("show")})),$(document).click((function(e){$("nav.sidebar").hasClass("show")&&($(e.target).closest("nav.sidebar").length||$(e.target).closest('[data-role="sidebar-visibility-switcher"]').length||$("nav.sidebar").removeClass("show"))})),$("#sidebar .simplebar-scroll-content").scroll(debounce((function(){$("#sidebar").data("scroll",$("#sidebar .simplebar-scroll-content").scrollTop())}),500))}$('[data-role="sidebar-accordion"]').accordion({selector:{trigger:".title:not(.empty)"}}),$("#sidebar").on("click","a.item, a.title.empty",(function(e){$(e.delegateTarget).find(".selected").removeClass("selected"),$(this).addClass("selected")}))}));class Laravolt{static init(e){e.find("table.unstackable.responsive").basictable(),e.find(".ui.checkbox").checkbox(),e.find(".ui.dropdown:not(.simple):not(.tag)").each((function(){let e=$(this),t={forceSelection:!1,selectOnKeydown:!1,fullTextSearch:!0,action:void 0!==e.data("action")?e.data("action"):"activate"};if($(this).hasClass("link")&&(t.onChange=function(e,t,a){window.location.href=e}),$(this).data("ajax")){e.data("api");let a=e.data("payload"),n=e.data("token");t.minCharacters=2,t.apiSettings={url:e.data("api")+"?term={query}",method:"post",data:{payload:a,_token:n}}}$(this).dropdown(t)})),e.find(".ui.dropdown.tag:not(.simple)").each((function(){let e=!1;if($(this).data("value")){let t=$(this).data("value").toString().split(",");1==t.length&&""==t[0]||(e=t)}$(this).dropdown({forceSelection:!1,allowAdditions:!0,fullTextSearch:!0,selectOnKeydown:!1}).dropdown("set selected",e)})),$.fn.destroyDropdown=function(){return $(this).each((function(){$(this).parent().dropdown("destroy").replaceWith($(this).addClass($(this).data("class")))}))};let t=[],a=[];e.find("select[data-depend-on]").each((function(e,n){let o=$(n),i=o.data("depend-on"),r=$("[name="+i+"]");"SELECT"==r.prop("tagName")?(void 0===t[i]&&(t[i]=[]),t[i].push(o)):"INPUT"==r.prop("tagName")&&(void 0===a[i]&&(a[i]=[]),a[i].push(o))}));for(let e of Object.keys(t)){let a=$("[name="+e+"]"),n=t[e];a.destroyDropdown(),a.dropdown({forceSelection:!1,selectOnKeydown:!1,fullTextSearch:"exact",onChange:function(e,t,a){jQuery.each(n,(function(t,a){if(e){let t=a.data("api"),n=a.data("payload"),o=a.data("token");a.api({url:t,method:"post",data:{term:e,payload:n,_token:o},on:"now",beforeSend:function(e){return a.dropdown("clear"),a.parent().addClass("loading"),e},onSuccess:function(e,t,n){let o=e.results;a.dropdown("change values",o)},onComplete:function(e,t,n){a.parent().removeClass("loading")},onError:function(e,t,a){void 0!==a.responseJSON.exception?alert(a.responseJSON.exception+" in "+a.responseJSON.file+" line "+a.responseJSON.line+": "+a.responseJSON.message):alert("Something goes wrong with DropdownDB, but APP_DEBUG off. See application log (usually in storage/logs/laravel.log) for complete error message.")}})}else a.dropdown("clear"),a.dropdown("setup menu",{values:[]})}))}})}for(let t of Object.keys(a)){let n=e.find("[name="+t+"]"),o=a[t];n.on("change",(function(e){let t=$(e.currentTarget).val();jQuery.each(o,(function(e,a){if(t){let e=a.data("api"),n=a.data("payload"),o=a.data("token");a.api({url:e,method:"post",data:{term:t,payload:n,_token:o},on:"now",beforeSend:function(e){return a.dropdown("clear"),a.parent().addClass("loading"),e},onSuccess:function(e,t,n){let o=e.results;a.dropdown("change values",o),1==o.length&&a.dropdown("set selected",o[0].value)},onComplete:function(e,t,n){a.parent().removeClass("loading")}})}else a.dropdown("clear"),a.dropdown("setup menu",{values:[]})}))})),n.val()&&n.trigger("change")}e.find('.checkbox[data-toggle="checkall"]').each((function(){let e=$(this),t=$(document).find(e.data("selector"));$(document).find(e.data("storage"));e.checkbox({onChecked:function(){t.checkbox("check")},onUnchecked:function(){t.checkbox("uncheck")}}),t.checkbox({fireOnInit:!0,onChange:function(){var a=e,n=!0,o=!0,i=[];t.each((function(){$(this).checkbox("is checked")?(o=!1,i.push($(this).children().first().val())):n=!1})),a.val(JSON.stringify(i)).trigger("change"),n?a.checkbox("set checked"):o?a.checkbox("set unchecked"):a.checkbox("set indeterminate")}})})),e.find(".ui.input.calendar").each((function(e,t){const a=$(t);let n=a.data("calendar-type");n||(n="date");let o=a.data("calendar-format");o||(o="YYYY-MM-DD"),a.calendar({type:n,ampm:!1,selectAdjacentDays:!0,onSelect:function(e,a){t.querySelector("input").dispatchEvent(new Event("input"))},formatter:{date:function(e,t){if(!e)return"";const a=e.getHours(),n=e.getMinutes(),i=e.getSeconds(),r=e.getDate(),l=("0"+e.getDate()).slice(-2),d=l,s=e.getMonth()+1,c=("0"+(e.getMonth()+1)).slice(-2),u=c,p=t.text.months[e.getMonth()],h=t.text.monthsShort[e.getMonth()],f=e.getFullYear().toString().substr(2,2),m=e.getFullYear(),g=e.getFullYear();let $=o.replace("h",a).replace("i",n).replace("s",i).replace("j",r).replace("d",d).replace("n",s).replace("m",u).replace("DD",l).replace("YYYY",g).replace("YY",f).replace("Y",m);const b={MMMM:p,MMM:h,MM:c,M:h};let v=o;for(const e in b)v.includes(e)&&($=$.replace(e,b[e]),v=v.replace(e,""));return $}}})})),e.find("input[type=file].uploader").each((function(e,t){let a=$(t).data("extensions");a=a?a.split(","):null;let n=null;$(t).data("media-url")&&(n={url:$(t).data("media-url"),data:{_token:$(t).data("token"),_key:$(t).attr("name"),_action:"upload"},type:"POST",enctype:"multipart/form-data",start:!0,synchron:!0,chunk:!1,onSuccess:function(e,t,a,n,o,i,r,l){return e.success&&e.files[0]?(t.data.id=e.files[0].data.id??null,t.local=e.files[0].file,t.html.find(".fileuploader-action-remove").addClass("fileuploader-action-success"),setTimeout((function(){t.html.find(".progress-bar2").fadeOut(400)}),400),!0):this.onError(t,a,n,o,i,l,r,e.message)},onError:function(e,t,a,n,o,i,r,l){let d=e.html.find(".progress-bar2");d.length>0&&(d.find("span").html("0%"),d.find(".fileuploader-progressbar .bar").width("0%"),e.html.find(".progress-bar2").fadeOut(400)),"cancelled"!==e.upload.status&&0===e.html.find(".fileuploader-action-retry").length&&e.html.find(".column-actions").prepend('<a class="fileuploader-action fileuploader-action-retry" title="Retry"><i></i></a>'),alert(l+". Try again later.")},onProgress:function(e,t,a,n,o,i){let r=t.html.find(".progress-bar2");r.length>0&&(r.show(),r.find("span").html(e.percentage+"%"),r.find(".fileuploader-progressbar .bar").width(e.percentage+"%"))},onComplete:function(e,t,a,n,o,i){}}),$(t).fileuploader({theme:"simple",limit:$(t).data("limit"),fileMaxSize:$(t).data("file-max-size"),extensions:a,addMore:!0,upload:n,onRemove:function(e){return void 0===e.data.id||$(t).data("media-url")&&$.post($(t).data("media-url"),{_token:$(t).data("token"),_action:"delete",id:e.data.id}),!0},changeInput:'<div class="fileuploader-input"><div class="fileuploader-input-inner"><div><span>${captions.browse}</span></div></div></div>',captions:{browse:"Browse or drop files here"},thumbnails:{removeConfirmation:!1}})})),"function"==typeof AutoNumeric&&$('input[data-role="rupiah"]').length>0&&AutoNumeric.multiple('input[data-role="rupiah"]',{currencySymbol:"",decimalCharacter:",",digitGroupSeparator:".",decimalPlaces:0,unformatOnSubmit:!0}),"object"==typeof google&&"object"==typeof google.maps&&e.find("[data-form-coordinate]").each((function(){let e,t,a=$(this);[t,e]=a.val().split(","),t=t||-7.451808,e=e||111.035929;let n=$("<div>").css("width","100%").css("height",300).css("border-radius",4).css("margin-top","5px");n.insertAfter($(this));let o=new google.maps.LatLng(t,e),i={zoom:17,center:o,mapTypeId:google.maps.MapTypeId.ROADMAP},r=$(this).is("[disabled]");r&&$.extend(i,{gestureHandling:"none",zoomControl:!1});let l=new google.maps.Map(n[0],i),d=new google.maps.Marker({position:o,map:l,draggable:!r});google.maps.event.addListener(d,"drag",(function(){a.val(d.position.lat()+","+d.position.lng())}))}))}}const TURBOLINK_ENABLED="1"===$('meta[name="turbolinks-enabled"]').attr("content");if(TURBOLINK_ENABLED){require("turbolinks").start(),$(document).on("turbolinks:load",(function(){Laravolt.init($("body"))})),$(document).on("turbolinks:render",(function(e){$("#sidebar .simplebar-scroll-content").scrollTop($("#sidebar").data("scroll"))}))}else $(document).on("DOMContentLoaded",(function(){Laravolt.init($("body"))}));window.addEventListener("laravolt.toast",(function(e){$("body").toast(JSON.parse(e.detail))})),"undefined"!=typeof Livewire&&Livewire.hook("message.processed",((e,t)=>{Laravolt.init($('[wire\\:id="'+t.id+'"]'))})),$((function(){key("⌘+k, ctrl+k",(function(){$('[data-role="quick-switcher-modal"]').modal({onHide:function(){$('[data-role="quick-menu-searchbox"]').val("").trigger("keyup")}}).modal("show")})),$('[data-role="quick-menu-searchbox"]').on("keyup",(function(e){var t=$(e.currentTarget).val();if($('[data-role="quick-menu-searchbox"]').val(t),$('[data-role="quick-menu"] .items').html(""),""==t)$('[data-role="original-menu"]').show();else{$('[data-role="original-menu"]').hide();var a=[];$('[data-role="original-menu"] a').each((function(e,t){a.push({text:$(t).html(),url:$(t).attr("href")})}));var n=new Fuse(a,{tokenize:!0,threshold:.5,keys:["text"]}).search(t),o="";for(var i in n){var r=n[i];o+="<a class='title' href='"+r.url+"'>"+r.text+"</a>"}$('[data-role="quick-menu"] .items').append(o)}}));var e=$('[data-role="quick-switcher-dropdown"]');$('[data-role="original-menu"] a').each((function(t,a){var n=$(a).data("parent"),o=$(a).html();n&&(o+='<div class="ui mini label right floated">'+n+"</div>");var i=$("<option>").attr("value",$(a).attr("href")).html(o);e.append(i)})),e.dropdown({fullTextSearch:!0,forceSelection:!1,selectOnKeydown:!1,match:"text",action:function(e,t){window.location.href=t}})}));

<!-- script here -->
<script type='text/javascript'>
//<![CDATA[
var idcom = window.location.hash.substr(1);
var daco=false;
console.log('idcom: '+idcom);
// must include jQuery Library first
$(".comment-thread ol>li").each(function() {
  var t = $(this);

  if (t.find('.comment-replies ol li').length > 0) {
  $(".comment-replies ol li").each(function() {
    var tt = $(this);
	console.log('idcom-1: ' + tt[0].id);
    if (tt[0].id === idcom) {
      
      daco = true;
		console.log('daco1: '+daco);
      return false;
    }
    console.log('idcom-2: ' + tt[0].id);
  })
  console.log('idcom-3: ' + t[0].id+' daco: '+daco);
  if (daco === true) {
    daco = false;
		console.log('daco2: '+daco);
	
    return true;
  }
}

  t.find('.comment-replies ol li').length > 0 && t.find(".comment-replies").eq(0).hide().before(`<div class="tg-comment"><a class="show-comment"><img src="${t.find('.comment-replies ol li:last-child .avatar-image-container img').attr('src')}"><strong>${t.find('.comment-replies ol li:last-child .user a').text()}</strong>&nbsp;replied - ${t.find('.comment-replies ol li').length} replies</a><a class="hide-comment">Hide all ${t.find('.comment-replies ol li').length} replies <svg class="svg-24"><use xlink:href='/responsive/sprite_v1_6.css.svg#ic_expand_less_black_24dp' xmlns:xlink='//www.w3.org/1999/xlink'></use></svg></a></div>`)
  t.find(".hide-comment").eq(0).hide();
  t.find(".show-comment").eq(0).click(function() {
    $(this).hide();
    t.find(".comment-replies, .hide-comment").show();
  })
  t.find(".hide-comment").eq(0).click(function() {
    $(this).hide();
    t.find(".comment-replies").eq(0).hide();
    t.find(".show-comment").eq(0).show();
  })
})
//]]>
</script>

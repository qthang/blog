<!-- phiên bản đã được qthang mod khi bấm xem bình luận gần đây vẫn đến được comment bị ẩn -->
<!-- style here -->
<style type='text/css'>/*<![CDATA[*/
.comments .svg-24 {
  width: 24px;
  height: 24px;
  fill: #333;
}
.tg-comment {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 0px;
  margin-bottom: 10px;
  margin-top: 20px;
}
.show-comment {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  color: #333;
  font-size: 14px;
}
.show-comment strong {
  font-weight: 500;
}
.show-comment img {
  width: 30px;
  height: 30px;
  display: inline-block;
  -webkit-border-radius: 30px;
     -moz-border-radius: 30px;
          border-radius: 30px;
  margin-right: 8px;
}
.hide-comment {
  font-size: 14px;
  cursor: pointer;
  color: #333;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
/*]]>*/</style>
  
  <!-- script here -->
<script type='text/javascript'>
//<![CDATA[
// must include jQuery Library first
$(".comment-thread ol>li").each(function() {
  var t = $(this);
  t.find('.comment-replies ol li').length > 0 && t.find(".comment-replies").eq(0).hide().before(`<div class="tg-comment"><a class="show-comment"><img src="${t.find('.comment-replies ol li:last-child .avatar-image-container img').attr('src')}"><strong>${t.find('.comment-replies ol li:last-child .user a').text()}</strong>&nbsp;đã trả lời - ${t.find('.comment-replies ol li').length} câu trả lời</a><a class="hide-comment">Ẩn ${t.find('.comment-replies ol li').length} câu trả lời <svg class="svg-24"><use xlink:href='/responsive/sprite_v1_6.css.svg#ic_expand_less_black_24dp' xmlns:xlink='//www.w3.org/1999/xlink'></use></svg></a></div>`)
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
});

var idcom = window.location.hash.substr(1);
if(idcom.length>0){
	$(".comment-thread ol>li").each(function() {
    var t = $(this);
    var tid="#"+t[0].id+" ol li";
	//console.log(tid)
    t.find('.comment-replies ol li').length > 0 && $(tid).each(function() {
        var tt=$(this);
        if(tt[0].id===idcom)
        //console.log(tt[0].id);
        $(function() {t.find(".show-comment").eq(0).hide();t.find(".comment-replies, .hide-comment").show();
            })
    })
  })
}

//]]>
</script>

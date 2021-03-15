//PC搜索显示与隐藏
$(function () {
 // var status = 2,//0表示PC端，1表示非微信移动端，2表示微信移动端
  //var status = 0,//0表示PC端，1表示非微信移动端，2表示微信移动端
  //isLogin = true,
  //isLogin = false,
  dialogShown = false;
  showHead(status, isLogin);
  initKaitaoPosition();
  $('.header-tiwen, .tiwen>a').on('click', function (e) {
    if(!isLogin && status == 0) {
      e.preventDefault();
      console.log(e);
      $('.dialog-box').css({'display':'flex', 'top': window.scrollY, 'width':$('body').innerWidth, 'height': window.innerHeight});
    }
    dialogShown = true;
  });
  $('.dialog-box').on('click', function () {
    if(dialogShown) {
      $(this).css('display', 'none');
    }
  });
  $('.wx-login-dialog').on('click', function (e) {
    e.stopPropagation();
  })

  $(".header-other img.img-search").click(function(){
    $(".wrap-tag").hide();
    $(".wrap-search").show();
  });
  $(".wrap-search i").click(function(){
    $(".wrap-search").hide();
    $(".wrap-tag").show();
  });
  //用户自身下拉列表
  $("img.img-self-pc").click(function(){
    var personnal_info_pc =  $(".personnal-info-pc"),
      display = personnal_info_pc.css("display");
    if("none" == display){
      personnal_info_pc.show();
    }else{
      personnal_info_pc.hide();
    }  
  });
  $("img.img-self-phone").click(function(){
     var personnal_info_phone =  $(".personnal-info-phone"),
         display = personnal_info_phone.css("display");
     if("none" == display){
        personnal_info_phone.show();
     }else{
        personnal_info_phone.hide();
     }     
  });
  $(document).bind("click",function(e){
    var target = $(e.target),
      str = "img.img-self",
      thisParent = target.closest(str);
    if( !thisParent.is(str)){
      $(".personnal-info-ul").hide();
    }    
  });
  // 滑动监听事件 返回箭头到顶端
  $(window).scroll(function(){
    var img_backTop = $("img.img-backTop"),
      window_height = $(window).height(),       //窗口高度
      scroll_height = $(window).scrollTop(),    //当前滚动条滚动的距离
      wrap_lunbo = $(".link-target").outerHeight(),    //当前dom元素的高度  
      gt_window_height  = window_height + scroll_height ,  //大于窗口时
      lt_window_height = wrap_lunbo + scroll_height; //小于窗口时
    if(  wrap_lunbo > window_height ){     //比较元素与窗口的高度
      if( gt_window_height > wrap_lunbo ){
        img_backTop.show();
      }else{
        img_backTop.hide();
      }
    }else{
      if( lt_window_height > wrap_lunbo ){
        img_backTop.show();
      }else{
        img_backTop.hide();
      }
    }
  })
  //手机端nav下拉列表显示与隐藏
  $(".index-header-flex>span").click(function(){
  var mobliePhone_nav_ist = $(".mobliePhone-nav"),
    display = mobliePhone_nav_ist.css("display"),
    body = $(document.body);
  if("none" == display){
    body.addClass("body-fixed");
    mobliePhone_nav_ist.show();
  }else{
    body.removeClass("body-fixed");
    mobliePhone_nav_ist.hide();
  }
  })
  
  // 黑白关闭图片隐藏
  $(".public-alert>.img-close,img.img-gray_close,.pc-mobile-tiwen-alert>.img-close").click(function(){
  var  body = $(document.body);
  body.removeClass("body-fixed");
  $(".forget-password-outside").hide() && $(".pc-mobile-tiwen-outside").hide() && $(".public-alert").hide();
  $(".pc-mobile-report-outside").hide();  
  })
  //匿名复选框优化切换
  $(".nike-name-tag>label,.pc-login-remember>label").click(function(){
    var isChecked = $(this).find("input[type='checkbox']").prop("checked");
    if( !isChecked ){
      $(this).removeClass("checked") ;
    }else{
      $(this).addClass("checked");
    }
  });
  // 分页active
  $(".wenda-pager-ul>li>a").click(function(){
    $(".wenda-pager-ul>li").removeClass("active");
    $(this).parent("li").addClass("active");
  });
  //验证邮箱下一步,重置密码，修改邮箱
  $(".operation-tag>a.a_nextstep").click(function(){
    $(".validate-email-alert").hide();
    $(".reset-password-alert").show() ;
    $(".modify-email-alert").show();
  });
  // 回复下拉框消失与显示
  $(".wentiAnswer-detail-ul,.comment-list-ul").on("click","span.repeat",function(){
    $(this).closest('p').next(".repeat-dropdown-alert").show();
    $(this).closest('.child-wrap').next(".repeat-dropdown-alert").show();
  });
  //取消回复
  $(".repeat-dropdown-alert>p>i").click(function(){
    $(this).closest(".repeat-dropdown-alert").hide();
    $(this).closest("p").prev("textarea").blur().height(17).val("");
  });
  //举报弹框
  $(".wentiAnswer-detail-ul,.comment-list-ul").on("click","span.report",function(){
    $(".pc-mobile-report-outside").show();
  });
  //点赞
  // $(".dianZan").on("click",function(){
  //   var str1 = "images/star_empty@2x16.png",
  //     str2 = "images/star_solid@2x16.png",
  //     dataToggle = $(this).attr("data-toggle"),
  //     i_num = $(this).find("i").text();
  //   if( !dataToggle ){
  //     $(this).attr("data-toggle",0);
  //     $(this).find("img").attr("src",str2);
  //     $(this).find("i").text( parseFloat(i_num)+1 );
  //   }else{
  //     if( 0 == parseFloat(dataToggle) ){
  //       $(this).attr("data-toggle",1);
  //       $(this).find("img").attr("src",str1);
  //       $(this).find("i").text( parseFloat(i_num)-1 );
  //     }else if(1==parseFloat(dataToggle) ){
  //       $(this).attr("data-toggle",0);
  //       $(this).find("img").attr("src",str2);
  //       $(this).find("i").text( parseFloat(i_num)+1);
  //     }
  //   }
  // });
  //文本框是否自动撑高，默认：null，不自动撑高；如果自动撑高必须输入数值，该值作为文本框自动撑高的最大高度
  // $(".repeat-dropdown-alert>textarea").autoTextarea({
  //   maxHeight:220
  // });
});

//textarea文本框自适应高度
$.fn.autoTextarea = function(options) {
   var defaults={ 
      maxHeight:null,//文本框是否自动撑高，默认：null，不自动撑高；如果自动撑高必须输入数值，该值作为文本框自动撑高的最大高度
      minHeight:$(this).height() //默认最小高度，也就是文本框最初的高度，当内容高度小于这个高度的时候，文本以这个高度显示
   }
   var opts = $.extend({},defaults,options);
   return $(this).each(function() {
      $(this).bind("paste cut keydown keyup focus blur",function(){
         var height,style=this.style;
         this.style.height =  opts.minHeight + 'px';
         if (this.scrollHeight > opts.minHeight) {
            if (opts.maxHeight && this.scrollHeight > opts.maxHeight) {
            height = opts.maxHeight;
            style.overflowY = 'scroll';
            } else {
               height = this.scrollHeight;
               style.overflowY = 'hidden';
            }
            style.height = height  + 'px';
         }
      })
   })
}
// 初始化开淘版权位置
function initKaitaoPosition(){
   var body_height = $(document).outerHeight(),
       window_height = $(window).outerHeight();
   if( body_height>window_height){
      $(".kaitai-word").addClass("active") && $(".kaitai-text").addClass("active") ;
   }else{
      $(".kaitai-word").removeClass("active") && $(".kaitai-text").removeClass("active");
   }
}
//9.19 根据入口客户端判断是否显示用户头像

function showHead (status, isLogin) {
  if (isLogin) {
    if (status == 0) {
      $('.img-self-pc').show();
    } else {
      $('.img-self').hide();
    }
  }
}

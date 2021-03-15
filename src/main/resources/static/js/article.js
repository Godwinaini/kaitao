$(function(){
//点击
	function articlehits(){
  //return false;
		var id= $('#article_id').val();
		if(localStorage[id]!='Y' && id!=''){//简单防刷
			$.ajax({
				url:'/index.php?g=portal&m=article&a=post_hits',
				type:"post",
				cache:false,
				data:{id:id},
				dataType:'json',
				success:function(data) {
					if(data.status==1){
					    //TODO 页面显示hit+1
			        }
				}
			});
			localStorage[id] = 'Y';
		}

	}
	
	//提交评论
	function submitComment(){
		$('#submitComment').click(function(){
			var commentUrl = $('#comment_url').val();
			var url = encodeURIComponent(location.href);
			var post_title = $('#post_title').val();
			var post_table = $('#post_table').val();
			var post_id = $('#post_id').val();
			//var to_uid = $('#to_uid').val();
			//var parentid = $('#parentid').val();
			var content = $('#content').val();
			var nickname = $('#nickname').val();
			
			if(content==''){
				alert('请输入评论内容！');
			}
			var $thisobj = $(this);
			$.ajax({
				url:commentUrl,
				type:"post",
				cache:false,
				data:{url:url,post_title:post_title,post_table:post_table,post_id:post_id,content:content,nickname:nickname},
				dataType:'json',
				beforeSend: function(XMLHttpRequest) {
					$thisobj.text('评论提交中...');
					$thisobj.attr('disabled',true);
				},success:function(data) {
					//if(data.status==1){
						$('#conmentform').empty();
						$('#conmentform').prepend(data.info);
			        //}else{
			        	//alert(data.info);
			        //}
				},error:function(){
			
				},complete: function(XMLHttpRequest, textStatus) {
					$thisobj.text('发表评论');
					$thisobj.attr('disabled',false);
				}
			});
		});
	}

	var A1_arr = ['jurenqimm','jrq9494','13101960258']; 
	var A1_index = Math.floor((Math.random()*A1_arr.length)); 
	var A1_weixin = A1_arr[A1_index];

	var I1_arr = ['jrq95606','wtl960201']; 
	var I1_index = Math.floor((Math.random()*I1_arr.length)); 
	var I1_weixin = I1_arr[I1_index];

	
	//A1替换
	function ab_replace(){
		var strA='<p style="text-indent: 2em;"><span style="color: rgb(255, 0, 0);">刷流量和收藏加购：精准定位长尾关键词，深度挖掘主关键词</span></p><p style="text-indent: 2em;">刷流量或者收藏加购的时候，一定要确保是真实人工操作的，千万不要用机刷流量，切记不要贪图便宜，否则功亏一篑！我一般会去<a href="http://a.kaitao.cn/a.php?id=140" target="_blank"><strong>聚人气</strong></a>发布流量任务，在众多平台中，<a href="http://a.kaitao.cn/a.php?id=140" target="_blank"><strong>聚人气</strong></a>的真实性和口碑是比较好的，有需要的朋友可以自己去体验一下！<a href="http://a.kaitao.cn/a.php?id=140" target="_blank"><strong>点击了解</strong></a></p><p style="text-indent: 2em;"><span style="color: rgb(255, 0, 0);">刷销量：拍A发B获取真实销量，加快宝贝排名速度</span></p><p style="text-indent: 2em;"><span style="text-indent: 32px;">给宝贝刷流量，只是为了让更多关键词出排名，增加基础权重而已，想要进一步提升排名，或者加快主关键词的排名速度，必须配合真实成交，也就是“刷销量”，刷销量需要考虑众多条件，如：流程是否真实？买号是否安全？快递是否真实？要刷多少单？去哪里刷？等等问题，现在我要跟大家说的是“刷销量”的升级版“拍A发B”，说白了，就是免费送买家礼品，让买家帮我们刷销量，只有这种方法能100%保障交易的真实性，而且成本可控，具体的玩法可以去</span><a href="http://a.kaitao.cn/a.php?id=139" target="_blank" textvalue="51试用"><strong>51试用</strong></a>看看，他们是专门做拍A发B的！<a href="http://a.kaitao.cn/a.php?id=139" target="_blank"><strong>点击了解</strong></a></p><p style="text-indent: 2em;"><span style="color: rgb(255, 0, 0);">安全补单：稳定提升排名，坐等订单上门</span></p><p style="text-indent: 2em;">补单”不是“刷单”！区别非常大，简单来说，“拍A发B”适合新宝贝，大家会发现，一般被降权的宝贝都是新宝贝，新宝贝的数据和排名变化比较大，容易引起淘宝的注意，而老宝贝，流量和销量的基数不同，即使刷单，整体数据也不会受太大影响。所以不同阶段，使用方法各不相同。有基础销量且想稳定宝贝排名，或者想要提升排名的宝贝，建议合理“补单”，“补单”的流程较为简单，成交渠道多元化，适合积累用户标签，比如“补单”可以选择买号的性别、地区、好评率、购物喜好、消费能力等等，这里推荐一个比较好的补单平台给大家：<a href="http://a.kaitao.cn/a.php?id=138" target="_blank"><strong>云盾网</strong></a>，在云盾网补单包快递费，降权包赔付，支持测试体验，再行业内算是顶尖的平台了。主要是安全靠谱，还有效！<a href="http://a.kaitao.cn/a.php?id=138" target="_blank"><strong>点击了解</strong></a><p style="text-indent: 2em;">更多细节技巧，扫描下方二维码，加老师微信<span style="color: rgb(255, 0, 0);"><strong id="A1_weixin">'+A1_weixin+'</strong></span>，加入爆款交流群，万人在线分享经验，让你少走弯路，更有老师现场传授运营技巧</p><p style="text-align:center;"><img src="http://www.kaitao.cn/public/aimages/qrcode/'+A1_weixin+'.png" id="A1_qrcode" width="220" height="220"></p>';
		//var strA='<p style="text-indent: 2em;"><span style="color: rgb(255, 0, 0);">教你上手淘首页，流量暴增</span></p><p style="text-indent: 2em;">商家如何实现，入选手淘首页“猜你喜欢”和“好店推荐”活动，提升店铺人气排名？推荐一款最安全纯人工流量平台：<span style="color:red;"><strong>我要人气</strong></span>，100%真人操作，优化宝贝流量，精准标签人群点击+收藏加购+ 领取优惠券+问大家+微淘动态点赞好评+达人关注，帮您解决以上苦恼！5万+雇主的选择，我也在用，快来试试吧！<a href="http://a.kaitao.cn/a.php?id=121" target="_blank"><strong>点击查看详情</strong></a></p><p style="text-indent: 2em;"><span style="color: rgb(255, 0, 0);">刷单，就要选择可靠的刷单平台</span></p><p style="text-indent: 2em;">很多刷单平台打着淘宝刷单的幌子，进行诈骗，对卖家完全不负责任。<span style="text-indent: 32px;">刷单平台选的好，少费金钱少费脑。应广大网友需求，在此给大家推荐一个安全可靠的刷单平台：</span><a href="http://a.kaitao.cn/a.php?id=51" target="_blank" textvalue="虾淘淘精刷专业刷单平台"><strong>虾淘淘精刷专业刷单平台</strong></a>，最大的淘宝SEO交流平台，3天学会淘宝排名优化。该平台拥有多年专业刷单经验，真实发货，真实签收，可自定义重量，支持申诉，刷单安全、可靠、贴心，已成功打造上万卖家。<a href="http://a.kaitao.cn/a.php?id=51" target="_blank">点击了解</a></p><p style="text-indent: 2em;"><span style="color: rgb(255, 0, 0);">刷信誉，安全最重要</span></p><p style="text-indent: 2em;">刷信誉平台推荐<a href="http://a.kaitao.cn/a.php?id=115" target="_blank"><strong>亿淘网络科技</strong></a>，最专业的网店托管服务提供商，正规专业团队运作，安全迅速提高您店铺的信誉，全力为您打造唯一安全完美的店铺，从而提高转化率及销售量，见信誉付款，为您打造火爆完美形象店。详情咨询<span style="color: rgb(255, 0, 0);"><strong>879424973</strong></span><a href="http://wpa.qq.com/msgrd?v=3&uin=879424973&site=qq&menu=yes" target="_blank">点击咨询</a></p>';
		var strB="";
		var strC="";
		var strD='如果你看到这里还不是很理解的话，加我的个人微信。我会在微信上一对一回答你的这个淘宝问题！并且送上我这个月出版的新书《如何做好淘宝 》';
		var strE='';
		var strF='';
		var strG='<p style="text-indent: 2em;">2017年最新淘宝直播开通，百分百包过直播  不过双倍赔偿，咨询QQ:<strong style="color:red;">3002218227</strong></p>';
		var strS='';
		var strH="<p style='text-indent: 2em;'>想咨询淘宝开店问题，请加老师微信：<span style='color: red;'><strong>ktb365</strong></span> 一对一教您开店流程，以及免费提供货源。 数万淘宝卖家推荐！扫描下面二维码，直接添加老师微信&nbsp;</p><p style='text-indent: 2em; text-align: center;'><img src='http://www.kaitao.cn/public/aimages/ktb365.jpg' title='淘宝店怎么开' alt='淘宝店怎么开' width='291' height='266' style='width: 291px; height: 266px;' border='0' vspace='0'></p>";

		var strI='<p style="text-indent: 2em;">优化店铺数据，提升淘宝排名的方法无非只有两种，一种是开直通车，通过付费的形式获取流量，另一种是根据淘宝排名规则，优化宝贝数据，获取淘宝的自然排名，从而达到引流的效果。</p>'+
				 '<p style="text-indent: 2em;"><span style="color: rgb(255, 0, 0);">刷流量和收藏加购：精准定位长尾关键词，深度挖掘主关键词</span><p style="text-indent: 2em;"></p>'+
				 '<p style="text-indent: 2em;">如果你还不懂什么是“长尾关键词”，可以在开淘网上自主学习一下，很多文章内都有介绍。</p>'+
				 '<p style="text-indent: 2em;"><span style="color: rgb(255, 0, 0);">如何定位“长尾关键词”?</span></p>'+
				 '<p style="text-indent: 2em;">首先要确定我们这款宝贝的“主关键词”范围，比如我想提升“韩版女装”这个关键词排名，那我们先要准备多个长尾关键词，且长尾关键词内必须包含主关键词，如：“2017时尚韩版女装”、“韩版女装秋季 包邮”、“韩版羽绒服修身女装”等等，长尾词越多越好，前提是这些长尾词能直接搜到你的宝贝，如果实在搜不到，可以尝试使用一半的宝贝标题，或者整个宝贝标题，接下来的工作就很简单了，只要大量地给这些长尾词刷流量、刷收藏加购，等宝贝权重上去后，你会发现长尾词的排名越来越高，且会带动其他的长尾词排名，甚至主关键词会直接出排名。</p>'+
				 '<p style="text-indent: 2em;">看到这里，很多店主都会有疑问，我也是这样操作的，效果并不大，问题出在哪里?本人亲测，是流量和收藏加购的质量问题!我们刷流量或者收藏加购的时候，一定要确保是真实人工操作的，千万不要用机刷流量，切记不要贪图便宜，否则功亏一篑!我一般会去<b><span style="color: rgb(255, 0, 0);">聚人气</span></b>发布流量任务，在众多平台中，<b><a href="http://a.kaitao.cn/a.php?id=140" target="_blank">聚人气</a></b>的真实性和口碑是比较好的，有需要的朋友可以自己去体验一下!<b><a href="http://a.kaitao.cn/a.php?id=140" target="_blank">点击了解</a></b></p>'+
				 '<p style="text-indent: 2em;">想学习更多爆款经验?扫描下方二维码，加老师微信<strong style="color:red;">'+I1_weixin+'</strong>，加入爆款交流群，万人在线分享经验，让你少走弯路，更有老师现场传授运营技巧!</p>'+
				 '<p style="text-align:center;"><img src="http://www.kaitao.cn/public/aimages/qrcode/'+I1_weixin+'.png" id="I1_qrcode" width="220" height="220"></p>';

		var strJ="<p style='text-indent: 2em;'><strong style='color:red'>附上淘宝双11红包官方链接地址， 直接点击链接就可抢红包</p><p style='text-indent: 2em;'>PC端：<a href='http://a.kaitao.cn/a.php?id=144' target='_blank'>https://s.click.taobao.com/afmEQZw</a></p><p style='text-indent: 2em;'>移动端：<a href='http://a.kaitao.cn/a.php?id=145' target='_blank'>https://s.click.taobao.com/ZEpEQZw</a></strong></p> <p style='text-indent: 2em;'><strong>分享淘口令</strong>：<strong style='color:red'>￥TJZv0gZwUSo￥</strong>（长按复制口令在手机淘宝打开）</p>";
  
		var strK = '<p style="text-indent: 2em;">2017年最新技术，独有商家保障计划，全程安全无忧。<b><a href="http://a.kaitao.cn/a.php?id=143" target="_blank">亿淘网络科技</a></b>，正规专业团队运作，安全迅速提高您店铺的信誉，全力为您打造唯一安全完美的店铺，从而提高转化率及销售量，联系QQ:<b style="color:red">954364230</b>点击<b><a href="http://a.kaitao.cn/a.php?id=143" target="_blank">了解详情</a></b></p>';
		var strL = '花呗取现咨询客服∨ ：<b style="color:red">ab455ba</b>';

		var regA=/A1/g;  
		var regB=/B1/g; 
		var regC=/C1/g; 
		var regD=/D1/g; 
		var regE=/E1/g;
		var regF=/F1/g;
		var regG=/G1/g;   
		var regH=/H1/g;   
		var regS=/S1/g;  
		var regI=/I1/g;  
		var regJ=/J1/g;  
		var regK=/K1/g; 
		var regL=/L1/g;   
		 		
	

		$('#kaitao_content').each(function(){
			 if(regA.test($(this).text())){  
		 		$(this).html($(this).html().replace('A1',strA));
			}
			if(regB.test($(this).text())){  
		 		$(this).html($(this).html().replace('B1',strB));
			}
			if(regF.test($(this).text())){  
		 		$(this).html($(this).html().replace('F1',strF));
			}
			if(regC.test($(this).text())){  
		 		$(this).html($(this).html().replace('C1',strC));
			}
			if(regD.test($(this).text())){  
		 		$(this).html($(this).html().replace('D1',strD));
			}
			if(regE.test($(this).text())){  
		 		$(this).html($(this).html().replace('E1',strE));
			}
			if(regG.test($(this).text())){  
		 		$(this).html($(this).html().replace('G1',strG));
			}
			if(regH.test($(this).text())){  
		 		$(this).html($(this).html().replace('H1',strH));
			}
			if(regS.test($(this).text())){  
		 		$(this).html($(this).html().replace('S1',strS));
			}
			if(regI.test($(this).text())){  
		 		$(this).html($(this).html().replace('I1',strI));
			}
			if(regJ.test($(this).text())){  
		 		$(this).html($(this).html().replace('J1',strJ));
			}
			if(regK.test($(this).text())){  
		 		$(this).html($(this).html().replace('K1',strK));
			}
			if(regL.test($(this).text())){  
		 		$(this).html($(this).html().replace('L1',strL));
			}
		});
	}
	
	//ab_replace();
	
	articlehits();
	submitComment();
	
});



  $('#kaitao_content img').css({'max-width':'100%','height':'auto'});
  if(IsPC()){
       //$('.am-comment').eq(1).css('margin-left','55px');
     }
     function IsPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    }
   //弹窗广告
   $('.popup-close').click(function(){
    $('.popup').hide();
  })
    //$('.popup').show();
    function showpopup(){
      if(document.cookie.indexOf("a=hello")==-1){
        var t = new Date(new Date().getTime()+1000*60*60*1);
        document.cookie="a=hello; expires="+t.toGMTString();
        $('.popup').show();
      }
    }
    setTimeout("showpopup()",3000);   

   //右侧广告点击
   $('.right-ad').click(function(){
    $(this).hide();
    $('.right-popup').show();
  })
   $('.right-popup-close').click(function(){
    $('.right-ad').show();
    $('.right-popup').hide();
  })
  //  $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){   
  //   $('.city').text(remote_ip_info.city);//城市  
  // }); 
  //console.log('页面宽度'+$(window).width());
  var box_width = $(window).width();
  //console.log(box_width-20+'px');
  if(box_width < 640){
    $('#kaitao_content').css('width',box_width-20+'px');
  }

  $('.com_title').html('发表评论 或 点击 <span class="pc-tiwen"><a href="https://wen.kaitao.cn?tiwen=1" rel="nofollow" class="header-tiwen">提问</a></span>');
  $('.header-tiwen').click(function(){
   window.open('https://wen.kaitao.cn?tiwen=1');
 })

  var s = $('#kaitao_content').html();

 //console.log(s);
  
  a_reg = /<a(.*?)<\/a>/i;  //a链接的正则  

 img_reg = /<img(.*?)>/i; //图片链接的正则，防止图片的title,alt什么的属性包括疾病名而误替换  

 var ix = 0;  

 var arr_ele = [];  

 //先把<a><img>2类标签全部替换为{{index}}，然后处理剩下的文字，再把<a><img>标签的内容替换回去  

 while(true){  

  if(-1 == s.toLowerCase().indexOf('<a ') && -1 == s.toLowerCase().indexOf('<img ')){  

    break;  

  }  

  a_match = s.match(a_reg);  

  if(a_match){  

        //console.log(a_match);  

        arr_ele.push(a_match[0]);  

        s = s.replace(a_reg, '{{' +ix+ '}}');  

        ix++;  

      }  

      img_match = s.match(img_reg);  

      if(img_match){  

        //console.log(img_match);  

        arr_ele.push(img_match[0]);  

        s = s.replace(img_reg, '{{' +ix+ '}}');  

        ix++;  

      }  

    }  


    var json = {
      "https://www.kaitao.cn/":[
      "开个网店",
      "如何开网店",
      "怎样开网店",
      "网上开店",
      "淘宝开店教程",
      "淘宝开店",
      "开网店"
      ],
      "https://www.kaitao.cn/kaidianzhidao":[
      "开店指导",
      "新手开店"
      ],
      "https://www.kaitao.cn/taobaokaoshi":[
      "淘宝考试答案",
      "淘宝开店考试",
      "淘宝考试"
      ],
      "https://www.kaitao.cn/mingdian":[
      "淘宝名店汇总",
      "网红店铺",
      "红人店铺",
      "明星店铺",
      "淘宝星店",
      "淘宝名店"
      ],
      "https://www.kaitao.cn/zhuangxiujingyan":[
      "装修攻略",
      "网店装修",
      "如何做好网店装修",
      "店铺装修经验",
      "淘宝店铺装修教程",
      "淘宝店铺装修"
      ],
      "https://www.kaitao.cn/taobaoyunying":[
      "网店运营",
      "淘宝运营策划",
      "淘宝运营教程",
      "淘宝运营",
      "运营策划"
      ],
      "https://www.kaitao.cn/taobaotuiguang":[
      "淘宝推广渠道",
      "淘宝推广技巧",
      "怎么做淘宝推广",
      "淘宝推广方法",
      "淘宝推广"
      ],
      "https://www.kaitao.cn/taobao":[
      "淘宝大学教程",
      "淘宝大学新手开店",
      "淘宝大学课程",
      "淘宝大学"
      ],
      "https://www.kaitao.cn/taobaozixun":[
      "淘宝最新资讯",
      "淘宝新闻",
      "网店资讯",
      "淘宝资讯"
      ],
      "https://www.kaitao.cn/taoketuiguang":[
      "淘宝客推广",
      "淘宝客是什么",
      "淘宝客怎么赚钱",
      "淘宝客如何推广",
      "淘宝联盟",
      "淘宝客"
      ],
      "https://www.kaitao.cn/zhitongche":[
      "淘宝直通车推广",
      "怎么开直通车",
      "淘宝直通车技巧",
      "淘宝直通车"
      ],
      "https://www.kaitao.cn/taobaojingyan":[
      "淘宝开店经验",
      "淘宝经验分享",
      "淘宝经验交流",
      "开淘宝店经验",
      "淘宝经验"
      ],
      "https://www.kaitao.cn/taobaotuandui":[
      "淘宝团队管理",
      "如何管理店铺团队",
      "淘宝团队组建",
      "淘宝团队管理经验",
      "淘宝团队"
      ],
      "https://www.kaitao.cn/shoutao":[
      "手机淘宝",
      "手淘流量",
      "手淘运营",
      "无线流量",
      "微淘"
      ],
      "https://www.kaitao.cn/tmall":[
      "天猫商城",
      "如何入驻天猫",
      "天猫运营"
      ],
      "https://www.kaitao.cn/guize":[
      "淘宝规则大全",
      "最新淘宝规则",
      "淘宝规则解读",
      "淘宝基础规则",
      "淘宝卖家规则",
      "天猫规则",
      "淘宝规则"
      ],
      "https://www.kaitao.cn/nongcuntaobao":[
      "农村淘宝服务站",
      "农村淘宝加盟",
      "农村淘宝合伙人",
      "农村淘宝"
      ],
      "https://www.kaitao.cn/aliexpress":[
      "全球速卖通",
      "速卖通如何开店",
      "速卖通开店流程",
      "速卖通攻略",
      "速卖通最新规则"
      ],
      "https://www.kaitao.cn/taobaozatan":[
      "淘宝杂谈",
      "淘宝红包"
      ],
      "https://www.kaitao.cn/shuadan":[
      "淘宝刷单",
      "淘宝刷销量",
      "淘宝刷信誉",
      "淘宝刷钻",
      "淘宝单怎么刷"
      ],
      "https://www.kaitao.cn/wangdianseo":[
      "网店SEO",
      "网店优化",
      "淘宝SEO优化",
      "淘宝SEO教程",
      "淘宝SEO"
      ],
      "https://www.kaitao.cn/jd":[
      "京东开店流程及费用",
      "在京东上怎么开店",
      "京东开店要什么条件",
      "京东怎么开店",
      "如何在京东上开网店",
      "京东个人开店流程",
      "个人怎么在京东开店",
      "京东教程",
      "京东运营",
      "京东推广",
      "京东规则",
      "京东资讯",
      "京东活动"
      ],
      "https://www.kaitao.cn/weixin":[
      "微信运营",
      "微信小程序",
      "微信素材",
      "微信营销",
      "微信规则",
      "微商运营",
      "微信教程",
      "微商货源",
      ],
      "http://www.yundun166.com":[
      "淘宝刷单平台",
      "淘宝刷单技巧"
      ],
      "https://www.kaitao.cn/taobaohuodong":[
      "淘宝活动大全",
      "淘宝活动大促",
      "淘宝活动策划",
      "淘宝活动",
      ],
      "https://www.kaitao.cn/pinduoduo":[
      "拼多多开店",
      "拼多多教程",
      "拼多多开店流程",
      "拼多多如何开店",
      "拼多多怎么开店"
      ]
    };


    for (var val in json) {
      for(var i=0;i<json[val].length;i++){
        var keywords_str = json[val][i];
        var index = s.indexOf(keywords_str);
        if(index != -1){
          var reg = "/"+keywords_str+"/i";  
          s = s.replace(eval(reg), "<a target='_blank' href='"+val+"'>"+keywords_str+"</a>");  

          break;
        }

      }
    }

    //s = s.replace(/开个网店/i, "<a target='_blank' href='https://www.kaitao.cn/'>开个网店</a>");  

    if(arr_ele){  

      for(var i=0; i<arr_ele.length; i++){  

        s = s.replace('{{' + i + '}}', arr_ele[i]);  

      }  

    }  

    $('#kaitao_content').html(s);

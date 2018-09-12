/**
 * Created by 70432 on 2018/8/6.
 */

(function(){
		$('.newyuyueswitch').bootstrapSwitch();
		$('.newyuyueswitch').on('switchChange.bootstrapSwitch', function (event,state) {
			var o = $(this);
            if (state) {
            	$.ajax({
            		type:'post',
            		url:'?',
            		data:'act=enableyy',
            		success:function(data){
            			var res = eval("("+data+")");
            			if (res.status==1) {
            			$('.newyuyue_list').show();
            				layer.tips('开启成功',o);
            			}else{
            				//$('.newyuyueswitch').bootstrapSwitch('toggleState');
            				layer.tips(res.content,o);
            			}
            		}
            	});
            }else{
            	$.ajax({
            		type:'post',
            		url:'?',
            		data:'act=disabley',
            		success:function(data){
            			var res = eval("("+data+")");
            			if (res.status==1) {
            				$('.newyuyue_list').hide();
            				layer.tips('已关闭',o);
            			}else{
            				$('.newyuyueswitch').bootstrapSwitch('toggleState');
            				layer.tips(res.content,o);
            			}
            		}
            	});
            }
        });

        $(document).on('click','.yy_submit',function(){
        	var o = $(this);
        	var yy_days = $('#yy_days').val();
        	var yy_money = $('#yy_money').val();
        	$.ajax({
        		type:'post',
        		url:'?',
        		data:'act=updateyy&d='+yy_days+'&m='+yy_money,
        		success:function(data){
        			var res = eval("("+data+")");
        			layer.tips(res.content,o);
        			if (res.status==1) {
        				location.reload();
        			}
        		}
        	});
        })

	})();
//（买入）-湖景精品维代尔白冰酒Lakeview Vidal 375M 500元  编号：SP000097
//（买入）-哈伯品丽珠红冰酒 Harbor Cabernet Franc 375ML 1000元 编号：SP000108
//（买入）-拉图宾庄园奥克干红葡萄酒 南法/朗格多克 (纸箱)750ML x6 500元
//（买入）-意大利威尼托桃红起泡酒 (纸箱)750MLx6瓶装 1000元
function  test(){
    var nickname = document.getElementById("nickname").value;
    var username = document.getElementById("username").value;
    var mobile = document.getElementById("mobile").value;
    var pwd = document.getElementById("pwd").value;
    var pwdrepeat = document.getElementById("pwd1").value;
    var bankname = document.getElementById("bank_name").value;
    var bankaccount = document.getElementById("bank_account").value;
    var bankowner = document.getElementById("bank_owner").value;
    var bankaddr = document.getElementById("bank_address").value;
    var alipay = document.getElementById("ali_pay").value;
    var bankmark = document.getElementById("bank_mark").value;
    var checkvalue = document.getElementById("box").checked;
    alert(nickname)

    //if(checkvalue==false)
    //        {
    //            alert('请确认你已阅读警告并勾选确认！');
    //        }
    //else{
    //    alert(checkvalue)
    //}
  //  return true;
}

function  regist(){
            var nickname = document.getElementById("nickname").value;
            var username = document.getElementById("username").value;
            var mobile = document.getElementById("mobile").value;
            var pwd = document.getElementById("pwd").value;
            var pwdrepeat = document.getElementById("pwd1").value;
            var bankname = document.getElementById("bank_name").value;
            var bankaccount = document.getElementById("bank_account").value;
            var bankowner = document.getElementById("bank_owner").value;
            var bankaddr = document.getElementById("bank_address").value;
            var alipay = document.getElementById("ali_pay").value;
            var bankmark = document.getElementById("bank_mark").value;
            var checkvalue = document.getElementById("box").checked;
            //document.write(Data())

            if(checkvalue==false)
            {
                alert('请确认你已阅读警告并勾选确认！');
                return false;
            }
            if (nickname=='') {
                alert('请输入昵称');
                //alert(nickname)
                return false;
            }
            if (username=='') {
                alert('请输入账号');
                return false;
            }
            if (mobile=='') {
                alert('请输入手机号');
                return false;
            }
            var reg = /^0?1\d{10}$/;
            if (!reg.test(mobile)){
                alert('手机号错误！');
                return false;
            }
            // if (mobilecode=='') {
            // 	layer.msg('请输入验证码');
            // 	return;
            // }
            if (pwd=='') {
                layer.msg('请输入密码');
                return false;
            }
            if (pwdrepeat != pwd) {
                alert('两次输入密码不一致！');
                return false;
            }
            if (alipay!='' && bankaccount=='')
            {
                alert('仅填写支付宝的银行信息无效，请补齐银行卡号');
                return false;
            }
            if (bankmark!='' && bankaccount=='') {
                alert('请正确填写银行卡信息');
                return false;
            }
            if (bankaccount!='' && bankowner=='') {
                alert('请完善银行卡信息');
                return false;
            }
            if (bankname=='请选择银行') {
                alert('请选择银行');
                return false;
            }
            return true;
}
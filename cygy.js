/*
小程序：成语果园
抓包：tree-prod.graylog.chimps.cn 的 Authorization 的值 填在下面的token里面 用@分割

*/
const jobname = '果园'

const $ = Env(jobname)


let token = "DOGyCr2pJYKybDwDnu05bvZImmxWfjZO88cTbbZLGqPCG3IXuaxvAcettYo7H3OLy7_LGvg0gmMCnPTPmoC1V7jjK6Tf4H2i5CbRX3UMFwY"



let tokenArr=[
]



let completeflag=0

!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    }else {
		if(!(await checkEnv())) return;
		console.log(`\n🔸增加5个任务，增加自动领苹果 `)
		let i=0
		for (token of tokenArr){i+=1
        $.log(`\n------------`)
          $.log(`\n开始第${i}个账号------\n`)
          await a(token)
	     console.log(`\n🔸==开始每日任务== `)
		for (let j = 0; j < 1; j++) {
        await acc3(token)	
        await acc4(token)	
        await acc5(token)
        await acc6(token)
        await acc7(token)
	   console.log(`\n🔸==开始领三餐, 订阅, 漂浮, 公众号, 游戏, 分享==\n`)
        await bcc(token)
        await bcc2(token)
        await bcc3(token)
        await abcc(token)
        await abbbcc(token)
        await acc8(token)
        await m1(token)
        await m2(token)
        await m3(token)
        console.log(`\n🔸==开始领邀请500水==\n`)
        await c1(token)
        }
        console.log(`\n🔸==领苹果==`)
        await m4(token)
       console.log(`\n🔸==开始模拟答题领水==`)
       if (energy>=1){
       console.log(`\n🔸==体力足够，开始答题==`)
       for (let u = 0; u < 1; u++) {
         await o(token,u)
       await p(token,u)
       }
          await f(token)
        }else console.log(`\n🔻体力不够跳过`)
       
       console.log(`\n🔸==开始抽奖==`)
       await acc(token)
       console.log(`\n🔸==开始抽字==`)
       await k(token)
       console.log(`\n🔸==开始浇水==`)
       await acc2(token)
       console.log(`\n🔸==补充肥料和体力==`)
       nutrient=0
       fertilizer=0
       energy=0
       await a(token)
       if (nutrient<=90){
        	await bcc4(token)
        }else console.log(`\n🔻吸收率足够，跳过`)
       if (fertilizer<=1){
       console.log(`\n🔸补充肥料------`)
        	await bcc5(token)
        }else console.log(`\n🔻肥料足够跳过`)
       }
       if (energy<=10){
       console.log(`\n🔸补充体力------`)
          await f(  )
        }else console.log(`\n🔻体力足够跳过`)
       }

       $.log(`\n------------`)

		//await showmsg()
    
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

async function checkEnv() {
    if(token) {
        for(let dt of token.split('@')) {
            if(dt) tokenArr.push(dt)
        }
    } else {
        if (tokenArr.length<1)return;
    }
    console.log(`共找到${tokenArr.length}个账号`)
    
    return true;
}
//通知
async function showmsg() {
    
    notifyBody =  "运行通知\n" + tsxx
    
    if (notifyFlag != 1) {
		if (tsflag){if($.isNode()){await notify.sendNotify($.name, notifyBody );}}
        console.log(notifyBody);
		tsflag=0
    }
	
    if (notifyFlag == 1 ) {
        $.msg(notifyBody);
		console.log(notifyBody);
        if($.isNode()){await notify.sendNotify($.name, notifyBody );}
    }
}
async function c1() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=inviteNew&rewardType='
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function m1() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-storage-water'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function m2() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/share-for-water'
	let body=`rewardType=share`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function m3() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=videoWater&rewardType=video'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function m4() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=1`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
	await m5(token)
	await m6(token)
	await m7(token)
	await m8(token)
	await m9(token)
	await m10(token)
	await m11(token)
	await m12(token)
	await m13(token)
	await m14(token)
}

async function m5() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=2`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m6() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=3`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m7() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=4`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m8() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=5`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m9() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=6`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m10() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=7`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m11() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=8`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m12() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=9`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m13() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=10`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function m14() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/got-fruit'
	let body=`idx=11`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 40002) {
		//console.log(`\n${result.data.water} `)
	}else console.log(`苹果: ${JSON.stringify(fruit)}`)
}
async function k() {
    let url = 'https://tree-prod.graylog.chimps.cn/jigsaw/got-luck-jigsaw'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n抽中第${result.data.addJigsaw}个字`)
	}else console.log(`${result.errmsg}`)
}

async function o() {
    let url = 'https://tree-prod.graylog.chimps.cn/player/unlock'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n答题体力减1 当前体力 ${result.data.energy} `)
	}else console.log(`${result.errmsg}`)
}

async function p() {
    let url = 'https://tree-prod.graylog.chimps.cn/player/pass'
	let body=`rangeTime=13`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n通关成功  当前关卡 ${result.data.lvl} 增加水分 ${result.data.addWater}`)
	}else console.log(`${result.errmsg}`)
}

async function f() {
    let url = 'https://tree-prod.graylog.chimps.cn/player/add-reward'
	let body=`reason=dailyEnergyByVideo&rewardType=share`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n体力增加至 ${result.data.energy} `)
	}else console.log(`${result.errmsg}`)
}

async function a() {
    let url = 'https://tree-prod.graylog.chimps.cn/player/re-enter?shareCode=undefined'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
    nutrient=result.data.tree.nutrient
    fertilizer=result.data.tree.fertilizer
    fruit=result.data.tree.fruit
    energy=result.data.energy
		if(result.errcode == 0) {
		console.log(`水分:${result.data.tree.water} 吸收率: ${result.data.tree.nutrient} 肥料: ${result.data.tree.fertilizer} \n\n体力: ${result.data.energy} 苹果: ${JSON.stringify(fruit)}`)
	}else console.log(`${result.errmsg}`)
}

async function abcc() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=gongzhonghao&rewardType='
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function abbbcc() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=viewManor&rewardType='
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}
async function bcc() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=login&rewardType='
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function bcc1() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=videoWater&rewardType=video'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function bcc2() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=subscribe&rewardType='
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}


async function bcc3() {
    let url = 'https://tree-prod.graylog.chimps.cn/player/add-reward'
	let body=`reason=rewardBalloon`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}
async function bcc4() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/use-fertilizer'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
    
		if(result.errcode == 0) {
		console.log(`\n吸收率增加至 ${result.data.tree.nutrient} `)
	}else console.log(`${result.errmsg}`)
    
}

async function bcc5() {
    let url = 'https://tree-prod.graylog.chimps.cn/player/add-reward'
	let body=`reason=dailyFertilizerByVideo&rewardType=video`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`当前化肥 ${result.data.fertilizer} `)
	}else console.log(`${result.errmsg}`)
}


async function acc() {
    let url = 'https://tree-prod.graylog.chimps.cn/sign-roll/roll'
let body=`rewardType=video`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
if(result.errcode == 0) {
		console.log(`抽奖成功`);
	}else console.log(`\n${result.errmsg}`)
}

 async function acc2() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/water'
		
	let body=`bet=10&freeBet=0&clientTotalExp=133&clientNowExp=999`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n浇100水成功  剩余${result.data.tree.water}`);
	}else console.log(`${result.errmsg}`)
}

async function acc3() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=shareGold&rewardType=share'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
		if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}
	

async function acc8() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/share-for-water'
	let body=`rewardType=share`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function acc4() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=videoWater&rewardType=video'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}
		
async function acc5() {
    let url = 'https://tree-prod.graylog.chimps.cn/tree/share-for-water'
	let body=`rewardType=share`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}
async function acc6() {
    let url = 'https://tree-prod.graylog.chimps.cn/free/reward?type=wxNotify'
	let body=``
    let urlObject = populateUrlObject(url,body)
    await httpRequest('get',urlObject)
    let result = JSON.parse(httpResult.body);
if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

async function acc7() {
    let url = 'https://tree-prod.graylog.chimps.cn/player/add-reward'
	let body=`reason=dailyFreeWaterAgain&rewardType=video`
    let urlObject = populateUrlObject(url,body)
    await httpRequest('post',urlObject)
    let result = JSON.parse(httpResult.body);
if(result.errcode == 0) {
		console.log(`\n${result.data.water} `)
	}else console.log(`${result.errmsg}`)
}

function populateUrlObject(url,body=''){
    let host = url.replace('//','/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {"Accept-Encoding": "gzip,compress,br,deflate","Authorization": token,"Connection": "keep-alive","Content-Length": "16","Host": "tree-prod.graylog.chimps.cn","Referer": "https://servicewechat.com/wx1433e92dcf1d0343/116/page-frame.html","User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001442) NetType/WIFI Language/zh_CN","content-type": "application/x-www-form-urlencoded","version": "1.7.32"},
    }
    if(body) urlObject.body = body
    return urlObject;
}


async function httpRequest(method,url) {
    httpResult = null
    return new Promise((resolve) => {
        $[method](url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    httpResult = resp;
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        } else {
            console.log(data)
        }
    } catch (e) {
        console.log(e);
        console.log(`服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}
function UrlParamHash(url) {
    var params = [], h;
	//var hash = url.slice(url.indexOf("?") + 1).split('&');

    var hash = url.split('&');
    for (var i = 0; i < hash.length; i++) {
        h = hash[i].split("=");
        params.push(h[0]);
        params[h[0]] = h[1];
    }
    return params;
}
//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}

//AES/DES加解密，CryptoJS
function EncryptCrypto(method,mode,padding,message,key,iv) {
    return CryptoJS[method].encrypt(
        CryptoJS.enc.Utf8.parse(message), 
        CryptoJS.enc.Utf8.parse(key), 
        {mode:CryptoJS.mode[mode], padding:CryptoJS.pad[padding], iv:CryptoJS.enc.Utf8.parse(iv)}
    ).ciphertext.toString(CryptoJS.enc.Base64);
}
function DecryptCrypto(method,mode,padding,message,key,iv) {
    return CryptoJS[method].decrypt(
        {ciphertext: CryptoJS.enc.Base64.parse(message)}, 
        CryptoJS.enc.Utf8.parse(key), 
        {mode:CryptoJS.mode[mode], padding:CryptoJS.pad[padding], iv:CryptoJS.enc.Utf8.parse(iv)}
    ).toString(CryptoJS.enc.Utf8);
}
//Base64加解密
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
//MD5
function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}
//SHA1
function SHA1Encrypt(msg){function add(x,y){return((x&0x7FFFFFFF)+(y&0x7FFFFFFF))^(x&0x80000000)^(y&0x80000000);}function SHA1hex(num){var sHEXChars="0123456789abcdef";var str="";for(var j=7;j>=0;j--)str+=sHEXChars.charAt((num>>(j*4))&0x0F);return str;}function AlignSHA1(sIn){var nblk=((sIn.length+8)>>6)+1,blks=new Array(nblk*16);for(var i=0;i<nblk*16;i++)blks[i]=0;for(i=0;i<sIn.length;i++)blks[i>>2]|=sIn.charCodeAt(i)<<(24-(i&3)*8);blks[i>>2]|=0x80<<(24-(i&3)*8);blks[nblk*16-1]=sIn.length*8;return blks;}function rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt));}function ft(t,b,c,d){if(t<20)return(b&c)|((~b)&d);if(t<40)return b^c^d;if(t<60)return(b&c)|(b&d)|(c&d);return b^c^d;}function kt(t){return(t<20)?1518500249:(t<40)?1859775393:(t<60)?-1894007588:-899497514;}var x=AlignSHA1(msg);var w=new Array(80);var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;var e=-1009589776;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;var olde=e;for(var j=0;j<80;j++){if(j<16)w[j]=x[i+j];else w[j]=rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);t=add(add(rol(a,5),ft(j,b,c,d)),add(add(e,w[j]),kt(j)));e=d;d=c;c=rol(b,30);b=a;a=t;}a=add(a,olda);b=add(b,oldb);c=add(c,oldc);d=add(d,oldd);e=add(e,olde);}SHA1Value=SHA1hex(a)+SHA1hex(b)+SHA1hex(c)+SHA1hex(d)+SHA1hex(e);return SHA1Value;}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

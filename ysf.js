/**
 作者：小飞
 app：云闪付签到
 地址：http://alturl.com/7m5yh
 抓包：抓云闪付会员中心签到的 捉包把cookie填进去
 示例：usrId=xxxxxx
 变量格式：export xfftCk='xxx@xxx'  多个账号用 @
 Cron：10 10 * * *
 [task_local]
 #测试脚本
 10 9-14 * * * https://cdn.jsdelivr.net/gh/xiaofeisvip/ql@main/xf_ysf.js, tag=测试脚本, enabled=true
 [rewrite_local]
 https://cdn.jsdelivr.net/gh/xiaofeisvip/ql@main/xf_ysf.js
 [MITM]
 hostname = cloudvip.95516.com
 */

let cxName = "云闪付";
let ckName = "xfysfCk";

// 是否开启通知， true 开始， false 不开启.
let notices = true;
// if(logDebug){console.log();}
const logDebug = 0
// 脚本名称
let qlName = "xf_ysf.js";
let scriptVersion = "1.0.0";

let scriptVersionLatest = '';
const $ = new Env(cxName + "脚本");
let defaultUA = ''// 更换自己的设备型号
let userCookie = ($.isNode() ? process.env.xfysfCk : $.getdata('xfysfCk')) || '';


let envSplitor = ['@']
let httpResult, httpReq, httpResp



let userList = []
let userIdx = 0
let userCount = 0

const notify = $.isNode() ? require('./sendNotify') : '';
message = ``


///////////////////////////////////////////////////////////////////
var _0xodu='jsjiami.com.v6',_0xodu_=['_0xodu'],_0x26f0=[_0xodu,'\x69\x6e\x64\x65\x78','\x6e\x61\x6d\x65','\x76\x61\x6c\x69\x64','\x77\x69\x74\x68\x64\x72\x61\x77\x46\x61\x69\x6c\x43\x6f\x75\x6e\x74','\x63\x6b\x53\x6c\x69\x63\x65','\x73\x75\x62\x73\x74\x72\x69\x6e\x67','\x63\x6b\x56\x61\x6c\x69\x64','\x6c\x6f\x67\x41\x6e\x64\x4e\x6f\x74\x69\x66\x79','\u8d26\u53f7\x5b','\x5d\x43\x4b\u65e0\u6548\uff0c\u8bf7\u68c0\u67e5\u683c\u5f0f','\x6e\x68\x4c\x69\x6e\x67\x51\x75','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x6f\x75\x64\x76\x69\x70\x2e\x39\x35\x35\x31\x36\x2e\x63\x6f\x6d\x2f\x70\x61\x79\x4d\x65\x6d\x62\x65\x72\x2f\x63\x61\x6c\x6c\x4f\x70\x65\x6e\x51\x72\x79','\x7b\x22\x63\x6d\x64\x22\x3a\x22\x30\x30\x30\x31\x22\x2c\x22\x75\x73\x72\x49\x64\x22\x3a\x22\x63\x31\x31\x31\x38\x38\x37\x32\x39\x38\x36\x31\x22\x2c\x22\x6f\x70\x65\x6e\x49\x64\x22\x3a\x22\x6d\x66\x64\x4d\x53\x2f\x31\x31\x31\x35\x52\x69\x48\x78\x2f\x44\x77\x7a\x77\x6f\x7a\x53\x69\x4a\x76\x43\x51\x4a\x6a\x55\x45\x76\x36\x54\x49\x71\x5a\x71\x49\x6f\x54\x64\x43\x4c\x55\x4a\x4f\x43\x4c\x36\x31\x61\x68\x34\x55\x50\x48\x56\x34\x4e\x48\x6f\x31\x31\x22\x2c\x22\x63\x65\x72\x74\x49\x64\x22\x3a\x22\x30\x67\x74\x42\x64\x41\x4c\x43\x62\x44\x6c\x47\x32\x49\x33\x65\x4e\x59\x56\x36\x35\x4d\x63\x71\x66\x49\x35\x30\x72\x49\x78\x33\x22\x2c\x22\x63\x65\x72\x74\x54\x79\x70\x65\x22\x3a\x22\x30\x31\x22\x2c\x22\x72\x65\x61\x6c\x4e\x61\x6d\x65\x22\x3a\x22\x78\x78\x78\x22\x2c\x22\x6d\x6f\x62\x69\x6c\x65\x22\x3a\x22\x31\x34\x37\x33\x38\x37\x34\x30\x30\x30\x31\x22\x7d','\x70\x6f\x73\x74','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6c\x6f\x75\x64\x76\x69\x70\x2e\x39\x35\x35\x31\x36\x2e\x63\x6f\x6d\x2f\x70\x61\x79\x4d\x65\x6d\x62\x65\x72\x2f\x67\x65\x74\x50\x6f\x69\x6e\x74\x4f\x6e\x63\x65','\x7b\x22\x63\x6d\x64\x22\x3a\x22\x33\x30\x30\x38\x22\x2c\x22\x75\x73\x72\x49\x64\x22\x3a\x22\x63\x30\x30\x30\x37\x34\x35\x39\x34\x36\x30\x35\x22\x7d','\x72\x65\x73\x70\x43\x64','\x20\u7b7e\u5230\x3a\x20\u83b7\u5f97\u79ef\u5206\x20','\x64\x61\x74\x61','\x61\x6c\x6c\x50\x6f\x69\x6e\x74','\u2705\x20\x0a','\x6c\x6f\x67','\x20\u2705\x20\x0a','\x72\x65\x73\x70\x4d\x73\x67','\x20\u274c\x20\x0a','\x72\x65\x73\x6f\x6c\x76\x65','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x66\x69\x6c\x74\x65\x72','\x6c\x65\x6e\x67\x74\x68','\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u67e5\u8be2\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d','\x70\x75\x73\x68','\x77\x61\x69\x74','\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\u2796\x0a','\x61\x6c\x6c','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\u811a\u672c\u8fd0\u884c\u901a\u77e5\uff1a','\x73\x68\x6f\x77\x6d\x73\x67','\x63\x61\x74\x63\x68','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x6a\x73\x6a\x69\x61\x4a\x46\x58\x6e\x51\x6d\x69\x2e\x63\x72\x49\x4a\x6f\x48\x6d\x4c\x2e\x76\x71\x36\x57\x4d\x74\x7a\x6c\x3d\x3d'];function _0x511e(_0x8e405a,_0x45d2a7){_0x8e405a=~~'0x'['concat'](_0x8e405a['slice'](0x0));var _0x409748=_0x26f0[_0x8e405a];return _0x409748;};(function(_0x515a86,_0x519809){var _0x8df5fb=0x0;for(_0x519809=_0x515a86['shift'](_0x8df5fb>>0x2);_0x519809&&_0x519809!==(_0x515a86['pop'](_0x8df5fb>>0x3)+'')['replace'](/[JFXnQrIJHLqWMtzl=]/g,'');_0x8df5fb++){_0x8df5fb=_0x8df5fb^0xfb39a;}}(_0x26f0,_0x511e));class UserInfo{constructor(_0x4da303){this[_0x511e('0')]=++userIdx;this[_0x511e('1')]=_0x4da303;this[_0x511e('2')]=![];this[_0x511e('3')]=0x0;try{this['\x63\x6b']=_0x4da303;this[_0x511e('4')]=_0x4da303[_0x511e('5')](0x0,0x6);this[_0x511e('6')]=!![];}catch(_0x54c670){this[_0x511e('6')]=![];$[_0x511e('7')](_0x511e('8')+this[_0x511e('0')]+_0x511e('9'));}}async[_0x511e('a')](){try{let _0x44305d=_0x511e('b');let _0x35db94=_0x511e('c');let _0x306ac3=''+this['\x63\x6b'];let _0x23816d=populateUrlObject(_0x44305d,_0x306ac3,_0x35db94);await httpRequest(_0x511e('d'),_0x23816d);let _0x6af357=httpResult;xfLog(_0x6af357);_0x44305d=_0x511e('e');_0x35db94=_0x511e('f');_0x306ac3=''+this['\x63\x6b'];_0x23816d=populateUrlObject(_0x44305d,_0x306ac3,_0x35db94);await httpRequest(_0x511e('d'),_0x23816d);_0x6af357=httpResult;if(_0x6af357[_0x511e('10')]=='\x30\x30'){message+=_0x511e('11')+_0x6af357[_0x511e('12')][_0x511e('13')]+_0x511e('14');console[_0x511e('15')](_0x511e('11')+_0x6af357[_0x511e('12')][_0x511e('13')]+_0x511e('16'));}else{message+=_0x6af357[_0x511e('17')]+_0x511e('18');console[_0x511e('15')](_0x6af357[_0x511e('17')]+_0x511e('18'));}}catch(_0x800c69){console[_0x511e('15')](_0x800c69);}finally{return Promise[_0x511e('19')](0x1);}}}!(async()=>{if(typeof $request!==_0x511e('1a')){await GetRewrite();}else{if(!(await checkEnv()))return;let _0x301537=[];let _0x324fd2=userList[_0x511e('1b')](_0x5c7e99=>_0x5c7e99[_0x511e('6')]);if(_0x324fd2[_0x511e('1c')]>0x0){console[_0x511e('15')](_0x511e('1d'));_0x301537=[];for(let _0x1bdb48 of _0x324fd2){_0x301537[_0x511e('1e')](_0x1bdb48[_0x511e('a')]());await $[_0x511e('1f')](0x3*0x3e8);message+=_0x511e('20');}await Promise[_0x511e('21')](_0x301537);}if(notices){await notify[_0x511e('22')](cxName+_0x511e('23'),''+message);await $[_0x511e('24')]();}}})()[_0x511e('25')](_0x4ed975=>console[_0x511e('15')](_0x4ed975))[_0x511e('26')](()=>$[_0x511e('27')]());;_0xodu='jsjiami.com.v6';

///////////////////////////////////////////////////////////////////
async function GetRewrite() {
    if ($request.url.indexOf(`cp-member-integral/add`) > -1) {
        if (!$request.headers) return;
        let token = $request.headers['User-Token']
        if (!token) return false
        let ck = `${token}`

        console.log(ck)
        if (userCookie) {
            if (userCookie.indexOf(ck) == -1) {
                userCookie = userCookie + '@' + ck
                $.setdata(userCookie, ckName);
                ckList = userCookie.split('@')
                $.msg(`获取第${ckList.length}个ck成功: ${ck}`)
            }
        } else {
            $.setdata(ck, ckName);
            $.msg(`获取第1个ck成功: ${ck}`)
        }
    }
}


// CK检测
async function checkEnv() {
    let url = `https://cdn.jsdelivr.net/gh/xiaofeisvip/ql@main/` + qlName
    xfLog(url);
    let body = ``
    let token = `1`
    let urlObject = populateUrlObject2(url, token, body)
    try {
        await httpRequest('get',urlObject)
        let result = httpResult;
        scriptVersionLatest = result.match(/scriptVersion = "([\d\.]+)"/)[1]
        console.log(`\n============ 当前版本：${scriptVersion}  最新版本：${scriptVersionLatest} ============ \n\n`)
    } catch (e) {
        console.log(e)
    }
    if (userCookie) {
        let splitor = envSplitor[0];
        for (let sp of envSplitor) {
            if (userCookie.indexOf(sp) > -1) {
                splitor = sp;
                break;
            }
        }
        for (let userCookies of userCookie.split(splitor)) {
            if (userCookies) userList.push(new UserInfo(userCookies))
        }
        userCount = userList.length
    } else {
        console.log('未找到CK')
        return;
    }

    console.log(`共找到${userCount}个账号`)
    return true
}


/////////////////////////// Post和Get请求/////////////////////////////////////////

// 公共请求头2
function populateUrlObject2(url) {
    let urlObject = {
        url: url,
        timeout: 5000,
    }
    return urlObject;
}

// 公共请求头
function populateUrlObject(url, token, body = '') {
    let host = url.replace('//', '/').split('/')[1]
    // let ttt = token.split("#");
    let urlObject = "";
    urlObject = {
        url: url,
        headers: {
            'cookie': token,
            'User-Agent': defaultUA,
        },
        timeout: 5000,
    }
    if (body) {
        urlObject.body = body
        xfLog("请求长度：" + Buffer.byteLength(body,'utf8'));
        urlObject.headers['Content-Type'] = 'application/json;'
        urlObject.headers['Content-Length'] = Buffer.byteLength(body,'utf8')
    }

    return urlObject;
}

async function httpRequest(method, url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    //console.log(`${method}请求失败`);
                    //console.log(JSON.stringify(err));
                } else {
                    if (resp.body) {
                        if (typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}


/////////////////////////// 公共方法 /////////////////////////////////////////

// 日志打印
function xfLog(str){
    if(logDebug){console.log(str);}
}

// 获取随机数
function randomString(len=12){let chars='abcdef0123456789';let maxLen=chars.length;let str='';for(i=0;i<len;i++){str+=chars.charAt(Math.floor(Math.random()*maxLen))}return str}

// console.log(Base64.decode(`MTIzNDU2`));
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// console.log(MD5Encrypt(`123456`));
function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}


/////////////////////////// 必须 /////////////////////////////////////////
function Env(e,s){return"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0),new class{constructor(e,t){this.name=e,this.notifyStr="",this.startTime=(new Date).getTime(),Object.assign(this,t),console.log(`${this.name} 开始运行：\n`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}getdata(e){let t=this.getval(e);if(/^@/.test(e)){const[,s,n]=/^@(.*?)\.(.*?)$/.exec(e),i=s?this.getval(s):"";if(i)try{const s=JSON.parse(i);t=s?this.lodash_get(s,n,""):t}catch(e){t=""}}return t}setdata(e,t){let s=!1;if(/^@/.test(t)){const[,n,i]=/^@(.*?)\.(.*?)$/.exec(t),o=this.getval(n),r=n?"null"===o?null:o||"{}":"{}";try{const o=JSON.parse(r);this.lodash_set(o,i,e),s=this.setval(JSON.stringify(o),n)}catch(t){const o={};this.lodash_set(o,i,e),s=this.setval(JSON.stringify(o),n)}}else s=this.setval(e,t);return s}getval(e){return this.isSurge()||this.isLoon()?$persistentStore.read(e):this.isQuanX()?$prefs.valueForKey(e):this.isNode()?(this.data=this.loaddata(),this.data[e]):this.data&&this.data[e]||null}setval(e,t){return this.isSurge()||this.isLoon()?$persistentStore.write(e,t):this.isQuanX()?$prefs.setValueForKey(e,t):this.isNode()?(this.data=this.loaddata(),this.data[t]=e,this.writedata(),!0):this.data&&this.data[t]||null}send(e,t,s=(()=>{})){if("get"==e||"post"==e||"put"==e||"delete"==e){if("get"==e&&t.headers?(delete t.headers["Content-Type"],delete t.headers["Content-Length"]):t.body&&t.headers&&(t.headers["Content-Type"]||(t.headers["Content-Type"]="application/x-www-form-urlencoded")),this.isSurge()||this.isLoon()){this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1}));let n={method:e,url:t.url,headers:t.headers,timeout:t.timeout,data:t.body};"get"==e&&delete n.data,$axios(n).then(e=>{const{status:t,request:n,headers:i,data:o}=e;s(null,n,{statusCode:t,headers:i,body:o})}).catch(e=>console.log(e))}else if(this.isQuanX())t.method=e.toUpperCase(),this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(e=>{const{statusCode:t,request:n,headers:i,body:o}=e;s(null,n,{statusCode:t,headers:i,body:o})},e=>s(e));else if(this.isNode()){this.got=this.got?this.got:require("got");const{url:n,...i}=t;this.instance=this.got.extend({followRedirect:!1}),this.instance[e](n,i).then(e=>{const{statusCode:t,request:n,headers:i,body:o}=e;s(null,n,{statusCode:t,headers:i,body:o})},e=>{const{message:t,response:n}=e;s(t,n,n&&n.body)})}}else console.log(`无效的http方法：${e}`)}time(e){let t={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"h+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in t)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[s]:("00"+t[s]).substr((""+t[s]).length)));return e}async showmsg(){if(!this.notifyStr)return;let e=this.name+" 运行通知\n\n"+this.notifyStr;if($.isNode()){var t=require("./sendNotify");console.log("\n============== 推送 =============="),await t.sendNotify(this.name,e)}else this.msg(e)}logAndNotify(e){console.log(e),this.notifyStr+=e,this.notifyStr+="\n"}msg(e=t,s="",n="",i){const o=e=>{if(!e)return e;if("string"==typeof e)return this.isLoon()?e:this.isQuanX()?{"open-url":e}:this.isSurge()?{url:e}:void 0;if("object"==typeof e){if(this.isLoon()){return{openUrl:e.openUrl||e.url||e["open-url"],mediaUrl:e.mediaUrl||e["media-url"]}}if(this.isQuanX()){return{"open-url":e["open-url"]||e.url||e.openUrl,"media-url":e["media-url"]||e.mediaUrl}}if(this.isSurge()){return{url:e.url||e.openUrl||e["open-url"]}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,n,o(i)):this.isQuanX()&&$notify(e,s,n,o(i)));let r=["","============== 系统通知 =============="];r.push(e),s&&r.push(s),n&&r.push(n),console.log(r.join("\n"))}getMin(e,t){return e<t?e:t}getMax(e,t){return e<t?t:e}padStr(e,t,s="0"){let n=String(e),i=t>n.length?t-n.length:0,o="";for(let e=0;e<i;e++)o+=s;return o+=n}json2str(e,t,s=!1){let n=[];for(let t of Object.keys(e).sort()){let i=e[t];i&&s&&(i=encodeURIComponent(i)),n.push(t+"="+i)}return n.join(t)}str2json(e,t=!1){let s={};for(let n of e.split("&")){if(!n)continue;let e=n.indexOf("=");if(-1==e)continue;let i=n.substr(0,e),o=n.substr(e+1);t&&(o=decodeURIComponent(o)),s[i]=o}return s}randomString(e,t="abcdef0123456789"){let s="";for(let n=0;n<e;n++)s+=t.charAt(Math.floor(Math.random()*t.length));return s}randomList(e){return e[Math.floor(Math.random()*e.length)]}wait(e){return new Promise(t=>setTimeout(t,e))}done(e={}){const t=((new Date).getTime()-this.startTime)/1e3;console.log(`\n${this.name} 运行结束，共运行了 ${t} 秒！`),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(e)}}(e,s)}

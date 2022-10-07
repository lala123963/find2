/**
 * 顺丰速递app   劲量抓app的cookie  小程序的也可以跑但是失效非常快
 
 * 7/5     完成签到，自动浏览任务领取积分
 * 9/22    重构代码，自动获取任务参数以保证任务成功率
 * cron 0 0 8 * * ? 定时自己改 每天一次
 
 * 抓包任意url https://mcs-mimp-web.sf-express.com/mcs-mimp/ 里的cookie只需要 sessionId=xxxxxxxxx这条
 * ========= 青龙--配置文件 =========
 * 变量格式: export sfsy='ck1@ck2'  多个账号用 换行 或 @分割
 *  
 */
const $ = new Env("顺丰速运");
const alias_name = 'sfsy'
let VersionCheck = "2.0"
let Change = '修复验证'
const Notify = 1 		//0为关闭通知,1为打开通知,默认为1
///////////////////////////////////////////////////////////////////
var _0xod2='jsjiami.com.v6',_0xod2_=['‮_0xod2'],_0x64ce=[_0xod2,'w4YOCkvCtA==','woFYwqPChsKb','aMKew7PDvUAIag==','ZkEGw44y','wpPCrcOi','woN/w4YJw64=','wqltwrrCpsKxNsKBEMOlWCjDrg==','wr9qwqvCqsKmCMKX','AMOHREkO','w77DmloRw6k=','w5QcwqU=','w5vCjnA6wpI=','FOiOgeW/tA==','w7nDjgo=','CMOfSGkZ','w6/CuHA5','wpnCjMK1UsKs','TuS5teWJq+Wnq+i2uMKW5Y+/5ZqO5p6S55+S','w4cbNl7Cog==','fcKEwqPCgsO4w7k2Y3AxMcKUF0/DkVvCjyvDmcKreMOAVBcDw50zwoZ/w7d9w5l0w7ZQwq0Dwql5VMO1RMK5FljCs0lsGGkUwqdVEcOzYBAIbTk6w4F0','wp3Cv8O4w6HDky0hwrA2w4scwrN7A8OHUsOaw44lXsOnc8OMw5QgFcK0WC/Cmg==','wqPDlMKcdMKbfwvCrMKDFcKnw6DDgsKcHFLDm8KGCxPCjSXCtxHCqsKuEy/Cu8O9w7EWw7/DsgMwEk9rR8O+Vg==','ZHZxHgY=','w7ZiwqPCr0g=','w4R1R8OGw6k=','XOeuiOWImO+8j+aCluW0gei+nOe6lOestuWKtQ==','BMKfXsOHw4TCjsKvIA==','w6ZJUMO4w4I=','KeS5h+WJjuaWq+azoeWssOaKiQ==','w7bCqsKHQMOoN8Odw7/Drjl+wqvChWnDnsOPw4ExwqBowrPDgcK0VSDDkm/CmcKRfw==','w6tjwovCjWfDusO8KcOG','56a55Yuw5p+N6K+3','wrtSwoHCmMKo','wrnnlYnmiY0=','JsOgDC7CrWIww6ZR','ZeWIpOS+lg==','wq5/wqU4XRchVCXDqMO0QMOrwrLCqA==','56eC5YiKXg==','d8OQwp4aXg==','ecO4I8O7woU=','SMKaw5/DsEc=','OyHCvsK6WA==','UsO2wrUobA==','KcOWwqbCsMKfXFY=','HzjCvMKD','IsOhwrjCn8O8w5UI','SH4mOVo2IwpfV8KXwqA=','JcKLWi3DmWrDrw==','wr/CisOOw4zDlg==','KHs7TmQ=','w6lJUgsR','w7HCtcKFacOgN8OU','w7J8B8KR','F2Qzwqgh','GsKrwpTCs8KC','w65Cw78Zwr8=','GcKBaCLDiw==','wqBXwqDCnMKv','w5vDrwPDqcOX','wrXClVV+wr0=','w7TCtn4=','WMOjw6Djg6HCscOxPXtn44CPZcOHXhfCixTDk3rCsMO3NsKWOkNZ6L2q5pmMw4o=','w6zov4vlmJbCrcKiD8KFXsKrBHLCtsKkTBPDgcODKcKpwpHCnw==','GsK2w5w=','w4HDssK1wrDCh3M=','w4vDvEYOw4I=','d3Evw7o1','w63DuuacieWht+WFgeWOn+mEj0c=','RsOqJMOOwqc=','w7dGwpfDnRQR','ASbCnMKveg==','MGvDqgXCvw==','HCjCocKPfChhw64nfQ==','IcOYwrnCkA==','wqNmwqM=','CHLDqw==','wrHCvRRdwoc=','WUEFw64B','wpByZA==','w51Dwq/DniM=','wqoYD8OpKQ==','w7/CrsKDXMOybsKTwqTDtTdnwqrCiHPDhcOJwo8wwr16wqTDgMKyTnPDs17CscOIacOdwqjCuMK1woDDvMKOw6DDgW7DmW0AwqQXOMK5cMOBwr1cwojDhcOjUiABB8KpNMK0','DMOhNA==','w7xawr3Diw==','TsOdwpsoXA==','fFkHw7k=','woN4w4Egw4k=','w4PCnsKzVsOE','NynCucK9Xw==','A8K3Ux7DsA==','w4d4w4YKwoo=','AGwSw7M=','GQwj','w4Up44OUNVQUNl/jgZHChcKmFMK4w7vDpns7ZMOhw5oOwrhNQMOF6L2e5puFZA==','w4zDjVo2w4M=','FMOfRg==','ZUfDr+ODu1Yid8OyJuOAlcOXVsOLw7HDvwHDqijCh8KTwq4/HcOkwpPovJnmm61w','wrjov4PlmKfCgGjDqcO0csKCHyBAe3vDpMKBLktTVMOY','w4/DlRI=','B8Khwr0=','YR7jga1rbcO/wqzDleODkj3CqxvDvsKcFMKYwqklwqIkEQbovKfmmpoW','RX4Ew7/Dpuinm+afgeWSkOaVmOaMtjvCnggEwpHCijg8QcOGw4vCuA==','DMO2LiPCmw==','woRkw5MdUQ==','LsKOfTDDmA==','wrnCgsO8w4XDvQ==','OsOLwrvCgsKt','McKTwrTCgcKT','DCzCo8KHVyI=','w4xYN0NOwqDDvsOD','wpnCt8Otw64=','wqlFwpUGdw==','wq5EwoLCtg4=','w7ZWWQ==','A+iti+ayrWtBw47DtcKIwrljwrvDvQYQwqPClMOSFMKyw7xAw6TCvQ==','PsKGwqc=','wqjCmcKMbw==','w4rDuSXDvcO7','w653f8Oiw44=','YsKAw7HDp2Y=','Dei/mOWaijJJDydEEQvDjcO4wp/CsMKVwrLDusKmIlzDnA==','C8KfTA==','w5RYAw==','woMlKsKJwp0V','wrTCmcKY','NMOvwrjCqcO4','w4fDoOOAs3jCvSXCtQDjgIw1w6MIUcKGwp9fwp5BQMKxN8KxdcKjw6TovpfmmpzCig==','w5Tor7Lms6NO5L+V5oCffmzCjm/CtlbDhsOqQi7CklsJwoPCujw=','w4hWFkRZ','KsOeeVMB','IMKMwrHChMKww6cr','wr1swoETQw==','w7UKwqtdVA==','ecOtwosaeQ==','RsOaH8OEwoU=','K8O0FxPChw==','wpBZHzjCpA==','w6xPJ1Vt','w4hXZjYJ','wpLCvcK2fcK6','w6tLw4cwwr7CjQ==','w4QqXmkWcMOMGg==','w7AmNV7CiQ==','CsKAbMOtw4M=','WMOxLsORwq4=','w74l44KxClESKzbjgqJvwrZWw4bDqkIuwpJbCcKDwro8w7x8wq3ovIrmmbg/','wrforK3msrUM5L2g5oC7wpzCtsK6ay3CucOSJ8KMwpzDh2/DtTTDvMKP','B1Ea','w74l44KxClESKzbjgqJvwrZWw4bDqkIuwpJbCcKDwro86LyY5pmuwq0=','w5Rvw5IBWuimk+afjuWRn+aXg+aMvMK2VsOGw6pCLsKSWwnCg8K6PA==','wphqw4Y=','HyzCvcKYVw==','w7JoBsKKGw==','w6zDiH0yw7U=','wqbCtk9ZwpY=','wp9bwofChjE=','b+WmiOi3seS5s8Of6K+I56iz5ZCr5bGU6KylElA=','T+WlvOi3quS5rRPorrDnqJjlkonlsZzor5HDi0o=','OsKZTw==','w45zw4Ysw4/opqbmnrPlk53mlp7mj6EFw7d9Y0Vhw7nDsxJkY8Kb','TsOkIA==','NEcVwoMn','wrHChcKxdMKSfw==','SzsEw7XDplwfw7FcMWDDmg==','w7vDjxPCmUHCsxpfwq1wK1JbwohWw4Zsw7bCokPDg8KAwpZKQh/CmQ==','w5d1bi41','TvC8sIbDuvC4lK9A5pqa5pSI5Yay5ayDQ2U=','5Yep5oqn5YipbQ==','S+S4lOi1m+WPuA==','w5vDoDDDuHw=','esK8w5XDs2k=','GsK8w5XCt2LCrA==','wpFRAC7Ckg==','w6NeMcKUMg==','woIHwoZxw7bDhUojw4rCkOW+peWmteODnOetkms=','PuS4nOi1heWNt+OBgMOLbEpuw4NFccOi','w4jDrVgUw5M=','FDQBFjU=','44KIc8KcwoZ8w7rjgoRv6L2m5piN5L29562RZg==','w7jot5DljIjkv7rmgpkgR8O+','w6LDsTfDnsOe','wp3CmMONw6DDtg==','w58OHVTCv3s=','A30Zw7HDpFQo','MsKZRnA=','Xnw4P1w=','w6MUO3zCtA==','wqI7IsO0Jg==','w692wpDCkA==','akINAHA=','OsO8SV4k','wrLjgKflvaTlp7wc56635Yqg44K1','wqzCpSsxw4E2cMOuwp8=','MMOkCjXCmg==','w5xlwoQ/wpE5EMKvw5o=','wrjCt8KUX8KsOcOVw6bDt3lzw6vCgnfDnsOPwqo9wrt9w67DjMK8RHDDpV7CrcOyKMOQwqbCtsOuwoTDr8KCw6DDm3zDn3URwrNfAMK5asO0wo9MwpHDv8OnVG4YA8KnI8OIBHBxRsKfw4/ChMKIwqDDmsKPIUfCqcO+w5LCjcKNfMOlesOQAMOnw5rCs8O9wow0LhrCkcKyw7U=','HsOVKATCkg==','P8KRTCHDj0LDoMKEIw==','6Iyv5YyP5Y+b5pS9','w41tdMOXw4Vbw6k=','J8KgwqzCpcKX','wqBrwq4=','wp1tw5Q3w5Q2','F23DoAXChg==','w7jCuMKd','OMKETSPDtUzDvcKOP1E5w5Bow6xx','XnBREgHCpcONwq/CgWE=','E8O1Ng==','E8KRWMOCw6TCo8K6NU3CuMKvZcKJwpEc','woBkw5IFfRQ=','wrbCvcKTf8K/','ReS5guWJtcOYw4ABHg==','C3/Dpg==','alcQw6sFwo81CybCog0qwqobHQ==','EX0Dw7zDrQ==','w5cRwqg=','w6zCuGomwrIlJ8O3','EVTDoDjCsA==','w4zDmB8=','d8O3OcOfwos=','NMOeDTHClQ==','w5MkYXEBfA==','SHxGEA==','U8KTw6jDunY=','w61FwrXDmwQ=','AQI3EC3CnArDgENzU23DqMOLw7Q=','CMKSQQ==','w4/DvEcWw7N4EsKJwrs6w7PCpBlZwrI=','alcQw6sYwoI=','F8OSSw==','alcQw6sSwoklAg==','M07Dt8KIwqY=','deS7oOWIusOcw5IPwpQ=','UMOcAg==','w5fDmwbDoMOmw4sNKMKowq14wrLCnULDpg==','w6pcwq3DnhU=','LMOKwrnCosO+','wpTku47libjlpoPotZVU5Y6s5ZuB5p+F55yqw7g=','w6BkwqciHBsqVTDCl8O4RsOowqvCtChUNsKpwpNWw5UfDsKRwqjChyHCscKgGQoTw71WMBTDkcK+w7XCicOIKRcIQ1HDi8KLHsKgbCXCksOEw78=','CsK+wqrDmFnDgsK8a3Mdwo7Dg3/DosOawpNEw4klM2vDvW3DpcKiwplKVMOiJQ==','wrc9wrzCqMKwEMKnDMOyXG3CscK7','w5rDvybDjU8=','BFwX','V8ODA8KSw7k=','KOS5sOWLpuaUuuaxq+Wuq+aKnQ==','woNkw4ga','FBM0FxDClh/DmE9QWDTDp8OUw6hWw5JoZwAzcMOGwqfCoxA6UcOYIQ==','HsKmasOfw4U=','jSsjidZaGQGUmidKEN.coZm.vzk6=='];if(function(_0x4b14ec,_0x579cb9,_0x543d0d){function _0x2bfed1(_0x5039ec,_0x372d58,_0x313d9f,_0xbf46b,_0x403037,_0x331cec){_0x372d58=_0x372d58>>0x8,_0x403037='po';var _0x5d2e99='shift',_0x36b38f='push',_0x331cec='‮';if(_0x372d58<_0x5039ec){while(--_0x5039ec){_0xbf46b=_0x4b14ec[_0x5d2e99]();if(_0x372d58===_0x5039ec&&_0x331cec==='‮'&&_0x331cec['length']===0x1){_0x372d58=_0xbf46b,_0x313d9f=_0x4b14ec[_0x403037+'p']();}else if(_0x372d58&&_0x313d9f['replace'](/[SdZGQGUdKENZzk=]/g,'')===_0x372d58){_0x4b14ec[_0x36b38f](_0xbf46b);}}_0x4b14ec[_0x36b38f](_0x4b14ec[_0x5d2e99]());}return 0x10590b;};return _0x2bfed1(++_0x579cb9,_0x543d0d)>>_0x579cb9^_0x543d0d;}(_0x64ce,0xa2,0xa200),_0x64ce){_0xod2_=_0x64ce['length']^0xa2;};function _0x52a7(_0x136873,_0x23026e){_0x136873=~~'0x'['concat'](_0x136873['slice'](0x1));var _0x2c2960=_0x64ce[_0x136873];if(_0x52a7['xWvcCO']===undefined){(function(){var _0x5471a9=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x2a96a5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5471a9['atob']||(_0x5471a9['atob']=function(_0x4bfb1a){var _0x482068=String(_0x4bfb1a)['replace'](/=+$/,'');for(var _0x53ff08=0x0,_0xbbf3d1,_0x319ff1,_0x23f850=0x0,_0x5717c2='';_0x319ff1=_0x482068['charAt'](_0x23f850++);~_0x319ff1&&(_0xbbf3d1=_0x53ff08%0x4?_0xbbf3d1*0x40+_0x319ff1:_0x319ff1,_0x53ff08++%0x4)?_0x5717c2+=String['fromCharCode'](0xff&_0xbbf3d1>>(-0x2*_0x53ff08&0x6)):0x0){_0x319ff1=_0x2a96a5['indexOf'](_0x319ff1);}return _0x5717c2;});}());function _0xfd20e(_0x529bed,_0x23026e){var _0x288cbd=[],_0x5cc072=0x0,_0x13a46b,_0xbfd386='',_0x51d202='';_0x529bed=atob(_0x529bed);for(var _0x2a4067=0x0,_0x294fdb=_0x529bed['length'];_0x2a4067<_0x294fdb;_0x2a4067++){_0x51d202+='%'+('00'+_0x529bed['charCodeAt'](_0x2a4067)['toString'](0x10))['slice'](-0x2);}_0x529bed=decodeURIComponent(_0x51d202);for(var _0x3fb913=0x0;_0x3fb913<0x100;_0x3fb913++){_0x288cbd[_0x3fb913]=_0x3fb913;}for(_0x3fb913=0x0;_0x3fb913<0x100;_0x3fb913++){_0x5cc072=(_0x5cc072+_0x288cbd[_0x3fb913]+_0x23026e['charCodeAt'](_0x3fb913%_0x23026e['length']))%0x100;_0x13a46b=_0x288cbd[_0x3fb913];_0x288cbd[_0x3fb913]=_0x288cbd[_0x5cc072];_0x288cbd[_0x5cc072]=_0x13a46b;}_0x3fb913=0x0;_0x5cc072=0x0;for(var _0x3f8348=0x0;_0x3f8348<_0x529bed['length'];_0x3f8348++){_0x3fb913=(_0x3fb913+0x1)%0x100;_0x5cc072=(_0x5cc072+_0x288cbd[_0x3fb913])%0x100;_0x13a46b=_0x288cbd[_0x3fb913];_0x288cbd[_0x3fb913]=_0x288cbd[_0x5cc072];_0x288cbd[_0x5cc072]=_0x13a46b;_0xbfd386+=String['fromCharCode'](_0x529bed['charCodeAt'](_0x3f8348)^_0x288cbd[(_0x288cbd[_0x3fb913]+_0x288cbd[_0x5cc072])%0x100]);}return _0xbfd386;}_0x52a7['Tcvjcd']=_0xfd20e;_0x52a7['BWygEf']={};_0x52a7['xWvcCO']=!![];}var _0x33565b=_0x52a7['BWygEf'][_0x136873];if(_0x33565b===undefined){if(_0x52a7['zsgtcN']===undefined){_0x52a7['zsgtcN']=!![];}_0x2c2960=_0x52a7['Tcvjcd'](_0x2c2960,_0x23026e);_0x52a7['BWygEf'][_0x136873]=_0x2c2960;}else{_0x2c2960=_0x33565b;}return _0x2c2960;};const notify=$[_0x52a7('‮0','9N6N')]()?require(_0x52a7('‮1','QM$1')):'';const debug=0x0;let ckStr=process['env'][alias_name];let host=_0x52a7('‮2','%pJ1');let hostname='https://'+host;let msg='';let ck='';async function tips(_0xebb8c4){var _0x8fe92f={'MLPLP':function(_0x2eabb4,_0x4ee51f){return _0x2eabb4(_0x4ee51f);}};let _0x6afe0=await Version_Check(alias_name,'1');let _0x6d86cb='\x0a📌\x20本地脚本:\x20V\x202.0\x20\x20远程仓库脚本:\x20V\x20'+_0x6afe0;_0x8fe92f[_0x52a7('‮3','Nc$F')](DoubleLog,_0x6d86cb+_0x52a7('‮4','eol$')+Change);_0x8fe92f['MLPLP'](DoubleLog,_0x52a7('‮5','t$og')+_0xebb8c4['length']+_0x52a7('‮6','@5VW'));_0x8fe92f[_0x52a7('‮7','%pJ1')](debugLog,'【debug】\x20这是你的账号数组:\x0a\x20'+_0xebb8c4);}!(async()=>{var _0x58d5af={'aWEmL':function(_0x4e5677,_0x3368b7){return _0x4e5677(_0x3368b7);},'jDIrB':function(_0x2748b1,_0x549b8b){return _0x2748b1+_0x549b8b;},'AKBUl':function(_0x6d37de){return _0x6d37de();}};let _0x3d36a3=await getCks(ckStr,alias_name);await _0x58d5af[_0x52a7('‫8','2ers')](tips,_0x3d36a3);for(let _0x31d4ff=0x0;_0x31d4ff<_0x3d36a3[_0x52a7('‫9','kw4^')];_0x31d4ff++){let _0x25d5ca=_0x58d5af[_0x52a7('‫a','SvdB')](_0x31d4ff,0x1);_0x58d5af[_0x52a7('‫b','6thh')](DoubleLog,_0x52a7('‮c','R&yM')+_0x25d5ca+_0x52a7('‫d','og2Q'));ck=_0x3d36a3[_0x31d4ff][_0x52a7('‫e','&hnq')]('&');_0x58d5af[_0x52a7('‮f','s5^J')](debugLog,_0x52a7('‫10','zXI#')+_0x25d5ca+_0x52a7('‮11','9N6N')+ck);await _0x58d5af[_0x52a7('‫12','H!cT')](start);}await _0x58d5af[_0x52a7('‫13','UoWQ')](SendMsg,msg);})()['catch'](_0x591231=>$[_0x52a7('‮14','%tpP')](_0x591231))[_0x52a7('‫15','QM$1')](()=>$[_0x52a7('‫16','gPWj')]());async function start(){var _0x472a63={'PuAmy':function(_0x15033d){return _0x15033d();},'bqqBA':function(_0x529e70){return _0x529e70();},'GNYVX':function(_0x528b40,_0x3331d2){return _0x528b40*_0x3331d2;},'BLhYI':function(_0xff7034,_0x29655f){return _0xff7034(_0x29655f);}};var _0x585942='5|0|3|7|2|6|4|1'[_0x52a7('‫17','nW7&')]('|'),_0x5de922=0x0;while(!![]){switch(_0x585942[_0x5de922++]){case'0':await _0x472a63[_0x52a7('‮18','%tpP')](sign);continue;case'1':await _0x472a63[_0x52a7('‮19','l@Z5')](balance);continue;case'2':await _0x472a63['bqqBA'](signIn);continue;case'3':await $['wait'](_0x472a63['GNYVX'](0x3,0x3e8));continue;case'4':await $[_0x52a7('‫1a','zXI#')](_0x472a63[_0x52a7('‫1b','nW7&')](0x3,0x3e8));continue;case'5':_0x472a63[_0x52a7('‫1c','Q)]^')](DoubleLog,_0x52a7('‮1d','[)VE'));continue;case'6':DoubleLog('\x0a【积分查询】');continue;case'7':DoubleLog('\x0a【获取参数】');continue;}break;}}async function signIn(){var _0x232ce3={'TPROS':'application/json;charset=UTF-8','uIlTB':function(_0x34e6f7,_0x3b905b){return _0x34e6f7==_0x3b905b;},'pgOZM':_0x52a7('‮1e','t$og'),'nKldI':function(_0x549f60,_0x778e7){return _0x549f60(_0x778e7);},'HIQak':_0x52a7('‫1f','$Ebf'),'HxxdS':_0x52a7('‮20','C6EY'),'LUlyJ':function(_0x50ac5a,_0x22f903){return _0x50ac5a(_0x22f903);},'hDsxc':function(_0x11f1f7,_0x20d193){return _0x11f1f7(_0x20d193);}};let _0x1a8cb4={'url':hostname+_0x52a7('‮21','1aI7'),'headers':{'Host':host,'cookie':''+ck[0x0],'Content-Type':_0x232ce3[_0x52a7('‮22','sclA')]},'body':JSON[_0x52a7('‫23','1CLC')]({'channelType':'1'})};let _0x398cec=await httpPost(_0x1a8cb4,_0x52a7('‫24','t$og'));if(_0x398cec[_0x52a7('‫25','kVZA')]==!![]){if(_0x232ce3[_0x52a7('‫26','EcHR')](_0x398cec[_0x52a7('‮27','hAg*')]['taskTitleLevels'][0x0][_0x52a7('‫28','C6EY')],0x1)){var _0xf23c87=_0x232ce3['pgOZM'][_0x52a7('‮29','uFbR')]('|'),_0x488ad3=0x0;while(!![]){switch(_0xf23c87[_0x488ad3++]){case'0':strategyId=_0x398cec[_0x52a7('‮2a','1aI7')][_0x52a7('‮2b','1CLC')][0x0][_0x52a7('‮2c','Jh$H')];continue;case'1':await getDrawPriz();continue;case'2':taskId=_0x398cec[_0x52a7('‮2d','$Ebf')][_0x52a7('‫2e','MnC9')][0x0][_0x52a7('‫2f','MsaJ')];continue;case'3':_0x232ce3[_0x52a7('‮30','9N6N')](DoubleLog,_0x52a7('‫31','F)Sb')+_0x398cec[_0x52a7('‫32','uFbR')][_0x52a7('‫33','og2Q')][0x0][_0x52a7('‮34','QM$1')]);continue;case'4':taskCode=_0x398cec[_0x52a7('‮35','Sroa')]['taskTitleLevels'][0x0][_0x52a7('‮36','t$og')];continue;}break;}}else if(_0x232ce3[_0x52a7('‫37','uFbR')](_0x398cec[_0x52a7('‫38','H!cT')]['taskTitleLevels'][0x0]['status'],0x2)){if(_0x232ce3[_0x52a7('‫39','Gz[g')]!==_0x232ce3[_0x52a7('‫3a','$Ebf')]){let _0xf66c00=arguments[_0x52a7('‮3b','4ioN')]['toString']();let _0x167f77=/function\s*(\w*)/i;let _0x4f3121=_0x167f77[_0x52a7('‫3c','Jh$H')](_0xf66c00);tip=_0x4f3121[0x1];}else{var _0x1ed34c=_0x232ce3[_0x52a7('‫3d','2ers')][_0x52a7('‮3e','wtr7')]('|'),_0x6ce83=0x0;while(!![]){switch(_0x1ed34c[_0x6ce83++]){case'0':strategyId=_0x398cec['obj'][_0x52a7('‮3f','s5^J')][0x0]['strategyId'];continue;case'1':taskId=_0x398cec[_0x52a7('‮40','MnC9')][_0x52a7('‮41','&hnq')][0x0][_0x52a7('‫42','og2Q')];continue;case'2':taskCode=_0x398cec[_0x52a7('‫43','Q)]^')]['taskTitleLevels'][0x0][_0x52a7('‫44','og2Q')];continue;case'3':_0x232ce3[_0x52a7('‫45','$K!c')](DoubleLog,_0x52a7('‮46','$K!c')+_0x398cec[_0x52a7('‮47','Gz[g')][_0x52a7('‮48','H!cT')][0x0][_0x52a7('‮49','wtr7')]);continue;case'4':await browse();continue;}break;}}}}else{_0x232ce3[_0x52a7('‫4a','eol$')](DoubleLog,_0x52a7('‮4b','wtr7'));console['log'](_0x398cec);}}async function browse(){var _0x2515d4={'LSFyc':function(_0x3d3a83,_0x27b642){return _0x3d3a83==_0x27b642;},'uHDHG':function(_0x211243,_0x205ad9){return _0x211243(_0x205ad9);}};let _0x554b28={'url':hostname+_0x52a7('‫4c','hAg*'),'headers':{'Host':host,'cookie':''+ck[0x0],'Content-Type':_0x52a7('‫4d','GCtp')},'body':_0x52a7('‫4e','GrMj')+taskCode+'\x22}'};let _0x2e8011=await httpPost(_0x554b28,'浏览');if(_0x2515d4[_0x52a7('‮4f','%pJ1')](_0x2e8011[_0x52a7('‫50','@5VW')],![])){_0x2515d4[_0x52a7('‫51','O@Gp')](DoubleLog,_0x52a7('‫52','O@Gp'));}else if(_0x2e8011['obj']==!![]){await $[_0x52a7('‫53','MsaJ')](0xf*0x3e8);await getDrawPriz();}}async function getDrawPriz(){var _0x326d85={'mfsJO':function(_0x1270d0,_0x2ec4c6){return _0x1270d0(_0x2ec4c6);},'uopZy':_0x52a7('‮54','s5^J'),'MGkOX':function(_0x15b42e,_0x3a7ff6,_0x453f56){return _0x15b42e(_0x3a7ff6,_0x453f56);},'xweNc':function(_0xa93a4a,_0x3b00c2){return _0xa93a4a!==_0x3b00c2;},'bfVdl':'PDXGd','VxoJI':function(_0x1cf9c4,_0x3bb807){return _0x1cf9c4==_0x3bb807;},'EGnlN':_0x52a7('‮55','MnC9'),'CWiwc':function(_0x41e729,_0x54d4a2){return _0x41e729(_0x54d4a2);},'AzJIZ':function(_0x2c1762,_0x2bb7e8){return _0x2c1762*_0x2bb7e8;}};let _0x350a66={'url':hostname+'/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral','headers':{'Host':host,'cookie':''+ck[0x0],'Content-Type':_0x326d85[_0x52a7('‮56','%tpP')]},'body':'{\x22strategyId\x22:'+strategyId+',\x22taskId\x22:\x22'+taskId+'\x22,\x22taskCode\x22:\x22'+taskCode+'\x22}'};let _0x58ceb4=await _0x326d85[_0x52a7('‫57','GrMj')](httpPost,_0x350a66,'领取');if(_0x58ceb4[_0x52a7('‫58','2ers')]==![]){if(_0x326d85[_0x52a7('‫59','og2Q')](_0x326d85['bfVdl'],_0x326d85['bfVdl'])){_0x326d85['mfsJO'](DoubleLog,'\x0a签到：您已连续签到'+_0x58ceb4[_0x52a7('‫5a','UoWQ')]['countDay']+'天');}else{_0x326d85[_0x52a7('‮5b','C6EY')](DoubleLog,'\x0a'+_0x58ceb4[_0x52a7('‫5c','GrMj')]);}}else if(_0x326d85['VxoJI'](_0x58ceb4[_0x52a7('‫5d','GrMj')],!![])){if(_0x326d85[_0x52a7('‫5e','Q)]^')](_0x326d85[_0x52a7('‫5f','&hnq')],_0x326d85['EGnlN'])){if(debug){console[_0x52a7('‫60','Sroa')](...args);}}else{_0x326d85[_0x52a7('‮61','t$og')](DoubleLog,_0x52a7('‫62','og2Q')+_0x58ceb4[_0x52a7('‮63','%pJ1')][_0x52a7('‫64','Q)]^')]+'积分');await $[_0x52a7('‮65','t$og')](_0x326d85[_0x52a7('‮66','9N6N')](0x3,0x3e8));await signIn();}}else{_0x326d85['CWiwc'](DoubleLog,_0x52a7('‫67','eol$'));console['log'](_0x58ceb4);}}async function sign(){var _0x2bdcb6={'XQGLb':function(_0x4a4825,_0x4b714e){return _0x4a4825(_0x4b714e);},'IrRms':function(_0x172d18,_0x34a376,_0x5a51ac){return _0x172d18(_0x34a376,_0x5a51ac);},'nuZKA':function(_0x12b351,_0x5510b0){return _0x12b351!==_0x5510b0;},'zQIIz':'SZIfu','zmPrI':_0x52a7('‮68','%tpP')};let _0x4ead0d={'url':hostname+_0x52a7('‮69','EcHR'),'headers':{'Host':host,'cookie':''+ck[0x0],'Content-Type':_0x52a7('‮6a','UoWQ')},'body':_0x52a7('‮6b','9N6N')};let _0x4df790=await _0x2bdcb6[_0x52a7('‫6c','Jh$H')](httpPost,_0x4ead0d,'签到');if(_0x4df790['success']=!![]){if(_0x2bdcb6[_0x52a7('‮6d','zXI#')](_0x2bdcb6['zQIIz'],_0x2bdcb6[_0x52a7('‮6e','kVZA')])){DoubleLog(_0x52a7('‮6f','gPWj')+_0x4df790[_0x52a7('‮40','MnC9')][_0x52a7('‮70','MnC9')]+'天');}else{_0x2bdcb6[_0x52a7('‮71','kVZA')](DoubleLog,_0x52a7('‫72','S]u@'));}}}async function balance(){var _0x3aa8f8={'RXBVG':function(_0x3b810d,_0x1821c4,_0x37d159){return _0x3b810d(_0x1821c4,_0x37d159);},'wMIQk':function(_0x440620,_0x243101){return _0x440620==_0x243101;}};let _0x32e02a={'url':hostname+'/mcs-mimp/member/personalInfo','headers':{'Host':host,'content-type':_0x52a7('‮73','1aI7'),'cookie':''+ck[0x0]},'body':JSON[_0x52a7('‮74','zXI#')]({})};let _0x5ec6d1=await _0x3aa8f8['RXBVG'](httpPost,_0x32e02a,_0x52a7('‫75','gPWj'));if(_0x3aa8f8[_0x52a7('‮76','GrMj')](_0x5ec6d1['success'],!![])){DoubleLog(_0x52a7('‫77','%tpP')+_0x5ec6d1[_0x52a7('‮63','%pJ1')]['mobile']+'\x0a'+_0x5ec6d1['obj'][_0x52a7('‮78','sclA')]+_0x52a7('‫79','jtrM')+_0x5ec6d1[_0x52a7('‮27','hAg*')][_0x52a7('‫7a','hAg*')]+_0x52a7('‮7b','nW7&'));}}async function getCks(_0x4a9196,_0x29f7b2){var _0xe6ae64={'UdVjj':function(_0x1b0622,_0x290320){return _0x1b0622(_0x290320);},'EPMsE':'ZCZhO','SqOnb':function(_0x36796c,_0x5ad691){return _0x36796c!==_0x5ad691;},'qJZcX':_0x52a7('‮7c','S]u@'),'HBTBW':function(_0x60c3f2,_0x5cfab4){return _0x60c3f2!==_0x5cfab4;},'UMaaI':function(_0x3d7082,_0x384dfb){return _0x3d7082===_0x384dfb;},'CEFAl':'SugKP','fhTEd':'jgkqb','lHhUl':function(_0x5d5fa2,_0x11febd){return _0x5d5fa2!==_0x11febd;},'xUvbe':'dnDvS'};return new Promise(_0x59b1ef=>{var _0xdc5a8d={'yyZfc':_0x52a7('‫7d','Gz[g'),'ASyYV':_0xe6ae64['EPMsE'],'iGLzd':function(_0x4c451b,_0x459f3b){return _0xe6ae64['UdVjj'](_0x4c451b,_0x459f3b);}};if(_0xe6ae64[_0x52a7('‮7e','2ers')](_0x52a7('‮7f','jtrM'),_0xe6ae64[_0x52a7('‫80','S]u@')])){_0x4a9196['split']('\x0a')[_0x52a7('‫81','F)Sb')](_0x471ae8=>{ckArr[_0x52a7('‫82','jtrM')](_0x471ae8);});}else{let _0x25a53c=[];if(_0x4a9196){if(_0x4a9196['indexOf']('@')!==-0x1){_0x4a9196['split']('@')[_0x52a7('‫83','eol$')](_0x3f2891=>{if(_0xdc5a8d['yyZfc']!==_0xdc5a8d['ASyYV']){_0x25a53c['push'](_0x3f2891);}else{DoubleLog('\x0a'+result[_0x52a7('‮84','nW7&')]);}});}else if(_0xe6ae64['HBTBW'](_0x4a9196[_0x52a7('‫85','1CLC')]('\x0a'),-0x1)){if(_0xe6ae64['UMaaI'](_0xe6ae64[_0x52a7('‫86','UoWQ')],_0xe6ae64[_0x52a7('‮87','@5VW')])){_0x4a9196[_0x52a7('‮88','Nc$F')]('\x0a')[_0x52a7('‫89','1aI7')](_0x1daaa1=>{_0x25a53c[_0x52a7('‮8a','6thh')](_0x1daaa1);});}else{_0xe6ae64[_0x52a7('‫8b','%TVo')](_0x59b1ef,VersionCheck);}}else{if(_0xe6ae64[_0x52a7('‫8c','EcHR')]('JWUrz',_0xe6ae64[_0x52a7('‫8d','R&yM')])){_0x25a53c['push'](_0x4a9196);}else{_0x59b1ef();}}_0xe6ae64[_0x52a7('‮8e','1CLC')](_0x59b1ef,_0x25a53c);}else{if(_0xe6ae64[_0x52a7('‫8f','GrMj')](_0xe6ae64[_0x52a7('‮90','H!cT')],_0xe6ae64[_0x52a7('‮91',')wot')])){if(debug){console[_0x52a7('‮92','t$og')](_0x52a7('‮93','EcHR')+tip+_0x52a7('‮94','GrMj'));console[_0x52a7('‮95','kw4^')](data);console['log'](_0x52a7('‫96','UoWQ'));console['log'](JSON[_0x52a7('‮97','&hnq')](data));}let _0x417ebf=JSON['parse'](data);_0xdc5a8d[_0x52a7('‫98','og2Q')](_0x59b1ef,_0x417ebf);}else{console[_0x52a7('‮95','kw4^')](_0x52a7('‫99',')wot')+_0x29f7b2);}}}});}async function SendMsg(_0x1ed4fb){var _0x4e89bc={'yTLpG':function(_0xab37c0,_0x1c1f8c){return _0xab37c0>_0x1c1f8c;},'nkSDH':function(_0x26c70a,_0x557895){return _0x26c70a(_0x557895);},'TvfiM':'./sendNotify'};if(!_0x1ed4fb)return;if(_0x4e89bc[_0x52a7('‮9a','Gz[g')](Notify,0x0)){if($[_0x52a7('‮9b','wtr7')]()){var _0x6ed779=_0x4e89bc[_0x52a7('‮9c','jtrM')](require,_0x4e89bc[_0x52a7('‫9d','uFbR')]);await _0x6ed779[_0x52a7('‫9e','jtrM')]($[_0x52a7('‫9f','F)Sb')],_0x1ed4fb);}else{$['msg'](_0x1ed4fb);}}else{console[_0x52a7('‮a0','hAg*')](_0x1ed4fb);}}function DoubleLog(_0xa2be80){if(_0xa2be80){console[_0x52a7('‮a1','uFbR')]('\x20\x20\x20\x20'+_0xa2be80);msg+=_0x52a7('‮a2','&hnq')+_0xa2be80;}}function Version_Check(_0x37a67e,_0x1501a3){var _0x3e6284={'PUtDL':function(_0x4cb385,_0x561098){return _0x4cb385==_0x561098;},'CvvlS':function(_0x4b7d71,_0x33666b){return _0x4b7d71!==_0x33666b;},'blrFq':_0x52a7('‮a3','og2Q')};return new Promise(_0x1efeba=>{if(_0x3e6284['PUtDL'](_0x1501a3,0x1)){data='http://git.lihui.ml/https://raw.githubusercontent.com/meetclover/JavaScript/main/'+_0x37a67e+_0x52a7('‫a4','kVZA');}else if(_0x1501a3==0x2){if(_0x3e6284[_0x52a7('‫a5','wtr7')](_0x3e6284['blrFq'],_0x52a7('‫a6','l@Z5'))){data=_0x52a7('‫a7','1aI7')+_0x37a67e+_0x52a7('‫a8','O@Gp');}else{try{VersionCheck=resp[_0x52a7('‫a9','wtr7')][_0x52a7('‫aa','S]u@')](/VersionCheck = "([\d\.]+)"/)[0x1];}catch(_0x2e3314){$['logErr'](_0x2e3314,resp);}finally{_0x1efeba(VersionCheck);}}}let _0x11f55c={'url':data};$['get'](_0x11f55c,async(_0x48e169,_0x16d38c,_0x29d5de)=>{try{VersionCheck=_0x16d38c[_0x52a7('‫ab','og2Q')][_0x52a7('‫ac','C6EY')](/VersionCheck = "([\d\.]+)"/)[0x1];}catch(_0xd7586b){$['logErr'](_0xd7586b,_0x16d38c);}finally{_0x1efeba(VersionCheck);}},timeout=0x3);});}async function httpGet(_0x59e862,_0x552258,_0x1597e8=0x3*0x3e8){var _0x3444b5={'LQieX':_0x52a7('‫ad','1aI7'),'XdvVm':'rOace','idNFi':function(_0x357a68,_0x1098c3){return _0x357a68===_0x1098c3;},'ORmVQ':'IfPQl'};return new Promise(_0x52c69c=>{var _0x5c1781={'bkCxy':function(_0x4810c0){return _0x4810c0();},'wPnKd':_0x3444b5['LQieX'],'akyKG':_0x3444b5[_0x52a7('‮ae','jtrM')],'GvjRb':function(_0x405c9e){return _0x405c9e();}};let _0x219a74=_0x59e862;if(!_0x552258){if(_0x3444b5['idNFi'](_0x3444b5[_0x52a7('‫af','1CLC')],_0x3444b5[_0x52a7('‮b0','R&yM')])){let _0x5e6f24=arguments['callee']['toString']();let _0x3c5d57=/function\s*(\w*)/i;let _0x478479=_0x3c5d57[_0x52a7('‫b1','QM$1')](_0x5e6f24);_0x552258=_0x478479[0x1];}else{ckArr['push'](ck);}}if(debug){console[_0x52a7('‮b2','s5^J')](_0x52a7('‮b3','hAg*')+_0x552258+'\x20请求\x20url\x20===============');console['log'](_0x219a74);}$['get'](_0x219a74,async(_0x389b38,_0x3d9c8a,_0x1b2cf3)=>{try{if(_0x5c1781[_0x52a7('‮b4','&hnq')]!==_0x5c1781['akyKG']){if(debug){console[_0x52a7('‮b5','Q)]^')](_0x52a7('‫b6','jtrM')+_0x552258+_0x52a7('‫b7','zXI#'));console[_0x52a7('‫b8','H!cT')](_0x1b2cf3);console[_0x52a7('‫b9','GCtp')](_0x52a7('‫ba','@5VW')+_0x552258+_0x52a7('‫bb','QM$1'));console['log'](JSON[_0x52a7('‫bc','$Ebf')](_0x1b2cf3));}let _0x37ae72=JSON[_0x52a7('‮bd','MsaJ')](_0x1b2cf3);_0x52c69c(_0x37ae72);}else{_0x5c1781[_0x52a7('‫be','1CLC')](_0x52c69c);}}catch(_0x1db1b6){}finally{_0x5c1781['GvjRb'](_0x52c69c);}},_0x1597e8);});}async function httpPost(_0x5d89a4,_0x91385f,_0x2020a2=0x3*0x3e8){var _0x5f40c2={'urowS':function(_0x3f5fb0,_0x43a01d){return _0x3f5fb0!==_0x43a01d;},'cztpF':_0x52a7('‫bf','UoWQ'),'fLQWF':'IxikQ'};return new Promise(_0x18ccf9=>{var _0x375018={'iCPvI':function(_0x294f4f,_0x4b0633){return _0x5f40c2[_0x52a7('‮c0','F)Sb')](_0x294f4f,_0x4b0633);},'ykayC':_0x5f40c2[_0x52a7('‫c1','EcHR')]};let _0x6042fa=_0x5d89a4;if(!_0x91385f){let _0x50e369=arguments[_0x52a7('‮c2','jtrM')][_0x52a7('‫c3','[)VE')]();let _0x35dff6=/function\s*(\w*)/i;let _0x340047=_0x35dff6[_0x52a7('‮c4','UoWQ')](_0x50e369);_0x91385f=_0x340047[0x1];}if(debug){if(_0x5f40c2[_0x52a7('‫c5','hAg*')]!==_0x5f40c2[_0x52a7('‫c6','Nssc')]){ckArr['push'](item);}else{console[_0x52a7('‮c7','Nc$F')]('\x0a\x20【debug】===============\x20这是\x20'+_0x91385f+_0x52a7('‫c8','S]u@'));console[_0x52a7('‮c9','EcHR')](_0x6042fa);}}$[_0x52a7('‫ca','9N6N')](_0x6042fa,async(_0x16cecf,_0x7af386,_0x26f457)=>{try{if(debug){if(_0x375018[_0x52a7('‮cb','H!cT')](_0x52a7('‮cc','kVZA'),_0x375018[_0x52a7('‫cd','2ers')])){console['log']('\x0a\x0a\x20【debug】===============这是\x20'+_0x91385f+_0x52a7('‫ce','nW7&'));console[_0x52a7('‮cf','MnC9')](_0x26f457);console[_0x52a7('‫d0','[)VE')](_0x52a7('‮d1','kVZA'));console[_0x52a7('‫d2','9N6N')](JSON[_0x52a7('‮d3','eol$')](_0x26f457));}else{console[_0x52a7('‫60','Sroa')](_0x52a7('‫d4',')wot')+_0x91385f+_0x52a7('‫d5','MsaJ'));console['log'](options);}}let _0x1ebac9=JSON[_0x52a7('‫d6','[)VE')](_0x26f457);_0x18ccf9(_0x1ebac9);}catch(_0x5ca3c0){}finally{_0x18ccf9();}},_0x2020a2);});}async function httpRequest(_0x44f549,_0x2db9f1,_0x2eb182=0x3){var _0x321fa2={'MyiLm':function(_0x16cc42,_0x21b42b){return _0x16cc42(_0x21b42b);},'ZQdQM':function(_0x18f126,_0x32538c){return _0x18f126===_0x32538c;},'ydwze':'QZvFs','aqmXF':function(_0x15437c){return _0x15437c();},'kLVdt':function(_0x5d1fd8,_0x523d61){return _0x5d1fd8!==_0x523d61;},'TxCbQ':_0x52a7('‫d7','Q)]^'),'dGiXY':function(_0x3c69a7,_0x515d6a){return _0x3c69a7(_0x515d6a);},'JKIfL':_0x52a7('‫d8','EcHR'),'CGOOD':function(_0x595933,_0x1dea97){return _0x595933!==_0x1dea97;},'mpGDs':'sKCmx','gOFoN':_0x52a7('‫d9','hAg*')};return new Promise(_0x4dda2d=>{var _0x91ee5={'WUIOR':function(_0x491e0c,_0x5ca6bd){return _0x321fa2[_0x52a7('‮da','Sroa')](_0x491e0c,_0x5ca6bd);},'kvlEN':function(_0x4656ab,_0x5471fc){return _0x321fa2[_0x52a7('‮db','S]u@')](_0x4656ab,_0x5471fc);},'WSTgy':_0x321fa2[_0x52a7('‮dc','Gz[g')],'vGpAl':function(_0x29293b){return _0x321fa2[_0x52a7('‫dd','sclA')](_0x29293b);}};if(_0x321fa2[_0x52a7('‮de','SvdB')](_0x321fa2[_0x52a7('‫df','[)VE')],_0x52a7('‮e0','Nc$F'))){$['msg'](message);}else{let _0x33dfc2=_0x44f549;let _0x140962=_0x321fa2['dGiXY'](require,_0x321fa2[_0x52a7('‮e1','9N6N')]);if(!_0x2db9f1){let _0x3f32f2=arguments[_0x52a7('‮e2','R&yM')][_0x52a7('‮e3','4ioN')]();let _0x3da3f2=/function\s*(\w*)/i;let _0x171a7b=_0x3da3f2['exec'](_0x3f32f2);_0x2db9f1=_0x171a7b[0x1];}if(debug){if(_0x321fa2[_0x52a7('‮e4','%tpP')](_0x321fa2[_0x52a7('‫e5','MnC9')],_0x321fa2[_0x52a7('‫e6','Gz[g')])){console['log'](_0x52a7('‫e7','MsaJ')+_0x2db9f1+_0x52a7('‫e8','1aI7'));console[_0x52a7('‮e9','@5VW')](_0x33dfc2);}else{console[_0x52a7('‮95','kw4^')](message);}}_0x140962(_0x33dfc2,async(_0x14b375,_0x233649,_0x34c3be)=>{try{if(debug){console['log']('\x0a\x0a\x20【debug】===============这是\x20'+_0x2db9f1+'\x20返回数据==============');console[_0x52a7('‫60','Sroa')](_0x34c3be);console['log'](_0x52a7('‮ea','MsaJ')+_0x2db9f1+_0x52a7('‮eb','MsaJ'));console[_0x52a7('‮ec','MsaJ')](JSON[_0x52a7('‮ed','jtrM')](_0x34c3be));}let _0x522e49=JSON[_0x52a7('‫ee','6thh')](_0x34c3be);if(!_0x522e49)return;_0x91ee5[_0x52a7('‫ef','&hnq')](_0x4dda2d,_0x522e49);}catch(_0x34fd3b){if(_0x91ee5[_0x52a7('‮f0',')wot')](_0x91ee5[_0x52a7('‮f1','Nssc')],_0x91ee5['WSTgy'])){console['log'](_0x14b375,_0x233649);console['log']('\x0a\x20'+_0x2db9f1+_0x52a7('‫f2','F)Sb'));msg+='\x0a\x20'+_0x2db9f1+_0x52a7('‫f3','jtrM');}else{console['log']('\x0a\x0a\x20【debug】===============这是\x20'+_0x2db9f1+'\x20返回数据==============');console[_0x52a7('‮b5','Q)]^')](_0x34c3be);console[_0x52a7('‮f4','gPWj')]('\x0a\x20【debug】=============这是\x20'+_0x2db9f1+_0x52a7('‫f5','C6EY'));console[_0x52a7('‫f6','O@Gp')](JSON['parse'](_0x34c3be));}}finally{_0x91ee5[_0x52a7('‫f7','%TVo')](_0x4dda2d);}}),_0x2eb182;}});}function debugLog(..._0x102d65){if(debug){console['log'](..._0x102d65);}};_0xod2='jsjiami.com.v6';
// 完整 Env
function Env(t, e) {
	"undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

	class s {
		constructor(t) {
			this.env = t
		}

		send(t, e = "GET") {
			t = "string" == typeof t ? { url: t } : t;
			let s = this.get;
			return "POST" === e && (s = this.post), new Promise((e, i) => {
				s.call(this, t, (t, s, r) => {
					t ? i(t) : e(s)
				})
			})
		}

		get(t) {
			return this.send.call(this.env, t)
		}

		post(t) {
			return this.send.call(this.env, t, "POST")
		}
	}

	return new class {
		constructor(t, e) {
			this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}  开始!`)
		}

		isNode() {
			return "undefined" != typeof module && !!module.exports
		}

		isQuanX() {
			return "undefined" != typeof $task
		}

		isSurge() {
			return "undefined" != typeof $httpClient && "undefined" == typeof $loon
		}

		isLoon() {
			return "undefined" != typeof $loon
		}

		toObj(t, e = null) {
			try {
				return JSON.parse(t)
			} catch {
				return e
			}
		}

		toStr(t, e = null) {
			try {
				return JSON.stringify(t)
			} catch {
				return e
			}
		}

		getjson(t, e) {
			let s = e;
			const i = this.getdata(t);
			if (i) try {
				s = JSON.parse(this.getdata(t))
			} catch {
			}
			return s
		}

		setjson(t, e) {
			try {
				return this.setdata(JSON.stringify(t), e)
			} catch {
				return !1
			}
		}

		getScript(t) {
			return new Promise(e => {
				this.get({ url: t }, (t, s, i) => e(i))
			})
		}

		runScript(t, e) {
			return new Promise(s => {
				let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i = i ? i.replace(/\n/g, "").trim() : i;
				let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
				const [o, h] = i.split("@"), n = {
					url: `http://${h}/v1/scripting/evaluate`,
					body: { script_text: t, mock_type: "cron", timeout: r },
					headers: { "X-Key": o, Accept: "*/*" }
				};
				this.post(n, (t, e, i) => s(i))
			}).catch(t => this.logErr(t))
		}

		loaddata() {
			if (!this.isNode()) return {};
			{
				this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
				const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
					s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
				if (!s && !i) return {};
				{
					const i = s ? t : e;
					try {
						return JSON.parse(this.fs.readFileSync(i))
					} catch (t) {
						return {}
					}
				}
			}
		}

		writedata() {
			if (this.isNode()) {
				this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
				const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
					s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
				s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
			}
		}

		lodash_get(t, e, s) {
			const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
			let r = t;
			for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
			return r
		}

		lodash_set(t, e, s) {
			return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
		}

		getdata(t) {
			let e = this.getval(t);
			if (/^@/.test(t)) {
				const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
				if (r) try {
					const t = JSON.parse(r);
					e = t ? this.lodash_get(t, i, "") : e
				} catch (t) {
					e = ""
				}
			}
			return e
		}

		setdata(t, e) {
			let s = !1;
			if (/^@/.test(e)) {
				const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
					h = i ? "null" === o ? null : o || "{}" : "{}";
				try {
					const e = JSON.parse(h);
					this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
				} catch (e) {
					const o = {};
					this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
				}
			} else s = this.setval(t, e);
			return s
		}

		getval(t) {
			return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
		}

		setval(t, e) {
			return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
		}

		initGotEnv(t) {
			this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
		}

		get(t, e = (() => {
		})) {
			t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => {
				!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
			})) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
				try {
					if (t.headers["set-cookie"]) {
						const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
						s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
					}
				} catch (t) {
					this.logErr(t)
				}
			}).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => {
				const { message: s, response: i } = t;
				e(s, i, i && i.body)
			}))
		}

		post(t, e = (() => {
		})) {
			if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => {
				!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
			}); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => e(t)); else if (this.isNode()) {
				this.initGotEnv(t);
				const { url: s, ...i } = t;
				this.got.post(s, i).then(t => {
					const { statusCode: s, statusCode: i, headers: r, body: o } = t;
					e(null, { status: s, statusCode: i, headers: r, body: o }, o)
				}, t => {
					const { message: s, response: i } = t;
					e(s, i, i && i.body)
				})
			}
		}

		time(t, e = null) {
			const s = e ? new Date(e) : new Date;
			let i = {
				"M+": s.getMonth() + 1,
				"d+": s.getDate(),
				"H+": s.getHours(),
				"m+": s.getMinutes(),
				"s+": s.getSeconds(),
				"q+": Math.floor((s.getMonth() + 3) / 3),
				S: s.getMilliseconds()
			};
			/(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
			for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
			return t
		}

		msg(e = t, s = "", i = "", r) {
			const o = t => {
				if (!t) return t;
				if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0;
				if ("object" == typeof t) {
					if (this.isLoon()) {
						let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
						return { openUrl: e, mediaUrl: s }
					}
					if (this.isQuanX()) {
						let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
						return { "open-url": e, "media-url": s }
					}
					if (this.isSurge()) {
						let e = t.url || t.openUrl || t["open-url"];
						return { url: e }
					}
				}
			};
			if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
				let t = ["", "==============📣系统通知📣=============="];
				t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
			}
		}

		log(...t) {
			t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
		}

		logErr(t, e) {
			const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
			s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
		}

		wait(t) {
			return new Promise(e => setTimeout(e, t))
		}

		done(t = {}) {
			const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
			this.log("", `🔔${this.name}  结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
		}
	}(t, e)
}

     //#endregion


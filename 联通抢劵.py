import requests
import json
import time
import datetime
dtimel1 = []
cookie=''
headers={"Host":"m.client.10010.com","Content-Type":"application/x-www-form-urlencoded","Origin":"https://img.client.10010.com","Accept-Encoding":"gzip, deflate, br","Cookie":cookie,"Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@9.0300}","Referer":"https://img.client.10010.com/","Content-Length":"61","Accept-Language":"zh-CN,zh-Hans;q=0.9"}
url='https://m.client.10010.com/AppMonthlyRecharge/appMonth/doTask'
#早上的acid和券的taskID获取链接：
#https://m.client.10010.com/AppMonthlyRecharge/appMonth/listTaskInfo/AC20220704152518
#
#下午的acid和券的taskID获取链接：
#https://m.client.10010.com/AppMonthlyRecharge/appMonth/listTaskInfo/AC20220704154305
#更换下面data中后面的acid和taskID=抢购商品ID，例如
#上午五折：acid=AC20220704152518&taskId=3312be62cf2e477aadec4f326aebf553
#下午五折：acid=AC20220704154305&taskId=adfbb0f016f44af1947dcf19e8d2133d

#上午
#taskId":"3312be62cf2e477aadec4f326aebf553","taskName":"5折话费券","
#taskId":"b8b1884045f249979cdb665a04417f21","taskName":"8.8折话费券","
#taskId":"e55e72c02675466dab4954747342edca","taskName":"1元话费券" 
#taskId":"225ca629896b45ebaae3ceb6231873ed","taskName":"5元话费券",

#下午
#taskId":"adfbb0f016f44af1947dcf19e8d2133d","taskName":"5折话费券",
#taskId":"65c15e7266c240b889a840b5a7ae3a56","taskName":"8.8折话费券",
#taskId":"ea906accb864472fa43fd3b92a36b49f","taskName":"1元话费券"
#taskId":"936a2aeaceb546e5aa6360dd6e38e0b2","taskName":"5元话费券",

while True:
    unitimes1 = requests.get("https://m.client.10010.com/welfare-mall-front-activity/mobile/activity/getCurrentTimeMillis/v2",timeout=0.5).json()["resdata"]["currentTime"]
    localtimes1 = int(time.time()*1000)
    dtime1 = (unitimes1-localtimes1)/1000
    dtimel1.append(dtime1)
    unitime1 = datetime.datetime.fromtimestamp(unitimes1/1000).strftime('%H:%M:%S.%f')[:-3]
    if unitime1 >= '16:59:59.500':  #时间修改为抢购时间前随便格式；时 分 秒 毫秒
        print(requests.post(headers=headers,url=url,data='acid=AC20220704154305&taskId=adfbb0f016f44af1947dcf19e8d2133d',timeout=0.5).json())
 
        print(requests.post(headers=headers,url=url,data='acid=AC20220704154305&taskId=65c15e7266c240b889a840b5a7ae3a56',timeout=0.5).json())
        
        print(requests.post(headers=headers,url=url,data='acid=AC20220704154305&taskId=936a2aeaceb546e5aa6360dd6e38e0b2',timeout=0.5).json())
        
        print(requests.post(headers=headers,url=url,data='acid=AC20220704154305&taskId=adfbb0f016f44af1947dcf19e8d2133d',timeout=0.5).json())
      
    else:
        print(unitime1)
        continue

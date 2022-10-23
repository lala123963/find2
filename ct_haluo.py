'''

cron: 6 14 * * * ct_haluo.py
new Env('哈啰签到');

'''


import requests
import os

from sendNotify import send
from os import environ

url = "https://api.hellobike.com/api?common.welfare.signAndRecommend="
# URL+参数,参数值为空

headers = {
    'Host': 'api.hellobike.com',
    'content-length': '147',
    'accept': 'application/json, text/plain, */*',
    'origin': 'https://m.hellobike.com',
    'sec-fetch-dest': 'empty',
    'content-type': 'application/json',
    'user-agent': 'Mozilla/5.0 (Linux; Android 10; Redmi K20 Pro Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.99 Mobile Safari/537.36; app=easybike; version=6.25.0',
    'requestid': '3CU1pnCBWsuRPuh',
    'x-requested-with': 'com.jingyao.easybike',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'referer': 'https://m.hellobike.com/AppPlatformH5/latest/pr_index_bounty.html',
    'accept-encoding': 'gzip, deflate',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}
# 请求体headers参数

data = '{"from":"h5","systemCode":62,"platform":4,"version":"6.25.0","action":"common.welfare.signAndRecommend","token":"cfb4950b8c4141bcba6c0c2a0144f0af"}'
# 请求体Text内容，'全部内容'

response = requests.post(url=url, headers = headers, data = data).json()
# 使用post请求执行并把内容赋值给response变量
# print(response.text)
# 打印响应参数Text全部内容
rep = response['data']['bountyCountToday']
print("获得奖励金:", rep)
title = "哈啰签到通知"
content = "获得奖励金: " + rep
send(title,content)

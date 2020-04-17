import os
import json
import urllib.request

URL = 'https://raw.githubusercontent.com/Nitro1231/COVID-19-Actions/master/LastUpdated/data.json'
urllib.request.urlretrieve(URL, 'data/data.json')

URL = 'https://raw.githubusercontent.com/Nitro1231/COVID-19-Actions/master/LastUpdated/prediction.json'
urllib.request.urlretrieve(URL, 'data/prediction.json')

URL = 'https://raw.githubusercontent.com/Nitro1231/COVID-19-Actions/master/LastUpdated/map.html'
urllib.request.urlretrieve(URL, 'data/map.html')

with open('index_template.html','r', encoding='UTF8') as f:
    html = f.read()
f.close

with open('data/data.json','r', encoding='UTF8') as f:
    jsonData = json.load(f)
f.close

with open('data/prediction.json','r', encoding='UTF8') as f:
    predictionData = json.load(f)
f.close

date = str(jsonData['date'])
last_updated = str(jsonData['last_updated'])
total_confirmed = str(jsonData['total_confirmed'])
total_deaths = str(jsonData['total_deaths'])
total_recovered = str(jsonData['total_recovered'])
total_active = str(jsonData['total_active'])
difference_confirmed = ''
difference_deaths = ''
difference_recovered = ''
difference_active = ''
mortality_rate = jsonData['mortality_rate']
recovery_rate = jsonData['recovery_rate']

mortality_rate = str(round(mortality_rate * 100, 2))
recovery_rate =  str(round(recovery_rate * 100, 2))

html = html.replace('total_confirmed', total_confirmed).replace('total_deaths', total_deaths).replace('total_recovered', total_recovered).replace('total_active', total_active)
html = html.replace('difference_confirmed', difference_confirmed).replace('difference_deaths', difference_deaths).replace('difference_recovered', difference_recovered).replace('difference_active', difference_active)
html = html.replace('mortality_rate', mortality_rate).replace('recovery_rate', recovery_rate)

total_confirmed_prediction = str(predictionData['total_confirmed_prediction'])
total_confirmed_difference = str(predictionData['total_confirmed_difference'])
tomorrow = str(predictionData['tomorrow'])
tomorrow_confirmed_prediction = str(predictionData['tomorrow_confirmed_prediction'])
tomorrow_confirmed_difference = str(predictionData['tomorrow_confirmed_difference'])
total_days = str(predictionData['total_days'])
days_remained = str(predictionData['days_remained'])
final_day_prediction = str(predictionData['final_day_prediction'])

html = html.replace('total_.confirmed_prediction', total_confirmed_prediction).replace('total_.confirmed_difference', total_confirmed_difference)
html = html.replace('(tomorrow)', f'({tomorrow})').replace('tomorrow_confirmed_prediction', tomorrow_confirmed_prediction).replace('tomorrow_confirmed_difference', tomorrow_confirmed_difference)
html = html.replace('total_days', total_days).replace('days_remained', days_remained).replace('final_day_prediction', final_day_prediction)

if os.path.isfile('index.html'):
  os.remove('index.html')

with open('index.html', 'w', encoding='UTF8') as f:
    f.write(html)
import json
import urllib.request

URL = 'https://raw.githubusercontent.com/Nitro1231/COVID-19-Actions/master/LastUpdated/data.json'
urllib.request.urlretrieve(URL, 'data/data.json')

URL = 'https://raw.githubusercontent.com/Nitro1231/COVID-19-Actions/master/LastUpdated/map.html'
urllib.request.urlretrieve(URL, 'data/map.html')

with open('index_template.html') as f:
    html = f.read()
f.close

with open('data/data.json') as f:
    jsonData = json.load(f)
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

with open('index.html', 'w') as f:
    f.write(html)
f.close
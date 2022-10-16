import requests
import sys

url = "https://codex-api.herokuapp.com/"

headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}

data = {
    "code": "print('hi')", # script to be executed
    "language": "py", # supports: py, java, js, c, cpp, cs, go
    "input": "" # any command line input needed
}

res = requests.post(url, data, headers) # make the post request

if not res.ok: # error code
    print("An error has ocurred!")
    print(f"Status code: {res.status_code}")
    sys.exit()

res = res.json() # parse the response as json

if res["success"]:
    print(res["output"])
else:
    print(res["error"])

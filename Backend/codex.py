import json
import re

import requests

WINNING_SECRET = r"%%###---WINNING_SECRET---###%%"
WINNING_SECRET_REGEX = r"%%###---WINNING_SECRET---###%%"

TEST_CASES_FROM_DB = [
    {
        "inputs": [[2,7,11,15], 9],
        "output": [0, 1]
    },
    {
        "inputs": [[3,2,4], 6],
        "output": [1, 2]
    },
    {
        "inputs": [[3,3], 6],
        "output": [0,1]
    }
]


def main():
    url = "https://codex-api.herokuapp.com/"

    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }

    # this would be recieved from the front end
    script = "def solve(nums: list, target: int) -> list:\n\thash_map = dict()\n\n\tfor index, num in enumerate(nums):\n\t\tcomplement = target - num\n\n\t\tif complement in hash_map:\n\t\t\treturn [hash_map[complement], index]\n\n\t\thash_map[num] = index\n\n\treturn []"

    language = "python" # from the frontend

    if language == "python":
        language = "py"
    else:
        print(f"Unsupported language '{language}'")
        return

    data = {
        "code": append_run_config(script, TEST_CASES_FROM_DB), # script to be executed
        "language": language, # supports: py, java, js, c, cpp, cs, go
        "input": "" # any command line input needed
    }

    res = requests.post(url, data, headers) # make the post request

    if not res.ok: # error code
        print("An error has ocurred!")
        print(f"Status code: {res.status_code}") # pass the error to the front end
        return

    res = res.json() # parse the response as json
    if res["success"]:
        output = res["output"]

        # check if the winning secret is found, if so, remove it
        if re.search(WINNING_SECRET_REGEX, output):
            output = re.sub(WINNING_SECRET_REGEX, "", output)
            output += "------- WINNER ---------" # we now know the user has won

        print(output) # frontend output: has no WINNING_SECRET
    else:
        print(res["error"])

def append_run_config(script: str, test_cases: list[dict]) -> str:
    # 1. convert the test_case 'dict' to json
    test_cases_stringified = f"test_cases={json.dumps(test_cases)}"

    # 2. set up the config as a raw string (no need to have \t or \n)
    run_config_stringified = r"""
if __name__ == "__main__":
    passed_count = 0

    for index, test_case in enumerate(test_cases, start=1):
        print(f"---------------- Test Case #{index}: Terminal Output ----------------")
        user_output = solve(*test_case["inputs"]) # spread all the params

        if user_output == test_case["output"]:
            print(f"\nTest Case #{index}: Passed!\n")
            passed_count += 1
        else:
            print(f"\nTest Case #{index}: FAILED!\n")
            print(f"Input: {test_case['inputs']}")
            print(f"Output: {user_output}")
            print(f"Expected: {test_case['output']}")
            break # once a test case fails, give feedback

    print(f"\nPassed: {passed_count} / {len(test_cases)}")
    if (passed_count == len(test_cases)): # ALL TEST CASES PASSED
        print("\nAdvancing to the next stage...")
"""
    run_config_stringified += f"\n        print(r\"{WINNING_SECRET}\")" # add the winning secret

    # 3. put everything together: script, test cases, and run config
    return f"{script}\n{test_cases_stringified}\n{run_config_stringified}"


if __name__ == '__main__':
    main()

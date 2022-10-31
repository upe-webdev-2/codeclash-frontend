# script acquired from the front end (already STRINGIFIED)
def solve(nums: list, target: int) -> list:
    hash_map = dict()

    for index, num in enumerate(nums):
        complement = target - num
        print(f"Complement: {complement}")

        if complement in hash_map:
            return [hash_map[complement], index]

        hash_map[num] = index

    return []

# test cases would come externally (NEEDS TO BE STRINGIFIED)
test_cases = [
    {
        "inputs": [[2,7,11,15], 9],
        "output": [0, 1]
    },
    {
        "inputs": [[3,2,4], 6],
        "output": [1, 2, "FAIL HERE"] # failing on purpose
    },
    {
        "inputs": [[3,3], 6],
        "output": [0,1]
    },
]

# run config begins here (NEEDS TO BE STRINGIFIED)
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
        print("%%###---WINNING_SECRET---###%%") # should be removed before printing to front end

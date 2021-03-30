n = int(input())
arr = list(set(map(int, input().split())))
l = len(arr)
arr = sorted(arr)
print(arr[l - 2])


n = int(input())
num = list(map(int, input().split()))
check = False
for i in range(0, len(num)-1):
    if (num[i] > 0 and num[i+1] > 0) or (num[i] < 0 and num[i+1] < 0):
        check = True
        break
if check:
    print("YES")
else:
    print("NO")
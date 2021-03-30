n = int(input())
num = list(map(int, input().split()))
cnt = 0
check = False
for i in range(1, len(num)-1):
    if num[i] > num[i-1] and num[i] > num[i+1]:
        cnt += 1
print(cnt)
n = int(input())
num = list(map(int, input().split()))
cnt = 0
for i in range(1, len(num)):
    if num[i] > num[i-1]:
        cnt += 1
print(cnt)
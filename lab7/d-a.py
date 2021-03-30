n = int(input())
# num = []
num = list(map(int, input().split()))
# for i in range(0, 6):
#     a = int(input())
#     num.append(a)
for i in range(0, len(num)):
    if i%2 == 0:
        print(num[i], end=' ')
n = int(input())
i = 0
while n >= 2**i:
    i += 1
    print(2**(i-1), end=" ")
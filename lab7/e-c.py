def xor(a, b):
    if (a == 0 and b == 0) or (a == 1 and b == 1):
        return 0
    else:
        return 1

a, b = input().split()
a = int(a)
b = int(b)
print(xor(a, b))

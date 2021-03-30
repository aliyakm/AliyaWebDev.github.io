def mini(a, b, c, d):
    min1 = 0
    min2 = 0
    if a<b:
        min1 = a
    else:
        min1 = b
    if c<d:
        min2 = c
    else:
        min2 = d
    if min1 < min2:
        return min1
    else:
        return min2

a, b, c, d = input().split()
print(mini(a, b, c, d))
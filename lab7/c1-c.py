import math

a = int(input())
b = int(input())
for i in range(a, b+1):
    if i == math.sqrt(i)**2 and math.sqrt(i).is_integer():
        print(i)
n = int(input("Digite um numero para obter a tabuada: "))

while(n<=0):
    print("Não pode numero negativo!")
    n = int(input("Digite um numero para obter a tabuada: "))

print(f"Segue a tabuada do {n}")

'''
for i in range(1,11,1):
    r = n * i
    print(f"{n} x {i} = {r}")
'''

i = 1
while(i<11):
    r = n * i
    print(f"{n} x {i} = {r}")
    i = i + 1
def somarNumeros(a, b):
    n1 = float(a)
    n2 = float(b)

    r = n1 + n2

    return r

def subtrairNumeros(a, b):
    n1 = float(a)
    n2 = float(b)

    r = n1 - n2

    return r

print('Calculadora UNIP')

print('Menu')
print('1 - Somar')
print('2 - Subtrair')

op = int(input('Digite uma opção: '))

while((op > 2) or (op < 1)):
    print('Opção inválida!')
    op = int(input('Digite uma opção: '))

num1 = input('Digite o primeiro numero: ')
num2 = input('Digite o segundo numero: ')

if (op == 1):
    print('O resultado é: ', somarNumeros(num1, num2))
else:
    print('O resultado é: ', subtrairNumeros(num1, num2))
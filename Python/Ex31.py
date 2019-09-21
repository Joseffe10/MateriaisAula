'''
n = 1

while(n <= 10000000):
    print(n)
    n = n + 1
'''

'''
n = int(input('Digite um numero positivo: '))

while(n < 0):
    print('Filho nao pode numeros negativos, apenas positivos!')
    n = int(input('Digite um numero positivo: '))

print('Obrigado por digitar um numero positivo!')
'''

'''
valor = int(input('Digite o valor que você quer sacar: '))

while(valor <= 0):
    print('Valor inválido. Digite apenas valores positivos!')
    valor = int(input('Digite o valor que você quer sacar: '))

print('Saque efetuado com sucesso!')
'''
'''
nome = input('Digite seu nome: ')

idade = int(input('Digite sua idade: '))
while(idade < 18):
    print('Idade inválida. Apenas pessoas maior de idade podem se cadastrar!')
    idade = int(input('Digite sua idade: '))

sexo = input('Digite seu sexo (M/F): ')
while(sexo != 'M' and sexo != 'F'):
    print('Sexo inválido. Digite apenas M ou F')
    sexo = input('Digite seu sexo (M/F): ')

print('Obrigado por se cadastrar!')
'''
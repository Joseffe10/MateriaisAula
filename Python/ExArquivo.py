'''
arquivo = open(r"C:/Python/Contatos.txt", 'r')
print(arquivo.read())
arquivo.close()
'''
'''
arquivo = open(r"C:/Python/Contatos.txt", 'r')
print(arquivo.readline())
print(arquivo.readline())
'''

'''
arquivo = open(r"C:/Python/Contatos.txt", 'r')
for v in arquivo:
    print(v)
arquivo.close()
'''

'''
nome = input('Digite seu nome doido: ')
arquivo = open(r"C:/Python/Contatos.txt", 'w')
arquivo.write(nome)
arquivo.close()
'''

nome = input('Digite seu nome: ')
arquivo = open(r"C:/Python/Contatos.txt", 'a')
arquivo.write(nome.upper() + '\n')
arquivo.close()

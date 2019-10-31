import ast

logins = [
    {
        'login': 'nilo',
        'senha': '123'
    },
    {
        'login': 'medina',
        'senha': '456'
    },
]

logins.insert(2, {'login': 'joseffe', 'senha': '111'})

print(logins)

arquivo = open(r"C:/Python/Logins.txt", 'w')
arquivo.write(str(logins))
arquivo.close()

arquivo = open(r"C:/Python/Logins.txt", 'r')
teste = str(arquivo.read())
arquivo.close()

dicionario = ast.literal_eval(teste)

print(dicionario)

dicionario.insert((len(dicionario)+1), {'login': 'unip', 'senha': '333'})

print(dicionario)

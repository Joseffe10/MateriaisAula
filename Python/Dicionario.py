aluno = {
    'nome': 'Nilo',
    'ra': 'D960JI0',
    'idade': 20,
    'whatsapp': '11 99296-2929'
}

# Exibe o todo conteúdo (todas as chaves e valor) do dicionário aluno
print(aluno)

# Exibe o valor da chave "ra" no dicionário "aluno"
print(aluno['ra'])

# Exclui a chave "whatsapp" do dicionário "aluno"
del aluno['whatsapp']

info = input('Digite a chave que vc quer excluir: ')
del aluno[info]

# Exclui a última chave e valor do dicionário "aluno"
aluno.popitem()

# Verifica se a chave "ra" está contida no dicionário "aluno"
if ('ra' in aluno):
    print('A chave RA tem no dicionário aluno')

info = input('Digite a chave que vc quer procurar: ')
if(info in aluno):
    print(f'Sim o Nilo tem {info} no seu dicionário!')
else:
    print(f'Não, infelizmente o Nilo NÃO tem {info}!')

# Verifica se a chave "ra" NÃO está contida no dicionário "aluno"
if ('ra' not in aluno):
    print('A chave RA não tem no dicionário aluno')

# Exibe todas as chaves e valor do dicionário aluno
for chave in aluno.keys():
    print(f'{chave} : {aluno[chave]}')

# Exibe todas as chaves do dicionário aluno dentro de um array
print("Lista de aluno = ", list(aluno.keys()))
print(aluno.keys())

# Exibe todos os valores do dicionário aluno dentro de um array
print("Lista de aluno = ", list(aluno.values()))
print(aluno.values())

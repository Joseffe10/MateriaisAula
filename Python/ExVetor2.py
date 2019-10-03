print('Lista de Nomes para Formatura')

alunos = []

for i in range(0, 5, 1):
    nome = input('Digite o nome do formando: ')
    alunos.append(nome)

print('Os formandos são:')

'''
for i in range(0, 5, 1):
    print(alunos[i])
'''
for aluno in alunos:
    print(aluno)
print('Software de controle de vendas de camisa\n')

cgv = float(input('Informe o valor de venda das camisas tamanho G: '))
cgc = float(input('Informe o valor de custo das camisas tamanho G: '))

cmv = float(input('Informe o valor de venda das camisas tamanho M: '))
cmc = float(input('Informe o valor de custo das camisas tamanho M: '))

cpv = float(input('Informe o valor de venda das camisas tamanho P: '))
cpc = float(input('Informe o valor de custo das camisas tamanho P: '))

qvcg = int(input('Informe a quantidade de camisas G que foram vendidas no mês: '))
qvcm = int(input('Informe a quantidade de camisas M que foram vendidas no mês: '))
qvcp = int(input('Informe a quantidade de camisas P que foram vendidas no mês: '))

print(f'O valor de custo das camisas G foi {cgc*qvcg} e o lucro foi {(cgv-cgc)*qvcg}')
print(f'O valor de custo das camisas M foi {cmc*qvcm} e o lucro foi {(cmv-cmc)*qvcm}')
print(f'O valor de custo das camisas P foi {cpc*qvcp} e o lucro foi {(cpv-cpc)*qvcp}')
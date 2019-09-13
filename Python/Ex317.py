en = "s"
while(en == "s"):
    n = int(input("Digite um numero para obter o fatorial:"))
    f = n

    while(n<=0):
        print("Filho, digite novamente. Numero deve ser positivo!")
        n = int(input("Digite um numero para obter o fatorial:"))

    for i in range (n-1,0,-1):
        n = n * i

    print(f"O fatorial de {f} é {n}")
    #print("O fatorial de {} é {}".format(f, n))

    en = input("Filhote, deseja executar novamente o programa? (s/n)")
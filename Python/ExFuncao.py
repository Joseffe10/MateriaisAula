def CalcularAreaRetangulo(b, a):
    base = float(b)
    altura = float(a)

    r = base * altura

    return r


corinthians = input('Digite a base: ')
palmeiras = input('Digite a altura: ')

print('A area do retangulo é', CalcularAreaRetangulo(corinthians, palmeiras))
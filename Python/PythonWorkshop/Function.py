def times(a, b):
    return a * b

print(times)
print(times(10, 10))
print(type(times))

print(globals())



def test():
    return "Hello 이것이 Java interface이자 C언어 함수 포인터의 묘미!"

pointerOfFunction = test
res = pointerOfFunction()
print(res)



def intersect(prelist, postlist):
    retList = []

    for x in prelist:
        if x in postlist:
            retList.append(x)

    return retList

list1 = 'Apple'
list2 = 'grape'

print(intersect(list1, list2))

print(intersect(list1, ['H','A','M']))



def swap(x, y):
    return y, x

print(swap(3, 7))

a, b = swap(33, 77)
print(a)
print(b)

x = swap(333, 777)
print(x)
# tuple : 변경 불가능한 리스트
print(type(x))


a = 10
b = 20

def mysum(x, y):
    return x + y

print(mysum(a,b))

x = 10

def mysum2(x, y):
    x = 1
    return x + y

print(mysum2(x, x))
print(x)

glob = 1
print(glob)

def exch_scope(x):
    global glob
    glob = 7
    return glob + x

print(exch_scope(3))
print(glob)


g = lambda x, y: x * y
print(g(2, 3))

print((lambda x: x * x * x)(3))


for i in range(1, 5):
    if(i == 3):
        pass
    else:
        print(i)



def fib():
    a, b = 1, 1

    while 1:
        yield a
        a, b = b, a + b

for i, ret in enumerate(fib()):
    if i < 20:
        print(i, ret)
    else:
        break



def fib2(n):
    if n < 2:
        return n
    else:
        return fib2(n-1) + fib2(n-2)

print(fib2(20))
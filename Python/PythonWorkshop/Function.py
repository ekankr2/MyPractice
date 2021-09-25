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
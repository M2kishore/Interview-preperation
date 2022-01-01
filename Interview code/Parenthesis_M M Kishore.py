import math
def main():
    str = input()
    if len(str)%2 == 1:
        print("not possible for odd number of brackets")
        return
    stack = ['*']
    open = 0
    close = 0
    for i in str:
        if stack[-1] == '{' and i == '}':
            stack.pop()
        else:
            stack.append(i)
    stack.pop(0)
    for i in stack:
        if(i == '{'):
            open += 1
        else:
            close += 1
    print(math.ceil(open/2)+math.ceil(close/2))
main()
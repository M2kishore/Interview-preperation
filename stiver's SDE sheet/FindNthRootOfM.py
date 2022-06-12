#https://www.codingninjas.com/codestudio/problems/1062679?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website&leftPanelTab=1
def findNthRootOfM(n,m):
    # Write your Code here.
    low = 0
    high = m
    mid = -1
    while high - low > 0.0000001:
        mid = (low + high)/2
        midVal = mid ** n
        if midVal > m:
            high = mid
        else:
            low = mid
    return format(mid, '.6f')

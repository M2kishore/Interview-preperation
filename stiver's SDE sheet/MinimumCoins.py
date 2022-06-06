
denominations = [1, 2, 5, 10, 20, 50, 100, 500, 1000]


def findMinimumCoins(amount):

	# Write your code here
    pointer = len(denominations)-1
    coin = 0;
    while(amount > 0):
        if(amount - denominations[pointer] >= 0):
            amount -= denominations[pointer]
            coin+=1
        else:
            pointer-=1
    return coin

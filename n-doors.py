# The problem is that you have n doors numbered from 1 to n and you have i passes where i = 1,2,3,...,n.
# In the ith pass you open the doors that are multiples of i. What is the number of doors that are open after the last pass?

def n_doors(n):
    doors = n * [0] # Create a list of n doors, all closed
    print('At start        :', doors)
    for i in range(1, n + 1):
        for j in range(i-1, n, i):
            doors[j] = 1 - doors[j] # Toggle the door
        print('When i =', i,'then :', doors)

    open_doors = [k + 1 for k in range(n) if doors[k] == 1] # index + 1 gives the door number

    return doors, sum(doors), open_doors

n = 10
doors, num_open_doors, open_doors = n_doors(n)
print(f"Number of doors: {n}")
print(f"Number of open doors: {num_open_doors}")
print(f"Open doors: {open_doors}")
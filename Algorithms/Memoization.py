computation_count = 0


def f(n):
    global computation_count
    computation_count += 1
    if n <= 1:
        return n
    else:
        return f(n - 1) + f(n - 2)


computation_count_mem = 0


def f_mem(n):
    if memo[n] is not None:  # Already computed
        return memo[n]
    else:  # Computation needed
        global computation_count_mem
        computation_count_mem += 1
        if n <= 1:
            memo[n] = n
        else:
            memo[n] = f_mem(n - 1) + f_mem(n - 2)
        return memo[n]


print('F(30) = ', f(30))
print(f'Number of computations: {computation_count}')
print('\nUsing memoization:')
memo = [None] * 31
print('F(30) = ', f_mem(30))
print(f'Number of computations with memoization: {computation_count_mem}')

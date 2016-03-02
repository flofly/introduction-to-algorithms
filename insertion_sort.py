
def insertion_sort(arr_to_sort):

    # we begin at the second element
    for j in range(1, len(arr_to_sort)):

        # the key is the number that will be place in the ordered array
        key = arr_to_sort[j]

        # we know that before the key all elements are ordered (at the beginning there is one element before the key)
        i = j - 1

        # we compare each element before the key with the key
        # if the key is smaller than the element and if we are not at the beginning of the array
        # we continue
        while i >= 0 and arr_to_sort[i] > key:

            # each element greater than the key is moved from +1 position in the array because the key will be inserted
            # before
            arr_to_sort[i + 1] = arr_to_sort[i]
            i -= 1

        # once the previous while is done, i equals -1 if the key will be the first element of the ordered array
        # or equals the position of the element smaller or equal than the key (in that case the key will be inserted 
        # right after)
        arr_to_sort[i + 1] = key

if __name__ == "__main__":

    # one array is used, the unordered array will progressively become ordered
    unordered_array = [4, 1, 9, 3, 1, 8, 2]
    insertion_sort(unordered_array)

    print " ".join(map(str, unordered_array))

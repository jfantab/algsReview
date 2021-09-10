#include <iostream>
#include <cmath>
#include <climits>

int* selectionSort(int[], int);

int main() {
    const int SIZE = 7;
    int a[SIZE] = {6, 2, 3, 8, 9, 10, 1};

    selectionSort(a, SIZE);

    for(int i = 0; i < SIZE; i++)
        std::cout << a[i] << " ";
    std::cout << std::endl;

    return 0;
}

int* selectionSort(int a[], int size) {
    for(int i = 0; i < size; i++) {
        int index = i;
        for(int j = i + 1; j < size; j++) {
            if(a[j] <= a[index]) {
                index = j;
            }
        }

        int temp = a[i];
        a[i] = a[index];
        a[index] = temp;
    }
    return a;
}
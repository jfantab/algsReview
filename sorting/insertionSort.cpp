#include <iostream>
#include <cmath>
#include <climits>

int* insertionSort(int[], int);

int main() {
    const int SIZE = 7;
    int a[SIZE] = {6, 2, 3, 8, 9, 10, 1};

    insertionSort(a, SIZE);

    for(int i = 0; i < SIZE; i++)
        std::cout << a[i] << " ";
    std::cout << std::endl;

    return 0;
}

int* insertionSort(int a[], int size) {
    for(int i = 1; i < size; i++) {
        int index = i;
        while(a[index] < a[index - 1]) {
            int temp = a[index - 1];
            a[index - 1] = a[index];
            a[index] = temp;
            index--;
        }
    }
    return a;
}
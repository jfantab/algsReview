#include <iostream>
#include <cmath>
#include <climits>

int* bubbleSort(int[], int);

int main() {
    const int SIZE = 7;
    int a[SIZE] = {6, 2, 3, 8, 9, 10, 1};

    bubbleSort(a, SIZE);

    for(int i = 0; i < SIZE; i++)
        std::cout << a[i] << " ";
    std::cout << std::endl;

    return 0;
}

int* bubbleSort(int a[], int size) {
    int min = INT_MAX;
    for(int i = 0; i < size; i++) {
        for(int j = i + 1; j < size; j++) {
            if(a[i] > a[j]) {
                int temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    return a;
}
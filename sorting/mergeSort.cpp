#include <iostream>
#include <cmath>
#include <climits>

void mergeSort(int*, int, int);
void merge(int*, int, int, int);

int main() {

    const int SIZE = 7;
    int *a = new int[7]{6, 2, 3, 8, 9, 10, 1};

    mergeSort(a, 0, SIZE - 1);

    for(int i = 0; i < SIZE; i++)
        std::cout << a[i] << " ";
    std::cout << std::endl;

    delete [] a;
    a = nullptr;

    return 0;
}

void mergeSort(int *a, int start, int end) {
    if(start >= end) return;

    int mid = start + std::floor((end - start)/2);

    mergeSort(a, start, mid);
    mergeSort(a, mid + 1, end);
    merge(a, start, mid, end);
}

void merge(int *a, int start, int mid, int end) {
    int size = end - start + 1, 
        i = start, j = mid + 1,
        temp[size], ind = 0;

    while(i <= mid && j <= end) 
        temp[ind++] = (a[i] <= a[j]) ? a[i++] : a[j++];

    while(i <= mid) 
        temp[ind++] = a[i++];

    while(j <= end)
        temp[ind++] = a[j++];  

    ind = 0;
    for(int i = start; i <= end; i++, ind++)
        a[i] = temp[ind];
}
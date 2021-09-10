#include <iostream>
#include <vector>
#include <cmath>
#include <climits>

void quickSort(int*, int, int);
int partition(int*, int, int);
void swap(int*, int, int);

int main() {
    const int SIZE = 7;
    int *a = new int[7]{6, 2, 3, 8, 9, 10, 1};

    quickSort(a, 0, SIZE - 1);

    for(int i = 0; i < SIZE; i++)
        std::cout << a[i] << " ";
    std::cout << std::endl;

    delete [] a;
    a = nullptr;

    return 0;
}

void quickSort(int *a, int l, int r) {
    if(l < r) {
        int p = partition(a, l, r);
        quickSort(a, l, p - 1);
        quickSort(a, p + 1, r);
    }
}

void swap(int *a, int i, int j) {
    int temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

int partition(int *a, int l, int r) {
    if(l >= r) return 0;

    int pivot = a[r];
    std::vector<int> low, high;

    for(int i = l; i <= r; i++) 
        a[i] <= pivot ? low.push_back(a[i]) : high.push_back(a[i]);

    int i, j;
    int pivotIndex = low.size() == 0 ? 0 : low.size() - 1 + l;

    for (i = 0, j = l; j <= pivotIndex; j++) a[j] = low[i++];
    for (i = 0; j <= r; j++) a[j] = high[i++];

    return pivotIndex;
}
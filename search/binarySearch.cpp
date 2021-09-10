#include<iostream>
#include<cmath>

int binarySearch(int[], int, int, int);

int main() {
    int arr[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int i = binarySearch(arr, 6, 0, 8);
    std::cout << "Index: " << i << std::endl;
    return 0;
}

int binarySearch(int arr[], int target, int start, int end) {
    if(start >= end) return -1;

    int mid = start + std::floor((end - start) / 2);

    if(target == arr[mid]) return mid;
    else if(target < arr[mid]) return binarySearch(arr, target, start, mid);
    else if(target > arr[mid]) return binarySearch(arr, target, mid + 1, end);
}
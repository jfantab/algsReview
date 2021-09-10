#include "heap.h"

#include <iostream>
#include <cmath>

Heap::Heap() {}

Heap::Heap(std::vector<int> v) {
    size = v.size();
    heap = v;
    buildHeap();
}

int Heap::l_child(int i) {
    return 2 * i + 1;
}

int Heap::r_child(int i) {
    return 2 * i + 2;
}

int Heap::p(int i) {
    return std::floor((i - 1)/2);
}

void Heap::swap(int i, int j) {
    int temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}

void Heap::buildHeap() {
    for(int i = std::floor((size - 2)/2); i >= 0; i--) {
        heapify(i);
    }
}

void Heap::heapify(int index) {
    int l = l_child(index), r = r_child(index);

    int largest = (l < size) && (heap[l] > heap[index]) ? l : index;

    largest = (r < size) && (heap[r] > heap[largest]) ? r : largest;

    if(largest != index) {
        swap(index, largest);
        heapify(largest);
    }
} 

void Heap::fix(int j) {
    for(int i = j; i > 0; i = p(i)) {
        if(heap[i] > heap[p(i)]) 
            swap(i, p(i));
        else break;
    }
}

void Heap::push(int val) {
    heap.push_back(val);
    size++;

    fix(size - 1);
}

int Heap::pop() {
    if(size == 0) return -1;

    swap(0, size - 1);

    int ele = heap.back();
    heap.pop_back();

    size--;

    heapify(0);

    return ele;
}

void Heap::print() {
    for(int i = 0; i < size; i++)
        std::cout << heap[i] << " ";
    std::cout << std::endl;
}
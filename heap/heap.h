#ifndef HEAP_H
#define HEAP_H

#include<vector>

class Heap{
    public:
        Heap();
        Heap(std::vector<int>);
        int l_child(int);
        int r_child(int);
        int p(int);
        void swap(int, int);
        void buildHeap();
        void heapify(int);
        void fix(int);
        void push(int);
        int pop();
        void print();
    private:
        int size;
        std::vector<int> heap;
};

#endif
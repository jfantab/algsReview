#include <iostream>
#include <vector>
#include "heap.h"

int main() {
    std::vector<int> v {7, 12, 20, 17, 13, 30, 35, 22};
    Heap* h = new Heap(v);

    h -> print();

    delete h;

    return 0;
}
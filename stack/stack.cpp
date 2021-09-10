#include "stack.h"

#include <iostream>

Stack::Stack() {
    _size = 0;
}

void Stack::push(int val) {
    _stack.push_back(val);
    _size++;
}

int Stack::pop() {
    if(isEmpty()) return -1;

    int ele = _stack.back();

    _stack.pop_back();
    _size--;

    return ele;
}

bool Stack::isEmpty() {
    return _size == 0;
}

void Stack::print() {
    for(int i = _size - 1; i >= 0; i--) {
        std::cout << _stack[i] << " ";
    }
    std::cout << std::endl;
}
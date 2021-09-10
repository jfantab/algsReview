#include <iostream>
#include "queue.h"

Queue::Queue() {
    _size = 0;
}

void Queue::push(intval) {
    _queue.push_back(val);
    _size++;
}

intQueue::pop() {
    if(isEmpty()) return -1;

    intele = _queue.front();

    _queue.erase(_queue.begin());
    _size--;

    return ele;
}

bool Queue::isEmpty() {
    return _size == 0;
}

void Queue::print() {
    for(int = 0; i < _size; i++) {
        std::cout<< _queue[i] << " ";
    }
    std::cout<< std::endl;
}
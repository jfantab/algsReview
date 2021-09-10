#include <iostream>
#include "queue.h"

template <typename T>
class Queue {
    public:
        Queue();
        void push(T);
        T pop();
        bool isEmpty();
        void print();
    private:
        int _size;
        std::vector<T> _queue;
};

template<typename T>
Queue<T>::Queue() {
    _size = 0;
}

template<typename T>
void Queue<T>::push(T val) {
    _queue.push_back(val);
    _size++;
}

template<typename T>
T Queue<T>::pop() {
    if(isEmpty()) return -1;

    T ele = _queue.front();

    _queue.erase(_queue.begin());
    _size--;

    return ele;
}

template<typename T>
bool Queue<T>::isEmpty() {
    return _size == 0;
}

template<typename T>
void Queue<T>::print() {
    for(int i = 0; i < _size; i++) {
        std::cout << _queue[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    Queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);
    q.print();
    q.pop();
    q.print();
    return 0;
}
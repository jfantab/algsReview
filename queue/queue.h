#ifndef QUEUE_H
#define QUEUE_H

#include <vector> 

class Queue {
    public:
        Queue();
        void push(int);
        int pop();
        bool isEmpty();
        void print();
    private:
        int _size;
        std::vector<int> _queue;
};

#endif
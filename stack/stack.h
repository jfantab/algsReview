#ifndef STACK_H
#define STACK_H

#include<vector>

class Stack{
    public:
        Stack();
        void push(int);
        int pop();
        bool isEmpty();
        void print();
    private:
        int _size;
        std::vector<int> _stack;
};

#endif
#include <iostream>
#include "stack.h"

int main() {
    Stack s;
    s.push(1);
    s.push(2);
    s.push(3);
    s.print();
    s.pop();
    s.print();

    return 0;
}
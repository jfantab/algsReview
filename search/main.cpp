#include <iostream>
#include "BST.h"
#include "Node.h"

int main() {

    BST* n = new BST(new Node(15));

    n -> add(10);
    n -> add(25);
    n -> add(7);
    n -> add(11);
    n -> add(20);
    n -> add(30);
    n -> add(40);
    n -> add(5);
    n -> add(35);

    n -> print();

    delete n;
    n = nullptr;

    return 0;
}
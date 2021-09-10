#include <iostream>
#include "Node.h"

void print(Node*);
Node* reverse(Node*, Node*);

int main() {
    Node * n1 = new Node(1);
    Node * n2 = new Node(2);
    Node * n3 = new Node(3);
    Node * n4 = new Node(4);
    Node * n5 = new Node(5);

    n1 -> setNext(n2);
    n2 -> setNext(n3);
    n3 -> setNext(n4);
    n4 -> setNext(n5);

    print(n1);

    Node * rev = reverse(n1, NULL);

    print(n5);

    delete n1;
    delete n2;
    delete n3;
    delete n4;
    delete n5;

    return 0;
}

void print(Node * n1) {
    Node * cur = n1;
    while(cur != NULL) {
        std::cout << cur -> data() << " ";
        cur = cur -> next();
    }
    std::cout << std::endl;
}

Node* reverse(Node* n, Node* prev = NULL) {
    if(n == NULL) return n;
    Node* nextNode = n -> next();
    n -> setNext(prev);

    return nextNode ? reverse(nextNode, n) : n;
}
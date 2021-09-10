#ifndef BST_H
#define BST_H

#include "Node.h"

class BST {
    public:
        BST(Node*);
        Node* add(int);
        Node* add(int, Node*);
        Node* remove(int);
        Node* remove(int, Node*);
        void invert();
        void print();
        void print(Node*);
    private:
        int size;
        Node* root;
};

#endif
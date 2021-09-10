#include "BST.h"
#include "Node.h"

#include <iostream>

BST::BST(Node* _root){
    size = 1;
    root = _root;
}

Node* BST::add(int val) {
    return add(val, root);
}

Node* BST::add(int val, Node* cur){
    if(!cur) {
        size++;
        return new Node(val);
    }
    if(val <= cur -> getVal()) cur -> setLeft(add(val, cur -> getLeft()));
    else if(val > cur -> getVal()) cur -> setRight(add(val, cur -> getRight()));
    return cur;
}

Node* BST::remove(int val) {
    return remove(val, root);
}

Node* BST::remove(int val, Node* cur){
    if(!cur) return cur;

    if(val) {}
    else if(val < cur -> getVal()) cur -> setLeft(remove(val, cur -> getLeft()));
    else if(val > cur -> getVal()) cur -> setRight(remove(val, cur -> getRight()));
    return cur;
}

void BST::invert(){

}

void BST::print(){
    print(root);
}

void BST::print(Node* node) {
    if (node) {
        std::cout << node -> getVal() << " ";
        print(node -> getLeft());
        print(node -> getRight());
    }
}

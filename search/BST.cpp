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

Node* BST::repair(Node* cur) {
    if(cur) {
        Node* tempRight = cur -> getRight();
        Node* tempLeft = cur -> getLeft();
        cur = tempLeft;
        if(cur) {
            cur -> setLeft(repair(tempLeft));
            cur -> setRight(tempRight);
        }
        return cur;
    }
}

Node* BST::remove(int val, Node* cur){
    if(size == 0) return NULL;
    if(!cur) return cur;
    if(val == cur -> getVal()) {
        size--;
        cur = repair(cur);
        return cur;
    }
    else if(val == cur -> getLeft() -> getVal()) {
        size--;
        cur -> setLeft(repair(cur -> getLeft()));
        return cur;
    }
    else if(val == cur -> getRight() -> getVal()) {
        size--;
        cur -> setRight(repair(cur -> getRight()));
        return cur;
    }
    else if(val < cur -> getVal()) cur -> setLeft(remove(val, cur -> getLeft()));
    else if(val > cur -> getVal()) cur -> setRight(remove(val, cur -> getRight()));
    return cur;
}

BST* BST::invert(){
    return new BST(invert(root));
}

Node* BST::invert(Node* cur) {
    if(cur) {
        invert(cur -> getRight());
        invert(cur -> getLeft());
        Node* temp = cur -> getLeft();
        cur -> setLeft(cur -> getRight());
        cur -> setRight(temp);
        return cur;
    }
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

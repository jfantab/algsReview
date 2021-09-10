#include "Node.h"

Node::Node(int _val) {
    val = _val;
}

Node::Node(int _val, Node* _left, Node* _right) {
    val = _val;
    left = _left;
    right = _right;
}

int Node::getVal() {
    return val;
}

Node* Node::getLeft() {
    return left;
}

Node* Node::getRight() {
    return right;
}

void Node::setLeft(Node* _left) {
    left = _left;
}

void Node::setRight(Node* _right) {
    right = _right;
}

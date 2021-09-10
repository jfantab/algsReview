#include "Node.h"

Node::Node(int data, Node* next) {
    _data = data;
    _next = next;
}

Node::Node(int data) {
    _data = data;
}

int Node::data() {
    return _data;
}

Node* Node::next() {
    return _next;
}

void Node::setData(int data) {
    _data = data;
}

void Node::setNext(Node* next) {
    _next = next;
}
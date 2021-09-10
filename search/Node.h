#ifndef NODE_H
#define NODE_H

class Node{
    public:
        Node(int);
        Node(int, Node*, Node*);

        int getVal();
        Node* getLeft();
        Node* getRight();

        void setLeft(Node*);
        void setRight(Node*);
    private:
        int val;
        Node* left;
        Node* right;
};

#endif
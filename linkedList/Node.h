#ifndef NODE_H
#define NODE_H

class Node {    
    public:
        Node(int, Node*);
        Node(int);
        int data();
        Node* next();

        void setData(int);
        void setNext(Node*);

    private:
        int _data;
        Node* _next;
};

#endif
"use strict";
// 双向链表
Object.defineProperty(exports, "__esModule", { value: true });
// C: typedef struct Node { ... } Node;
class Node {
    data;
    prev;
    next;
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// C: 初始化链表
// Node* initList() {
//     Node* head = (Node*)malloc(sizeof(Node));
//     head->data = 0;
//     head->prev = NULL;
//     head->next = NULL;
//     return head;
// }
function initList() {
    const head = new Node(0); // TS 不需要 malloc，new 即可
    // head.data = 0 已在 constructor 中设置
    // head.prev = null / head.next = null 已在 constructor 中设置
    return head;
}
// C: 头插法
// void insertAtHead(Node* head, ElementType data) {
//     Node* newNode = (Node*)malloc(sizeof(Node));
//     newNode->data = data;
//     newNode->prev = head;
//     newNode->next = head->next;
//     if (head->next != NULL) {
//         head->next->prev = newNode;
//     }
//     head->next = newNode;
// }
function insertAtHead(head, data) {
    const newNode = new Node(data);
    newNode.prev = head;
    newNode.next = head.next;
    if (head.next !== null) {
        head.next.prev = newNode;
    }
    head.next = newNode;
}
// C: 遍历链表
// void traverseList(Node* head) {
//     Node* current = head->next; // 跳过头节点
//     while (current != NULL) {
//         printf("%d ", current->data);
//         current = current->next;
//     }
//     printf("\n");
// }
function traverseList(head) {
    let current = head.next; // 跳过头节点
    const values = [];
    while (current !== null) {
        values.push(current.data);
        current = current.next;
    }
    console.log(values.join(" "));
}
// C: 尾插法 - 先获取尾节点
// Node* getTail(Node* head) {
//     Node* current = head;
//     while (current->next != NULL) {
//         current = current->next;
//     }
//     return current;
// }
function getTail(head) {
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    return current;
}
// C: void insertAtTail(Node* head, ElementType e) { ... }
function insertAtTail(head, e) {
    const newnode = new Node(e);
    newnode.next = null;
    const tail = getTail(head);
    tail.next = newnode;
    newnode.prev = tail;
}
// C: 指定位置插入
// void insertAtPosition(Node* head, ElementType e, int position) { ... }
function insertAtPosition(head, e, position) {
    const newnode = new Node(e);
    let current = head;
    let index = 0;
    while (current !== null && index < position - 1) {
        current = current.next;
        index++;
    }
    if (current !== null) {
        newnode.next = current.next;
        newnode.prev = current;
        if (current.next !== null) {
            current.next.prev = newnode;
        }
        current.next = newnode;
    }
}
// C: 删除节点
// void deleteNode(Node* head, ElementType e) { ... }
function deleteNode(head, e) {
    let current = head.next;
    while (current !== null) {
        const next = current.next; // 提前保存，防止后续访问被删节点
        if (current.data === e) {
            current.prev.next = current.next;
            if (current.next !== null) {
                current.next.prev = current.prev;
            }
            // TS 有 GC，不需要 free(current)
        }
        current = next;
    }
}
// C: int main() { ... }
function main() {
    const list = initList();
    insertAtHead(list, 10);
    insertAtHead(list, 20);
    insertAtHead(list, 30);
    traverseList(list); // 30 20 10
    insertAtTail(list, 40);
    insertAtTail(list, 50);
    traverseList(list); // 30 20 10 40 50
    insertAtPosition(list, 60, 3);
    traverseList(list); // 30 20 60 10 40 50
    deleteNode(list, 20);
    traverseList(list); // 30 60 10 40 50
    // TS 有 GC，不需要 free(list)
}
main();

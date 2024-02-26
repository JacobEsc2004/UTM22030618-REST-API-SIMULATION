class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {
        if (!element) {
            return "There´s no data";
        }

        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    prepend(element) {
        if (!element) {
            return "There´s no data";
        }

        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    insertAfterNode(node, element) {
        if (!node || !element) {
            return "Node and element are mandatory";
        }

        const newNode = new Node(element);

        let current = this.head;
        while (current) {
            if (current.data === node) {
                newNode.next = current.next;
                current.next = newNode;
                if (current === this.tail) {
                    this.tail = newNode;
                    return 'The element was appended and it is the tail';
                };
                return 'The element was appended';
            }
            current = current.next;
        }
        return 'The node doesn´t exist'
    }

    traverse() {
        if (!this.head) {
            return "There´s no data";
        }

        let currentValue = this.head;

        while (currentValue) {
            console.log(currentValue);
            currentValue = currentValue.next;
        }
    }

    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay parametro o lista";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "El elemento indicado era la cabeza";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    return "El elemento ingresado se ha borrado y era la cola";
                }
                current.next = current.next.next;
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }

    deleteHead(){
        if (!this.head) {
            return 'There´s no head';
        }

        this.head = this.head.next;

        if (this.head === null) {
            this.tail=null;
        }
    }

    deleteTail(){
        if (!this.head) {
            return 'There´s no data';
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return 'The tail was removed and it was also head'
        }

        let current = this.head;

        while(current.next){
            if(current.next ===  this.tail){
                this.tail = current;
                return 'The tail was removed';
            }
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
/*
console.log("Lista ligada:");

 
    linkedList.prepend(5);
 

 
    linkedList.append(15);
 

 
    linkedList.deleteNode(15);
    

const numbers = [1, 2, 3, 4, 5];
console.log("Arreglo: ");

    
    numbers.unshift(0);
    


    numbers.push(6);


 
    numbers.splice(2, 1);
   

console.log(numbers);
*/

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log(linkedList.insertAfterNode(10, 3));
console.log(linkedList);
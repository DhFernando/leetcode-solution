const head = [1,0,1]

const arr = [];
while (head) {
    arr.push(head.val);
    head = head.next;
}
return parseInt(arr.join(''), 2);
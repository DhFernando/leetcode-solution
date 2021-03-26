const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
const ruleKey = "type"
const ruleValue = "phone"

let count = 0;

items.forEach(el => {
    if(ruleKey === 'type' && el[0] == ruleValue){
        count++
    }else if(ruleKey === 'color' && el[1] == ruleValue  ){
        count++
    }else if(ruleKey === 'name' && el[2] == ruleValue){
        count++
    }
});

console.log(count)
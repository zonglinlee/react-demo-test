import {fromJS, List} from "immutable";

const arr1 = [
    {value: 'biology', label: "生物"},
    {value: 'geography', label: "地理"},
    {value: 'biologyExperiment', label: "生物实验"}
]
const list1 = List<{ value: string, label: string, disabled?: boolean }>(arr1)
const list2 = list1
console.log("list1===list2 : ", list1 === list2)
const list3 = list2.set(0, {value: 'art', label: '艺术'}).set(1, {value: 'geography', label: "地理", disabled: true})
console.log("list3===list2 : ", list3 === list2)
console.log("list3 shallowCopy toArray : ", list3.toArray(), "list2 deepClone toJS:", list2.toJS(), "list1", list1)

// deep Copy
const arr1DeepCopy = fromJS(arr1).toJS()

console.log("arr1 === arr1DeepCopy", arr1 === arr1DeepCopy, arr1DeepCopy)

// Code your solution here
function findMatching(arr, name){
    //const result = arr.filter((n) => n.toLowerCase().includes(name.toLowerCase()));
    const result = arr.filter((n) => n.toLowerCase() == name.toLowerCase());
    return result; 
}
function fuzzyMatch(arr, name){
    const result = arr.filter((n) => n.startsWith(name));
    return result;
}
function matchName(arr, driver){
    const result = arr.filter((el) => el.name == driver);
    return result;
}

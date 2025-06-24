// Create a function reverseWords(sentence) that:
//     Takes a string sentence.
//     Returns a new string where the order of words is reversed.
//     Example: "Hello world" → "world Hello".
// Approach: Think of a way to convert the string into an array of words.

function reverseWords(sentence) {
     


}var food = [
{
type: 'fruit',
name: 'Banana'
}, {
type: 'vegetable',
name: 'Lettuce'
}, {
type: 'fruit',
name: 'Strawberry'
}, {
type: 'nut',
name: 'Brazil'
}, {
type: 'fruit',
name: 'Orange'
}, {
type: 'vegetable',
name: 'Onion'
}, {
type: 'nut',
name: 'Peanut'
}
];


let few=food.filter(item => item.type === 'fruit').map(item => item.name).sort();

 console.log(few);
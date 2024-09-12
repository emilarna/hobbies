for (let i = 1;i < 2000;i = i+2) {
   // console.log(i);
}

const myArray = ["Apples","Banana","Orange"]

function addR(word) {
    return word+"r";
}



myArray.forEach(function(item) {
    console.log(item);
    console.log(addR(item));
});

myArray.forEach(value => console.log(value));



console.log("sanity check :)");

let values = [];
let sortAmount = 100;
let sortEle = document.querySelector('.sort-animation');


function initializeSort () {
  for (var i = 0; i < sortAmount; i++) {

    let divEle = document.createElement('div');
  
    // TODO: alt version grab background color attribute
  
    divEle.setAttribute('class', 'tile1');
    
    // randomly sets the heights
    let randomHeight = Math.floor(Math.random() * 101);
    let divHeignt = divEle.style.height = `${randomHeight}%`;
    // adds the heights into an array
    values.push(randomHeight);
    // console.log(divEle.style.height);
    divEle.style.width = `${1}%`;  
    sortEle.appendChild(divEle);
  }
}

console.log(values);
initializeSort ();
console.log(values);


// for (let t = 0; t < 100; t++) {
//   // console.log("sorting");
//   sorting();
//   console.log("sorting");
//   console.log(values);
// }

function sorting () {
  for (i = 0; i < sortAmount; i++) {
    for (j = 0; j < sortAmount-i-1 ; j++) {
      // console.log(values[j]);
      
      let num1 = values[j];
      let num2 = values[j+1]; 
      
      if (num1 > num2) {
        swap(values, j, j+1);
      }
    }
  }
}

function swap (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

sorting ();
console.log(values);
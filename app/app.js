
// Adapted from Coding Train: https://www.youtube.com/watch?v=67k3I2GxTH8

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

// sorting by 2 positions at a time
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

// swapping positions in an array
function swap (arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

sorting ();
console.log(values);

function redraw () {
  sortEle.innerHTML = "";  
  for (let i = 0; i < values.length; i++ ) {
    let divEle = document.createElement('div');
    divEle.setAttribute('class', 'tile1');
    let divHeignt = divEle.style.height = `${values[i]}%`;
    divEle.style.width = `${1}%`;  
    console.log(divHeignt);
    sortEle.appendChild(divEle);  
  }

}

redraw();
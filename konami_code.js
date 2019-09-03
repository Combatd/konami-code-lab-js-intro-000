/*You'll want to attach an event listener to document.body and check for 'keydown' events. If the user enters this special code, pressing all ten of the keys in the correct order, alert() a congratulatory message. However, if they press a key out of sequence or a key that isn't part of the Konami code, don't alert() anything and simply keep listening for all ten keydowns in the correct order.*/

const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];



function init(e) { // pass in the event
  // your code here
  let idx = 0; // keep track outside the event handler
  const key = e.key;
 
  if (key === codes[idx]) {
    idx+=1;
 
    if (idx === codes.length) {
      alert("Hurray!");
 
      idx = 0; // reset back to 0
    }
  } else {
    index = 0; // reset back to 0
  }

}

console.log("hello world")

let col = randomColor({luminosity: 'bright', count: 27});

console.log(col);

// let classes = document.querySelectorAll("[class^='n']")
// console.log(classes);

// let unique = [...new Set([...classes])];
// console.log(unique);

let core = document.getElementById("core");
console.log(core);
console.log(core.children);
let classes = document.querySelectorAll("core");
console.log(classes);

console.dir(core)

for (let c in core) {
  console.log(c.children);
}
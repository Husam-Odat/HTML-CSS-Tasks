// repeat , length , charAt , indexOf ,lastIndexOf ,slice ,split ,substring , substr 
// includes , startsWith , endsWith

let x = "Sami like java script";
let y = "first";
let name = "Noor";
let age= 20;
console.log(x.repeat(3));
console.log(x.length);
console.log(x[2]);
console.log(x.charAt(2));
console.log(x.indexOf("i"));

console.log(x.slice(3,7));
// console.log(x.split("_"))
console.log(x.substr(3,7));
console.log(x.includes("i"));
console.log(x.endsWith("t"))
console.log(50+30+x+y);

console.log(the name = ${name} the age = ${age});
let current_date = new Date();
console.log(current_date.getFullYear());

let z = +"100";
console.log(typeof(z));
let l = 30; 
let w = 40 ;
console.log(l.toString() + w.toString());
// repeat , length , charAt , indexOf ,lastIndexOf ,slice ,split ,substring , substr 
// includes , startsWith , endsWith

// length , unshift ,shift ,push ,pop 
// splice , slice , indexOf , lastIndexOf ,reverse ,sort ,includes


const names = ["ali","ahmad","Mohammad",[1,2,3,["a","hasan"]]];
console.log(names[3][3][1]);
// document.write(names[1])
console.log(names[1]);
names.unshift("gizawi");
console.log(names);
names.pop();
console.log(names);
names.splice(0,1);
console.log(names);
names.splice(1,0,"murad");
console.log(names);
console.log(names.reverse());

// Object 
const cars = {
    model : 2023,
    color : "green"
}

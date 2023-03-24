 const users=[
{ first_name:"Anto",
last_name:"Thinaiyoorani"
},
{ first_name:'sathish',
last_name:'sambavarvadakarai'
},
{ first_name:'Mari',
last_name:'mariyathaiapuram'
}];
var b=[];
users.map(function(value){


 b.push(value.first_name+" "+"lives in"+" "+value.last_name);
});
console.log(b);
const btn = document.querySelector("button");
const doc = document.querySelector("#input_1");
const cat = document.querySelector("#input_2");
const olu = document.querySelector("#input_3");
const Balo = document.querySelector("#input_4");
const Ade = document.querySelector("#input_5");
const dad = document.querySelector("#answer");
// const mum = document.querySelector("#paragraph_2");
// const bro = document.querySelector("#paragraph_3");
// const pap = document.querySelector("#paragraph_4");
// const hip = document.querySelector("#paragraph_5");

function Ola() {
  //   console.log("My name is" + " " + doc.value);
  //   console.log("My age is" + " " + cat.value);
  //   console.log("My Dept is" + " " + olu.value);
  //   console.log("My Matric No is" + " " + Balo.value);
  //   console.log("My Address is" + " " + Ade.value);
  //   dad.innerHTML = `My name is   <b>${doc.value}</b>`;
  //   mum.innerHTML = `My age is   <b>${cat.value}</b>`;
  //   bro.innerHTML = `My Dept is   <b>${olu.value}</b>`;
  //   pap.innerHTML = `My Matric No is   <b>${Balo.value}</b>`;
  //   hip.innerHTML = `My Address is   <b>${Ade.value}</b>`;

  dad.innerHTML = `My name is   <b id = "i">${doc.value}</b>, i am <b id = "ii">${cat.value}</b> years old, i am a student of <b id = "iii">${olu.value}</b> department
with matric number <b id = "iiii">${Balo.value}</b> and i live at <b id = "iiiii">${Ade.value}</b>.`;
}

btn.addEventListener("click", Ola);

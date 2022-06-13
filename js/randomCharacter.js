const containerImagenes = document.getElementById("container-images")
const containerCharaInfo = document.getElementById("container-chara-info")

var numeroRandomDIU = Math.floor(Math.random() * 27) + 1;

console.log(`Random value between 0 and 27 is ${numeroRandomDIU}`);


function getRandomNumber(){
 return numero = Math.floor(Math.random() * 27)
}

async function getCharacter(){
  const number = getRandomNumber();
  var infos = await fetch('https://jojoapi.herokuapp.com/DiamondIsUnbreakable').then(response => response.json());
  console.log(infos)
  console.log("Number = " + number);
  console.log(infos[number].user_image);

  function showInfo(){
    containerImagenes.innerHTML =`<img src="${infos[number].user_image}">
    <img src="${infos[number].stand_image}">`;
    containerCharaInfo.innerHTML =`<div class="user">Usuario: ${infos[number].user}</div>
    <div class="stand">Stand: ${infos[number].stand}</div>
    <div class="stand-type">Rango del Stand: ${infos[number].stand_type[0]}</div>
    <div class="user-gender">Genero del Usuario: ${infos[number].gender}</div>`

  }


  showInfo(infos);
}
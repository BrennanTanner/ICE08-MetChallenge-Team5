import { buildForm } from './form.js';
import ArtList from './displayArt.js';

buildForm();

const listElement = document.querySelector('#artList');

const dataSource = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=';

var button = document.getElementById('deptData');
console.log(button);

function onChange() {
   var value = button.value;
   console.log(value);
   const myList = new ArtList(value, dataSource, listElement);
   myList.init();
 }

 button.onchange = onChange;

 onChange();







// function setData(data) {
//    data = document.getElementById("deptData").value
//    return data;
// }
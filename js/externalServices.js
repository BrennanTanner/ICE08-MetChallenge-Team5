const baseURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
 
function convertToJson(res) {
   if (res.ok) {
     return res.json();
   } else {
     throw new Error('Bad Response');
   }
 }

 function getData() {
    return fetch(baseURL)
    .then(convertToJson).then((data) => {
     data.Result});
  }

export default class ExternalServices {
 constructor(){
    this.makeRequest(baseURL)
 }
    

    makeRequest = async (url) => {
    try {
       const response = await fetch(url);
       if (response.ok) {
          return await response.json();
       } else {
          const error = await response.text();
          throw new Error(error);
       }
    } catch (err) {
       console.log(err);
    }
 }



 
}


export async function getData(url) {
   const response = await fetch(url);
   const myJson = await response.json(); 

   return myJson;
}
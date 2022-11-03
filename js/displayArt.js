import { getData } from './getData.js';

export default class ArtList {
   constructor(department, dataSource, listElement) {
      this.department = department;
      this.listSource = dataSource;
      this.listElement = listElement;
      this.itemSource = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
   }

   async init() {
      const list = await getData(this.listSource + this.department);
      this.renderList(list);

   }

   async renderList(list) {

      let x = 0;
      for (let i = 0; i < 20; i++) {

      const itemData = await getData(this.itemSource + list.objectIDs[x]);

     // console.log(this.department);
         x++
      if (itemData.primaryImage != '') {

         this.listElement.innerHTML += `
         <div>
         <img src="${itemData.primaryImageSmall}" width="200px">
         <h3>${itemData.title}</h3>
         <span class="details">
         <p>${itemData.objectName}</p>
         <p>${itemData.period}</p>
         <p>${itemData.culture}</p>
         </span>
          </div>`
   }
   else {
      i--;
   }
      }

      // for (let i = 0; i < 20; i++) {
      //    this.renderArtDetails(list.objectIDs[i]);
      // };

      // list.objectIDs.forEach((item, i) => {
      //    if (i < 20) {
      //       this.renderArtDetails(item);
      //       i++;
      //    }
      // });
   }

   async renderArtDetails(id) {
      const itemData = await getData(this.itemSource + id);
     // console.log(itemData);

      //if (itemData.primaryImage != '') {

         this.listElement.innerHTML += `
         <div>
         <img src="${itemData.primaryImageSmall}" width="200px">
         <h3>${itemData.title}</h3>
         <span class="details">
         <p>${itemData.objectName}</p>
         <p>${itemData.period}</p>
         <p>${itemData.culture}</p>
         </span>
          </div>`
      //}

;
    }
}

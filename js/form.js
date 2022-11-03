import { getData }from './getData.js';

const departmentURL = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';

const data = await getData(departmentURL);

export function buildForm() {

   document.querySelector('body').insertAdjacentHTML('afterbegin', 
   `<form id="deptSelect">
   <label>Select a Department</label>
    <select id="deptData">
    <option value="" selected="selected"> Choose a Department
    </option>
   </form>`
   );

   const options = data.departments.forEach(element => {  

        document.querySelector('select').insertAdjacentHTML('afterbegin', 
        buildOption(element)
        );

   });
}

export function buildOption(option) {
    return `<option value="${option.departmentId
    }"> ${option.displayName
    }
    </option>`
}



// global variables
let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,email, location, phone, dob &noinfo &nat=US`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");


// fetch data from API
fetch(urlAPI)
.then(res => res.json())
.then(res => res.results)
.then(displayEmployees)
.catch(err => console.log(err))

function displayEmployees(employeeData) {
  
    employees = employeeData;
  
    // store the employee HTML as we create it
    let employeeHTML = '';
  
    // loop through each employee and create HTML markup
    employees.forEach((employee, index) => {
    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let picture = employee.picture;
      
    // template literals make this so much cleaner!
    employeeHTML += `
      <div class="card" data-index="${index}">
        <img class="avatar" src="${picture.large}" />
        <div class="text-container">
          <h2 class="name">${name.first} ${name.last}</h2>
          <p class="email">${email}</p>
          <p class="address">${city}</p>
        </div>
      </div>
    `
  });
  
    gridContainer.innerHTML = employeeHTML;
}


///////////////////////////////////////////////////////////////

function displayModal(index) {
  
    // use object destructuring make our template literal cleaner
    let { name, dob, phone, email, location: { city, street, state, postcode}, picture } = employees[index];
  
    let date = new Date(dob.date);

    const modalHTML = `
        <img class="avatar" src="${picture.large}" />
        <div class="text-container">
        <h2 class="name">${name.first} ${name.last}</h2>
        <p class="email">${email}</p>
        <p class="address">${city}</p>
        <hr />
        <p>${phone}</p>
/ / / / <p class="address">${street}, ${state} ${postcode}</p>
        <p>Birthday:
        ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
        </div>
    `;
  
  //////////////////////////////////////////////////////////////////
  
  

    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;
   }


    gridContainer.addEventListener('click', e => {

        if (e.target !== gridContainer) {
            const card = e.target.closest(".card");
            const index = card.getAttribute('data-index')
            displayModal(index);
      }
    });


    modalClose.addEventListener('click', () => {
        overlay.classList.add("hidden");
        });











































// // global variables
// let employees = [];
// const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
// email, location, phone, dob &noinfo &nat=US`
// const gridContainer = document.querySelector(".grid-container");
// const overlay = document.querySelector(".overlay");
// const modalContainer = document.querySelector(".modal-content");
// const modalClose = document.querySelector(".modal-close");


// // fetch data from API
// fetch(urlAPI)
// .then(res => res.json())
// .then(res => res.results)
// .then(displayEmployees)
// .catch(err => console.log(err))

// function displayEmployees(employeeData) {
//     employees = employeeData;
//     // store the employee HTML as we create it
//     let employeeHTML = '';
//     // loop through each employee and create HTML markup
//     employees.forEach((employee, index) => {
//     let name = employee.name;
//     let email = employee.email;
//     let city = employee.location.city;
//     let picture = employee.picture;
//     // template literals make this so much cleaner!
//     employeeHTML += `
//     <div class="card" data-index="${index}">
//     <img class="avatar" src="${picture.large}" />
//     <div class="text-container">
//     <h2 class="name">${name.first} ${name.last}</h2>
//     <p class="email">${email}</p>
//     <p class="address">${city}</p>
//     </div>
//     </div>
//     `
//     });
//     gridContainer.innerHTML = employeeHTML;
// }


// function displayModal(index) {
//     // use object destructuring make our template literal cleaner
//     let { name, dob, phone, email, location: { city, street, state, postcode
//     }, picture } = employees[index];
//     let date = new Date(dob.date);

//     const modalHTML = `
//         <img class="avatar" src="${picture.large}" />
//         <div class="text-container">
//         <h2 class="name">${name.first} ${name.last}</h2>
//         <p class="email">${email}</p>
//         <p class="address">${city}</p>
//         <hr />
//         <p>${phone}</p>
//         <p class="address">${street}, ${state} ${postcode}</p>
//         <p>Birthday:
//         ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
//         </div>
//     `;

//     overlay.classList.remove("hidden");
//     modalContainer.innerHTML = modalHTML;
//     }


//     gridContainer.addEventListener('click', e => {

//         if (e.target !== gridContainer) {
//             const card = e.target.closest(".card");
//             const index = card.getAttribute('data-index')
//             displayModal(index);
//         }
//     })


//     modalClose.addEventListener('click', () => {
//         overlay.classList.add("hidden");
//         });














// //const main = document.querySelector('main');
// //const url = `https://randomuser.me/api/`;
// //const result = fetch(url)
// //           .then(response => response.json())
// //           .then(obj => obj.results[0])
// //           .catch(err => `Oops! An error occurred: ${err}`);

// //result.then(info => console.log(info.picture.medium));


// //const url = `https://randomuser.me/api/`;
// //console.log(fetch(url)
// //           .then(response => response.json())
// //           .then(obj => obj.results[0])
// //           .then(result => result.email)
// //           );


// //html = `<div  class="card">
// //      <img  class="avatar" src="${result.then(info => info.picture.large)}">
// //      <div class="text-container">
// //          <h2 class="name">First - Last</h2>
// //          <p class="email">something.gmail.com</p>
// //          <p class="adress">City</p>
// //      </div>
// //    </div>`;

// //main.innerHTML = html;


// //const addTwo = (n) => n + 2;


// //function addProfile(profile) {
// //  const div = document.createElement('div');
// //  div.style.display = 'none';
// //  div.className = 'card';
// //  profile.then(info => makeCardImage(info, div));
// //}
// //
// //


// //const picture = result.then(result => result.picture.large)
// //const html = `<div  class="card">
// //      <img  class="avatar" src="${result.picture.large}">
// //      <div class="text-container">
// //          <h2 class="name">First - Last</h2>
// //          <p class="email">something.gmail.com</p>
// //          <p class="adress">City</p>
// //      </div>
// //    </div> `


// //main.innerHTML = html;
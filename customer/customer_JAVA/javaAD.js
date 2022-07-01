// localStorage.removeItem('records');

let num = 1;

const properties= [
    {
        
        image: "../image/008-592x444.jpg",
        title: "New Apartment",
        price: '125,000',
        address: "6701 South Dixie Highway, Miami, FL, USA",
        beds: 2,
        baths: 2,
        parking: 2,
        area: 1987,
        type: "Apartment",
        years: "2 years",
        name: "John James"
        
    },
    {
     
        image: "../image/012-592x444.jpg",
        title: "Apartment For Sale",
        price: '876,000',
        address: "6701 South Dixie Highway, Miami, FL, USA",
        beds: 3,
        baths: 2,
        parking: 2,
        area: 2541,
        type: "Apartment",
        years: "2 years",
        name: "John James"
    },
    {
     
        image: "../image/018-592x444.jpg",
        title: "Renovated Apartment",
        price: '485,000',
        address: "6701 South Dixie Highway, Miami, FL, USA",
        beds: 4,
        baths: 2,
        parking: 2,
        area: 3650,
        type: "Apartment",
        years: "2 years",
        name: "John James"
    },
    {
       
        image: "../image/020-592x444.jpg",
        title: "Apartment Complex",
        price: '567,000',
        address: "7900 Northwest 27th Avenue, FL, USA",
        beds: 2,
        baths: 2,
        parking: 2,
        area: 2345,
        type: "Apartment",
        years: "2 years",
        name: "John James"
    },
    {
     
        image: "../image/008-592x444.jpg",
        title: "New Apartment",
        price: '125,000',
        address: "6701 South Dixie Highway, Miami, FL, USA",
        beds: 2,
        baths: 2,
        parking: 2,
        area: 1987,
        type: "Apartment",
        years: "2 years",
        name: "John James"
        
    },
    {
     
        image: "../image/012-592x444.jpg",
        title: "Apartment For Sale",
        price: '876,000',
        address: "6701 South Dixie Highway, Miami, FL, USA",
        beds: 3,
        baths: 2,
        parking: 2,
        area: 2541,
        type: "Apartment",
        years: "2 years",
        name: "John James"
    },
    {
     
        image: "../image/018-592x444.jpg",
        title: "Renovated Apartment",
        price: '485,000',
        address: "6701 South Dixie Highway, FL, USA",
        beds: 4,
        baths: 2,
        parking: 2,
        area: 3650,
        type: "Apartment",
        years: "2 years",
        name: "John James"
    },
    {
   
        image: "../image/020-592x444.jpg",
        title: "Apartment Complex",
        price: '567,000',
        address: "7900 Northwest 27th Avenue, FL, USA",
        beds: 2,
        baths: 2,
        parking: 2,
        area: 2345,
        type: "Apartment",
        years: "2 years",
        name: "John James"
    },
    {
    
        image: "../image/018-592x444.jpg",
        title: "Renovated Apartment",
        price: '485,000',
        address: "6701 South Dixie Highway, Miami, FL, USA",
        beds: 4,
        baths: 2,
        parking: 2,
        area: 3650,
        type: "Apartment",
        years: "2 years",
        name: "John James"
    },
    {
      
        image: "../image/020-592x444.jpg",
        title: "Apartment Complex",
        price: '567,000',
        address: "7900 Northwest 27th Avenue, FL, USA",
        beds: 2,
        baths: 2,
        parking: 2,
        area: 2345,
        type: "Apartment",
        years: "2 years",
        name: "John James"
    },
];

window.localStorage.setItem('records', JSON.stringify(properties));

console.log(('records', JSON.stringify(properties)));

let container1 = document.getElementById("records")

console.log(properties[0]);

for(var i = 0; i < localStorage.getItem("records").length; i++){
    container1.innerHTML += `  
   
    <tr class="text-start" scope="row">
    <td>${properties[i].id,num++}</td>
    <td class="col-1"><img src="${properties[i].image}" style="width: 100%" defer></td>
    <td>${properties[i].title}</td>
    <td class="col-2">${properties[i].address}</td>
    <td>${properties[i].type}</td>
    <td>$${properties[i].price}</td>
    <td>${properties[i].area} sq ft</td>
    <td>${properties[i].name}</td>
    <td><br><a class="px-2" onClick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></a>
    
    <a onClick="onDelete(this)"><i class="fa-solid fa-trash-can"></i></a></td>
  </tr>
               
    `
  };

  function sortBy(){
    document.getElementById('sort').innerHTML = lists.sort();
}

function addData() {
    // e.preventDefault();
    lists.push(
        {
            task: document.getElementById('task').value,
            completed: false
        }
    );
    // Save data to a localstorage
    localStorage.setItem('records',JSON.stringify(lists));
}

document.querySelector('#addRecord').addEventListener('click', addData);

function loadData() {
    // used to display on console
    console.table(lists);
//   used to display on html
    lists.forEach((item) => {
        document.getElementById('output').innerHTML += `
              <li class="d-flex justify-content-between border-bottom border-3">
              <input class="form-check-input me-1" type="checkbox" id="complete">
              <span>${item.task}</span>
              <i class="fa fa-trash" id="remove" onclick="removeData()">del</i>
              </li>
              `;
      });
}

loadData();

// REMOVE INFO FROM LOCAL STORAGE
// localStorage.removeItem("property");

// localstorage
// create info
// let properties = JSON.parse(localStorage.getItem('property')) ? 
// JSON.parse(localStorage.getItem('propery')) : 
// [
//     {
        
//         image: "../image/008-592x444.jpg",
//         title: "New Apartment",
//         price: '125,000',
//         address: "6701 South Dixie Highway, Miami, FL, USA",
//         beds: 2,
//         baths: 2,
//         parking: 2,
//         area: 1987,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
        
//     },
//     {
     
//         image: "../image/012-592x444.jpg",
//         title: "Apartment For Sale",
//         price: '876,000',
//         address: "6701 South Dixie Highway, Miami, FL, USA",
//         beds: 3,
//         baths: 2,
//         parking: 2,
//         area: 2541,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
//     },
//     {
     
//         image: "../image/018-592x444.jpg",
//         title: "Renovated Apartment",
//         price: '485,000',
//         address: "6701 South Dixie Highway, Miami, FL, USA",
//         beds: 4,
//         baths: 2,
//         parking: 2,
//         area: 3650,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
//     },
//     {
       
//         image: "../image/020-592x444.jpg",
//         title: "Apartment Complex",
//         price: '567,000',
//         address: "7900 Northwest 27th Avenue, FL, USA",
//         beds: 2,
//         baths: 2,
//         parking: 2,
//         area: 2345,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
//     },
//     {
     
//         image: "../image/008-592x444.jpg",
//         title: "New Apartment",
//         price: '125,000',
//         address: "6701 South Dixie Highway, Miami, FL, USA",
//         beds: 2,
//         baths: 2,
//         parking: 2,
//         area: 1987,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
        
//     },
//     {
     
//         image: "../image/012-592x444.jpg",
//         title: "Apartment For Sale",
//         price: '876,000',
//         address: "6701 South Dixie Highway, Miami, FL, USA",
//         beds: 3,
//         baths: 2,
//         parking: 2,
//         area: 2541,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
//     },
//     {
     
//         image: "../image/018-592x444.jpg",
//         title: "Renovated Apartment",
//         price: '485,000',
//         address: "6701 South Dixie Highway, FL, USA",
//         beds: 4,
//         baths: 2,
//         parking: 2,
//         area: 3650,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
//     },
//     {
   
//         image: "../image/020-592x444.jpg",
//         title: "Apartment Complex",
//         price: '567,000',
//         address: "7900 Northwest 27th Avenue, FL, USA",
//         beds: 2,
//         baths: 2,
//         parking: 2,
//         area: 2345,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
//     },
//     {
    
//         image: "../image/018-592x444.jpg",
//         title: "Renovated Apartment",
//         price: '485,000',
//         address: "6701 South Dixie Highway, Miami, FL, USA",
//         beds: 4,
//         baths: 2,
//         parking: 2,
//         area: 3650,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
//     },
//     {
      
//         image: "../image/020-592x444.jpg",
//         title: "Apartment Complex",
//         price: '567,000',
//         address: "7900 Northwest 27th Avenue, FL, USA",
//         beds: 2,
//         baths: 2,
//         parking: 2,
//         area: 2345,
//         type: "Apartment",
//         years: "2 years",
//         name: "John James"
//     },
// ];

// console.log(localStorage);

// function addProperty(p) {
//     p.preventDefault();
//     properties.push(
//         {
//             id: properties.length + 1,
//             image: parse(document.querySelector('#image').value),
//             title: parse(document.querySelector('#title').value),
//             category: parse(document.querySelector('#category').value),
//             price: parseInt(document.querySelector('#price').value),
//             size: parseInt(document.querySelector('#size').value),
//             author: parse(document.querySelector('#author').value),
//         },
//     );
//     localStorage.setItem('employees', JSON.stringify(properties));
//     //
//     readProperty();
// }

// document.querySelector("output").addEventListener("property", addProperty);

// function readProperty(){

//     let display = document.querySelector('#records');
//     display.innerHTML = "";
//     for(var i = 0; i < localStorage.getItem("property").length; i++){
//             container1.innerHTML += `  
//             <tr class="text-start" scope="row">
//             <td>${properties[i].id}</td>
//             <td class="col-1"><img src="${properties[i].image}" style="width: 100%" defer></td>
//             <td>${properties[i].title}</td>
//             <td class="col-2">${properties[i].address}</td>
//             <td>${properties[i].type}</td>
//             <td>$${properties[i].price}</td>
//             <td>${properties[i].area} sq ft</td>
//             <td>${properties[i].name}</td>
//             <td><br><a class="px-2" onClick="onEdit(this)"><i class="fa-solid fa-pen-to-square"></i></a>
            
//             <a onClick="onDelete(this)"><i class="fa-solid fa-trash-can"></i></a></td>
//           </tr>
                       
//             `
//           };
// }

// // stringify data in local storage
// window.localStorage.setItem('records', JSON.stringify(properties));

// console.log(('records', JSON.stringify(properties)));


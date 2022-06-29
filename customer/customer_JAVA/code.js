const properties= [
    {
        id: 1,
        image: "../image/008-592x444.jpg",
        title: "New Apartment",
        price: '$125,000',
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
        id: 2,
        image: "../image/012-592x444.jpg",
        title: "Apartment For Sale",
        price: '$876,000',
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
        id: 3,
        image: "../image/018-592x444.jpg",
        title: "Renovated Apartment",
        price: '$485,000',
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
        id: 4,
        image: "../image/020-592x444.jpg",
        title: "Apartment Complex",
        price: '$567,000',
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
        id: 5,
        image: "../image/008-592x444.jpg",
        title: "New Apartment",
        price: '$125,000',
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
        id: 6,
        image: "../image/012-592x444.jpg",
        title: "Apartment For Sale",
        price: '$876,000',
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
        id: 7,
        image: "../image/018-592x444.jpg",
        title: "Renovated Apartment",
        price: '$485,000',
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
        id: 8,
        image: "../image/020-592x444.jpg",
        title: "Apartment Complex",
        price: '$567,000',
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
        id: 9,
        image: "../image/018-592x444.jpg",
        title: "Renovated Apartment",
        price: '$485,000',
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
        id: 10,
        image: "../image/020-592x444.jpg",
        title: "Apartment Complex",
        price: '$567,000',
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


const myJSON = JSON. stringify(properties);
let container1 = document.getElementById("some");


console.log(properties[0]);

for(var i = 0; i < properties.length; i++){
  container1.innerHTML += `  
 
  <tr class="text-start" scope="row">
  <td>${properties[i].id}</td>
  <td class="col-1"><img src="${properties[i].image}" style="width: 100%" defer></td>
  <td>${properties[i].title}</td>
  <td>${properties[i].type}</td>
  <td>${properties[i].price}</td>
  <td>${properties[i].area} sq ft</td>
  <td>${properties[i].name}</td>
</tr>
             
  `
};


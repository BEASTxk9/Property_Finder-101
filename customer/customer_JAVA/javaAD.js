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

//  saving on local storage
localStorage.setItem("records", JSON.stringify(properties));

let r = JSON.parse( localStorage.getItem('records')) ?
JSON.parse( localStorage.getItem('records')) : properties;

const myJSON = JSON. stringify(properties);
let container = document.getElementById("somet");


console.log(properties[0]);

for(var i = 0; i < localStorage.getItem("records").length; i++){
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

  var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["image"] = document.getElementById("image").value;
    formData["title"] = document.getElementById("title").value;
    formData["category"] = document.getElementById("category").value;
    formData["price"] = document.getElementById("price").value;
    formData["size"] = document.getElementById("size").value;
    formData["author"] = document.getElementById("author").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = data.id;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.image;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.title;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.category;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.price;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.size;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.author;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    document.getElementById("size").value = "";
    document.getElementById("author").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("image").value = selectedRow.cells[1].innerHTML;
    document.getElementById("title").value = selectedRow.cells[2].innerHTML;
    document.getElementById("category").value = selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = selectedRow.cells[4].innerHTML;
    document.getElementById("size").value = selectedRow.cells[5].innerHTML;
    document.getElementById("author").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.image;
    selectedRow.cells[2].innerHTML = formData.title;
    selectedRow.cells[3].innerHTML = formData.category;
    selectedRow.cells[4].innerHTML = formData.price;
    selectedRow.cells[5].innerHTML = formData.size;
    selectedRow.cells[6].innerHTML = formData.author;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("id").value == "") {
        isValid = false;
        document.getElementById("idValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("idValidationError").classList.contains("hide"))
            document.getElementById("idValidationError").classList.add("hide");
    }
    return isValid;
}



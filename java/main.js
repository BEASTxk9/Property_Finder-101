// fetch data from local storage
JSON.parse(window.localStorage.getItem("records")); 
 
let container1 = document.getElementById("records");


for(var i = 0; i < properties.length; i++){
    container.innerHTML += `
    <div class="p-3">
          <div id="card" class="p-3">
          <img src="${properties[i].image}" width="40%" defer>
          <h5>${properties[i].title}</h5>
          <p>${properties[i].address}</p>
          <p><i class="fa-solid fa-bed"></i>: ${properties[i].beds} 
          <i class="fa-solid fa-shower"></i>: ${properties[i].baths} 
           <i class="fa-solid fa-car"></i>: ${properties[i].parking} 
           <i class="bi bi-rulers"></i>: ${properties[i].area} sq ft
           </p>
           <p><b>${properties[i].type}</b></p>
           <hr>
           <div class="row">
           <div class="col-6 text-start"><p><i class="fa-solid fa-user"></i> ${properties[i].name}</p></div>
           <div class="col-6 text-end"><p><i class="fa-solid fa-link"></i> ${properties[i].years}</p></div>
           </div>
  
  
          </div>
        </div>`
  };
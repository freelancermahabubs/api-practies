const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  const resultContainer = document.getElementById("result-container");

person.result.forEach(person => {

  const personDiv = document.createElement("div");
  
 personDiv.innerHTML = ` 
 <div class="accordion-item">
 <h2 class="accordion-header" id="headingOne">
   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     Person Name: ${person.name.common}
   </button>
 </h2>
 <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
   <div class="accordion-body">
     <p>isMeal: ${person.isMale === false? 'Meal' : 'Female'}</p>
     <p>Person Age: ${person.age}</p>
     <p>Street: ${person.address.street}</p>
   </div>
 </div>
</div>

 `
  resultContainer.appendChild(personDiv);
});

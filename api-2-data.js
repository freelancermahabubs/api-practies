const data = [
    {
      _id: "60795d4e0489a32f948c4167",
      name: "Honda Sedan",
      price: "132",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
      imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
      _id: "60795e440489a32f948c4168",
      name: "MitoSedan",
      price: "221",
      description:
        "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
    },
    {
      _id: "60795fc20489a32f948c4169",
      name: "Isuzu Tacoma",
      price: "105",
      description:
        "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
      imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
    },

  ];

  const carDetailsContainer = document.getElementById('car-details-container');
  data.forEach(carData =>{
    console.log(carData)
    const carDetailsDiv = document.createElement('div');
    carDetailsDiv.innerHTML = ` 
    <div class="card" style="width: 18rem;">
          <img src="${carData.imageURL}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">CarName: ${carData.name}</h5>
            <p class="card-text">Car Details: ${carData.description}</p>
            <a href="#" class="btn btn-primary">Car Price: $${carData.price}</a>
          </div>
        </div>
    `
    carDetailsContainer.appendChild(carDetailsDiv);
  })
 
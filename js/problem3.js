const loadRestCountry = async() =>{
  const url = `https://restcountries.com/v3.1/region/africa?fbclid=IwAR2btR2wJJdJ4ZC1q8JdcZSTeFOs8fsRJkYnUaFP90aDRTyXR1oxeVR-b1s`;
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayAfrica(data);

  }catch(error){
    console.log(error);
  }
};
const restCountyContainer = document.getElementById('retsCountry-Container');
const displayAfrica = africa =>{
  africa.forEach(africaInfo =>{
    console.log(africaInfo)
  const countryDiv = document.createElement('div');
  countryDiv.innerHTML = `

  `;

  });
}

loadRestCountry()
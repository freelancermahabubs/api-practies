const handleSearch = () =>{
  const inputText = document.getElementById('input-feild').value;
 if(inputText){
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`)
  .then(res => res.json())
  .then(data => {
    if(data.title === 'No Definitions Found'){
      alert(data.message);
    }
    else{
      displayResult(data);
    }
  })
  
 }
 else{
  alert("empty input field")
 }
};

const displayResult = (data) =>{
  const parent = document.getElementById('audio-container');
  data[0].phonetics.forEach(element =>{
    // console.log(element)
    const audio = document.createElement("audio");
    audio.src = element.audio;

    const button = document.createElement('button');
    button.innerHTML = "Play";
    button.onclick = () =>{
      audio.play();
    }
    const container = document.createElement('div');
    container.appendChild(button);
    container.appendChild(audio)
    parent.appendChild(container);
  });
  // console.log(parent)
}

// Problem 07

const loadGithubUsersDetails = () =>{

  fetch('https://api.github.com/users?per_page=10')
  .then(res => res.json())
  .then(data => displayGigHubUsers(data))

};

const displayGigHubUsers = (data) =>{
const parent = document.getElementById('user-container');
console.log(data)
data.forEach(user => {
fetch(user.followers_url)
.then(res => res.json())
.then(data => {
  const div = document.createElement('div');
  div.classList.add('card')
  div.innerHTML = `
  <img class="img-fluid" src="${user.avatar_url}" alt="">
  <h4>${user.login}</h4>
  <div>Followers:
  <img class="img-fluid" src="${data[0].avatar_url}" alt="">
  <img class="img-fluid" src="${data[0].avatar_url}" alt="">
  </div>
  `;
  parent.appendChild(div)
});

})
}


const memeButton = document.querySelector(".meme-generator .generator-memme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, name) =>{
memeImage.setAttribute("src",url);
memeTitle.innerHTML = name;
memeAuthor.innerHTML = name;
memeImage.classList.add("border-4", "border-solid", "border-neutral-600");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const generateMeme = () => {
    fetch("https://api.imgflip.com/get_memes")
    .then(
        (response) => response.json())
    .then(data => {
          const result = data.data.memes[getRandomInt(100)];
        updateDetails(data.data.memes[getRandomInt(100)].url, data.data.memes[getRandomInt(100)].name)
              
           
        })

};

memeButton.addEventListener("click", generateMeme);


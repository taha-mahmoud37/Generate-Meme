

const generateMemeBtn = document.querySelector('.meme-btn');
const memeTitle = document.querySelector('.meme-title');
const memeImg = document.querySelector('.meme-img');
const memeAuthor = document.querySelector('.meme-author');
console.log(generateMemeBtn, memeAuthor, memeImg , memeTitle)




const generateMeme = () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((Response) => Response.json())
    .then(data => memeDetails(data))
}

generateMemeBtn.addEventListener('click', generateMeme);

generateMeme();
const memeDetails = (data) => {
    memeTitle.innerHTML = data.title;
    memeImg.setAttribute('src', data.url);
    memeAuthor.textContent = `Meme by: ${data.author}`;
}

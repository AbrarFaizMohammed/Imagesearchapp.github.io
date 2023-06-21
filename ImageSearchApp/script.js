const accessKey = "sCt7htgSqoDHFF-DatTG_nGAkq-3hPi_DU47rpc6B8E"

const formElement = document.querySelector("form")
const inputElement = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("smbutton")
const showMorebutton = document.getElementById("showMore")

let inputData=""
let page=1

async function searchImages()
{
    inputData = inputElement.value
    console.log(inputData)
    const url = 'https://api.unsplash.com/search/photos?page='+page+'&query='+inputData+'&client_id='+accessKey;

    const response = await fetch(url)
    const data = await response.json()

    console.log(data);

    const results = data.results
    console.log(results)
    if(page === 1)
    {
        searchResults.innerHTML =""
    }

    results.map((result)=>{
        const imagewrapper = document.createElement('div')
        imagewrapper.classList.add("mb-14", "mx-8","lg:w-1/4",  "md:w-2/4", "sm:w-3/5", "h-1/3", "rounded", "shadow-md", "overflow-hidden")

        const image = document.createElement("img")
        image.src= result.urls.regular
        image.alt = result.alt_description
        image.classList.add("w-full", "h-full", "object-cover", "hover:opacity-80")

        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description
        imageLink.classList.add("capitalize", "px-10")

        imagewrapper.appendChild(image)
        imagewrapper.appendChild(imageLink)
        searchResults.appendChild(imagewrapper)
    });

    page++

    if(page>1)
    {
        showMorebutton.style.display = "block"
    }
}

formElement.addEventListener("submit",(Event)=>{
    Event.preventDefault()
    page=1
    searchImages()
})

showMorebutton.addEventListener("click",()=>{
    searchImages()
})
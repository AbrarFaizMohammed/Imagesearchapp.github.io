function Search() {
    const searchbox = document.getElementById("search-iteam").value.toUpperCase();
    // const productIteamsList = document.getElementById("ProductListIteams");
    const productList = document.querySelectorAll(".ProductIteam");
    const productName = document.getElementsByTagName("h2");


    for(var i=0; i<productName.length;i++)
    {
        let match = productList[i].getElementsByTagName("h2")[0];
        
        if(match)
        {
            let textValue  =  match.textContent || match.innerHTML;
            if(textValue.toUpperCase().indexOf(searchbox) == -1)
            {
                productList[i].classList.add("hidden");
            }
        }
    }
}
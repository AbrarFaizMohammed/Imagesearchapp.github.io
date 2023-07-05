const LogoDesignImages = document.querySelectorAll(".LogoDesign");
const WebDesignImages = document.querySelectorAll(".WebDesign");
const MobileAppImages = document.querySelectorAll(".MobileApp");

function removeClassName()
{
    removehiddenClass(LogoDesignImages);
    removehiddenClass(WebDesignImages);
    removehiddenClass(MobileAppImages);
}

function logoImgDisplay()
{
    removeClassName();
    hiddenImages(WebDesignImages);
    hiddenImages(MobileAppImages);
}

function WebImgDisplay()
{
    removeClassName();
    hiddenImages(LogoDesignImages);
    hiddenImages(MobileAppImages);
}

function MobileAppDisplay()
{
    removeClassName();
    hiddenImages(LogoDesignImages);
    hiddenImages(WebDesignImages);
}

function hiddenImages(Name)
{
    for(var i=0; i< Name.length;i++)
    {
        Name[i].classList.add("hidden");
    }
}

function removehiddenClass(Name)
{
    for(var i=0; i< Name.length;i++)
    {
        Name[i].classList.remove("hidden");
    }
}
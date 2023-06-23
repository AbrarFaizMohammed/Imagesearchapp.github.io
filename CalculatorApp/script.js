(function(){
    
    let screen = document.getElementById("screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.getElementById("clear");
    let equal = document.getElementById("equal");

   
    buttons.forEach(function(button)
    {
        button.addEventListener('click',function(isActiveEvent)
        {
            let data = isActiveEvent.target.dataset.value;
            screen.value += data;
        })
    })

   
    equal.addEventListener('click', function(e){
        if(screen.value === '')
        {
            screen.value="";
        }
        else{

            let result = eval(screen.value);
            screen.value = result;
        }
    })

    clear.addEventListener('click',screenClear);

    function screenClear()
    {
        screen.value = "";
    }

   
})();
(function () {
    const personPic = document.getElementsByClassName("image")[0];
    const personName = document.getElementsByClassName("Name")[0];
    const personComments = document.getElementsByClassName("comments")[0];

    const btn = document.getElementsByClassName("btn");
   
    let index = 0;
    const customers = [];

    function customer(img, name, comment) {
        this.img = img;
        this.name = name;
        this.comment = comment;
    }

    function createCustomer(img, name, comment) {

        let Img = `Images/person${img}.jpg`;
        let cust = new customer(Img, name, comment);
        customers.push(cust);
    }


    createCustomer(1, 'Abrar Faiz', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime officiis possimus officia repellendus iure perferendis facilis laborum soluta provident adipisci, cumque dolores qui sapiente vero veritatis enim debitis illum?");
    createCustomer(2, 'Sheila Ki Jawani', "facilis laborum soluta provident adipisci, cumque dolores qui sapiente vero veritatis enim debitis illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime officiis possimus officia repellendus iure perferendis ");
    createCustomer(3, 'Ravi', " Et maxime officiis possimus officia repellendus iure perferendis facilis laborum soluta Lorem ipsum dolor sit amet consectetur adipisicing elit. provident adipisci, cumque dolores qui sapiente vero veritatis enim debitis illum?");
    createCustomer(4, 'Vishnu Vulli', " soluta provident adipisci, cumque dolores qui sapiente vero veritatis enim debitis illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime officiis possimus officia repellendus iure perferendis");
    

    Array.from(btn).forEach(function(button) {
        
        button.addEventListener('click',function(e) {
            if(e.target.parentElement.classList.contains('prebtn'))
            {
                
                if(index === 0)
                {
                    index = customers.length;
                }
                index--;
                
                personPic.src = customers[index].img;
                personName.innerHTML = customers[index].name;
                personComments.innerHTML = customers[index].comment;
                console.log(personPic);
            }

            if(e.target.parentElement.classList.contains('nextbtn'))
            {
                
                if(index ===customers.length)
                {
                    index = 0;
                }
                personPic.src = customers[index].img;
                personName.innerHTML = customers[index].name;
                personComments.innerHTML = customers[index].comment;
                
                index++;
            }
        })
    })

})()
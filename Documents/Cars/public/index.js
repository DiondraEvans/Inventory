console.log("js file connected");


let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () => {


let price = +document.getElementById('price-input').value;
let inventoryNum = +document.getElementById('inventNum-input').value;
let date = document.getElementById('nextDelivery-input').value;
let amount = +document.getElementById('deliveryAmt-input').value;
let name = document.getElementById('nameString-input').value 
let image = document.getElementById('image-url').value

const item = {
    price,
    inventoryNum,
    date,
    amount,
    name,
    image
}
    console.log(JSON.stringify(item));

    let response =  await fetch('http://localhost:5000/create_cars', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            
     })
    

});

let button = document.getElementById("button")
const display = document.querySelector('#display')


//  let databaseData = await fetch("/database_data");
//     databaseData.json().then((parsedData) => {
//         parsedData.forEach((object) => {
//             let content = document.createElement("p");
//             content.innerHTML = object.name;
//             array.forEach((slide) => {
//             slide.appendChild(content);
//             });
//             // container.forEach(slide)
//         });
     

//     });
button.addEventListener('click', async() =>{

    //To be able to store user input in a variable, we need to create a function that is called once the user presses the button. 
    //we stored the user input below to captire the value stores and then proceed with the rest of the function
    searchInput = document.getElementById("search-input").value
    //console.log the search input to certify it was captured (not necessary)
    console.log(searchInput);
    //grabbing data from the server and saving it to a variable
    let data = await fetch("/get_Inventory_data");

    //we need to parse the data from the object so that it is readable. I used the then function
    data.json().then((parsedData) => {
        display.innerHTML = ""
        //for each object in the parsed data, if it matches the user input then display the name in the display box.
        parsedData.forEach((object) =>{
            //filter for price of name
            if(object.name.toLowerCase() == searchInput.toLowerCase() || object.price == searchInput){
                display.style.border = "1px solid #b481f7"
                let divBox = document.createElement('div');
                divBox.style.width ="100%"
               
                
                let image = document.createElement('img');
                    image.src = object.img;
                    image.style.borderRadius ="10px";
                    image.style.width ="40%";
                    divBox.appendChild(image);
                
                    let nameOfCar = document.createElement('p')
                    nameOfCar.innerHTML = object.name;
                    divBox.appendChild(nameOfCar);

                    let priceOfCar = document.createElement('p')
                    priceOfCar.innerHTML = `Price: $${object.price}`;
                    divBox.appendChild(priceOfCar);
                    
                    let inventoryNum = document.createElement('p')
                    inventoryNum.innerHTML = `Amount in inventory: ${object.inventoryNum}`;
                    divBox.appendChild(inventoryNum);

                    
                    let deliveryAmt = document.createElement('p')
                    deliveryAmt.innerHTML = `Max delivery amount: ${object.amount}`;
                    divBox.appendChild(deliveryAmt);
                    
                    display.appendChild(divBox)
                // let array = Object.values(object)
                // if(array[1] == "price"){
                //     array[1] = "price:"
                    
                // }
                //     array.forEach((element) =>{
                //     let response = element;
                //     let specificItem = document.createElement("p")
                //     specificItem.textContent = response;
                //     display.appendChild(specificItem)
                    
                // }
            }
            //a condition to test that means if user types all or all cars, then put every object in the database in a div to display on the page
            else if (searchInput.toLowerCase() == "all" || searchInput.toLowerCase() == "all cars"){
                display.style.border = "1px solid #b481f7"
                let divBox = document.createElement('div');
                divBox.style.width ="100%"
                
                let image = document.createElement('img');
                image.src = object.img;
                image.style.borderRadius ="10px";
                image.style.width ="40%";
                divBox.appendChild(image);
            
                let nameOfCar = document.createElement('p')
                nameOfCar.innerHTML = object.name;
                divBox.appendChild(nameOfCar);

                let priceOfCar = document.createElement('p')
                priceOfCar.innerHTML = `Price: $${object.price}`;
                divBox.appendChild(priceOfCar);
                
                let inventoryNum = document.createElement('p')
                inventoryNum.innerHTML = `Amount in inventory: ${object.inventoryNum}`;
                divBox.appendChild(inventoryNum);

                
                let deliveryAmt = document.createElement('p')
                deliveryAmt.innerHTML = `Max delivery amount: ${object.amount}`;
                divBox.appendChild(deliveryAmt);
                
                display.appendChild(divBox)

            }    
    
        })        
    })
   
          
})


 // getParsedData = await data.json();
 // for(let i = 0; i < getParsedData; i++){
    //          if(getParsedData[i].name == searchInput){
    //             console.log(getParsedData[i].name)
    //             let specificItem = document.createElement("p")
    //             specificItem.textContent = object.name;
    //             display.appendChild(specificItem)
    //         }
    // }
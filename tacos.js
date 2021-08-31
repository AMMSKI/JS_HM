const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]


//-----------------------------------------------------------------------------------------------------------------------

// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"
const changeName = (taco) => {
  newObj = {...taco, name: "changed"}
  return newObj
}

console.log(changeName(taco1))

//-----------------------------------------------------------------------------------------------------------------------

//this function loops through the array and give me back a new array with the changed name on the correct object

              // const changeNameArr = (id) => {
              //   tacoToBeChanged = tacos.map((t) => t.id === id ? {...t, name: 'changed'} : t)
              //   return tacoToBeChanged
              // }


//----- this is the same function as above but with the shorthand for practice-------

const changeNameArr = (id) => tacos.map((t) => t.id === id ? {...t, name: 'changed'} : t)

console.log(changeNameArr(2))

// Just double checking that the original array was not altered 
console.log(tacos)

//-----------------------------------------------------------------------------------------------------------------------

// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)

            // const tacoInfo = ({name, price}) => {
            //   return `This great taco is called ${name} and costs: $${price}`
            // }

const tacoInfo = ({name, price}) => `This great taco is called ${name} and costs: $${price}`

console.log(tacoInfo(taco1))

//-----------------------------------------------------------------------------------------------------------------------

// write a function that takes an tacoOBJ and return formatted price with .00

//Found the toFixed() method to add a deximal and two demcimal places on an number in JS
const tacoPrice = ({price}) => `The price of this taco is $${price.toFixed(2)}  wow thats expensive !!`

console.log(tacoPrice(taco2))

//-----------------------------------------------------------------------------------------------------------------------

// create a new array where all of the prices is formatted with .00

  let newArr = tacos.map((t) => {
    let new_price = t.price.toFixed(2)
    return {id: t.id, name: t.name, price: new_price, about: t.about}
  })

console.log(newArr)

// Testing here to make sure the original array was unchanged 
// console.log('test here ----------')
// console.log(tacos)

//-----------------------------------------------------------------------------------------------------------------------

// write a function that takes an array and logs each item in the array
// hint forEach
          // const printTaco = (arr) => {
          //   arr.forEach((taco) => {
          //     console.log(taco)
          //   })
          // }

const printTaco = (arr) => arr.forEach((taco) => console.log(taco))

printTaco(tacos)

//-----------------------------------------------------------------------------------------------------------------------

// use the find method to return the object with id:1
          // const findTaco = (id) => {
          //   foundTaco = tacos.find((taco) => taco.id === id)
          //   return foundTaco
          // }

const findTaco = (id) => tacos.find((taco) => taco.id === id)

console.log(findTaco(2))

//-----------------------------------------------------------------------------------------------------------------------

// return a new array with all prices greater than 19

const highPricedTacos = () => tacos.filter((taco) => taco.price > 19 )

console.log(highPricedTacos())

//-----------------------------------------------------------------------------------------------------------------------

// return a new array with a 'about' key where it is a combo of
// name price and about

const aboutArr = tacos.map((taco) => {
  let new_about = `The ${taco.name} taco costs $${taco.price} and is ${taco.about}`

  return {id: taco.id, name: taco.name, price: taco.price, about: new_about}
})

console.log(aboutArr)

//-----------------------------------------------------------------------------------------------------------------------



///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)


//-----------------------------------------------------------------------------------------------------------------------

// READ (array of obj to array of html) 

const returnhtml = (arr) => {
  return arr.map((t) => [`<h1>${t.name}</h1>`, `<h2>${t.price}</h2>`, `<h2>${t.about}</h2>`])
}

console.log(returnhtml(tacos))

//-----------------------------------------------------------------------------------------------------------------------

// Update (update a taco) 

const newTacoName = (taco) => {
  let newName = 'navajo'

  return {id: taco.id, name: newName, price: taco.price, about: taco.about}
}

const newTaco1 = newTacoName(taco1)

console.log(newTaco1)

//-----------------------------------------------------------------------------------------------------------------------

// Remove (delete a taco) 

const removeTaco = (id) => tacos.filter((t) => t.id !== id)

        // const removeTaco = (id) => {
        //   const removedTacosArr = tacos.filter((t)=> t.id !== id)
        //   return removedTacosArr
        // }

console.log(removeTaco(2))


//-----------------------------------------------------------------------------------------------------------------------

// Create (add a taco) 
const taco4 = {id:5, name:'patato', price:4, about:'yum yum'}

const createTaco = (taco) => {
  let moreTacos = tacos
  moreTacos.push(taco)
  return moreTacos
}

console.log(createTaco(taco4))
console.log(tacos)



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own
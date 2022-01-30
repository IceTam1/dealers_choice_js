const express = require('express')
const app = express()
const drinkDetails = require('./drinkDetails')

app.get('/', (req, res) => {
   const drinkInfo = drinkDetails.list();
   const html = 
   `<!DOCTYPE html>
<html>
<head>
<title> Bubble Tea Drinks</title> 
</head>

<body>
<header style='font-size:32px'>Bubble Tea Shops in NYC </header>

${drinkInfo.map(drink => `
   <div>
     <ul>
      <a style="text-decoration: none;" href="/drinkDetails/${drink.id}">
       <li style= "color: black">${drink.store}</li>
     </ul>
     </a>
   </div>`


  ).join("")}

</body>
</html>
`
   res.send(html)
    
})


app.get('/drinkDetails/:id', (req, res) => {
    const drink = drinkDetails.find(req.params.id)
    const drinkInfo = [ drink ]
    const html = 
    `<!DOCTYPE html>
    <html>
    <head>
    <title> Bubble Tea Drinks</title> 
    </head>

   <body>
   
   <header><a style='text-decoration:none; color:black; font-size:32px;' href='/'>Bubble Tea Shops in NYC</a></header>

    ${drinkInfo.map(drink => `
    
   <h3>${drink.store}</h3>
   <div>
     <ul>
       <p> Location of Shop: ${drink.location}</p>
       <div> Drink Recommendation: "${drink.name}"</div>
       <p> Drink Details: ${drink.drinkInfo}</p>
       
     </ul>
   </div>`


  ).join("")}

</body>
</html>
` 
 res.send(html)

})








const port = 3002

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })







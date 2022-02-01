const express = require('express')
const app = express()
const drinkDetails = require('./drinkDetails')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
   const drinkInfo = drinkDetails.list();
   const html = 
   `<!DOCTYPE html>
<html>
<head>
<title>Bubble Tea Shops</title> 
<link rel="stylesheet" href="/style.css" />
</head>

<body class='homepage'>
<header style='background-color:pink;' class='heading'>Bubble Tea Shops in NYC </header>

${drinkInfo.map(drink => `
   <div class= 'list'>
     <ul>
      <a style="text-decoration: none;" href="/drinkDetails/${drink.id}">
       <li style='color:white;'>${drink.store}</li>
     </ul>
     </a>
   </div>`


  ).join("")}

</body>
</html>
`
   res.send(html)
   next();
    
})


app.get('/drinkDetails/:id', (req, res, next) => {
    const drink = drinkDetails.find(req.params.id)
    const drinkInfo = [ drink ]
    const html = 
    `<!DOCTYPE html>
    <html>
    <head>
    <title> Bubble Tea Drinks</title> 
    <link rel="stylesheet" href="/style.css" />
    </head>

   <body class='detailpage'>
   
   <header class='heading2'><a style="color:white; text-decoration:none;" href='/'>Bubble Tea Shops in NYC</a></header>

    ${drinkInfo.map(drink => `
    
   <div class="store">${drink.store}</div>
   <div class='info'>
     
       <p> Location of Shop: ${drink.location}</p>
       <div> Drink Recommendation: "${drink.name}"</div>
       <p> Drink Details: ${drink.drinkInfo}</p>
       
     
   </div>`


  ).join("")}

</body>
</html>
` 
 res.send(html)
 next();
})








const port = 3002

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })







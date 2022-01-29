const express = require('express')
const app = express()

app.get('/', (req, res) => {
   const html = `
   <!DOCTYPE html>
<html>
<head>
<title> Bubble Tea Drinks</title> 
</head>

<body>
<h1> Favorite Bubble Tea Drinks</h1>
<ul>
  <li> Passion Fruit Green Tea </li>
  <li> Matcha Green Tea </li>
  <li> Lychee Green Tea </li> 
  <li> Mango Tea </li>
</ul>

</body>
</html>
`


    res.send(html)
    
})









const port = 3002

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })







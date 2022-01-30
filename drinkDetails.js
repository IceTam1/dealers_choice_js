const data = [
    {id: 1, store: "Yaya Tea", name: "First Love", drinkInfo: 'peach and mango white tea with tapioca and lychee jelly, 25% sugar, less ice', location: "51 Chrystie St, New York NY 10002"  },
    {id: 2, store: "Kung Fu Tea", name: "Lychee Punch", drinkInfo: 'lychee and green tea with lychee jelly, 25% sugar, less ice', location: "73 Chrystie St, New York NY 10002"},
    {id: 3, store: "Xing Fu Tang", name: "Brown Sugar Boba Milk", drinkInfo: "handmade brown sugar boba, organic whole milk, milk foam, tapioca, torched brown sugar", location: "133 2nd Ave, New York NY 10003" },
    {id: 4, store: "Vivi's Bubble Tea", name: "Peach Aloe Fruit Tea", drinkInfo: "peach pulp and apple juice with aloe jelly and chia seeds", location: "790 Manhattan Ave, Brooklyn NY 11222" }
    
]


const list = () => {
    return [...data] 
  }; 
  
  const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post}; 
  }
  
  module.exports = { list: list, find: find };
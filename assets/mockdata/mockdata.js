export function packageData(data) {
  var packagedMap = new Map()
  data.forEach(item => {
    let list
    if(packagedMap.has(item.date.toDateString())) {
      list = packagedMap.get(item.date.toDateString())
    } else {
      list = []
    }
    list.push(item)
    packagedMap.set(item.date.toDateString(), list)
  })
  var packagedData = []
  for(let [key, value] of packagedMap.entries()) {
    packagedData.push({
      date: key, 
      items: value
    })
  }
  return packagedData
}

export const mockdata = [
  {
    shopname: 'Cuppa Cakes',
    shopthumbnail: require('../cakes.png'),
    receipturl: 'https://www.google.com/',
    category: "f&b",
    price: "12.00",
    time: "6.37pm",
    date: new Date(2020, 0, 3)
  },
  {
    shopname: 'Carafe D\'eau',
    shopthumbnail: require('../cafe.png'),
    receipturl: require('../r1.pdf'),
    category: "f&b",
    price: "4.16",
    time: "4.12pm",
    date: new Date(2020, 0, 3)
  },
  {
    shopname: 'Burgerbros',
    shopthumbnail: require('../food.png'),
    receipturl: 'https://www.google.com/',
    category: "f&b",
    price: "27.50",
    time: "1.12pm",
    date: new Date(2020, 0, 2)
  },
  {
    shopname: 'MEGAFIT MEGAGYM',
    shopthumbnail: require('../gym.png'),
    receipturl: 'https://www.google.com/',
    category: "health",
    price: "5.50",
    time: "8:32pm",
    date: new Date(2020, 0, 1)
  }, {
    shopname: 'EZ Supermart',
    shopthumbnail: require('../market.png'),
    receipturl: 'https://www.google.com/',
    category: "groceries",
    price: "42.10",
    time: "7:25pm",
    date: new Date(2020, 0, 1)
  }, {
    shopname: 'Sprint.Inc',
    shopthumbnail: require('../shoes.png'),
    receipturl: 'https://www.google.com/',
    category: "fashion",
    price: "129.90",
    time: "5:41pm",
    date: new Date(2020, 0, 1)
  }, {
    shopname: 'CABS4GRABS',
    shopthumbnail: require('../taxi.png'),
    receipturl: 'https://www.google.com/',
    category: "transport",
    price: "8.00",
    time: "3:45pm",
    date: new Date(2020, 0, 1)
  },
]
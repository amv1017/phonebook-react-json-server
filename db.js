const fs = require('fs')

const database = {
  phones: [
    {
      id: 1,
      name: "Shoqe",
      phone: "555-666-777",
    },
    {
      id: 2,
      name: "Kryeminister",
      phone: "898-010-989"
    }
  ]
}

fs.writeFile('db.json', JSON.stringify(database), (err) => {
  if (err) throw err;
  console.log('Data written to file')
})

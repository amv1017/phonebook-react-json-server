const app = require('express')();
const { v4 } = require('uuid');

const loki = require('lokijs')

const db = new loki('api/db.json')

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/init-db-phones', (req, res) => {
  const phones_data = [
    {
      id: 1,
      name: 'Shoqe',
      phone: '555-666-777',
    },
    {
      id: 2,
      name: 'Kryeminister',
      phone: '898-010-989'
    }
  ]
  const phones = db.addCollection('phones')
  phones_data.map(phone => phones.insert(phone))
  db.saveDatabase()
})

app.get('/phone/:id', (req, res) => {
  db.loadDatabase({}, () => {
    const phones = db.getCollection('phones')
    const result = phones.findOne({ id: parseInt(req.params.id) })
    res.status(200).json(result)
  })
})

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;

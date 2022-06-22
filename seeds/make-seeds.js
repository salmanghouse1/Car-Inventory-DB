const { Make } = require("../models");
const makeData = [
  {
    make_name: "TOYOTA",
    color_id: 4,
    price: 34000.0,
    stock: 31,
  },
  {
    make_name: "FORD",
    color_id: 3,
    price: 24000.0,
    stock: 11,
  },
  {
    make_name: "HONDA",
    color_id: 1,
    price: 37000.0,
    stock: 9,
  },
  {
    make_name: "VOLKSWAGEN",
    color_id: 2,
    price: 22000.0,
    stock: 5,
  },
  {
    make_name: "BMW",
    color_id: 5,
    price: 44000.0,
    stock: 21,
  },
  // {
  //   make_name: 'ACURA',
  //   color_id: 7,
  //   price: 54000.00,
  //   stock: 11,
  // },
];
const seedMakes = () => Make.bulkCreate(makeData);
module.exports = seedMakes;

db.produtos.find({ $and: [
  { vendidos: { $gt: 50 } },
  { vendidos: { $lt: 100 } },
]}, {nome: 1, _id: 0, vendidos: 1}).sort({ vendidos: 1 });
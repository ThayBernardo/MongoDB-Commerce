db.produtos.updateMany({ nome:
  { $in: ["Quarteirão com Queijo", "Big Mac"] } },
  { $push: { ingredientes: "bacon" },
});

db.produtos.find({}, { nome: 1, _id: 0, ingredientes: 1 });
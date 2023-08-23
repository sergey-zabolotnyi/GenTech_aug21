db.clients.aggregate([
    { $sample: { size: 1 } }    // то же, что random в js
])
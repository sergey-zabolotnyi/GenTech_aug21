db.clients.aggregate([
    { $sample: { size: 1 } }
])
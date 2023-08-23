
db.reactions.aggregate([
    { $sample: { size: 1 } },
    { $project: { _id: 0 } }
  ])
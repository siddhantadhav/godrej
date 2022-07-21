const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/godrej', {
    useNewUrlParser:true,
    useUnifiedTopology:false,
    // useCreateIndex:true
  });
}
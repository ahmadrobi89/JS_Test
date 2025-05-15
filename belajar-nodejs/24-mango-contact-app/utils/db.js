const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/wpu');

// // Menambah 1 data
// const contact1 = new Contact({
//     nama: 'Ade Rachman',
//     nohp: '081219195123',
//     email: 'ade@gmail.com'
// })

// // Simpan ke Collection
// contact1.save().then((contact) => console.log(contact))
// const express = require('express');
// const router = express.Router();

// const ioHook = require('iohook');  

// const id = ioHook.on('keypress', event => {
//             if(event['ctrlKey'] == true && event['keychar'] == 49){
//                 console.log('control+b');
//                 router.get('/', function(req,res){
//                     res.send('Pagina!');
//                 });
//             };
//         });
// ioHook.start();

// module.exports = (app) =>{
//     app.get('/', (req, res) => {
//         req.session['user'] = null;
//         if(id != 0){
//             res.redirect('/');
//             //console.log(event)
//         }else{
//             res.redirect('/');
//         }
//     });
                
// }

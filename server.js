const express=require('express');
const app=express();
const router=require('./router');
const path=require('path');
const fs=require('fs');
const hbs=require('hbs');

const port = process.env.PORT || 3000;

app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{
    let now = new Date().toString();

    let log=`${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log',log+'\n',(err)=>{
        if(err){
            console.error('Unable to append to server.log');
        }
    })
    next();
});

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// });

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    
    return text.toUpperCase();
})

app.get('/',router.homepage);
app.get('/bad',router.badHandler);
app.get('/about',router.aboutpage);


app.listen(port,()=>{
    console.log(`The server is listening on port ${port}:`);
});

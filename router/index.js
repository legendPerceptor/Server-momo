
let homepage=(req,res)=>{
    res.render('homepage.hbs',{
        pageTitle:'HomePage'
    });
};
let badHandler=(req,res)=>{
    res.send('Bad Request!');
    res.end();
};
let aboutpage=(req,res)=>{
    res.render('about.hbs',{
        pageTitle:'AboutPage'
    });
}
module.exports={
    homepage,badHandler,aboutpage
}
const studentformMiddleware = (req, res, next)=>{
    const {name, rollno, bath, collegename } = req.body;
    try {
        if(name === "" && rollno === "" && bath === "" && collegename === ""){
            res.send('Please Enter all field');
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports=studentformMiddleware;
exports.fibo = (req, res) => {
    res.status(200);
    const nb = req.params.nb;
    let i0=0;
    let i1=1;
    let result=1;
    if(nb == 0 ){
        result=0;
    }
    for(let i=1; i< nb; i++){
     result= i0+i1;
     i0=i1;
     i1=result;
    }
   
    res.send({ FiboNumberInSequence : result });
  };

  
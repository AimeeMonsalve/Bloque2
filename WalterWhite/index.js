const contarespacios =(text) =>{
    let contar=0;
    for (let i=0; i< text.length; i++){
        (text[i]!=" ")? null : contar++;
    };
    return contar;
}
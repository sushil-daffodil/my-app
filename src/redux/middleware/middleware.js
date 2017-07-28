// let $ = require('jquery');


let logger = store=>next=>action=>{
    switch (action.type){
        case "increase" :
            console.log("middleware called>>>")
            asyncFunction(action).then((obj)=> {
                console.log("middleware response called>>>"+obj.name)
                next(action);

            })
            break;

        default :
            return next(action);
    }

}
let asyncFunction = (param)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:param.type});
        },1000)
    })
}

// let ServerCall=(Url,parameters)=>{
//     return new Promise((resolve,reject)=>{
//         $.ajax({
//             url: Url,
//             type:'POST',
//             contentType:"application/json",
//             dataType: 'json',
//             data:JSON.stringify(parameters),
//             cache: false,
//             success: function(data) {
//
//                 // this.setState({"userloginInfo": data});
//                 resolve({data:data,success:true});
//             }.bind(this),
//             error: function(xhr, status, err) {
//
//                 reject({error:err,success:false});
//             }.bind(this)
//         });
//     })
//  }


export default logger

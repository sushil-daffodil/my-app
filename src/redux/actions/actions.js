let actions = {
    // increaseAction:{ type: 'increase' },
    increaseAction:payload=>{
         console.log("action dispatched>>>")
        return {
            type:'increase',
            payload
        }

    },
}



export default actions


//module.exports returns javascript object when imported/required.
//Just write Function Name getDate and not getDate() as it will 
//activate the function now from app.js we are collecting the return
//in date if we call date() then getDate() function will be called.
//module.exports = getDate

//module.exports = getDate()
//If we write this then on storing the result in date just write date to
//call and get the value from getDate() function.

//module.exports is a javascript object so if we have more than one
//methods we can associate the methods of date.js with module.exports

/*module.exports.getDate = getDate

function getDate(){
    var options = {
        weekday : 'long',
        month : 'long',
        day : 'numeric'
    }
    
    var today = new Date()
    return today.toLocaleDateString("en-US",options)
}

module.exports.getDay = getDay

function getDay(){
    var options = {
        weekday : 'long'
    }
    
    var today = new Date()
    return today.toLocaleDateString("en-US",options)
}

OR

*/
/*module.exports.getDate = function(){
    var options = {
        weekday : 'long',
        month : 'long',
        day : 'numeric'
    }
    
    var today = new Date()
    return today.toLocaleDateString("en-US",options)
}

module.exports.getDay = function(){
    var options = {
        weekday : 'long'
    }
    
    var today = new Date()
    return today.toLocaleDateString("en-US",options)
}*/

//               OR

//module.exports can also be written as exports

exports.getDate = function(){
    const options = {
        weekday : 'long',
        month : 'long',
        day : 'numeric'
    }
    
    const today = new Date()
    return today.toLocaleDateString("en-US",options)
}

exports.getDay = function(){
    const options = {
        weekday : 'long'
    }
    
    const today = new Date()
    return today.toLocaleDateString("en-US",options)
}

//console.log(module.exports)
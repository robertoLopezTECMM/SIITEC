
const regexemail = RegExp(/^\w+([\.-]?\D+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);



export const ValidateEmail = (email)=>{
    if(email.match(regexemail)) return true
    else return false
}
const regCheck = (regNo, loc) => {
    if(regNo == ""){
        return 'enter registration number!'
    }else if(typeof regNo !== 'string'){
        return 'enter in alphanumerics'
    }
    if (regNo.endsWith(loc)) {
        return true;
    } else {
        return false
    }
}
const greet = (name) => {
    var check = name == '' ? `${name}` : typeof name === "string" ? `Hello ${name}` : `Please enter valid name!: ${name} error entry!`
    return check
}

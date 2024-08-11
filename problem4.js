function passWord(userInfo) {
    const {name, birthYear, siteName} = userInfo;

    if (!name || !birthYear || !siteName || birthYear.toString().length !== 4) {
        return "invalid";
    }

    const firstLetter = siteName.charAt(0).toUpperCase();
    const restOfName = siteName.slice(1);
    const generatedPassword = firstLetter + restOfName + '#' + name + '@' + birthYear;

    return generatedPassword
    
}

const userInfo = { name: "maisha", birthYear: 2002 };
const generatedPassword = passWord(userInfo);
console.log(generatedPassword);
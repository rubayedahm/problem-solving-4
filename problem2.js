function checkName(str) {
    // Validation
    if(typeof(str) !== "string") {
        return "Invalid"
    }
  const goodName = ["a", "y", "i", "e", "o", "u", "w"];

  str = str.trim();
  const lastWord = str.charAt(str.length - 1);
  const lowerCase = lastWord.toLowerCase();

  for (let i = 0; i < goodName.length; i++) {
    if (goodName[i].includes(lowerCase)) {
      return console.log("Good Name");
    }
  }
  return "Bad Name";
}

console.log(checkName("Salman"));

const getColor = () => {
  //hax Code
  const randomNumber = Math.floor(Math.random() * 16772151);
  const randomCode = "#" + randomNumber.toString(16);
  // console.log(randomNumber,randomCode);

  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode;

  navigator.clipboard.writeText(randomCode);
};

//Event call
document.getElementById("btn").addEventListener("click", getColor);

//initial commit

getColor();

//tying animation
const sentence = "Full Stack Developer";
const typingElement = document.getElementById("typingElement");

function typeWriter() {
  let i = 0;
  const intervalId = setInterval(function () {
    if (i < sentence.length) {
      typingElement.textContent += sentence.charAt(i);
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, 100); // Adjust the interval as needed
}

typeWriter();

// JavaScript for smooth scrolling
//instgram
function openInstagramChat() {
  // Direct link to Instagram's chat page
  window.location.href =
    "https://www.instagram.com/gray_wol_f?igshid=ODA1NTc5OTg5Nw==";
}

//Hamburger code.
function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu-outline"
    ? ((e.name = "close-outline"),
      list.classList.add("top-[70px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu-outline"),
      list.classList.remove(
        "top-[70px]",
        list.classList.remove("opacity-100")
      ));
}

//form script
const scriptURL = 'https://script.google.com/macros/s/AKfycbxo1fitX99LZM7V27PWm37MQC22fEykt6bLsHFsGNX-lPHM1UY9CyikGj_GCfQlEal3sw/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Sent Successfully!"
      msg.style.display="block"
      setTimeout(function(){
          msg.innerHTML=""
          msg.style.display="none"
      },2000) 
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


  

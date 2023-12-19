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

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

//pdf

// Get the DOM element with the ID "openPdfButton"
const openPdfButton = document.getElementById("openPdfButton");

// Add a click event listener to the button
openPdfButton.addEventListener("click", () => {
  // Replace 'your-pdf-file.pdf' with the actual path or URL to your PDF file
  const pdfUrl = "pdf/gowrisanker.pdf";

  // Open the PDF in a new tab/window
  window.open(pdfUrl, "_blank");
});


//mail
function validateAndSendEmail() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }

  // Simulate success message as sending emails directly from the client side is not secure
  document.getElementById("successMessage").classList.remove("hidden");
}
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

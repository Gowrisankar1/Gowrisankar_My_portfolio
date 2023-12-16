const sentence = "Full Stack Developer";
    const typingElement = document.getElementById('typingElement');
    
    function typeWriter() {
      let i = 0;
      const intervalId = setInterval(function() {
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
    
        document.addEventListener('DOMContentLoaded', function () {
            const links = document.querySelectorAll('nav a');
            links.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                });
            });
        });

        //pdf

        const openPdfButton = document.getElementById('openPdfButton');

    openPdfButton.addEventListener('click', () => {
      // Replace 'your-pdf-file.pdf' with the actual path or URL to your PDF file
      const pdfUrl = 'pdf/gowrisanker.pdf';

      // Open the PDF in a new tab/window
      window.open(pdfUrl, '_blank');
    });
        
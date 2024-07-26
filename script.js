function showContactForm() {
    document.querySelector('.flex-full-justify').style.display = 'none';
    document.getElementById('contactForm').style.display = 'block';
  }
  
  let currentStep = 'email';
  const formData = {};
  
  function nextStep(step) {
    if (step === 'email') {
      formData.email = document.getElementById('email').value;
      document.getElementById('contactForm').innerHTML = `
        <p>Enter the message subject:</p>
        <input type="text" id="subject" onkeydown="if(event.key === 'Enter') nextStep('subject')">
      `;
    } else if (step === 'subject') {
      formData.subject = document.getElementById('subject').value;
      document.getElementById('contactForm').innerHTML = `
        <p>Enter the message content:</p>
        <textarea id="content" rows="4" onkeydown="if(event.key === 'Enter') submitForm()"></textarea>
      `;
    }
  }
  
  function submitForm() {
    formData.content = document.getElementById('content').value;
    console.log('Form Data:', formData);
    alert('Your message has been sent!');
    // Here you can add the code to actually send the form data to your server or email.
    document.getElementById('contactForm').innerHTML = '<p>Thank you for your message!</p>';
  }
  
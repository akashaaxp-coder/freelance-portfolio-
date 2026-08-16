// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    hamburger.classList.remove('active');
  });
});

// Smooth scrolling with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Basic form validation
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Placeholder success message
  const whatsappNumber = "917800296082";

const text =
    "Hello Akash,%0A%0A" +
    "Name: " + encodeURIComponent(name.value) + "%0A" +
    "Email: " + encodeURIComponent(email.value) + "%0A" +
    "Message: " + encodeURIComponent(message.value);

window.open(
    "https://wa.me/" + whatsappNumber + "?text=" + text,
    "_blank"
);
  alert('Thank you for your message, Akash will get back to you soon!');
  form.reset();
});

// Chatbot
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotBox = document.getElementById("chatbot-box");
const chatbotClose = document.getElementById("chatbot-close");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotOptions = document.querySelectorAll(".chatbot-options button");
if (chatbotToggle && chatbotBox) {
    chatbotToggle.addEventListener("click", function () {
        chatbotBox.style.display =
            chatbotBox.style.display === "block" ? "none" : "block";
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener("click", function () {
        chatbotBox.style.display = "none";
    });
}

chatbotOptions.forEach(function (button) {
    button.addEventListener("click", function () {
        const question = button.textContent;

        let answer = "";

        if (question.includes("services")) {
            answer = "I offer modern websites, responsive web design, UI/UX design and website development.";
        } 
        else if (question.includes("projects")) {
            answer = "You can view my projects in the Projects section of this website.";
        } 
        else if (question.includes("hire")) {
            answer = "You can hire Akash by using the Hire Me button or contacting him through WhatsApp.";
        } 
        else if (question.includes("Contact")) {
            answer = "You can contact Akash through the Contact section or WhatsApp.";
        }

        const userMessage = document.createElement("p");
userMessage.innerHTML = "<strong>You:</strong> " + question;

const assistantMessage = document.createElement("p");
assistantMessage.innerHTML = "<strong>Akash Assistant:</strong> " + answer;

chatbotMessages.appendChild(userMessage);
chatbotMessages.appendChild(assistantMessage);
chatbotMessages.innerHTML +=
    "<p><strong>You:</strong> " + question + "</p>" +
    "<p><strong>Akash Assistant:</strong> " + answer + "</p>";
    });
  });
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("responsive");
  navLinksLi.forEach((link) => {
    link.classList.toggle("responsive");
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
  
      burger.classList.toggle('toggle');
    });
  };
  
  navSlide();

  function search() {
    const list = document.getElementById('list');
const number = document.getElementById('number');
var url = `https://panjeree.com/c09/${list.value}q${number.value}.pdf`
  // Get the entered number
  const enteredNumber = number.value;

  // Check if the entered number is 4 digits long
  if (enteredNumber.length === 4) {
    // Redirect to the URL with the selected list value and entered number
    window.open(window.location.href =url, '_blank');
  } else if(enteredNumber.length > 4) {
    // Display an error message if the entered number is not 4 digits long
    alert('Please enter a 4-digit number.');
  } else if(enteredNumber.length < 4) {
 alert('Please enter a 4-digit number.');
  };
  }

  function showSelected() {
    var select = document.getElementById("list");
    var selectedOption = select.options[select.selectedIndex].value;
  
    if (selectedOption == "") {
      alert("You Must Select One")
    } else {
      var input = document.getElementById("number")
      select.options[0].disabled = true;
      input.disabled = false;
    }
  }


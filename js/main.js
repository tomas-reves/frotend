const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', ()=>{navLinks.classList.toggle('mobile-menu')

})

function validateForm() {
let x = document.forms["contactForm"]["name"].value;
let y = document.forms["contactForm"]["email"].value;
let i = document.forms["contactForm"]["subject"].value;
let z = document.forms["contactForm"]["message"].value;
if (x == "") {
    alert("Name must be filled out");
return false;
}
if (y == "") {
    alert("Email must be filled out");
return false;
}
 if (i == "") {
    alert("Subject line must be filled out");
return false;
}
if (z == "") {
    alert("Message must be filled out");
return false;
}
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email.value))
{
return (true)
 }
alert("You have entered an invalid email address!")
    return (false)

            }
// code derived from: https://github.com/portiaportia/portiaportia.github.io/blob/master/csce242/examples/03-js/js/contact.js
const contactForm = document.getElementById("ask-form");
const result = document.getElementById("form-result");

contactForm.onsubmit = (e) => {
    e.preventDefault();

    // convert data from form to js string
    const formData = new FormData(contactForm);
    const jsObject = Object.fromEntries(formData);
    const formJSON = JSON.stringify(jsObject);

    result.style.display = "block";
    result.innerHTML = "Submitting...";

    // post with 
    fetch("https://api.web3forms.com/submit" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: formJSON
    })
    .then(async (response) => {
        let formJSON = await response.json();
        if (response.status == 200) {
            result.innerHTML = formJSON.message;
        } else {
            console.log(response);
            result.innerHTML = formJSON.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "An error occured while processing your form data."
    })
    .then(function() {
        contactForm.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
};
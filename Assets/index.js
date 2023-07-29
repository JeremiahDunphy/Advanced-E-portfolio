

//template_ts5v3yo
//service_mzuaeoc

//5ko-1NL2cr8lWES_R

//G0NWt4gMycJ0g24__0wvQ

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_mzuaeoc",
        "template_ts5v3yo",
        event.target,
        "user_5ko-1NL2cr8lWES_R"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on miahedunphy@gmail.com"
        );
      });
  }
//Email Js integration
const sendMailForm = document.getElementById("sendMail");
sendMailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
function sendEmail() {
  //production
  console.log("here");
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // var paramsDev = {
  //   name: `Sandesh ${Math.floor(Math.random(1) * 10)}`,
  //   email: "sandesh123@gmail.com",
  //   subject: "This is test by sandesh",
  //   message: "This is test Hello",
  // };

  const serviceID = "service_utsbn2a";
  const templateID = "template_onfimvj";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
    })
    .catch((err) => console.log(err));
}

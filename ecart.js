const password = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');
const forgot = document.querySelector('.forgot');
const use_pass = document.querySelector('#use_pass');
const enter_otp = document.querySelector("#enter_otp");
const mail = document.querySelector("#email");
const warn_invalid_email = document.querySelector(".warn_invalid1");
const warn_invalid_pass = document.querySelector(".warn_invalid2");
const login = document.querySelector(".loginbtn");
const or = document.querySelector('#or');

togglePassword.addEventListener("click", function (e) {
    const type = password.getAttribute("type") === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    const icon = this.getAttribute('class') === 'bi bi-eye' ? 'bi bi-eye-slash' : 'bi bi-eye';
    this.setAttribute('class', icon);
});

login.addEventListener("click", function (e) {
    if (mail.value.length == 0 && password.value.length == 0) {
        alert("Please fill all the details")
        e.preventDefault();
    }
    else {
         otp.style.display = "none";
        enter_otp.style.display = "none";
        use_pass.style.display = "none";
        or.style.display = "none";
    }
})
const otp = document.querySelector('#req_otp');
otp.addEventListener('click', function (e) {
    password.style.display = "none";
    forgot.style.display = "none";
    togglePassword.style.display = "none";
    otp.style.display = "none";
    enter_otp.style.display = "block";
    use_pass.style.display = "block";

    e.preventDefault();
});
use_pass.addEventListener('click', function (e) {
    password.style.display = "block";
    forgot.style.display = "block";
    forgot.style.transform = translateY(-30);
    togglePassword.style.display = "block";
    enter_otp.style.display = "none";
    this.style.display = "none"
    otp.style.display = "block";
    e.preventDefault();
});

mail.addEventListener("input", validate);
password.addEventListener("input", validate);
const mail_regx = /^[\w._%+-]+@[\w.-]+\.[a-zA-z]{2,4}/;
const mob_regx = /^[0-9]{10}/;
const pass_regx = /^[w]+{8,12}/

function validate(e) {
    let target = e.target;
    if (target.name == "email") {
        if (mail_regx.test(target.value) | mob_regx.test(target.value)) {
             warn_invalid_email.style.display = "none";
        }
        else {
             warn_invalid_email.style.display = "block";
        }
    }

    if (target.name == "password") {
        if (mail_regx.test(target.value) | mob_regx.test(target.value)) {
             warn_invalid_pass.style.display = "none";
        }
        else {
             warn_invalid_pass.style.display = "block";
             setTimeout(() => {
                warn_invalid_pass.style.display = "none";
            }, 4000);
        }
    }
};
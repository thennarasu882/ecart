const mail_regx = /^[\w._%+-]+@[\w.-]+\.[a-zA-z]{2,4}/;
const mob_regx = /^[0-9]{10}/;
const pass_regx = /^[\w._%+-@*#]{8}/;

$(".warn_invalid1").hide();
$(".warn_invalid2").hide();
$("#enter_otp").hide();
$("#use_pass").hide();

$("#togglePassword").click(show_hide_pass);
$(".loginbtn").click(validate);
$("#email")[0].addEventListener("input", validate_mail);
$("#email")[0].addEventListener("input", email_mobile);
$("#password")[0].addEventListener("input", validate_pass);

$("#req_otp").click(function (e) {
  e.preventDefault();
  $("#password").hide();
  $(".forgot").hide();
  $("#togglePassword").hide();
  $("#req_otp").hide();
  $("#enter_otp").show(100);
  $("#use_pass").show();
  $("#email").attr("placeholder", "Enter Mobile Number");
});

$("#use_pass").click(function (e) {
  e.preventDefault();
  $("#password").show(100);
  $(".forgot").show();
  $("#togglePassword").show();
  $("#req_otp").show();
  $("#enter_otp").hide();
  $("#use_pass").hide();
  $("#email").attr("placeholder", "Enter Email/ Mobile Number");
});

function show_hide_pass() {
  const type = $("#password").attr("type") === "password" ? "text" : "password";
  $("#password").attr("type", type);
  const icon =
    $(this).attr("class") === "bi bi-eye" ? "bi bi-eye-slash" : "bi bi-eye";
  $(this).attr("class", icon);
}

function email_mobile() {
  if (isNaN($("#email").val())) {
    $("#email").attr("maxlength", "30");
  } else {
    $("#email").attr("maxlength", "10");
  }
}

function validate_mail() {
  if (
    $("#email") &&
    (mail_regx.test($("#email").val()) || mob_regx.test($("#email").val()))
  ) {
    $(".warn_invalid1").hide();
    return true;
  } else {
    $(".warn_invalid1").show();
    return false;
  }
}

function validate_pass() {
  if ($("#password").val() && pass_regx.test($("#password").val())) {
    $(".warn_invalid2").hide();
    return true;
  } else {
    $(".warn_invalid2").show();
    return false;
  }
}

function validate(e) {
  e.preventDefault();
  if ($("#email").val() && $("#password").val()) {
    if (validate_mail() && validate_pass()) {
      $("#req_otp").hide();
      $("#enter_otp").hide();
      $("#use_pass").hide();
      $("#or").hide();
    } else {
      alert("Provided invalid data...check once again and fill it correctly");
    }
  } else {
    alert("Please fill all the details");
  }
}

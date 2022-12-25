function openForm() {
    history.pushState({page: 2}, "Form", "?form");
    return false;
}

function openHome() {
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

$(document).ready(function () {
    $(".myButton").click(function (event) {
        openForm();
        event.preventDefault();
        $("#myOverlay").fadeIn(297, function () {
            $("#myForm").css("display", "block").animate({opacity: 1}, 198);
        });
        if (localStorage.getItem("imya").length > 0) {
            document.querySelector("#imya").value = localStorage.getItem("imya");
        }
        if (localStorage.getItem("email").length > 0) {
            document.querySelector("#email").value = localStorage.getItem("email");
        }
        if (localStorage.getItem("soobshenie").length > 0) {
            document.querySelector("#soobshenie").value = localStorage.getItem("soobshenie");
        }
        if (localStorage.getItem("check") === "true") {
            document.querySelector("#check").checked = true;
        }
    });

    $("#myOverlay, #nazad").click(function () {
        $("#myForm").animate({opacity: 0}, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
            openHome();
        });
    });

    $("#otpravit").click(function () {
        var slapform = new Slapform();
        $("#otpravit").prop("disabled", true);
        slapform.submit({
            data: {
                checkbox: localStorage.getItem("check"),
                email: localStorage.getItem("email"),
                message: localStorage.getItem("soobshenie"),
                name: localStorage.getItem("imya")
            },
            form: "aXHxW8DxN"
        }).then(function () {
            alert("Ваше сообщение успешно отправлено!");
        }).catch(function () {
            alert("Ошибка отправки сообщения. Попробуйте ещё раз.");
        });
        document.querySelector("#imya").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#soobshenie").value = "";
        document.querySelector("#check").checked = false;
        localStorage.clear();
        return false;
    });

    addEventListener("popstate", function () {
        $("#myForm").animate({opacity: 0}, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
            openHome();
        });
    }, false);

    $("#imya, #email, #soobshenie, #check").change(function () {
        var imya = $("#imya").val();
        var email = $("#email").val();
        var soobshenie = $("#soobshenie").val();
        var check = $("#check").prop("checked");
        localStorage.setItem("imya", imya);
        localStorage.setItem("email", email);
        localStorage.setItem("soobshenie", soobshenie);
        if (check) {
            localStorage.setItem("check", true);
        } else {
            localStorage.setItem("check", false);
        }
        if (imya.length > 0 && email.length > 0 && soobshenie.length > 0 && check) {
            $("#otpravit").prop("disabled", false);
        } else {
            $("#otpravit").prop("disabled", true);
        }
        return false;
    });
});

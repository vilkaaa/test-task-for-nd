function checkName() {
    if ($("#q1-1").prop("checked")) {
        $("#name-answer").addClass("right-answer").text("Вы указали свое полное имя и фамилию. Правильное решение!")
    } else if ($("#q1-2").prop("checked")) {
        $("#name-answer").removeClass("right-answer").text("Укажите свое полное имя и фамилию. Не стоит оставаться анонимом в социальной сети.")
    } else {
        $("#name-answer").removeClass("right-answer").text("Укажите свое полное имя и фамилию. Не стоит указывать вместо фамилии название Компании.")
    }
}

function checkPhoto() {
    if ($("#q2-1").prop("checked")) {
        $("#photo-answer").removeClass("right-answer").text("Не стоит размещать вместо личного фото логотип Компании.")
    } else if ($("#q2-2").prop("checked")) {
        $("#photo-answer").addClass("right-answer").text("Вы разместили свое личное фото. Правильное решение!")
    } else {
        $("#photo-answer").removeClass("right-answer").text("Не стоит размещать вместо личного фото картинку с персонажем.")
    }
}

function checkWork() {
    if ($("#q3-1").prop("checked")) {
        $("#work-answer").addClass("right-answer").text("Вы указали полное название Компании. Правильное решение!")
    } else {
        $("#work-answer").removeClass("right-answer").text("Соблюдайте принцип открытости! Укажите полное название компании.")
    }
}

function checkAbout() {
    if ($("#q4-3").prop("checked")) {
        $("#about-answer").addClass("right-answer").text("Вы разместили полную информацию о себе. Правильное решение!")
    } else {
        $("#about-answer").removeClass("right-answer").text("Соблюдайте принцип открытости! Укажите полную информацию о себе.")
    }
}

$("#name-form").on("click", checkName);
$("#photo-form").on("click", checkPhoto);
$("#work-form").on("click", checkWork);
$("#about-form").on("click", checkAbout);

var dialog = document.getElementById("dialog");
var regForms = document.getElementById("reg");
var checkDialog = true;
    regForms.onclick = function() {
        if ($("#q1-1").prop("checked") && $("#q2-2").prop("checked") && $("#q3-1").prop("checked") && $("#q4-3").prop("checked") && checkDialog) {
            dialog.showModal(); 
            checkDialog = false;
        } else {
            checkDialog = true;
        };
    };
    document.getElementById("close").onclick = function() {
        dialog.close();

    };

var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");

var markList = [];

if (localStorage.getItem('markList') !== null) {
    markList = JSON.parse(localStorage.getItem('markList'));
    displayAllMarks();
} else {
    markList = [];
}

function addMarks() {

    if (bookmarkName.value === "" || bookmarkURL.value === "") {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "Please enter both Site Name and URL!",
            showConfirmButton: false,
            timer: 1500,
        });
        return;
    }

    if (flag !== -1) {
        markList[flag].siteName = bookmarkName.value;
        markList[flag].siteUrl = bookmarkURL.value;

        localStorage.setItem('markList', JSON.stringify(markList));

        displayAllMarks();

        document.getElementById("submitBtn").innerText = "Add Bookmark";
        clearForm();
        flag = -1;
        return;
    }


    var newMark = {
        siteName: bookmarkName.value,
        siteUrl: bookmarkURL.value,
    };

    markList.push(newMark);
    localStorage.setItem('markList', JSON.stringify(markList));

    displayAllMarks();
    clearForm();
}



function displayAllMarks() {
    tableContent.innerHTML = "";

    for (var i = 0; i < markList.length; i++) {
        var newRow = `
       <tr>
            <td>${i + 1}</td>
            <td>${markList[i].siteName}</td>
            <td>
                <a href = "${markList[i].siteUrl}" target="_blank">
                    <button id="visitBtn" class="btn">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                    </button>
                </a>
            </td>
            <td>
                <button id="editeBtn" class="btn" onclick="editMark(${i})">
                <i class="fa-solid fa-pen-to-square"></i>Edit
                </button>
            </td>
            <td>
                <button id="deleteBtn" class="btn" onclick="deleteMark(${i})">
                <i class="fa-solid fa-trash-can"></i>Delete
                </button>
            </td>
        </tr>`;

        tableContent.innerHTML += newRow;
    }
}


function deleteMark(index) {
    markList.splice(index, 1);
    localStorage.setItem("markList", JSON.stringify(markList));
    displayAllMarks();
}

var flag = -1;

function editMark(index) {
    bookmarkName.value = markList[index].siteName;
    bookmarkURL.value = markList[index].siteUrl;

    flag = index;

    document.getElementById("submitBtn").innerText = "Save Edit";
    bookmarkName.focus();
}


function clearForm(){
    bookmarkName.value = "";
    bookmarkURL.value = "";

    bookmarkName.classList.remove("is-valid");
    bookmarkURL.classList.remove("is-valid");
}

// ===== Regex =====
var nameRegex = /^[A-Za-z0-9\s]{3,}$/;
var urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;


function is_valid(inputElement, regex) {
    if (regex.test(inputElement.value.trim())) {
        inputElement.classList.add("is-valid");
        inputElement.classList.remove("is-invalid");
        return true;
    } else {
        inputElement.classList.add("is-invalid");
        inputElement.classList.remove("is-valid");
        return false;
    }
}

bookmarkName.addEventListener("input", function () {
    is_valid(bookmarkName, nameRegex);
    if(bookmarkName.value === ""){
        bookmarkName.classList.remove("is-invalid");
    }
});

bookmarkURL.addEventListener("input", function () {
    is_valid(bookmarkURL, urlRegex);
    if(bookmarkURL.value === ""){
        bookmarkURL.classList.remove("is-invalid");
    }
});



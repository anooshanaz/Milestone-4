var form = document.getElementById('resumeform');
var resumedisplayElement = document.getElementById('resume-display');
//hundle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var profilepicfile = document.getElementById('profilepic');
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <h3>Personal information</h3>\n        <p><b>First Name:</b><span contenteditale=\"true\">".concat(firstname, "</span></P>\n        <p><b>Last Name:</b><span contenteditale=\"true\">").concat(lastname, "</span></p>\n        <p><b>Email:</b><span contenteditale=\"true\">").concat(email, "</span></p>\n        <p><b>Address:</b><span contenteditale=\"true\">").concat(address, "</span></p>\n        <p><b>Number:</b><span contenteditale=\"true\">").concat(number, "</span></p>\n        <h3>Education</h3>\n        <p contenteditale=\"true\">").concat(education, "</p>\n        <h3>Skills</h3>\n        <p contenteditale=\"true\">").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p contenteditale=\"true\">").concat(experience, "</p>\n        ");
    //
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element are missing');
    }
});

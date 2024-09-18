var buttonS = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
buttonS.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
var buttonC = document.getElementById('toggle-languages');
var certi = document.getElementById('languages');
buttonC.addEventListener('click', function () {
    if (certi.style.display === 'none') {
        certi.style.display = 'block';
    }
    else {
        certi.style.display = 'none';
    }
});
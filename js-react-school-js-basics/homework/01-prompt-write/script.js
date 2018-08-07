'use strict';

function appendUserInfo(property, info){
    const userCard = document.querySelector('.user-card');

    let divUserRow = document.createElement('div');
    divUserRow.className = "user-card__row";

    let divUserInfo = document.createElement('div');
    divUserInfo.className = "user-card__td user-card__info";
    divUserInfo.innerHTML = info;

    let divUserProperty = document.createElement('div');
    divUserProperty.className = "user-card__td user-card__property";
    divUserProperty.innerHTML = property;

    divUserRow.appendChild(divUserProperty);
    divUserRow.appendChild(divUserInfo);
    userCard.appendChild(divUserRow);
}

function questionnaire(question) {
    let answer = prompt(question,'').trim();

    if(!answer){
        answer = 'no information';
    }
    return answer;
}

function conductSurvey() {
    let name = questionnaire('Please enter your full name');
    let birthday = questionnaire('Please enter your date of birth');
    let city = questionnaire('Please enter your location (city)');

    appendUserInfo('Your Name', name);
    appendUserInfo('Your Birthday', birthday);
    appendUserInfo('Your City', city);
}

conductSurvey();
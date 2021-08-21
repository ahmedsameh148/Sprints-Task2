let User = {
    Name : "",
    Password : "",
    BirthMonth : 0,
    BirthDay : 0
};

const Months31 = [1, 3, 5, 7, 8, 10, 12];
var monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let intervals = [];

function init(){
    for(let i = 1; i < monthDays.length; i++){
        monthDays[i] += monthDays[i - 1];
    }
    // Aries 21/3 : 19/4
    intervals.push({
        from : monthDays[2] + 21,
        to : monthDays[3] + 19,
        Name : "Aries"
    });
    // Taurus 20/4 : 20/5
    intervals.push({
        from : monthDays[3] + 20,
        to : monthDays[4] + 20,
        Name : "Taurus"
    });
    // Gemini 21/5 : 20/6
    intervals.push({
        from : monthDays[4] + 21,
        to : monthDays[5] + 20,
        Name : "Gemini"
    });
    // Cancer 21/6 : 22/7
    intervals.push({
        from : monthDays[5] + 21,
        to : monthDays[6] + 22,
        Name : "Cancer"
    });
    // Leo 23/7 : 22/8
    intervals.push({
        from : monthDays[6] + 23,
        to : monthDays[7] + 22,
        Name : "Leo"
    });
    // Vigro 23/8 : 22/9
    intervals.push({
        from : monthDays[7] + 23,
        to : monthDays[8] + 22,
        Name : "Aries"
    });
    // Libra 23/9 : 22/10
    intervals.push({
        from : monthDays[8] + 23,
        to : monthDays[9] + 22,
        Name : "Libra"
    });
    // Scorpio 23/10 : 21/11
    intervals.push({
        from : monthDays[9] + 23,
        to : monthDays[10] + 21,
        Name : "Scorpio"
    });
    // Sagittarius 22/11 : 21/12
    intervals.push({
        from : monthDays[10] + 22,
        to : monthDays[11] + 21,
        Name : "Sagittarius"
    });
    // Capricorn 22/12 : 31/12
    intervals.push({
        from : monthDays[11] + 22,
        to : monthDays[11] + 31,
        Name : "Capricorn"
    });
    // Capricorn 1/1 : 19/1
    intervals.push({
        from : monthDays[0] + 1,
        to : monthDays[0] + 19,
        Name : "Capricorn"
    });
    // Aquarius 20/1 : 18/2
    intervals.push({
        from : monthDays[0] + 20,
        to : monthDays[1] + 18,
        Name : "Aquarius"
    });
    // Pisces 19/2 : 20/3
    intervals.push({
        from : monthDays[1] + 19,
        to : monthDays[2] + 20,
        Name : "Pisces"
    });
}

function getName(){
    let userName = prompt("Please Enter Your Name");

    while(userName == null || userName === ""){
        userName = prompt("Please Enter A Valid Name");
    }

    User.Name = userName;
}

function getPassword(){
    let attempsCounter = 0;
    do{
        attempsCounter++;
        let password = prompt("Please Enter The Password");
        if(password === "123"){
            User.Password = password;
            return true;
        }
    }
    while(attempsCounter < 3);
    return false;
}

function getBirthMonth(){
    do{
        let birthMonth = Number(prompt("Please Enter Your Birth Month (1 : 12)"));

        if(isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12)
            continue;
        console.log(birthMonth);
        User.BirthMonth = birthMonth;
        return;
    }
    while(true);
}

function getBirthDay(){
    do{
        let birthDay = Number(prompt("Please Enter Your Birth Day (1 : 31)"));

        if(isNaN(birthDay) || birthDay < 1 || birthDay > 31)
            continue;

        if(User.BirthMonth === 2 && birthDay > 28)
            continue;
        
        if(birthDay === 31 && !Months31.includes(User.BirthMonth))
            continue;
        
        User.BirthDay = birthDay;
        return;
    }
    while(true);
}

function Run(){
    init();
    getName();
    const validPassword = getPassword();
    if(!validPassword)
        return;
    getBirthMonth();
    getBirthDay();

    const parsedBirthDate = monthDays[User.BirthMonth - 1] + User.BirthDay;
    intervals.forEach(element => {
        if(element.from <= parsedBirthDate && element.to >= parsedBirthDate){
            alert(element.Name);
            return;
        }
    });
}

Run();
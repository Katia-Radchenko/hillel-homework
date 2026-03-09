var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

const pattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

const trustedEmails = arr
    .filter(function(obj) {
        return pattern.test(obj.email);
    })
    .map(function(obj) {
        return obj.email;
    });

console.log(trustedEmails);


//Homework Part.2

const regexWords = /\b[B-Zb-z]{6,}\b/g;


const text = "Wonderful Joyful Щастя Час Завдання Яблуко"
const matches = text.match(regexWords);

console.log(matches);
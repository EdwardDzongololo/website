// local reviews data
const reviews = [{
        id: 1,
        name: "Abdulmajeed Chikukula",
        job: "First president",
        img: "majid.jpg",
        text: "Graduated from Cairo University ,Faculty of Agriculture 2020",
    },
    {
        id: 2,
        name: "Clara Saidi",
        job: "Second President",
        img: "cara.jpg",
        text: "I am Clara Saidi and I am a graduate of Cairo University , Faculty of commerce Business Administration. I has an opportunity to serve as a MACASU president 2019/2020.This opportunity helped me in boosting my my communication and leadership skills. it was a chance to deal with people who come from different backgrounds and working to keeep the malawian students together through asisitinfg eachother and encouraging each other to reach our goals",
    },
    {
        id: 3,
        name: "Charles Kamvere",
        job: "Third President",
        img: "charles.jpg",
        text: "Life is a journey,Everyday is a new chapter and and a lesson. Have dreams, work hard , fail and learnbut always find your way to success. There will always be someone better than you ,but if you really want it there is always a way to get it ",
    },
    {
        id: 4,
        name: "Sharif Amadu",
        job: "Forth President",
        img: "sharif.jpeg",
        text: "Belonging to a Union is a privilage that cant be imagined. You will see things that need doing for better of yourself and the next person. you can choose to stay out of truble or you can ask yourself 'If not me ,then Who?' ",
    },
    {
        id: 5,
        name: "Innocent Beseni",
        job: "The fifth President",
        img: "innocent.jpg",
        text: "As a student and President of Malawi's Cairo and Alexandria Students Union, I always remained focused on helping my community solve critical problems as well as running my own academic pressure. Through this leadership, I have been exposed to a diverse range of organizations, functional groups, and cultures. Collectively, these experiences and people have contributed to the person and young leader I am today. Being present, Effective Communication, discipline and integrity would be a few of the greatest leadership lessons I have learned throughout my term. ",
    },

    // {
    //     id: 6,
    //     name: "john",
    //     job: "The Current Pesident",
    //     img: "person.jpeg",
    //     text: "As a student and President of Malawi's Cairo and Alexandria Students Union. I always remain focused on helping my community solve critical problems as well as running my own academic pressure. Through this leadership, I have been exposed to a diverse range of organizations, functional groups, and cultures. Collectively, these experiences and people have contributed to the person and young leader I am today. Being present, Effective Communication, discipline and integrity would be a few of the greatest leadership lessons I have learned throughout my term. ",
    // },
];

// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
    //  set starting item 
let currentItem = 0
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem)
})

// show person based on an ite
function showPerson(person) {
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}
// show next person
nextBtn.addEventListener("click", function() {
    currentItem++
    showPerson(currentItem)
})
prevBtn.addEventListener("click", function() {
    currentItem--
    showPerson(currentItem)
})
const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardycategories = [
    {
        genre: "WHO",
        questions: [
            {
                questions: "Who's house do my cats live in?",
                answers: ["My Mum's", "My Dad's"],
                correct: "My Mum's", 
                level: "Easy"
            },
            {
                questions: "Who's the cat that climbs on top of the front door?",
                answers: ["Kane", "Captain Hault"],
                correct: "Kane", 
                level: "Medium"
            },
            {
                questions: "Who's afraid of everyone and everything?",
                answers: ["Sheba", "Captain Hault"],
                correct: "Captain Hault", 
                level: "Hard"
            },
        ],
    },
    {
        genre: "WHERE",
        questions: [
            {
                questions: "Where'd we get Skully?",
                answers: ["from a shelter", "from a relitive"],
                correct: "from a shelter", 
                level: "Easy"
            },
            {
                questions: "Where does Sheba stay in the house?",
                answers: ["In the Living Room", "In my Room"],
                correct: "In my Room", 
                level: "Medium"
            },
            {
                questions: "Where's Kane's favorite spots to nap?",
                answers: ["in litterally any chair + on top of a certain shelf", "on the kitchen table + on the couch my brother sleeps on"],
                correct: "in litterally any chair + on top of a certain shelf", 
                level: "Hard"
            },
        ],
    },
    {
        genre: "WHEN",
        questions: [
            {
                questions: "When did we get Captain Halt?",
                answers: ["Last Year", "This Year"],
                correct: "Last Year", 
                level: "Easy"
            },
            {
                questions: "When did we get Sheba?",
                answers: ["like somewhere 2-3 years ago", "sometime last year"],
                correct: "like somewhere 2-3 years ago", 
                level: "Medium"
            },
            {
                questions: "When did Sheba have her first litter of kittens?",
                answers: ["last year", "this year"],
                correct: "last year", 
                level: "Hard"
            },
        ],
    },
    {
        genre: "WHAT",
        questions: [
            {
                questions: "What does Sheba do when she's mad at the other cats?",
                answers: ["growl and hiss at them", "ignore them"],
                correct: "growl and hiss at them", 
                level: "Easy"
            },
            {
                questions: "What does Allistor do when he wants attention?",
                answers: ["rub himself against someones leg", "jump on someones lap and lay down"],
                correct: "jump on someones lap and lay down", 
                level: "Medium"
            },
            {
                questions: "What does Sheba do when she has the zoomies?",
                answers: ["jump on my curtains and scratch everything", "run around and attack anything that moves"],
                correct: "jump on my curtains and scratch everything", 
                level: "Hard"
            },
        ],
    },
    {
        genre: "HOW MANY",
        questions: [
            {
                questions: "How many litters of kittens has Sheba had?",
                answers: ["2", "1"],
                correct: "2", 
                level: "Easy"
            },
            {
                questions: "How many cats do I have?",
                answers: ["7", "5"],
                correct: "5", 
                level: "Medium"
            },
            {
                questions: "How many kittens did Sheba have in her first litter?",
                answers: ["2-3", "5-6"],
                correct: "2-3", 
                level: "Hard"
            },
        ],
    },
]


function addCategories(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const row = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = catagory.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.level === 'easy') {
            card.innerHTML = 100
        }
        if (question.level === 'medium') {
            card.innerHTML = 200
        }
        if (question.level === 'hard') {
            card.innerHTML = 300
        }
    })
}

let projects = [
    {
        id: 1, 
        name: "Portfolio", 
        description: 'A web application that describes me as a professional, and showcases my work', 
        thumbnail: './images/programming-3186084_960_720.jpg', 
        github: 'https://github.com/emmanuelmacharia/portfolio',
        deployed: false, 
        website: '',
        tags: ["reactjs", "react-router", "scss", "react-fontawesome"] 
    },
    {
        id: 2,
        name: "Javascript Development Environment",
        description: 'A boiler plate project tht helps yoou get you and running quickly on Javascript projects. It giudes decisions on bundling, transpiling, liniting, unit-testing and deployment and much much more. It\'s a frictionless boilerplate so you can easily change configurations, scripts and technologies',
        thumbnail: './images/programming-3186084_960_720.jpg',
        github: 'https://github.com/emmanuelmacharia/JavaScript-Development-Environment',
        deployed: false,
        website: 'https://github.com/emmanuelmacharia/JavaScript-Development-Environment',
        tags: ["webpack", "babel", "mocha-chai", "express", "npm-scripts"]
    },
        {
        id: 3,
        name: "Pomodoro-clock",
        description: 'The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for \'tomato\', after the tomato-shaped kitchen timer that Cirillo used as a university student.',
        thumbnail: './images/programming-3186084_960_720.jpg',
        github: 'https://github.com/emmanuelmacharia/pomodoro-clock',
        deployed: true,
        website: 'https://pomodori-clock.herokuapp.com/',
        tags: ["reactjs", "react-router", "react-bootstrap & fontawesome"] 
    },
        {
        id: 4,
        name: "Questioner-database-integration",
        description: 'Crowd-source questions for a meetup. Questioner helps the meetup organizer prioritize questions to be answered. Other users can vote on asked questions and they bubble to the top or bottom of the log. This has a postgres database set up.',
        thumbnail: './images/programming-3186084_960_720.jpg',
        github: 'https://github.com/emmanuelmacharia/Questioner-Database-Integration',
        deployed: true,
        website: 'https://questionscheme.herokuapp.com/api/v1/v2/users',
        tags: ["python3", "postgresql", "flask", "psycopg2"] 
    },
        {
        id: 5,
        name: "Sote Store-Manager",
        description: `A store management platforms that digitizes operations that take place in a store. It has two types of users; the manager: Their responsibilities are to:Manage inventory: The manager can add new products to the inventory, can delete products from the inventory, can modify details of the products and add more when they run out of stock. Manage attendants: The manager can add new attendants into the store where they assign credentials to the new user, can remove attendants from the store or change attendants' information where appropriate. The manager can also change the role of an attendant to manager -for example in the case of a promotion.The manager can also view all sales made within the store and can filter sales by attendant.The manager has admin privileges in the system. Attendant: They are the ones who interact with the customers in the store Their main responsibility is to add the products to the buyers cart.To this effect, the store management platform becomes a Point of sale system.The attendant can also view their own sales records and view progress.`,
        thumbnail: './images/programming-3186084_960_720.jpg',
        github: 'https://github.com/emmanuelmacharia/Store-Manager',
        deployed: true,
        website: 'https://emmanuelmacharia.github.io/Store-Manager/',
        tags: ["python", "flask"] 
    },
        {
        id: 6,
        name: "Javascript Calculator",
        description: 'A simple calculator application',
        thumbnail: './images/programming-3186084_960_720.jpg',
        github: 'https://github.com/emmanuelmacharia/js-calculator',
        deployed: true,
        website: 'https://reactcalculator.herokuapp.com',
        tags: ["reactjs-bootstrap", "react-fontawesome", "html-css-javascript"] 
    },
        {
        id: 7,
        name: "Redox Music",
        description: 'A full stack music application that is built in Django and Jinja in the front-end. ',
        thumbnail: './images/programming-3186084_960_720.jpg',
        github: 'https://github.com/emmanuelmacharia',
        deployed: false,
        website: 'https://github.com/emmanuelmacharia',
        tags: ["python", "sqlAlchemy", "Django", "Jinja"] 
        }
]

export default projects;
const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: "images/yoda.png"
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: "images/luke.png"
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: "images/leia.png"
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: "images/hansolo.png"
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: "images/vader.png"
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: "images/chewbacca.png"
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: "images/R2D2.png"
    },
    {
        id: 8,
        nome: 'C3p0',
        avatar: "images/c3po.png"
    }
]

const App = new Vue({ //constante é uma nova instância do Vue.js
    el:'#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Edmara',
        characters: LIST
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        }
    }
}) 
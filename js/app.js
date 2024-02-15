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
    el:'#app', //objeto que representa o elemento principal
    data: { //armazena os dados que podem ser exibidos na página
        title: 'Star Wars Lego',
        userName: 'Edmara',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },
        remove(id){
            const list = this.characters

            const result = list.filter (item => {
                return item.id !== id
            })

            this.characters = result 
        },
        search(){

            if(this.searchName === ''){
                return alert('O campo de busca é obrigatório.')
                
            }

            const list = this.characters = LIST // carrega todos os personagens na lista e ao realizar uma nova busca, é atualizado novamente a lista

            const result = list.filter(item =>{ // função de seta - faz um filtro percorrendo por todos os itens da lista
                return item.nome === this.searchName // só retorna o personagem que tiver o nome do buscar "searchName"
            })

            if(result.length <= 0 ){
                alert('Nenhum registro encontrado.')
            } else {

                this.characters = result
            }

        }
    }
}) 
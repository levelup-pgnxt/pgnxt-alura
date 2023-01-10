console.log('Pgnxt-Alura')


const cursoObjetos = {
    cargaHorariaEmHoras: 8,
    nome: 'JavaScript: objetos',
    avaliacao: 9.4,
    dataAtualizacao: '2022-11-22',
    subcategoria: {
        nome: 'Cursos de Node.JS',
        categoria: {
            nome: 'Programação'
        }
    },
    instrutores: [
        {
            nome: 'João Manoel Lima',
            github: 'https://github.com/joaom98',
            bio: 'Eu gosto muito das áreas de ensino, programação e eletrônica. Atualmente estou estudando JavaScript para back-end e desenvolvendo projetos de impressão 3D.'
        }
    ],
    aulas: [
        {
            titulo: 'O que são objetos',
            atividades: 12,
            duracaoEmMinutos: 30
        },
        {
            titulo: 'Manipulação de objetos',
            atividades: 10,
            duracaoEmMinutos: 25
        },
        {
            titulo: 'Percorrendo objetos',
            atividades: 9,
            duracaoEmMinutos: 24
        },
        {
            titulo: 'Conhecendo o JSON',
            atividades: 10,
            duracaoEmMinutos: 18
        },
        {
            titulo: 'Exercitando os conhecimentos',
            atividades: 12,
            duracaoEmMinutos: 29
        }
    ]

};

// nome da categoria do curso
console.log(`Categoria do curso: ${cursoObjetos.subcategoria.categoria.nome}`);

// número de aulas do curso
console.log(`Número de aulas do curso: ${cursoObjetos.aulas.length}`)

// nomes de todos os instrutores do curso
console.log('Nome de todos os instrutores do curso')

// for(let i = 0; i < cursoObjetos.instrutores.length; i++) {
//     let instrutor = cursoObjetos.instrutores[i];
//     console.log(instrutor.nome)
// }

// for (let instrutor of cursoObjetos.instrutores) {
//     console.log(instrutor.nome)
// } 

cursoObjetos.instrutores
    .forEach(instrutor => console.log(instrutor.nome));

// lista das durações das aulas em horas
console.log(`Durações das aulas (em h)`);

// const duracoes = [];
// cursoObjetos.aulas
//     .forEach(aula => {
//         duracoes.push(aula.duracaoEmMinutos / 60);
//     });

const duracoes = cursoObjetos.aulas
    .map(aula => aula.duracaoEmMinutos / 60);

console.log(duracoes);

// duração total em horas das aulas do curso

console.log(`Duração total das aulas (em h)`);

// let duracaoTotal = 0;
// cursoObjetos.aulas
//     .map(aula => aula.duracaoEmMinutos / 60)
//     .forEach(duracaoEmHoras => duracaoTotal += duracaoEmHoras);
// console.log(duracaoTotal);

let duracaoTotal = cursoObjetos.aulas
    .map(aula => aula.duracaoEmMinutos / 60)
    .reduce((acc, duracaoEmHoras) => acc + duracaoEmHoras);
console.log(duracaoTotal);

// duração total em horas das aulas do curso que são iguais ou maiores que 0.4 h

let duracaoTotalFiltrada = cursoObjetos.aulas
    .map(aula => aula.duracaoEmMinutos / 60)
    .filter(duracaoEmHoras => duracaoEmHoras >= 0.4)
    .reduce((acc, duracaoEmHoras) => acc + duracaoEmHoras);
console.log(duracaoTotalFiltrada);
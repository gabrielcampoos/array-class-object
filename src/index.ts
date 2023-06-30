const lista = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

const newLista = [];

const impar = lista.filter((numero) => numero % 2 !== 0);

newLista.push(impar);
console.log(newLista);

// -------------------------------------------------------------------------------------

const valorTotal = lista.reduce((acc, numero) => acc + numero, 0);

console.log(valorTotal);

// -------------------------------------------------------------------------------------

class Pessoa {
  nome: string;
  idade: number;
  salario: number;

  constructor(nome: string, idade: number, salario: number) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }
}

const listaPessoa: Pessoa[] = [
  {
    nome: "Joao",
    idade: 10,
    salario: 1200,
  },
  {
    nome: "Pedro",
    idade: 20,
    salario: 4500,
  },
  {
    nome: "Ana",
    idade: 35,
    salario: 6000,
  },
  {
    nome: "Maria",
    idade: 9,
    salario: 1400,
  },
  {
    nome: "Fernando",
    idade: 40,
    salario: 900,
  },
];

const listaMenorIdade = listaPessoa.filter((idade) => idade.idade < 23);

console.log(listaMenorIdade);

// -------------------------------------------------------------------------------------
const newListaPessoa30 = listaPessoa.filter((idade) => idade.idade < 30);
const mediaIdade = newListaPessoa30.reduce(
  (acc, numero) => acc + numero.idade / newListaPessoa30.length,
  0
);
console.log(mediaIdade);

// -------------------------------------------------------------------------------------
const salario = listaPessoa.filter((salario) => salario.salario < 1027);
const pessoaComSalarioMenor: any = [];
salario.forEach((el) => {
  pessoaComSalarioMenor.push(el.nome, el.idade);
});
console.log(pessoaComSalarioMenor);

// Testar as funções pelo console do navegador.
// Se não fica impossivel incrementar o quantidadePessoas.
// Porque a página não pode dar refresh senão volta para o valor padrão 0.
// Então não teste o retorno das funçoes usando node.

const objCarro = {
    marca:"Chevrolet",
    modelo: "Corsa",
    placa: "KNZ-2000",
    ano: 1995,
    cor: "Preto",
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas: 0 ,
    mudarCor: (cor) => objCarro.cor = cor,
    obterCor: () => objCarro.cor,
    obterModelo: () => objCarro.modelo,
    obterMarca: () => objCarro.marca,
    obterMarcaModelo: () => objCarro.obterMarca() + " " + objCarro.obterModelo(),
    adicionarPessoasNoCarro(numeroDePessoas = 0){
        if(Math.sign(numeroDePessoas) === -1) {
            return 'O número nao pode ser negativo!';
        }
        
        if(this.quantidadePessoas+numeroDePessoas === 0) {
            return 'Sem ninguém no carro no momento!';
        }

        if(this.quantidadePessoas+numeroDePessoas <= this.assentos) {
            this.quantidadePessoas += numeroDePessoas;
            return `Já temos ${this.quantidadePessoas} pessoas`;
        }
        
        
        if(this.quantidadePessoas+1 > this.assentos) {
            return "o carro está cheio!";
        } 

        if(this.quantidadePessoas+numeroDePessoas > this.assentos) {
            let cabeTxt = (this.assentos-this.quantidadePessoas === 1)? "cabe": "cabem";
            let pessoaTxt = (this.assentos-this.quantidadePessoas === 1)? "pessoa": "pessoas";
            return `Só ${cabeTxt} mais ${this.assentos-this.quantidadePessoas} ${pessoaTxt}`;
        }
    },
    
}












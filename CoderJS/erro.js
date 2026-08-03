function tratrarErro(erro) {
    throw new Error('Ocorreu um erro, por favor, tente novamente mais tarde.');
} 

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratrarErro(e);
    } finally {
        console.log('Finalizando a execução da função imprimirNomeGritando.');
    }
}

const obj = { name: 'João' };
imprimirNomeGritando(obj);  
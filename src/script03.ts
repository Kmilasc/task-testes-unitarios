export function verificarResposta(texto: string): string {
    if (texto === 'Sim') {
        return 'Parabéns';
    } else if (texto === 'Não') {
        return 'Encerrando sua sessão...';
    } else {
        return 'Você tem noções dos seus atos?';
    }
}

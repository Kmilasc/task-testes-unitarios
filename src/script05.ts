export function converterSegundos(tempoEmSegundos: number): string {
    const dias = Math.floor(tempoEmSegundos / (3600 * 24));
    const horas = Math.floor((tempoEmSegundos % (3600 * 24)) / 3600);
    const minutos = Math.floor((tempoEmSegundos % 3600) / 60);
    const segundos = tempoEmSegundos % 60;

    let mensagem = '';

    if (dias > 0) {
        mensagem += `${dias} dia(s)`;
    }

    if (horas > 0) {
        mensagem += `${mensagem.length > 0 ? ', ' : ''}${horas} hora(s)`;
    }

    if (minutos > 0) {
        mensagem += `${mensagem.length > 0 ? ', ' : ''}${minutos} minuto(s)`;
    }

    if (segundos > 0 && mensagem === '') {
        mensagem += `${segundos} segundo(s)`;
    } else if (segundos > 0) {
        mensagem += `, ${segundos} segundo(s)`;
    }

    return mensagem;
}

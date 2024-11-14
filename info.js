let janela = window.location.href

function showAlert() {
    
    if(janela.includes("atividades")) {
  alert("Aqui é onde você verá o que os professores estão Mostrando, postagens que mantém o Aluno atualizado sobre oque está acontecendo, e apenas professores podem publicar.");
    }
    if (janela.includes("jogos")) {
  alert("Aqui você poderá jogar jogos dinâmicos relacionados as disciplinas.");
}
    
    
}
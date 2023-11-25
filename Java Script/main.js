const aplausos = document.querySelector("#som_tecla_aplausos");
function tocaSom(som) {
    alert(som);
}
tocaSom("clap,clap,clap");
let controle = "tocar";
if (controle == "tocar") {
    alert ("áudio pronto para tocar");
} else {
    alerta("o áudio não está pronto");
}
const buttons = document.querySelectionAll("button");
let contador = 0;
while (contador < buttons.length) {
    buttons[contador].texteContent = contador;
    contador = contador + 1;
}
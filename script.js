
<script>
const botoes = document.querySelectorAll("button");
botoes.forEach(function(botao){ 
    botao.addEventListener("click", botaoClicado);
});

function botaoClicado (event) {
    console.log("fui clicado"); 
     // event.currentTarget refere-se ao botão exato que recebeu o clique
    let texto = event.currentTarget.querySelector("span");
    texto.textContent++;
}
    
</script>
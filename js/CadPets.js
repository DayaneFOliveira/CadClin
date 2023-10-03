document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const registrosTable = document.getElementById("registrosTable");
    const limparBtn = document.getElementById("limpar");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtém os valores do formulário
        const nome = form.elements.nome.value;
        const data = formatarData(form.elements.data.value);
        //const telefone = formatarTelefone(form.elements.telefone.value);
        const ativo = form.elements.checkbox.checked;
        const sexo = form.elements.radio.value;
        const proprietario = form.elements.proprietario.value;
        const raca = form.elements.raca.value;
        const especie = form.elements.especie.value;
        
        
        // Cria uma nova linha na tabela
        const newRow = registrosTable.insertRow(-1);
        const cells = [nome, data, especie, sexo, proprietario];

        cells.forEach((cellText, index) => {
            const cell = newRow.insertCell(index);
            cell.textContent = cellText;
        });

        // Limpa o formulário
        form.reset();

        // Salva os dados no LocalStorage
        const registro = { nome, data, especie, sexo, proprietario};
        const registros = JSON.parse(localStorage.getItem("registros")) || [];
        registros.push(registro);
        localStorage.setItem("registros", JSON.stringify(registros));
    });

    limparBtn.addEventListener("click", function () {
        form.reset();
    });

    // Carrega os registros do LocalStorage e exibe na tabela
    const registros = JSON.parse(localStorage.getItem("registros")) || [];
    registros.forEach((registro) => {
        const newRow = registrosTable.insertRow(-1);
        const cells = [registro.nome, registro.data, registro.especie, registro.sexo, registros.proprietario]});
    });

    // Função para formatar a data
    function formatarData(data) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(data).toLocaleDateString(undefined, options);
      }

      function formatarTelefone(telefone){
        //Remove todos os caracteres não numéricos
        telefone = telefone.replace(/\D/g,'') //substitui Não Dígito por nada ''
    
        //Adiciona parênteses e traços no formato do telefone
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3')
        
        return telefone
    }
   
    //exemplo de uso:
    const telefone = document.getElementById('telefone')
    telefone.addEventListener('input', function(){
        this.value = formatarTelefone(this.value)
    })
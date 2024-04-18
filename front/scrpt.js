let button = document.getElementById("handleSubmit");
 
button.onclick = async function () {
    let nome = document.getElementById("title").value;
    let email = document.getElementById("description").value;

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let results = regexEmail.test(email);
    //console.log(results);
    

    if(nome === "" && email === "") {
        swal({
            title: "Preencha os campos!",
            icon: "error",
        });
    } else if(nome === "" || nome === null) {
        swal({
            title: "Verifique seu nome!",
            icon: "error",
        });
    } else if(email === "" || !results) {
        swal({
            title: "Verifique seu email!",
            icon: "error",
        });
    } else {
        let data = { nome, email };

        const response = await fetch('http://localhost:3000/api/store/task', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });
    
        let content = await response.json();
    
        if (content.success) {
            swal({
                title: "Parabéns!",
                text: "Você foi cadastrado com sucesso!",
                icon: "success",
            });
        } else {
            swal({
                title: "Email já cadastrado",
                icon: "error",
            });
        }
    }
}




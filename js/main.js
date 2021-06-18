var language = "en";

function idiom() {
    switch (language) {
        case "en":
            document.getElementsByTagName('li')[0].textContent = "SOBRE";
            document.getElementsByTagName('li')[1].textContent = "TRABALHOS";
            document.getElementsByTagName('li')[2].textContent = "CONTATOS";
            document.getElementsByTagName('li')[3].textContent = "LINGUAGEM";

            document.getElementsByTagName('h1')[0].textContent = "Olá, eu sou Daniel";
            document.getElementsByTagName('p')[0].textContent = "Um desenvolvedor web";

            document.getElementsByTagName('h2')[0].textContent = "Estes são alguns dos meus projetos";

            document.getElementsByTagName('h2')[1].textContent = "Meus contatos";
            document.getElementsByTagName('p')[1].textContent = "Criado por DanielAbrante";
            language = "pt";
            break;
        case "pt":
            document.getElementsByTagName('li')[0].textContent = "ABOUT";
            document.getElementsByTagName('li')[1].textContent = "WORKS";
            document.getElementsByTagName('li')[2].textContent = "CONTACT";
            document.getElementsByTagName('li')[3].textContent = "LANGUAGE";

            document.getElementsByTagName('h1')[0].textContent = "Hi I am Daniel";
            document.getElementsByTagName('p')[0].textContent = "a web developer";

            document.getElementsByTagName('h2')[0].textContent = "These are some my projects";

            document.getElementsByTagName('h2')[1].textContent = "My contacts";
            document.getElementsByTagName('p')[1].textContent = "Created by DanielAbrante";
            language = "en";
            break;
    }
}
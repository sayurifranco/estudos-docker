// Podemos colocar todos esses containers para rodar 
// com o comando

// docker-compose up -d

// O Docker vai validar nosso arquivo yml e se tudo estiver 
// ok vai começar a procurar as imagens que nossos containers 
// precisam para serem executados. Aqui nós também adicionamos a 
// flag -d para que nosso terminal seja liberado após a conclusão 
// desse comando.

// A primeira vez que você executa esse comando em um projeto 
// pode demorar um pouco. O Docker precisa preparar todas as 
// imagens que esses containers utilizarão e dependendo da sua 
// internet ou do seu computador essa etapa pode levar alguns 
// minutos.

// Feito isso o Docker começa a criar os containers na ordem e 
// inicializá-los. E se tudo correu bem você pode listar os 
// containers criados com docker ps. O output desse comando 
// mostra todos os containers que estão em execução, adiciona 
// a flag -a para ver todos os containers que existe na sua máquina.
// Deixo abaixo uma lista com os comandos mais corriqueiros do 
// Docker Compose:

// Parando todos os contêineres:

// docker-compose stop

// Removendo todos os contêineres:

// docker-compose rm -f

// Vendo o log de todos os contêineres:

// docker-compose logs -f

// Construir os contêineres sem inicializá-los:

// docker-compose build

// Vale ressaltar que os containers criados pelo comando 
// docker-compose são "comuns", sendo assim os outros comandos 
// de Docker também são válidos. Você pode até parar e retomar 
// a execução de um container em específico.
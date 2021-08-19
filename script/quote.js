function quote() {
  /*
  This function changes the quote based on the week day.
  */

  // Get the date information
  let getdate = new Date();
  let day = getdate.getDay();
  // HTML Elements to change
  let quote = document.getElementById("quote-txt");
  let cite = document.getElementById("quote-cite");

  if (document.documentElement.lang === "pt-BR") {
    switch (day) {
      case 0:
        quote.innerText =
          "“A maioria dos bons programadores fazem programação não porque eles esperam serem pagos ou bajulados pelo público, mas sim porque é divertido programar.”";
        cite.innerText = "- Linus Torvalds";
        break;
      case 1:
        quote.innerText = "“Paciência é o elemento chave do sucesso.”";
        cite.innerText = "- Bill Gates";
        break;
      case 2:
        quote.innerText =
          "“Você precisa pensar de qualquer forma, então por que não pensar alto?”";
        cite.innerText = "- Donald Trump";
        break;
      case 3:
        quote.innerText = "“Não tente fazer tudo. Faça uma única coisa bem.”";
        cite.innerText = "- Steve Jobs";
        break;
      case 4:
        quote.innerText = "“Software é como sexo, é melhor quando é grátis.”";
        cite.innerText = "- Linus Torvalds";
        break;
      case 5:
        quote.innerText =
          "“Nunca é alto o preço a se pagar pelo privilégio de pertencer a si mesmo.”";
        cite.innerText = "- Friedrich Nietzsche";
        break;
      case 6:
        quote.innerText = "“Imaginação é mais importante do que conhecimento.”";
        cite.innerText = "- Albert Einstein";
        break;
      default:
        // Default output whether the script have any errors
        alert(
          "Error: Não é possível carregar a citação automática, por faver, contate me no telegram @wesleyjrz"
        );
        quote.innerText =
          "“Entre em contato comigo, por favor. Assim posso consertar o erro hahaha!”";
        cite.innerText = "- Wesley Jr";
        break;
    }
  } else {
    switch (day) {
      case 0:
        quote.innerText =
          "“Most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”";
        cite.innerText = "- Linus Torvalds";
        break;
      case 1:
        quote.innerText = "“Patience is a key element of success.”";
        cite.innerText = "- Bill Gates";
        break;
      case 2:
        quote.innerText = "“You have to think anyway, so why not think big?”";
        cite.innerText = "- Donald Trump";
        break;
      case 3:
        quote.innerText = "“Do not try to do everything. Do one thing well.”";
        cite.innerText = "- Steve Jobs";
        break;
      case 4:
        quote.innerText = "“Software is like sex: It's better when it's free.”";
        cite.innerText = "- Linus Torvalds";
        break;
      case 5:
        quote.innerText =
          "“No price is too high to pay for the privilege of owning yourself.”";
        cite.innerText = "- Friedrich Nietzsche";
        break;
      case 6:
        quote.innerText = "“Imagination is more important than knowledge.”";
        cite.innerText = "- Albert Einstein";
        break;
      default:
        // Default output whether the script have any errors
        alert(
          "Error: Auto quote cannot load, please contact me on telegram @wesleyjrz"
        );
        quote.innerText = "“Please, contact me. So I can fix the bug, lol!”";
        cite.innerText = "- Wesley Jr";
        break;
    }
  }
}

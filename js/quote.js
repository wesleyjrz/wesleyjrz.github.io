function quote() {
    /*
    This function changes the quote based on the week day.
    */

    // Get the date information
    let getdate = new Date();
    let day = getdate.getDay();
    // HTML Elements to change
    let quote = document.getElementById('quote-txt');
    let cite = document.getElementById('quote-cite');

    switch (day) {
      case 0:
        quote.innerText = '“Most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”';
        cite.innerText = '- Linus Torvalds';
        break;
      case 1:
        quote.innerText = '“Patience is a key element of success.”';
        cite.innerText = '- Bill Gates';
        break;
      case 2:
        quote.innerText = '“You have to think anyway, so why not think big?”';
        cite.innerText = '- Donald Trump';
        break;
      case 3:
        quote.innerText = '“Do not try to do everything. Do one thing well.”';
        cite.innerText = '- Steve Jobs';
        break;
      case 4:
        quote.innerText = '“Software is like sex: It\'s better when it\'s free.”';
        cite.innerText = '- Linus Torvalds';
        break;
      case 5:
        quote.innerText = '“No price is too high to pay for the privilege of owning yourself.”';
        cite.innerText = '- Friedrich Nietzsche';
        break;
      case 6:
        quote.innerText = '“Imagination is more important than knowledge.”';
        cite.innerText = '- Albert Einstein';
        break;
      default:
        // Default quote wheter have any errors
        alert('Error: Auto quote cannot load, please contact me on telegram @wesleyjrz');
        quote.innerText = '“Please, contact me. So I can fix the bug, lol!”';
        cite. innerText = '- Wesley Jr';
        break;
    }
}

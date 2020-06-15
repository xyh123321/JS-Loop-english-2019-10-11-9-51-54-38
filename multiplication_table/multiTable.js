for (let x = 1; x < 10; x++) {
    let output = '';
   for (let y = 1; y <= x; y++) {
      output += x + '*' + y + '=' + y*x + '  ';
    }
    console.log(output);
}
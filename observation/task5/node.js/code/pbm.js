// Node.js File Management Application
const fs = require('fs');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Step 1: Ask for filename
rl.question('Enter the filename: ', (filename) => {
  // Step 2: Ask for initial content
  rl.question('Enter the initial content: ', (content) => {
    
    // Create/Write the file
    fs.writeFile(filename, content, (err) => {
      if (err) throw err;
      console.log(`\n✅ File '${filename}' created and written successfully.`);

      // Read the file contents
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('\n📄 Initial File Contents:');
        console.log(data);

        // Step 3: Ask for content to append
        rl.question('\nEnter content to append: ', (appendContent) => {
          fs.appendFile(filename, appendContent, (err) => {
            if (err) throw err;
            console.log('\n➕ Content appended successfully.');

            // Read final contents
            fs.readFile(filename, 'utf8', (err, finalData) => {
              if (err) throw err;
              console.log('\n📄 Final File Contents:');
              console.log(finalData);

              rl.close();
            });
          });
        });
      });
    });
  });
});


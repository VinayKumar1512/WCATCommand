# WCATCommand

General Syntax:
node wcat.js [options] [filepaths] </br>
option to remove big line break (-s)</br>
option to add line number to non empty lines (-b)</br>
option to add line numbers to all lines (-n) </br>

Commands:</br>
1- node wcat.js filepath => displays content of the file in the terminal </br>
2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order.</br>
3- node wcat.js -s filepath => convert big line breaks into a singular line break</br>
4- node wcat.js -n filepath => give numbering to all the lines </br>
5- node wcat -b filepath => give numbering to non-empty lines</br>
We can mix and match the options.</br>
6- If file entered is not found then it gives file does not exist error.</br>

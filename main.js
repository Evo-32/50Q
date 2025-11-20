 // Sample data
        const numbers = [15, 23, 8, 42, 17, 9, 31, 56, 23, 8, 19, 45, 67, 12, 34, 23, 78, 9, 15, 42];
        const names = ["Annete", "Betty", "Choel", "Dianah", "Elijah", "Fredy", "Grace", "Heriette", "Ines", "John", 
                       "Keilla", "Liam", "Mike", "Nathan", "Olivia", "Peter", "Quinn", "Leah", "Sam", "Terry","Zaninka",
                          "yvette","violet","wendy","Bega","Emma"];

        // Arrays - Questions 1-10
        function sumArray(arr) {
            return arr.reduce((sum,num) => sum += num,0)
        }

        function findLargest(arr) {
            arr.sort((a,b)=> b-a)
            return arr[0]
        }

        function sortAscending(arr) {
            return arr.sort((a, b) => a - b);
        }

        function reverseArray(arr) {
            return arr.reverse();
        }

        function getEvenNumbers(arr) {
            return arr.filter(num => num % 2 === 0);
        }

        function getOddNumbers(arr) {
            return arr.filter(num => num % 2 !== 0);
        }

        function getAverage(arr) {
            return sumArray(arr) / arr.length;
        }

        function removeDuplicates(arr) {
            return [...new Set(arr)];
        }

        function getMedian(arr) {
            const sorted = sortAscending(arr);
            const mid = Math.floor(sorted.length / 2);
            if (sorted.length % 2 === 0) {
                return (sorted[mid - 1] + sorted[mid]) / 2;
            }
            return sorted[mid];
        }

        function multiplyBy2(arr) {
            return arr.map(num => num * 2);
        }

        // Arrays of Strings - Questions 11-20
        function printNames(arr) {
            return arr.join('\n');
        }

        function sortNames(arr) {
            return arr.sort();
        }

        function nameExists(arr, name) {
            return arr.includes(name);
        }

        function findLongestName(arr) {
            let longest = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i].length > longest.length) {
                    longest = arr[i];
                }
            }
            return longest;
        }

        function findNamesStartingWith(arr, letter) {
            return arr.filter(name => name[0].toLowerCase() === letter.toLowerCase());
        }

        function toUpperCaseNames(arr) {
            return arr.map(name => name.toUpperCase());
        }

        function removeName(arr, name) {
            return arr.filter(n => n !== name);
        }

        function countNamesWithA(arr) {
            return arr.filter(name => name.toLowerCase().includes('a')).length;
        }

        function concatenateNames(arr) {
            return arr.join(', ');
        }

        function reverseNames(arr) {
            return [...arr].reverse();
        }

        // Objects - Questions 21-30
        const person = {
            name: "John Doe",
            age: 25,
            occupation: "Software Developer"
        };

        function formatPersonInfo(obj) {
            return `Name: ${obj.name}, Age: ${obj.age}, Occupation: ${obj.occupation}`;
        }

        function addProperty(obj, key, value) {
            const newObj = {...obj};
            newObj[key] = value;
            return newObj;
        }

        function removeProperty(obj, key) {
            const newObj = {...obj};
            delete newObj[key];
            return newObj;
        }

        function listProperties(obj) {
            let result = '';
            for (let key in obj) {
                result += `${key}: ${obj[key]}\n`;
            }
            return result;
        }

        function mergeObjects(obj1, obj2) {
            return {...obj1, ...obj2};
        }

        function propertyExists(obj, key) {
            return obj.hasOwnProperty(key);
        }

        function cloneObject(obj) {
            return JSON.parse(JSON.stringify(obj));
        }

        const people = [
            {name: "Alice", age: 30},
            {name: "Bob", age: 25},
            {name: "Charlie", age: 35}
        ];

        function printProperty(arr, prop) {
            return arr.map(obj => obj[prop]).join('\n');
        }

        function updatePersonAge() {
            const newAge = document.getElementById('newAge').value;
            if (newAge) {
                person.age = parseInt(newAge);
                document.getElementById('q30').textContent = `Updated person: ${JSON.stringify(person)}`;
            }
        }

        // Strings - Questions 31-40
        function reverseString(str) {
            let reversed = '';
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            return reversed;
        }

        function countVowels(str) {
            const vowels = 'aeiouAEIOU';
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (vowels.includes(str[i])) count++;
            }
            return count;
        }

        function toUpperCaseManual(str) {
            let result = '';
            for (let i = 0; i < str.length; i++) {
                const code = str.charCodeAt(i);
                if (code >= 97 && code <= 122) {
                    result += String.fromCharCode(code - 32);
                } else {
                    result += str[i];
                }
            }
            return result;
        }

        function stringLengthManual(str) {
            let count = 0;
            for (let char of str) {
                count++;
            }
            return count;
        }

        function replaceSpacesWithHyphens(str) {
            let result = '';
            for (let i = 0; i < str.length; i++) {
                result += str[i] === ' ' ? '-' : str[i];
            }
            return result;
        }

        function extractFirst10(str) {
            return str.substring(0, 10);
        }

        function findAndReplace(str, find, replace) {
            return str.replace(find, replace);
        }

        function splitIntoWords(str) {
            return str.split(' ');
        }

        function removeNumbers(str) {
            let result = '';
            for (let i = 0; i < str.length; i++) {
                if (isNaN(str[i]) || str[i] === ' ') {
                    result += str[i];
                }
            }
            return result;
        }

        function insertAtPosition(str, insert, pos) {
            return str.slice(0, pos) + insert + str.slice(pos);
        }

        // DOM Manipulation - Questions 41-50
        function changeBackgroundColor() {
            const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }

        function hideElement() {
            document.getElementById('hideElement').style.display = 'none';
        }

        function appendParagraph() {
            const p = document.createElement('p');
            p.textContent = 'This is a newly created paragraph!';
            p.style.backgroundColor = '#2ecc71';
            p.style.color = 'white';
            p.style.padding = '10px';
            document.body.appendChild(p);
        }

        function removeAllListItems() {
            const list = document.getElementById('myList');
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        }

        function changeTextContent() {
            document.getElementById('changeText').textContent = 'Text has been changed!';
        }

        function toggleClass() {
            const elem = document.getElementById('toggleElement');
            elem.classList.toggle('highlighted');
            if (elem.style.backgroundColor === 'rgb(149, 165, 166)' || elem.style.backgroundColor === '') {
                elem.style.backgroundColor = '#e74c3c';
                elem.style.color = 'white';
            } else {
                elem.style.backgroundColor = '#95a5a6';
                elem.style.color = 'black';
            }
        }

        function countDivs() {
            return document.getElementsByTagName('div').length;
        }

        function displayInputValue() {
            const value = document.getElementById('userInput').value;
            document.getElementById('q48').textContent = `You entered: ${value}`;
        }

        function createTable() {
            const table = document.createElement('table');
            let num = 1;
            for (let i = 0; i < 3; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < 3; j++) {
                    const cell = document.createElement('td');
                    cell.textContent = num++;
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            return table;
        }

        function validateForm() {
            const name = document.getElementById('userName').value;
            const email = document.getElementById('userEmail').value;
            const password = document.getElementById('userPassword').value;
            
            if (name && email && password) {
                document.getElementById('q50').textContent = 'Form is valid! All fields are filled.';
                document.getElementById('q50').style.color = 'green';
            } else {
                document.getElementById('q50').textContent = 'Form is invalid! Please fill all fields.';
                document.getElementById('q50').style.color = 'red';
            }
        }

        // Display all results
        document.getElementById('q1').textContent = `Array: [${numbers}]\nSum: ${sumArray(numbers)}`;
        document.getElementById('q2').textContent = `Array: [${numbers}]\nLargest: ${findLargest(numbers)}`;
        document.getElementById('q3').textContent = `Original: [${numbers}]\nSorted: [${sortAscending(numbers)}]`;
        document.getElementById('q4').textContent = `Original: [${numbers}]\nReversed: [${reverseArray(numbers)}]`;
        document.getElementById('q5').textContent = `Even numbers: [${getEvenNumbers(numbers)}]`;
        document.getElementById('q6').textContent = `Odd numbers: [${getOddNumbers(numbers)}]`;
        document.getElementById('q7').textContent = `Average: ${getAverage(numbers).toFixed(2)}`;
        document.getElementById('q8').textContent = `Original: [${numbers}]\nWithout duplicates: [${removeDuplicates(numbers)}]`;
        document.getElementById('q9').textContent = `Median: ${getMedian(numbers)}`;
        document.getElementById('q10').textContent = `Original: [${numbers}]\nMultiplied by 2: [${multiplyBy2(numbers)}]`;

        document.getElementById('q11').textContent = printNames(names);
        document.getElementById('q12').textContent = `Sorted: [${sortNames(names).join(', ')}]`;
        document.getElementById('q13').textContent = `Does "Alice" exist? ${nameExists(names, "Alice")}\nDoes "Zack" exist? ${nameExists(names, "Zack")}`;
        document.getElementById('q14').textContent = `Longest name: ${findLongestName(names)}`;
        document.getElementById('q15').textContent = `Names starting with 'A': [${findNamesStartingWith(names, 'A').join(', ')}]`;
        document.getElementById('q16').textContent = `Uppercase: [${toUpperCaseNames(names).join(', ')}]`;
        document.getElementById('q17').textContent = `After removing "Bob": [${removeName(names, "Bob").join(', ')}]`;
        document.getElementById('q18').textContent = `Names containing 'a': ${countNamesWithA(names)}`;
        document.getElementById('q19').textContent = concatenateNames(names);
        document.getElementById('q20').textContent = `Reversed: [${reverseNames(names).join(', ')}]`;

        document.getElementById('q21').textContent = JSON.stringify(person, null, 2);
        document.getElementById('q22').textContent = formatPersonInfo(person);
        document.getElementById('q23').textContent = `After adding "city": ${JSON.stringify(addProperty(person, "city", "New York"))}`;
        document.getElementById('q24').textContent = `After removing "age": ${JSON.stringify(removeProperty(person, "age"))}`;
        document.getElementById('q25').textContent = listProperties(person);
        document.getElementById('q26').textContent = `Merged: ${JSON.stringify(mergeObjects(person, {city: "Boston", country: "USA"}))}`;
        document.getElementById('q27').textContent = `Has "name"? ${propertyExists(person, "name")}\nHas "salary"? ${propertyExists(person, "salary")}`;
        const cloned = cloneObject(person);
        document.getElementById('q28').textContent = `Original: ${JSON.stringify(person)}\nCloned: ${JSON.stringify(cloned)}\nAre they the same object? ${person === cloned}`;
        document.getElementById('q29').textContent = `Names from people array:\n${printProperty(people, "name")}`;
        document.getElementById('q30').textContent = `Current person: ${JSON.stringify(person)}`;

        const testString = "Hello World";
        document.getElementById('q31').textContent = `Original: "${testString}"\nReversed: "${reverseString(testString)}"`;
        document.getElementById('q32').textContent = `String: "${testString}"\nVowel count: ${countVowels(testString)}`;
        document.getElementById('q33').textContent = `Original: "${testString}"\nUppercase: "${toUpperCaseManual(testString)}"`;
        document.getElementById('q34').textContent = `String: "${testString}"\nLength: ${stringLengthManual(testString)}`;
        document.getElementById('q35').textContent = `Original: "${testString}"\nWith hyphens: "${replaceSpacesWithHyphens(testString)}"`;
        document.getElementById('q36').textContent = `Original: "${testString}"\nFirst 10 chars: "${extractFirst10(testString)}"`;
        document.getElementById('q37').textContent = `Original: "${testString}"\nReplaced: "${findAndReplace(testString, "World", "JavaScript")}"`;
        document.getElementById('q38').textContent = `Original: "${testString}"\nWords: [${splitIntoWords(testString).join(', ')}]`;
        const stringWithNumbers = "Hello123World456";
        document.getElementById('q39').textContent = `Original: "${stringWithNumbers}"\nWithout numbers: "${removeNumbers(stringWithNumbers)}"`;
        document.getElementById('q40').textContent = `Original: "${testString}"\nInserted: "${insertAtPosition(testString, "Beautiful ", 6)}"`;

        document.getElementById('q47').textContent = `Number of divs on page: ${countDivs()}`;
        document.getElementById('q49').appendChild(createTable());
## Loop Function "for"

> File : `index.html`

Inside file index.html init script js :

```javascript
<script src="for.js"></script>
```

> File : `for.js`

Inside file for.js create loop function "for" :

```javascript
const nama = "Aditya";

let text = "";
for (let i = 0; i < 30; i++) {
  text += i + ". " + nama + "<br>";
}
document.write(text);
```

## Loop Function "forEach"

> File : `index.html`

Inside file index.html init script js :

```javascript
<script src="forEach.js"></script>
```

> File : `forEach.js`

Inside file forEach.js create loop function "forEach" with operator "in" :

```javascript
const nama = ["Aditya", "Cintara", "Fernand"];

for (i in nama) {
  document.write(i + ". " + nama[i] + "<br>");
}
```

or

```javascript
const nama = ["Aditya", "Cintara", "Fernand"];

nama.forEach(function (n){
    document.write("<p>" + n "</p>")
})
```

## Loop Function "repeat"

\*Noted: repeat can be used just for text or string

> File : `index.html`

Inside file index.html init script js :

```javascript
<script src="repeat.js"></script>
```

> File : `repeat.js`

Inside file repeat.js create loop function "repeat" :

```javascript
const nama = "Aditya";

document.write(`${nama} <br>`.repeat(10));
```

## Loop Function "while"

\*Noted: 'while' is multifunction looping in javascript because can be countedloop or uncountedloop

> File : `index.html`

Inside file index.html init script js :

```javascript
<script src="while.js"></script>
```

> File : `while.js`

Inside file while.js create loop function "while" :

```javascript
let repeat = confirm("klik ok untuk memulai looping while");
let counter = 0;

while (repeat) {
  counter++;
  repeat = confirm("looping telah dilakukan " + counter + " kali");
}
document.write("looping: " + counter + " kali");
```

## Loop Function "do while"

> File : `index.html`

Inside file index.html init script js :

```javascript
<script src="doWhile.js"></script>
```

> File : `doWhile.js`

Inside file doWhile.js create loop function "do while" :

```javascript
let repeat = confirm("klik ok untuk memulai looping do while");
let counter = 0;

do {
  counter++;
  repeat = confirm("looping telah dilakukan " + counter + " kali");
} while (repeat);
document.write("looping: " + counter + " kali");
```

# dom-upgrade Usage


## Import Module

import modules according your javascript type

### Alert Use:

```javascript
Alert("string like hello world");
```

It creates a pop up message on screen

### ErrorAlert Use:

```javascript
// you can use any error
ErrorAlert(new Error("error message"));

// or Put it in catch block
try {
  /* code here ... */
} catch (err) {
  ErrorAlert(err);
}
```

It pops up error message on screen

### WarningAlert Use:

```javascript
WarningAlert("enter warning message");
```

It pops up a warning message on screen

### Prompt Use:

Use await and async for it 

```javascript
async main() {
  let num= await Prompt("Optional string: ");
  console.log(num);
}
main();
```

It creates a prompt for user input
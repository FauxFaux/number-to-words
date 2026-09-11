# Number To Words

Contains some util methods for converting numbers into words, ordinal words and
ordinal numbers.

### Install

`npm install ts-number-to-words`

### API

#### `toOrdinal(number)`

Converts an integer into a string with an ordinal postfix.
If number is decimal, the decimals will be removed.

```js
import { toOrdinal } from 'number-to-words';
toOrdinal(21); // => “21st”
```

#### `toWords(number)`

Converts an integer into words.
If number is decimal, the decimals will be removed.

```js
import { toWords } from 'number-to-words';
toWords(13); // => “thirteen”

// Decimal numbers:
converter.toWords(2.9); // => “two”

// Negative numbers:
converter.toWords(-3); // => “minus three”

// Large numbers:
converter.toWords(9007199254740992); // => “nine quadrillion, seven trillion, one hundred ninety-nine billion, two hundred fifty-four million, seven hundred forty thousand, nine hundred ninety-two”
```

#### `toWordsOrdinal(number)`

Converts a number into ordinal words.
If number is decimal, the decimals will be removed.

```js
import { toWordsOrdinal } from 'number-to-words';
toWordsOrdinal(21); // => “twenty-first”
```

### Credit

Fork of https://github.com/marlun78/number-to-words , orginally to modernise the build system.

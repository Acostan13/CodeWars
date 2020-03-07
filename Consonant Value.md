# CodeWars JavaScript Solutions



## Consonant Value


**Description:**

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alpahabet except ```"aeiou"```.

We shall assign the following values: ```a = 1, b = 2, c = 3, .... z = 26```.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

```
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
```
### Solution 

```

solve = (s) => Math.max(... // finds the max value of an array
    s.split(/[aeiou]/g) // creates array of consonant substrings
    .map(e => e.split('') // splits consonants substrings into an array of arrays
    .reduce((r, e) => r + e.charCodeAt() - 96, 0)) // sums values of consonant substrings array
);

```

---
[See on CodeWars.com](https://www.codewars.com/kata/59c633e7dcc4053512000073/)

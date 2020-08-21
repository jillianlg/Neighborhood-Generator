# _Neighborhood Generator_

#### _Application takes user numerical input and outputs a range of numbers intertwinded with text., 08.21..2020_

#### By _**Jillian Gibson**_

## Description

_This HTML demonstrates the fundamental understanding of Arrays, Loops, TDD and DRY Methodology by converting the users numerical input and outputing a range of numbers intertwinded with sayings from Mr. Roboger's Neighborhood._

## Specs
| Spec | Description | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5004 | Homepage with user input form |
| 1 |**The program will return a range of numbers from 0 to the users inputted number** | User input: "5" | Output: "0, 1, 2, 3, 4, 5" |
| 2 |**The program will identfy if the users inputted number contains a 1 and convert it to "Beep".** | User input: "11" | Output: "Beep" |
| 3 |**The program will identfy if the users inputted number contains a 2 and convert it to "Boop".** | User input: "26" | Output: "Boop" |
| 4 |**The program will identfy if the users inputted number contains a 3 and convert it to "Won't you be my neighbor?".** | User input: "30" | Output: "Won't you be my neighbor?" |
| 5 |**The program will return an output in order of priority with 3 taking priority over 2 and 2 taking priority over 1.** | User input: "13" | Output: "Won't you be my neighbor?" |
| 6 |**The program will return user input intertwinded with text.** | User input: "4" | Page Display: "0, Beep, Boop, Won't you be my neighbor?, 4" |

## Test Driven Development:
* _Describe: neighborhood()_

* _Test 1: "Return a range of numbers from 0 to the users inputted number."_
* _Expect: (neighborhood(5)).toEqual(0, 1, 2, 3, 4, 5);_

* _Test 2: "If users inputted number contains a 1 convert it to 'Beep'"._
* _Expect: (neighborhood(11)).toEqual(0, Beep, 2, 3, 4, 5, 6, 7, 8, 9, 10, Beep);_

* _Test 3: If users inputted number contains a 2 convert it to 'Boop'"._
* _Expect: (neighborhood(12)).toEqual(0, Beep, Boop, 3, 4, 5, 6, 7, 8, 9, 10, Beep, Boop);_

* _Test 4: "If users inputted number contains a 3 convert it to 'Won't you be my neighbor?'"._
* _Expect: (neighborhood(6)).toEqual(0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6);_

* _Test 5: "Return in order of 3 taking priority over 2 and 2 taking priority over 1."_
* _Expect: (neighborhood(13)).toEqual(0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, Beep, Boop, "Won't you be my neighbor?");_

## Setup/Installation Requirements

* _Clone down repository from Git Hub to machine._
* _Navigate to root directory._
* _Open index.html in text editor to view code._
* _Launch index.html to in browser to display or view via [ghpages](TBD)._


## Known Bugs

_No known bugs._

## Support and contact details

_Questions or comments can be directed to [Jillian Gibson](jillian.l.gibson@gmail.com)._

## Technologies Used

* _HTML_
* _JavaScript_
* _Bootstrap_
* _jQuery_

### License

*_This software operates under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license._*

Copyright (c) 20202 **_Jillian Gibson_**
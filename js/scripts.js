// Test Driven Development:
  // Describe: neighborhood()
  // Test 1: "return a range of numbers from 0 to the users inputted number.
  // Expect: (neighborhood(5)).toEqual(0, 1, 2, 3, 4, 5);
  
  // Test 2: "If users inputted number contains a 1 convert it to "Beep".
  // Expect: (neighborhood(11)).toEqual(0, Beep, 2, 3, 4, 5, 6, 7, 8, 9, 10, Beep);

  // Test 3: will identfy if the users inputted number contains a 2 and converts it to "Boop".
  // Expect: (neighborhood(12)).toEqual(0, Beep, Boop, 3, 4, 5, 6, 7, 8, 9, 10, Beep, Boop);

  // Test 4: will identfy if the users inputted number contains a 3 and converts it to "Won't you be my neighbor?".
  // Expect: (neighborhood(6)).toEqual(0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6);

  // Test 5: will return in order of 3 taking priority over 2 and 2 taking priority over 1.
  // Expect: (neighborhood(13)).toEqual(0, Beep, Boop, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, Beep, Boop, "Won't you be my neighbor?");


// Business Interface

// User Interface
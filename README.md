# TempTracker


   insert() - records a new temperature

   get_max() - returns the highest temp we've seen so far

   get_min() - returns the lowest temp we've seen so far

   get_mean() - returns the mean of all temps we've seen so far

   get_mode() - returns a mode of all temps we've seen so far


Favour speeding up the getter methods get_max(), get_min(), get_mean(), and get_mode() over speeding up the insert() method.
get_mean() should return a float, but the rest of the getter methods can return integers. Temperatures will all be inserted as integers and we can assume they will be in the range 0 ℃ to 150 ℃.
If there is more than one mode, return any of the modes.


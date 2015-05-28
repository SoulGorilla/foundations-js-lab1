/* ----------------- Survey Says...----------------------------------------
 Like any conscientious business, the Woodland Park Zoo collects statistics
 about its animal exhibits. The animalExhibitsStats object is a summary of what
 they found.
*/

// TODO: 4 points
// All of the property names below are surrounded by quotes. Some of the names
// don't require quotes for the code to work. Remove the unnecessary quotes.

// Silence this particular jshint error for this assignment
/*jshint sub:true*/

exports.animalStats = function() {
  // TODO change the way this property is implemented.
  // yes the test passes without changing it, but you won't receive credit
  // unless you actually change implementation below. The tests must still
  // pass after your change
  var animalExhibitStats = {
    numberOpen: 13,
    numberClosed: 2,
    pettingZooOpen: true,
    mostPopular: "Lucky the Emperor Penguin",
    2ndMostPopular: "Dumbo the Depressed Donkey"
  };
  return animalExhibitStats;
};

/*
 TODO: 4 points
 The animalExhibitStats object is indexed four times below using bracket
 notation. WITHOUT changing any of the property names, replace the bracket
 notation with Dot notation wherever possible.
*/

exports.animalIndexing = function() {
  var animalExhibitStats = new Object () {
    this.numberOpen = 13;
    this.numberClosed = 2;
    this.pettingZooOpen = true;
    this.mostPopular = "Lucky the Emperor Penguin";
    this.2ndMostPopular = "Dumbo the Depressed Donkey";
  };
  // TODO change the way we access these properties
  animalExhibitStats.mostPopular = null;
  animalExhibitStats.numberOpen = null;
  return animalExhibitStats;
};

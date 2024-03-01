
var curtime = new Date(),
    curday = curtime.getDate(),

if ((curmonth == 12) || (curmonth == 1) || (curmonth == 2)) {
  ...seasonalElements.addClass('winter');
} else if ((curmonth == 3) || (curmonth == 4) || (curmonth == 5)) {
  ...seasonalElements.addClass('spring');
} else if ((curmonth == 6) || (curmonth == 7) || (curmonth == 8)) {
  ...seasonalElements.addClass('summer');
} else {
  ...seasonalElements.addClass('fall');
}
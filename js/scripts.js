//Back-End Logic
var weekday;
var totalTips;
var tipArray = [];
var totalWeeklyTips = 0;

var actualCashMath = function(tilTotal) {
  return tilTotal - 300;
};

function weeklyBreakdown(weekday, totalTips) {
  this.monday = 'Monday: ';
  this.tuesday = 'Tuesday: ';
  this.wednesday = 'Wednesday: ';
  this.thursday = 'Thursday: ';
  this.friday = 'Friday: ';
  this.saturday = 'Saturday: ';
  this.sunday = 'Sunday: ';
  this.week = [];
}

weeklyBreakdown.prototype.tipPush = function() {
  if (weekday === 1) {
    tipArray.push(this.monday + totalTips);
    totalWeeklyTips += totalTips;
  } else if (weekday === 2) {
    tipArray.push(this.tuesday + totalTips);
    totalWeeklyTips += totalTips;
  } else if (weekday === 3) {
    tipArray.push(this.wednesday + totalTips);
    totalWeeklyTips += totalTips;
  } else if (weekday === 4) {
    tipArray.push(this.thursday + totalTips);
    totalWeeklyTips += totalTips;
  } else if (weekday === 5) {
    tipArray.push(this.friday + totalTips);
    totalWeeklyTips += totalTips;
  } else if (weekday === 6) {
    tipArray.push(this.saturday + totalTips);
    totalWeeklyTips += totalTips;
  } else if (weekday === 7) {
    tipArray.push(this.sunday + totalTips);
    totalWeeklyTips += totalTips;
  }
  return tipArray;
  return totalWeeklyTips;
}


//Front-End Logic
$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();

    $(".breakdown").show();
    weekday = parseInt($("select#weekdays").val());
    var tilTotal = parseInt($('input#tilTotal').val());
    var posCash = parseInt($('input#posCash').val());
    var cashTips = parseInt($('input#cashTips').val());
    var ccTips = parseInt($('input#ccTips').val());

    $("#outputPOSCash").text(posCash);
    $("#outputCashTips").text(cashTips);
    $("#outputCCTips").text(ccTips);

    var actualCash = actualCashMath(tilTotal);
    $("#actualCash").text(actualCash);

    var difference = actualCash - posCash
    $("#difference").text(difference);

    totalTips = cashTips + ccTips
    $("#totalTips").text(totalTips);


    var Drop = actualCash - ccTips
    $("#drop").text(Drop);

    var newBreakdown = new weeklyBreakdown(weekday, totalTips);
    newBreakdown.tipPush();

    $(".inputNos").hide();

    console.log(tipArray);
    console.log(totalWeeklyTips);


  });
});

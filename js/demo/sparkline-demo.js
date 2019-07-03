var system_001_days = [63, 78, 76, 63, 60, 43];
var system_002_days = [22];
var system_003_days = [82, 78, 71, 70, 55, 40, 4, 12, 75, 70, 64, 64, 55, 55, 49, 47, 42, 32, 32, 29, 22, 19, 18, 17, 15];
var system_004_days = [7, 75, 75, 53, 49, 49, 49, 44, 35, 33, 33, 30, 29, 25, 23, 22, 22, 20, 18, 15, 13, 13, 12, 8];
var system_005_days = [85, 89, 85, 85, 85, 85, 83, 83, 78, 8, 89, 85, 83, 83, 83, 81, 81, 81, 74, 46, 32, 20];
var system_006_days = [85, 3, 89, 85, 83, 83, 83, 74, 62, 62, 49, 26, 24, 20];
var system_007_days = [3, 85, 81, 74];
var system_008_days = [7, 5, 83];
var system_009_days = [25, 22];
var system_010_days = [88];
var system_011_days = [55, 32, 29, 29];
var system_012_days = [68];

var bars = 30;
var period = 90; // days

function getBars(days, bars, period) {
    var system = [];
        for (var i = 0; i < bars; i++) {
            system[i] = 0;
                for (var j = 0; j < days.length; j++) {
                    if (Math.trunc(days[j] / (period / bars)) === i) {
                system[i]++;
            }
        }
    }
    return system.reverse();
}


$(function () {
    $("#sparkline_001").sparkline(getBars(system_001_days, bars, period), {
        type: 'bar',
        barColor: '#676a6c',
        disableTooltips: true,
    });
  $("#sparkline_002").sparkline(getBars(system_002_days, bars, period), {
      type: 'bar',
      barColor: '#676a6c',
      disableTooltips: true,
  });
  $("#sparkline_003").sparkline(getBars(system_003_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_004").sparkline(getBars(system_004_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_005").sparkline(getBars(system_005_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_006").sparkline(getBars(system_006_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_007").sparkline(getBars(system_007_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_008").sparkline(getBars(system_008_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_009").sparkline(getBars(system_009_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_010").sparkline(getBars(system_010_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_011").sparkline(getBars(system_011_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
  $("#sparkline_012").sparkline(getBars(system_012_days, bars, period), {
    type: 'bar',
    barColor: '#676a6c',
    disableTooltips: true,
  });
});

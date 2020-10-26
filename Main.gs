// creates a custom menu when the spreadsheet is opened
function onOpen() {
  var ui = SpreadsheetApp.getUi()
    .createMenu('Alarm')
    .addItem('Change Notifier', 'openChangeNotifier')
    .addToUi();
}

// opens the sidebar app
function openChangeNotifier() {
  // get the html from the file called "Page.html"
  var html = HtmlService.createHtmlOutputFromFile('Page') 
    .setTitle("Change Notifier");

  // open the sidebar
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

// returns a list of values in column
function getColumn(column) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja 1");
  // get the values in column and turn the rows into a single values
  return sheet.getRange(1, column, sheet.getLastRow(), 1).getValues().map(function (row) { return row[0]; });
}

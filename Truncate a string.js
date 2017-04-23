function truncateString(str, num) {
  var processedStr = "";

  if (num <= 3 && num < str.length) {
    processedStr = str.slice(0, num);
  } else if (num < str.length) {
    processedStr = str.slice(0, num - 3);
  } else {
    return str;
  }
  processedStr += "...";
  return processedStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 3);

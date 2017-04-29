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

// same ternary

function truncateString(str, num) {
  return num <= 3? str.substr(0, num) + "...": str.length > num? str.substr(0, num -3) + "..." : str;
}

truncateString("Peter Piper picked a peck of pickled peppers", 14);

// a jako że wspominałeś o nieczytelności 2 warunków w ternary to dodaje wersje bardziej czytelną

function truncateString(str, num) {
  if (num <= 3) {
    return str.substr(0, num) + "...";
  } 
  return str.length > num? str.substr(0, num -3) + "..." : str;
}

truncateString("Peter Piper picked a peck of pickled peppers", 14);
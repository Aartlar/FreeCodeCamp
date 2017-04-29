function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(val){
    return val.replace(val[0], val[0].toUpperCase());
  }).join(" ");
}

titleCase("I'm a lIttle tea pot");

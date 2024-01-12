//the value of format WNO, LMF or MFL ex: for Taylor Alison Swift
// WNO – Western Name order (First, middle, last), e.g. Taylor, Alison, Swift
// ENO – Eastern Name order (Last,middle, first ), e.g. Swift, Alison, Taylor
// SCH -  School order (last, first, middle), e.g. Swift, Taylor, Alison
function getNameFormat(format){
    //Define functions that take in an arbitrariy number of strings. 
    //Each strings contains names to be parsed according to the given format (defined above) and received here as an argument.
    //Within each string, the name components are sperated by a space (" "), the different names are seperated by commas.
    //Each function returns a stringified array of objects containing the parsed names
    //the order of the properties in each object should be name, middle, last, regardless of the orginial format
    function NameParser(...names){
      const list = [];

      for (let name of names){
          let chop = name.split(" ") ;
          let ordered = {};
          switch (format){
              case "Western":
                  ordered.first = chop[0]
                  ordered.middle = chop[1]
                  ordered.last = chop[2]
                  list.push(ordered);
                  break;
              case "Eastern":
                  ordered.first = chop[2]
                  ordered.middle = chop[1]
                  ordered.last = chop[0]
                  list.push(ordered)
                  break;
              case "School":
                  ordered.first = chop[1]
                  ordered.middle = chop[2]
                  ordered.last = chop[0]
                  list.push(ordered)
                  break;
          }
      };
      return JSON.stringify(list);
  }
  return NameParser;
};    

// add an assignment for each of the following bindings so that it would be point at a closure of the corresponding format 
let WesternOrderParser = getNameFormat('Western');
let EasternOrderParser = getNameFormat('Eastern');
let SchoolOrderParser = getNameFormat('School');
  
// Please don't change these lines
module.exports.westernOrderParser = WesternOrderParser;
module.exports.easternOrderParser = EasternOrderParser;
module.exports.schoolOrderParser = SchoolOrderParser;

/*
   If you would like to run the tests locally to check your work before submission you need to following the following steps
- Open a terminal inside the working directory
- Run the command `npm install` (only needed once)
- Run the command `npm test` (everytime you would like to run the tests)
*/
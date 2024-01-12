
/* You are designing an AI application that will take in some weather data to perform its training and testing. 
The algorithm relies on each data object having a pre-determined set of features/properties, however the data 
was obtained from different sources and therefore, is heterogenous. This cleanData function will take an array of objects, 
 and perform some required cleaning to ensure that each object has only 3 pre-determined properties (temperature, precipication, humidity ). 
 This function does all the necessary cleaning by removing properties that are not necessary and adding 
 missing ones with with default values of 0.*/

let cleanData = function (dataset)
{
        
    for (let data of dataset /* complete this part*/) // this loop iterates over the elements of the array
    {
        /**
         * A Flag is a boolean variable that you can use to indicate whether a condition is  met (e.g. found or not found)
          * in one part of the code in order to decide on an action in another part of the code.
          
            The following three variables are flags to check the existence of 
            the three properties of the object*/

        let temperatureFound=false; 
        let precipitationFound=false;
        let humidityFound=false;   

        for (let prop in data) // This loop iterates over the properties of each object pick appropriate type
        {
            /**
             * Create a conditional block that checks the name of the property
             * if the name is either temperature, precipication or humidity the corresponding flag should be set to true
             * otherwise the property should be deleted from the object. 
             * Additionally, if you find a temp property you should rename it to temperature
             */
            if (prop === 'temperature' || prop === 'temp') {
                temperatureFound = true;
                if (prop === 'temp') {
                    data.temperature = data[prop];
                    delete data[prop]; 
                }
            } else if (prop === 'precipitation') {
                precipitationFound = true;
            } else if (prop === 'humidity') {
                humidityFound = true;
            } else {
                delete data[prop];
            }
        
        }
        // Now use the flags to check if the (temperature, precipitation and humidity) properties where found
        // if any of them was not found then add it to the object with a value 0
        if (!temperatureFound) {
            data.temperature = 0;
        }
        if (!precipitationFound) {
            data.precipitation = 0;
        }
        if (!humidityFound) {
            data.humidity = 0;
        }
    }
    return dataset;
}

// Please don't change the values in this array.
let dataset = [
    {temperature:5, precipitation:7, humidity:90},
    {precipitation:1, humidity:50},
    {temperature:17},
    {precipitation:0, condition:'dry'},
    {temperature:5, precipitation:4, forecast:4, humidity:60 },
    {temp:10, threatLevel:'high', forecast:'hurricane'},
    {humidity:55, temperature:8, precipitation:5},
    {},
    {temp:9},
    {humidity:50}
];

let data_cleaned = cleanData(dataset);


function printData() // this function doesn't take any argument
{
    // Expecting to be use with objects (one object at a time) that have temperature, precipitation and humidity properties
    // print each property and their values on the console. Ignore the last statement.
    console.log(`temperature = ${this.temperature} , precipitation = ${this.precipitation} , humidity = ${this.humidity}, numProp=${/*DO NOT CHANGE*/Object.keys(this).length}`)
}

for (let data of data_cleaned) // create a loop that iterates over the elements of the cleaned array
{
    // Execute the printPoint function so that it would print the data at the current element of the array
    // without changing the structures of the objects themselves. HINT: Calling a function with an object
    printData.call(data);
}


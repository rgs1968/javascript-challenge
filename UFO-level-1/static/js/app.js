// from data.js
var tableData = data;

// YOUR CODE HERE!

// select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // selecting input element get raw HTML node
    var inputElement = d3.select("#datetime");

    // return the value 
    var inputValue = inputElement.property("value");

    // log input
    console.log("input", inputValue);

    // search data based on the input
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    // log the filtered data 
    console.log("filtered data", filteredData);

    // select the table body
    var tbody = d3.select("tbody");

    // append search to the table 
    filteredData.forEach(function(info) {
        var row = tbody.append("tr");
        Object.entries(info).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
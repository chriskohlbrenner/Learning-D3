// I. ORIGINAL BAR GRAPH

    // var dataset = [];
    // for (var i = 0; i < 25; i++) {  
    //     var newNumber = Math.round(Math.random() * 30); 
    //     dataset.push(newNumber); 
    // }

    // d3.select("body").selectAll("div")
    //   .data(dataset)
    //   .enter()
    //   .append("div")
    //   .attr("class", "bar")
    //   .style("height", function(d) {
    //     var barHeight = d * 5;
    //     return barHeight + "px";
    //   });
    //   // .append("p")
    //   // .text(function(d){
    //   //   return d;
    //   // });


// II. CIRCLE DATA
    // var svgWidth = 1400;
    // var svgHeight = 500;

    // // var dataset = [ 5, 10, 15, 20, 25 ];
    // var dataset = [];
    // for (var i = 0; i < 25; i++) {  
    //     var newNumber = Math.round(Math.random() * 30); 
    //     dataset.push(newNumber); 
    // }


    // var svg = d3.select("body")
    //             .append("svg")
    //             .attr("width", svgWidth)
    //             .attr("height", svgHeight);

    // var circles = svg.selectAll("circle")
    //                 .data(dataset)
    //                 .enter()
    //                 .append("circle");

    // circles.attr("cx", function(d, i) {
    //             return (i * 50) + 25;
    //         })
    //        .attr("cy", svgHeight/2)
    //        .attr("r", function(d) {
    //             return d;
    //        })
    //        .attr("class", "circle-data")
    //        .text(function(d){ return d });

// III. FINAL IMPROVED BAR GRAPH
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
var svgWidth = 500;
var svgHeight = 150;
var barPadding = 1;

var svg = d3.select("body")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class","bar")
    .attr("x", function(d, i) {
      return i * (svgWidth / dataset.length);
    })
    .attr("width", svgWidth / dataset.length - barPadding)
    .attr("height", function(d) {
      return d * 5;
    })
    .attr("y", function(d){
      return svgHeight - (d * 5);
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
      return d;
    })
    .attr("x", function(d, i) {
      return (i * (svgWidth / dataset.length)) + (svgWidth / dataset.length - barPadding) / 2;
    })
    .attr("y", function(d) {
      return svgHeight - (d * 5) + 14;
    })
    .attr("class","bar-text")
    .attr("text-anchor", "middle");
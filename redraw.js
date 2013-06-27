
        function redraw(year1, year2) {

          town = g.selectAll(".town").on("click", console.log("wtf"));

          var test = g_nh.selectAll(".town");

          console.log(town);

          //test.on("click", alert("confused"));

          var amtByZip = new Object();
          var townByZip = {};
          var contByZip = {};
          var filter;

          d3.csv("data/data.csv", function(csv) {
            filter = csv.filter(function(row) {
              return row['year'] >= year1 && row['year'] <= year2;
            })


            slickGrid(filter);

            for (var i = 0; i < filter.length; i++) {
              //console.log(filter[i].zip + ": " + filter[i].town);
              amtByZip[filter[i].zip] = +filter[i].amt;
              townByZip[filter[i].zip] = +filter[i].town;
            }


            d3.json("data/ne-map10pct.json", function(map) {
              g_vt.selectAll("vermont")
                .data(topojson.feature(map, map.objects.g_vermont).features)
                  .enter().append("path")
                // Adds the zip code as a class of the path
                .attr("class", function(d) {
                  return d.properties.ZCTA5CE10 + " town";
                })
                .attr("d", path)
                .style("fill-opacity", 0)
                .transition()
                  .duration(200)
                  .delay(400)
                  .style("fill-opacity", 1)
                  .style("fill", function(d, i) {
                    if (!amtByZip[d.properties.ZCTA5CE10]) {
                      return "#FBFBEF";
                    } 
                    else {
                      return color(amtByZip[d.properties.ZCTA5CE10]);
                    }
                  });

              g_nh.selectAll("new_hamp")
                .data(topojson.feature(map, map.objects.g_nh).features)
                  .enter().append("path")
                // Adds the zip code as a class of the path
                .attr("class", function(d) {
                  return d.properties.ZCTA5CE10 + " town";
                })
                .attr("d", path)
                .style("fill-opacity", 0)
                .transition()
                  .duration(200)
                  .delay(300)
                  .style("fill-opacity", 1)
                  .style("fill", function(d, i) {
                    if (!amtByZip[d.properties.ZCTA5CE10]) {
                      return "#FBFBEF";
                    } 
                    else {
                      return color(amtByZip[d.properties.ZCTA5CE10]);
                    }
                });
              /*
                    .style("fill", function(d, i) { 
                      if(!amtByZip[d.properties.ZCTA5CE10]) {
                          return "#D8D8D8";
                        }
                        else {
                          return color(amtByZip[d.properties.ZCTA5CE10]); 
                        } 
                      });
                    */
              // .exit().remove(); //error


              //filter.exit().remove(); //error
              // g_nh.exit().remove();  // error

              g_ma.selectAll("mass")
                .data(topojson.feature(map, map.objects.g_mass).features)
                  .enter().append("path")
                // Adds the zip code as a class of the path
                .attr("class", function(d) {
                  return d.properties.ZCTA5CE10 + " town";
                })
                .attr("d", path)
                .style("fill-opacity", 0)
                .transition()
                  .duration(200)
                  .delay(200)
                  .style("fill-opacity", 1)
                  .style("fill", function(d, i) {
                    if (!amtByZip[d.properties.ZCTA5CE10]) {
                      return "#FBFBEF";
                    } 
                    else {
                      return color(amtByZip[d.properties.ZCTA5CE10]);
                    }
                });

              g_me.selectAll("maine")
                .data(topojson.feature(map, map.objects.g_maine).features)
                  .enter().append("path")
                // Adds the zip code as a class of the path
                .attr("class", function(d) {
                  return d.properties.ZCTA5CE10 + " town";
                })
                .attr("d", path)
                .style("fill-opacity", 0)
                .transition()
                  .duration(200)
                  .delay(100)
                  .style("fill-opacity", 1)
                  .style("fill", function(d, i) {
                    if (!amtByZip[d.properties.ZCTA5CE10]) {
                      return "#FBFBEF";
                    } 
                    else {
                      return color(amtByZip[d.properties.ZCTA5CE10]);
                    }
                  });
            })

            //filter.exit().remove(); //error

            //tooltip();

            /* Show/hide tooltip
            town
              .on("mousemove", function(d, i) {
                console.log(d, i);
                var mouse = d3.mouse(svg.node()).map(function(d) {
                  return parseInt(d);
              });

              

              tooltip
                .classed("hidden", false)
                .attr("style", "left:" + (mouse[0] + 30) + "px;top:" + (mouse[1] - 10) + "px")
                //.attr("id", function(data, index) { console.log(donation.town); })
                //.html(d.properties.ZCTA5CE10)
                .html(
                  "<span class='bold'>" + townByZip[d.properties.ZCTA5CE10] + "</span>" +
                  "<br />Zip: " + d.properties.ZCTA5CE10 +
                  "<br />Amount: " + amtByZip[d.properties.ZCTA5CE10] +
                  "<br />Contributions: " + contByZip[d.properties.ZCTA5CE10])
              })
              .on("mouseout", function(d, i) {
                tooltip.classed("hidden", true)
              });
              */
              


          });
        

          


          //filter.exit().remove();  // error
          // all.exit().remove();  // error
          toolTip(map);

        }
        
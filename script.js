d3.csv('/csv/country_wise_latest.csv', function(err, rows){

  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }

  var data = [{
    type: 'parcoords',
    pad: [80,80,80,80],
    line: {
      color: unpack(rows, 'Country/Region'),
      colorscale: [['Eastern Mediterranean', 'red'], ['Europe', 'green'], ['Americas', 'blue']]

    },

    dimensions: [{
      constraintrange: [5, 6],

      label: 'sepal_length',
      values: unpack(rows, 'Confirmed')
    }, {
      label: 'petal_width',

      values: unpack(rows, 'Recovered')
    }, {
      label: 'petal_length',

      values: unpack(rows, 'Active')
    }]
  }];

  var layout = {
    width: 800,
    annotations: [
      {showarrow: false,
        text: 'Higher sepal width',
        x: 0, y: 1, xref: 'paper', yref: 'paper'},
      {showarrow: false,
        text: 'Lower petal width and length',
        x: 0.9, y: .25, xref: 'paper', yref: 'paper'
      }]
  };

  Plotly.newPlot('myDiv', data, layout);

});

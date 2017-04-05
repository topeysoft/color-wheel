var sample = 'r[1-1023]:settable,g[1-1023]:settable,b[1-1023]:settable,r-on:settable,g-on:settable,    b-on:settable,  g,   k:test';
var propArray = sample.split(',')

var rangePropPattern = /([a-z]+\[\d+-\d+\]:[a-z]*)/g;
var valuePropPattern = /([a-z_\-]{1,}:[a-z]*)/g;
var rangePropMinPattern = /([a-z_\-]{1,}:[a-z]*)/g;
var minPropPattern = /\d+(?=-\d+\])/g;
var maxPropPattern = /\d+(?=\])/g;
var rangePropIdentifier = /[a-zA-Z](?=\[)/g;
var valuePropIdentifier = /[a-zA-Z_-]+(?=:[a-zA-Z])/g;
var settable = /[a-zA-Z_-]+(?=:[a-zA-Z])/g;

var rangeProps = sample.match(rangePropPattern);
console.log('rangeProps', rangeProps);
var valueProps = sample.match(valuePropPattern);
console.log('valueProps', valueProps);
var valueProps = sample.match(valuePropPattern);
console.log('valueProps', valueProps);
var properties = [];
rangeProps.forEach(function (v, i) {
    properties.push({
        identifier: v.match(rangePropIdentifier)[0],
        is_range: true,
        min: v.match(minPropPattern)[0],
        max: v.match(maxPropPattern)[0]
    })
    console.log('MIN', v.match(minPropPattern));
    console.log('MAX', v.match(maxPropPattern));
    console.log('ID', v.match(rangePropIdentifier));
})

valueProps.forEach(function (v, i) {
    properties.push({
        identifier: v.match(valuePropIdentifier)[0],
        is_range: false,
        is_settable:true
    })
    console.log('ID', v.match(valuePropIdentifier));
})
    console.log('Properties', properties);

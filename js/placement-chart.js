var ctx = document.getElementById('myChart').getContext('2d');
var data = {
    labels: ["2012-13", "2013-14", "2014-15", "2015-16", "2016-17"],
    datasets: [
        {
            label: "Samsung",
            data: [1,2,5,0,3,1],
            backgroundColor: "green",
            borderColor: "green",
            fill: false,
            lineTension: 0,
            radius: 5
        },
        {
            label: "Amazon",
            data: [4,0,1,2,5],
            backgroundColor: "red",
            borderColor: "red",
            fill: false,
            lineTension: 0,
            radius: 5
        },
        {
            label: "Microsoft",
            data: [5,0,2,4,2],
            backgroundColor: "cyan",
            borderColor: "cyan",
            fill: false,
            lineTension: 0,
            radius: 5
        },
        {
            label: "CTS",
            data: [0,6,8,6,6],
            backgroundColor: "blue",
            borderColor: "blue",
            fill: false,
            lineTension: 0,
            radius: 5
        },
        {
            label: "Zoho",
            data: [0,12,7,4,6],
            backgroundColor: "black",
            borderColor: "black",
            fill: false,
            lineTension: 0,
            radius: 5
        },
        {
            label: "Accenture",
            data: [10,2,15,7,0],
            backgroundColor: "yellow",
            borderColor: "yellow",
            fill: false,
            lineTension: 0,
            radius: 5
        },
        {
            label: "Infosys",
            data: [0,9,11,10,10],
            backgroundColor: "pink",
            borderColor: "pink",
            fill: false,
            lineTension: 0,
            radius: 5
        },
    ]
};

//options
var options = {
    responsive: true,
    legend: {
        display: true,
        position: "bottom",
        labels: {
            fontColor: "#333",
            fontSize: 16
        }
    }
};

//create Chart class object
var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
});
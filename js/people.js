function reset() {
    var arr = ["be-S-2019", "be-R-2019", "be-S-2018", "be-R-2018", "be-S-2017", "be-R-2017", "be-S-2016", "be-R-2016", "be-S-2015", "be-R-2015", "be-S-2014", "be-R-2014", "be-S-2013", "be-R-2013", "be-S-2012", "be-R-2012", "be-S-2011", "be-R-2011", "be-S-2010",
        "be-R-2010", "MEPT-2016", "MEPT-2015", "MEPT-2014", "ME-2017", "ME-2016", "ME-2015"];
    for (i = 0; i < arr.length; i++)
        document.getElementById(arr[i]).style.display = "none";
}
function degree() {
    var arr = ["BE_year", "ME_year", "MEPT_year"];
    var degElement = document.getElementById("degree");
    var deg = degElement.options[degElement.selectedIndex].value;
    console.log(degElement.options[degElement.selectedIndex].title);
    for (i = 0; i < 3; i++)
        document.getElementById(arr[i]).style.display = "none";
    document.getElementById("batch").style.display = "none";
    document.getElementById(deg).style.display = "flex";
    reset();
}
function be() {
    document.getElementById("batch").style.display = "flex";
    reset();
}
function batch() {
    reset();
    var batElement = document.getElementById("batch_sel");
    var bat = batElement.options[batElement.selectedIndex].value;
    var degElement = document.getElementById("degree");
    var deg = degElement.options[degElement.selectedIndex].title;
    var yearElement = document.getElementById(deg);
    var year = yearElement.options[yearElement.selectedIndex].value;
    document.getElementById("be-" + bat + "-" + year).style.display = "table";
}
function me() {
    reset();
    var degElement = document.getElementById("degree");
    var deg = degElement.options[degElement.selectedIndex].title;
    var deg2 = deg.slice(5);
    var yearElement = document.getElementById(deg);
    var year = yearElement.options[yearElement.selectedIndex].value;
    document.getElementById(deg2 + "-" + year).style.display = "table";
}
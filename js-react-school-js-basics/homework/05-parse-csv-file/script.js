'use strict';

function readFile() {
    return (
        `MONTH,DEPARTMENT,EMPLOYEE,AMOUNT
        2018-01,Legals,Smith A.,14289.66
        2018-01,Legals,Jonson B.,7408.05
        2018-01,Legals,Lee C.,10102.98
        2018-01,Legals,Janaro R.,8127.94
        2018-01,Legals,Conor J.,10341.33
        2018-01,Legals,Conor S.,7010.52
        2018-02,Legals,Smith A.,9927.47
        2018-02,Legals,Jonson B.,7053.96
        2018-02,Legals,Lee C.,7057.36
        2018-02,Legals,Janaro R.,13043.93
        2018-02,Legals,Conor J.,12613.82
        2018-02,Legals,Conor S.,10310.33
        2018-02,Legals,Travolta J.,10857.58
        2018-03,Legals,Smith A.,11043.21
        2018-03,Legals,Jonson B.,5144.06
        2018-03,Legals,Conor J.,11022.75
        2018-03,Legals,Conor S.,11651.08
        2018-03,Legals,Clark A.,7889.03
        2018-03,Legals,Doyle C.,6490.54
        2018-01,Compliance,Smith A.,14980.55
        2018-01,Compliance,Johnson B.,8132.88
        2018-01,Compliance,Williams C.,5635.36
        2018-01,Compliance,Jones D.,12454.79
        2018-01,Compliance,Brown F.,5787.25
        2018-01,Compliance,Davis G.,8618.50
        2018-02,Compliance,Smith A.,5093.56
        2018-02,Compliance,Johnson B.,11625.41
        2018-02,Compliance,Williams C.,11875.55
        2018-02,Compliance,Jones D.,10008.70
        2018-02,Compliance,Brown F.,6291.20
        2018-02,Compliance,Davis G.,12524.68
        2018-02,Compliance,Miller H.,11630.42
        2018-03,Compliance,Johnson B.,5681.83
        2018-03,Compliance,Williams C.,10941.43
        2018-03,Compliance,Jones D.,8859.54
        2018-03,Compliance,Brown F.,6663.98
        2018-03,Compliance,Davis G.,6988.17
        2018-03,Compliance,Miller H.,14138.79
        2018-01,Marketing & Sales,Wilson A.,13200.80
        2018-01,Marketing & Sales,Moore B.,6145.94
        2018-01,Marketing & Sales,Taylor C.,8459.98
        2018-01,Marketing & Sales,Anderson D.,8639.86
        2018-01,Marketing & Sales,Thomas E.,9384.85
        2018-01,Marketing & Sales,Jackson F.,7018.11
        2018-02,Marketing & Sales,White G.,13853.19
        2018-02,Marketing & Sales,Moore B.,5292.43
        2018-02,Marketing & Sales,Taylor C.,10465.98
        2018-02,Marketing & Sales,Anderson D.,5907.43
        2018-02,Marketing & Sales,Thomas E.,8700.87
        2018-02,Marketing & Sales,Jackson F.,7444.12
        2018-02,Marketing & Sales,Miller I.,12142.15
        2018-03,Marketing & Sales,Moore B.,8600.83
        2018-03,Marketing & Sales,Taylor C.,5185.76
        2018-03,Marketing & Sales,Anderson D.,5491.73
        2018-03,Marketing & Sales,Thomas E.,11236.40
        2018-03,Marketing & Sales,Jackson F.,12056.60
        2018-03,Marketing & Sales,Miller I.,6828.36
        2018-01,Production,Harris A.,10125.18
        2018-01,Production,Martin B.,5035.75
        2018-01,Production,Thompson C.,12100.76
        2018-01,Production,Garcia D.,13739.30
        2018-01,Production,Martinez E.,9274.72
        2018-01,Production,Robinson F.,10073.36
        2018-02,Production,Clark H.,7193.33
        2018-02,Production,Martin B.,13999.01
        2018-02,Production,Thompson C.,14287.98
        2018-02,Production,Garcia D.,8285.04
        2018-02,Production,Martinez E.,14948.03
        2018-02,Production,Robinson F.,13104.71
        2018-02,Production,Driller R.,5443.28
        2018-03,Production,Martin B.,14379.60
        2018-03,Production,Thompson C.,13450.47
        2018-03,Production,Garcia D.,11364.05
        2018-03,Production,Martinez E.,5548.34
        2018-03,Production,Robinson F.,10733.07
        2018-03,Production,Driller R.,13843.69
        2018-01,Service,King A.,8617.04
        2018-01,Service,Wright B.,13078.48
        2018-01,Service,Lopez C.,5150.28
        2018-01,Service,Hill D.,14136.06
        2018-01,Service,Scott E.,6731.88
        2018-01,Service,Green F.,13076.14
        2018-02,Service,Adams G.,12432.64
        2018-02,Service,Wright B.,6735.59
        2018-02,Service,Lopez C.,12947.72
        2018-02,Service,Hill D.,14863.50
        2018-02,Service,Scott E.,12849.35
        2018-02,Service,Green F.,13825.99
        2018-02,Service,Driller R.,11326.42
        2018-03,Service,Wright B.,10512.58
        2018-03,Service,Lopez C.,9330.24
        2018-03,Service,Hill D.,5373.41
        2018-03,Service,Scott E.,5327.75
        2018-03,Service,Green F.,6972.30
        2018-03,Service,Driller R.,10481.02
    `);
}

let stringWhole = readFile();
let arrWithStrings = stringWhole.split("\n");
let arrOfTitle = [];
let mainArr = [];

//auxiliary
function unique(arr) {
    let result = [];
    nextInput:
        for (let i = 0; i < arr.length; i++) {
            let str = arr[i];
            for (let j = 0; j < result.length; j++) {
                if (result[j] === str) continue nextInput;
            }
            result.push(str);
        }
    return result;
}

//main work array
arrWithStrings.forEach(function(item, i, arr) {
    let oneRowOfArrWithStrings = item.trim();
    if(oneRowOfArrWithStrings !== '')
        mainArr.push(oneRowOfArrWithStrings);
});
let arrayOfObjects = [];
mainArr.forEach(function(item, i, arr) {
    let rowObject = {};
    let oneRowOfArrWithStrings = item.trim();
    let oneArrOfArrWithStrings = oneRowOfArrWithStrings.split(",");
    if(i === 0){
        arrOfTitle = oneArrOfArrWithStrings;
    }
    if(i > 0){
        rowObject[arrOfTitle[0]] = oneArrOfArrWithStrings[0];
        rowObject[arrOfTitle[1]] = oneArrOfArrWithStrings[1];
        rowObject[arrOfTitle[2]] = oneArrOfArrWithStrings[2];
        rowObject[arrOfTitle[3]] = oneArrOfArrWithStrings[3];
        arrayOfObjects.push(rowObject);
    }
});

//total
let totalPayments = arrayOfObjects.reduce(
    function (previousValue, currentItem) {
        return (+previousValue + +currentItem.AMOUNT).toFixed(2);
    }, 0
);
let totalTable = document.getElementById('total');
let tableTotalRowHead = document.createElement('tr');
let tableTotalRow = document.createElement('tr');
let tableTotalHeader = document.createElement('th');
let tableTotalData = document.createElement('td');
tableTotalHeader.innerText = "Total";
tableTotalData.innerText = totalPayments;
tableTotalRowHead.appendChild(tableTotalHeader);
tableTotalRow.appendChild(tableTotalData);
totalTable.appendChild(tableTotalRowHead);
totalTable.appendChild(tableTotalRow);

//month start
let months = arrayOfObjects.map(function(name) {
    return name.MONTH;
});

//month: created array with splitted by months objects(month: amount)
months = unique(months);
let monthsObjects = [];
months.forEach(function(item, i, arr) {
    let depArr = [];
    arrayOfObjects.forEach(function(items, j, array) {
        let objects = {};
        if(item ===  items.MONTH) {
            objects[item] = items.AMOUNT;
            depArr.push(objects);
        }
    });
    monthsObjects.push(depArr);
});

//month: create table with average amount of salaries by month
let monthAvgTable = document.getElementById('monthAvg');
let monthAvgTableHead;
monthsObjects.forEach(function(item, i, arr) {
    let tableRowHead = document.createElement('tr');
    let tableRow = document.createElement('tr');
    let tableHeader1 = document.createElement('th');
    let tableHeader2 = document.createElement('th');
    let tableData1 = document.createElement('td');
    let tableData2 = document.createElement('td');
    let dep;
    let sum = [];
    let count;
    let totalSumm;
    let result;
    item.forEach(function(items, j, array) {
        if(j===0){
            dep = Object.keys(items);
        }
        count = j+1;
        sum.push(Object.values(items));
    });
    totalSumm = sum.reduce(function(summ, current) {
        return (+summ + +current).toFixed(2);
    }, 0);
    result = (totalSumm / count).toFixed(2);
    let monthName = dep[0];
    tableHeader1.innerHTML = "Month";
    tableHeader2.innerHTML = "Avg.Payment";
    tableRowHead.appendChild(tableHeader1);
    tableRowHead.appendChild(tableHeader2);
    monthAvgTableHead = tableRowHead;
    tableData1.innerHTML = monthName;
    tableData2.innerHTML = result;
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    monthAvgTable.appendChild(tableRow);
});
monthAvgTable.insertBefore(monthAvgTableHead, monthAvgTable.firstChild);
//month end

//department start
let departments = arrayOfObjects.map(function(name) {
    return name.DEPARTMENT;
});

//department: created array with splitted by departments objects(department : amount)
departments = unique(departments);
let departmentsObjects = [];
departments.forEach(function(item, i, arr) {
    let depArr = [];
    arrayOfObjects.forEach(function(items, j, array) {
        let objects = {};
        if(item ===  items.DEPARTMENT) {
            objects[item] = items.AMOUNT;
            depArr.push(objects);
        }
    });
    departmentsObjects.push(depArr);
});

//department: create table with average amount of salaries by department
let depAvgTable = document.getElementById('depAvg');
let depAvgTableHead;
departmentsObjects.forEach(function(item, i, arr) {
    let tableRowHead = document.createElement('tr');
    let tableRow = document.createElement('tr');
    let tableHeader1 = document.createElement('th');
    let tableHeader2 = document.createElement('th');
    let tableData1 = document.createElement('td');
    let tableData2 = document.createElement('td');
    let mon;
    let sum = [];
    let count;
    let totalSumm;
    let result;
    item.forEach(function(items, j, array) {
        if(j===0){
            mon = Object.keys(items);
        }
        count = j+1;
        sum.push(Object.values(items));
    });

    totalSumm = sum.reduce(function(summ, current) {
        return (+summ + +current).toFixed(2);
    }, 0);
    result = (totalSumm / count).toFixed(2);
    let monName = mon[0];
    tableHeader1.innerHTML = "Department";
    tableHeader2.innerHTML = "Avg.Payment";
    tableRowHead.appendChild(tableHeader1);
    tableRowHead.appendChild(tableHeader2);
    depAvgTableHead = tableRowHead;
    tableData1.innerHTML = monName;
    tableData2.innerHTML = result;
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    depAvgTable.appendChild(tableRow);
});
depAvgTable.insertBefore(depAvgTableHead, depAvgTable.firstChild);
//department end
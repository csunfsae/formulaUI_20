import React, { Component }  from 'react';



var battery;
 
navigator.getBattery()
    .then(function (b) {
        battery = b;
        handleBattery();
    }
);
 
var batteryIndicator = document.querySelector("#indicator");
 
function handleBattery() {
    if (battery) {
        battery.addEventListener("chargingchange", updateBatteryNotification);
        battery.addEventListener("levelchange", updateBatteryNotification);
        updateBatteryNotification();
    }
}
 
function updateBatteryNotification() {
    // draw battery level
    batteryIndicator.style.width = battery.level * 100 + "%";
 
    // check if battery is charging
    if (battery.charging) {
        setClass(batteryIndicator, "charging");
    } else {
        setClass(batteryIndicator, "notCharging");
    }
}
 
function setClass(element, classToAdd) {
    element.className = classToAdd;
}

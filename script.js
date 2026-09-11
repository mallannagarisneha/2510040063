function refreshSensors() {

    // Generate new sensor values

    let temperature =
        Math.floor(Math.random() * 10) + 25;

    let water =
        Math.floor(Math.random() * 30) + 60;

    let light =
        Math.floor(Math.random() * 300) + 500;


    // Update sensor cards

    document.getElementById("temperature")
        .textContent = temperature + "°C";

    document.getElementById("water")
        .textContent = water + "%";

    document.getElementById("light")
        .textContent = light + " lux";


    // Show message

    alert("Sensor values refreshed successfully!");
}
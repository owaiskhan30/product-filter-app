const div = document.querySelector(".products");

let products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 30000, category: "Electronics" },
    { id: 3, name: "Tablet", price: 20000, category: "Electronics" },
    { id: 4, name: "Headphones", price: 2000, category: "Accessories" },
    { id: 5, name: "Keyboard", price: 1500, category: "Accessories" },
    { id: 6, name: "Mouse", price: 800, category: "Accessories" },
    { id: 7, name: "Monitor", price: 10000, category: "Electronics" },
    { id: 8, name: "Printer", price: 7000, category: "Electronics" },
    { id: 9, name: "Camera", price: 25000, category: "Electronics" },
    { id: 10, name: "Smartwatch", price: 15000, category: "Electronics" },
    { id: 11, name: "Charger", price: 1000, category: "Accessories" },
    { id: 12, name: "USB Cable", price: 500, category: "Accessories" },
    { id: 13, name: "Power Bank", price: 2000, category: "Accessories" },
    { id: 14, name: "Television", price: 40000, category: "Electronics" },
    { id: 15, name: "Air Conditioner", price: 35000, category: "Home Appliances" },
    { id: 16, name: "Refrigerator", price: 30000, category: "Home Appliances" },
    { id: 17, name: "Microwave", price: 8000, category: "Home Appliances" },
    { id: 18, name: "Washing Machine", price: 25000, category: "Home Appliances" },
    { id: 19, name: "Dishwasher", price: 28000, category: "Home Appliances" },
    { id: 20, name: "Water Purifier", price: 12000, category: "Home Appliances" },
    { id: 21, name: "Vacuum Cleaner", price: 15000, category: "Home Appliances" },
    { id: 22, name: "Hair Dryer", price: 2500, category: "Accessories" },
    { id: 23, name: "Electric Kettle", price: 2000, category: "Home Appliances" },
    { id: 24, name: "Blender", price: 3000, category: "Home Appliances" },
    { id: 25, name: "Toaster", price: 1800, category: "Home Appliances" },
    { id: 26, name: "Iron", price: 1500, category: "Home Appliances" },
    { id: 27, name: "Smart Door Lock", price: 10000, category: "Home Security" },
    { id: 28, name: "Smart Light Bulb", price: 2000, category: "Home Security" },
    { id: 29, name: "Security Camera", price: 12000, category: "Home Security" },
    { id: 30, name: "Doorbell Camera", price: 5000, category: "Home Security" },
    { id: 31, name: "Fitness Band", price: 3000, category: "Electronics" },
    { id: 32, name: "Gaming Console", price: 40000, category: "Electronics" },
    { id: 33, name: "External Hard Drive", price: 6000, category: "Accessories" },
    { id: 34, name: "Portable Speaker", price: 3000, category: "Accessories" },
    { id: 35, name: "Soundbar", price: 12000, category: "Electronics" },
    { id: 36, name: "Projector", price: 25000, category: "Electronics" },
    { id: 37, name: "Drone", price: 50000, category: "Electronics" },
    { id: 38, name: "Router", price: 3000, category: "Electronics" },
    { id: 39, name: "Modem", price: 2500, category: "Electronics" },
    { id: 40, name: "Range Extender", price: 2000, category: "Electronics" },
    { id: 41, name: "Electric Scooter", price: 70000, category: "Transport" },
    { id: 42, name: "Bicycle", price: 15000, category: "Transport" },
    { id: 43, name: "Helmet", price: 2500, category: "Accessories" },
    { id: 44, name: "Car Dash Cam", price: 5000, category: "Transport" },
    { id: 45, name: "GPS Tracker", price: 3000, category: "Transport" },
    { id: 46, name: "Electric Car Charger", price: 25000, category: "Transport" },
    { id: 47, name: "Smart Thermostat", price: 15000, category: "Home Appliances" },
    { id: 48, name: "Smart Speaker", price: 5000, category: "Electronics" },
    { id: 49, name: "Smart Display", price: 12000, category: "Electronics" },
    { id: 50, name: "E-book Reader", price: 8000, category: "Electronics" },
    { id: 51, name: "Action Camera", price: 20000, category: "Electronics" },
    { id: 52, name: "Fitness Tracker", price: 6000, category: "Electronics" },
    { id: 53, name: "Smart Ring", price: 10000, category: "Electronics" },
    { id: 54, name: "3D Printer", price: 45000, category: "Electronics" },
    { id: 55, name: "Laser Printer", price: 20000, category: "Electronics" },
    { id: 56, name: "Shaver", price: 3000, category: "Accessories" },
    { id: 57, name: "Electric Toothbrush", price: 2500, category: "Accessories" },
    { id: 58, name: "VR Headset", price: 30000, category: "Electronics" },
    { id: 59, name: "Wireless Charger", price: 2000, category: "Accessories" },
    { id: 60, name: "Smart Glasses", price: 50000, category: "Electronics" },
    { id: 61, name: "Smart Fridge", price: 120000, category: "Home Appliances" },
    { id: 62, name: "Air Purifier", price: 20000, category: "Home Appliances" },
    { id: 63, name: "Dehumidifier", price: 15000, category: "Home Appliances" },
    { id: 64, name: "Smart Bed", price: 90000, category: "Home Appliances" },
    { id: 65, name: "Coffee Maker", price: 7000, category: "Home Appliances" },
    { id: 66, name: "Espresso Machine", price: 15000, category: "Home Appliances" },
    { id: 67, name: "Rice Cooker", price: 5000, category: "Home Appliances" },
    { id: 68, name: "Slow Cooker", price: 4000, category: "Home Appliances" },
    { id: 69, name: "Air Fryer", price: 8000, category: "Home Appliances" },
    { id: 70, name: "Deep Fryer", price: 5000, category: "Home Appliances" },
    { id: 71, name: "Induction Cooktop", price: 6000, category: "Home Appliances" },
    { id: 72, name: "Mixer Grinder", price: 3000, category: "Home Appliances" },
    { id: 73, name: "Water Heater", price: 10000, category: "Home Appliances" },
    { id: 74, name: "Smart Plug", price: 1500, category: "Electronics" },
    { id: 75, name: "Smart Switch", price: 2500, category: "Electronics" },
    { id: 76, name: "Bluetooth Earbuds", price: 5000, category: "Accessories" },
    { id: 77, name: "Noise Cancelling Headphones", price: 15000, category: "Accessories" },
    { id: 78, name: "Portable Air Conditioner", price: 30000, category: "Home Appliances" },
    { id: 79, name: "Robotic Vacuum", price: 25000, category: "Home Appliances" },
    { id: 80, name: "Electric Grill", price: 8000, category: "Home Appliances" },
    { id: 81, name: "Smart Oven", price: 35000, category: "Home Appliances" },
    { id: 82, name: "Smart Washing Machine", price: 45000, category: "Home Appliances" },
    { id: 83, name: "Smart Dryer", price: 35000, category: "Home Appliances" },
    { id: 84, name: "Smart Dishwasher", price: 40000, category: "Home Appliances" },
    { id: 85, name: "Wi-Fi Range Extender", price: 2000, category: "Electronics" },
    { id: 86, name: "Power Inverter", price: 5000, category: "Electronics" },
    { id: 87, name: "Portable Generator", price: 20000, category: "Home Appliances" },
    { id: 88, name: "Treadmill", price: 60000, category: "Fitness" },
    { id: 89, name: "Exercise Bike", price: 30000, category: "Fitness" },
    { id: 90, name: "Elliptical Machine", price: 45000, category: "Fitness" },
    { id: 91, name: "Dumbbells", price: 5000, category: "Fitness" },
    { id: 92, name: "Yoga Mat", price: 1500, category: "Fitness" },
    { id: 93, name: "Jump Rope", price: 500, category: "Fitness" },
    { id: 94, name: "Foam Roller", price: 1200, category: "Fitness" },
    { id: 95, name: "Smart Mirror", price: 50000, category: "Fitness" },
    { id: 96, name: "Punching Bag", price: 7000, category: "Fitness" },
    { id: 97, name: "Boxing Gloves", price: 2500, category: "Fitness" },
    { id: 98, name: "Smart Jump Rope", price: 2500, category: "Fitness" },
    { id: 99, name: "Home Gym Set", price: 70000, category: "Fitness" },
    { id: 100, name: "Smart Scale", price: 5000, category: "Fitness" }
  ];


const render = (result_category) => {
    div.innerHTML = "";
    result_category.map(function (item) {
        div.innerHTML += `
        <div class="card" id="card_${item.id}">
            <h2>Name: ${item.name}</h2>
            <h1>Price: ${item.price}</h1>
            <h2>Category: ${item.category}</h2>
        </div>`  
    });
}

render(products);

const filterproducts = (product_cat) => {
    let result_cat = products.filter(function (item) {
        return item.category === product_cat.innerHTML;
    });

    render(result_cat);
} 


console.log(filterproducts());



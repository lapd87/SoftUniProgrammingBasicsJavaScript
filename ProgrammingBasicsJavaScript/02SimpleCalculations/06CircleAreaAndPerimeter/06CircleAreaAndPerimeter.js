function circleAreaAndPerimeter([arg1]) {
    let radius = Number(arg1);
    let area = Math.PI * Math.pow(radius, 2);
    let perimeter = 2 * Math.PI * radius;
    console.log(`Area = ${area}`);
    console.log(`Perimeter = ${perimeter}`);
}

circleAreaAndPerimeter(["4.5"]);
function randonPointOnCircle(radius){
    var angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}

console.log(randonPointOnCircle(2));

console.log(Math.floor(Math.random() * 10));


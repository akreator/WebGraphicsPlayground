//set up: renderer, camera, scene
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
var cameraY = 10;
camera.position.set(0, 15, 20);
camera.lookAt(new THREE.Vector3(0, cameraY, 0));

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//create the lines (left)
var lineMaterial1 = new THREE.LineBasicMaterial({ color: 0xFF0000 });
var lineGeometry1 = new THREE.Geometry();
lineGeometry1.vertices.push(new THREE.Vector3(20, 17.5, 0));
lineGeometry1.vertices.push(new THREE.Vector3(0, 12.5, 0));
lineGeometry1.vertices.push(new THREE.Vector3(20, 7.5, 0));
var line1 = new THREE.Line(lineGeometry1, material);
scene.add(line1);

//create the lines (right)
var lineMaterial2 = new THREE.LineBasicMaterial({ color: 0xFF0000 });
var lineGeometry2 = new THREE.Geometry();
lineGeometry2.vertices.push(new THREE.Vector3(-20, 17.5, 0));
lineGeometry2.vertices.push(new THREE.Vector3(0, 12.5, 0));
lineGeometry2.vertices.push(new THREE.Vector3(-20, 7.5, 0));
var line2 = new THREE.Line(lineGeometry2, material);
scene.add(line2);


//create a cube
var geometry = new THREE.BoxGeometry( 1, 3, 1000 ); 
var material = new THREE.MeshBasicMaterial( { color: 0x00B2FF } ); 
var cube1 = new THREE.Mesh( geometry, material ); 
cube1.position.z = -5;
scene.add( cube1 );
var cube2 = new THREE.Mesh( geometry, material ); 
cube2.position.x = -10;
cube2.position.z = -5;
scene.add( cube2 );
var cube3 = new THREE.Mesh( geometry, material ); 
cube3.position.x = 10;
cube3.position.z = -5;
scene.add( cube3 );

var smallCubeGeom = new THREE.BoxGeometry(1, 3, 15);
var smallCubeMaterial = new THREE.MeshBasicMaterial( { color: 0xFF0000 })
var cube4 = new THREE.Mesh( smallCubeGeom, smallCubeMaterial ); 
cube4.position.x = 5;
cube4.position.z = -5;
scene.add( cube4 );
var cube5 = new THREE.Mesh( smallCubeGeom, smallCubeMaterial ); 
cube5.position.x = -5;
cube5.position.z = -5;
scene.add( cube5 );

//create my REAL NAME
var loader = new THREE.FontLoader();
loader.load('static/fonts/gentilis_regular.typeface.json', function( font ) {
    var geometry = new THREE.TextGeometry( 'CIPHER', {
        font: font,
        size: 5,
        height: 2,
        curveSegments: 15,
        bevelEnabled: false
    });
    var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF });
    var text = new THREE.Mesh(geometry, material);
    text.position.x = -11;
    text.position.y = 10;
    scene.add(text);
});



//display AND animate (to just display, just call renderer.render)
var turnVal = 0;
var turnChange = 0.04;
function animate() { 
    requestAnimationFrame( animate ); 
    if (turnVal >= 3) {
        turnChange *= (-1);
    } else if (turnVal < -3) {
        turnChange *= (-1);
    }
    turnVal += turnChange;
    camera.lookAt(new THREE.Vector3(turnVal, cameraY, 0));
    renderer.render( scene, camera ); 
} 

animate();
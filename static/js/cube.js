//set up
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
                            //field of view; aspect ratio; near cut; far cut
var renderer = new THREE.WebGLRenderer(); 
// to mess w/quality: renderer.setSize( window.innerWidth / 4, window.innerHeight / 4, false); 
renderer.setSize( window.innerWidth, window.innerHeight); 
document.body.appendChild( renderer.domElement );


//add cube
var geometry = new THREE.BoxGeometry( 1, 3, 1 ); 
var material = new THREE.MeshBasicMaterial( { color: 0x006600 } ); 
var cube = new THREE.Mesh( geometry, material ); 
scene.add( cube ); 
camera.position.z = 7;
camera.position.x = 2;

//display AND animate (to just display, just call renderer.render)
function animate() { 
    requestAnimationFrame( animate ); 
    //cube.rotation.x += 0.01; 
    //cube.rotation.y += 0.01;
    renderer.render( scene, camera ); 
} 
animate();


// //make sure user has WebGL
// if (Detector.webgl) {
//     // Initiate function or other initializations here
//     animate();
// } else {
//     var warning = Detector.getWebGLErrorMessage();
//     document.getElementById('container').appendChild(warning);
// }
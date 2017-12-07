// Makes sure shuffle section doesn't appear in the beggining.
$('canvas').css('left', '+' + 2000 + 'px');

var container = document.getElementById( 'section-2' );

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

/*var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({
    color: 0xfffff,
    wireframe: true
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);*/
camera.position.z = 2.2;
camera.position.y = 0.8;

var dae;

var loader = new THREE.ColladaLoader();
loader.load( '../book/book.dae', function ( collada ) {
    dae = collada.scene;
    dae.scale.set(5,5,5)
    scene.add(dae);
});

function render() {
    requestAnimationFrame(render);
    var slowScroll = scroll / 1400;
    if(dae) {
      dae.rotation.x = 270;
      dae.rotation.y = slowScroll;
    }
    renderer.render(scene, camera);
};
render();

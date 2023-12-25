import * as THREE from 'three';

const configs = {
	target: '#scene',
	width: 800,
	height: 600,
	background: 0x222222
}

// PRIMEIRA ETAPA - CRIA A CENA
const scene = new THREE.Scene();

scene.background = new THREE.Color(configs.background);

// -----------------------------

// SEGUNDA ETAPA - CRIA A CÂMERA
const camera = new THREE.PerspectiveCamera(
	75,
	configs.width / configs.height,
	0.1,
	1000
);

// -----------------------------

// TERCEIRA ETAPA - CRIA O RENDERIZADOR E ADICIONA NO BODY
const renderer = new THREE.WebGLRenderer();

renderer.setSize(
	configs.width,
	configs.height
);

document.querySelector(configs.target).appendChild(renderer.domElement);

// -----------------------------

// QUARTA ETAPA - CRIA O CUBO
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );

// Adiciona o cubo na cena
scene.add( cube );

// posicionar a câmera
camera.position.z = 5;

// criar o loop de renderização
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
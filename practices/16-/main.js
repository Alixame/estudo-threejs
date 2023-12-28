import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { DRACOLoader } from 'https://unpkg.com/three@v0.149.0/examples/jsm/loaders/DRACOLoader.js';
import Stats from 'https://unpkg.com/three@v0.149.0/examples/jsm/libs/stats.module.js'

const configs = {
    target: '#scene',
    width: window.innerWidth,
    height: window.innerHeight,
    background: 0x222222
}

let renderer, scene, camera, model, model2, stats;

function initRender() {
    renderer = new THREE.WebGLRenderer(
        {
            antialias: true
        }
    )
    
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    
    renderer.physicallyCorrectLights = true
    
    renderer.setPixelRatio(window.devicePixelRatio)
    
    renderer.setSize(
        configs.width,
        configs.height
    )
    
    document.querySelector(configs.target).appendChild(renderer.domElement)
}

function initScene() {
    scene = new THREE.Scene()
    
    scene.background = new THREE.Color(configs.background)
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(
        50, // FOV
        configs.width / configs.height, // Aspect
    )
    
    camera.position.z = 10
    camera.position.y = 2
    
    scene.add(camera)
}

function initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 10)

    scene.add(ambientLight)
    
    const pointLight = new THREE.PointLight(0xffffff, 5)

    pointLight.castShadow = true

    pointLight.position.y = 5

    scene.add(pointLight)
}

function initObjects() {
    const loader = new GLTFLoader();

    const dracoLoader = new DRACOLoader();

    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

    loader.setDRACOLoader(dracoLoader);

    loader.load(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf',
        (gltf) => {
            model = gltf.scene;

            model.position.x = -0.5
            model.position.z = 4
            model.position.y = -3

            model.rotation.y = THREE.MathUtils.degToRad(-110)
            model.rotation.z = THREE.MathUtils.degToRad(-20)


            model.castShadow = true

            scene.add(model);
        }, 
        undefined,
        (error) => {
            console.error(error);
        }
    );

    loader.load(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf',
        (gltf) => {
            model2 = gltf.scene;

            model2.position.x = 0.5
            model2.position.z = 4
            model2.position.y = 3

            model2.rotation.y = THREE.MathUtils.degToRad(-70)
            model2.rotation.z = THREE.MathUtils.degToRad(-20)
            
            model2.castShadow = true

            scene.add(model2);
        }, 
        undefined,
        (error) => {
            console.error(error);
        }
    );
}

function animate() {
    renderer.render(scene, camera)

    // atualiza o fps
    if (stats) {
        stats.update()
    }

    if (model && model.position.y < 0.5) {
        console.log(model.position.y)

        model.position.y += 0.05
    }

    if (model && model.position.y > 0.5) {
        model.position.y = 0.5
    }

    if (model2 && model2.position.y > 0.5) {
        console.log(model2.position.y)

        model2.position.y -= 0.05
    }

    if (model2 && model2.position.y < 0.5) {
        model2.position.y = 0.5
    }

    requestAnimationFrame(animate)
}

function debugThree() {
    // adiciona um grid helper
    const gridHelper = new THREE.GridHelper( 10, 10 );
    scene.add( gridHelper );

    // adiciona um axis helper
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    // adiciona controles de camera
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.update();

    // adiciona fps
    stats = new Stats()
    document.body.appendChild(stats.dom)
}

initRender()
initScene()
initCamera()
initLights()
initObjects()

// debugThree()

animate()
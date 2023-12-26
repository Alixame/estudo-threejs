const configs = {
    target: '#scene',
    width: 800,
    height: 600,
    background: 0x222222
}

const renderer = new THREE.WebGLRenderer(
    {
        antialias: true
    }
)

renderer.setPixelRatio(window.devicePixelRatio)

renderer.setSize(
    configs.width,
    configs.height
)

document.querySelector(configs.target).appendChild(renderer.domElement)

// -----------------------------

const scene = new THREE.Scene()

scene.background = new THREE.Color(configs.background)

// -----------------------------

const camera = new THREE.PerspectiveCamera(
    50, // FOV
    configs.width / configs.height, // Aspect
)

camera.position.z = 10
camera.position.y = 5

scene.add(camera)

// -----------------------------

const light = new THREE.HemisphereLight(0xffffff, 0x020202, 1)

scene.add(light)

// -----------------------------

// coraçao com curva
const path = new THREE.Shape()

path.moveTo(0.3, 1.5)
path.quadraticCurveTo(0.3, 2.2, 0.9, 2.2)
path.quadraticCurveTo(1.3, 2.2, 1.4, 1.7)
path.quadraticCurveTo(1.5, 2.2, 1.9, 2.2)
path.quadraticCurveTo(2.5, 2.2, 2.5, 1.5)
path.quadraticCurveTo(2.5, 1.0, 1.4, 0.3)
path.quadraticCurveTo(0.3, 1.0, 0.3, 1.5)

const geometry = new THREE.ExtrudeBufferGeometry(
    path, 
    { 
        depth: 0.01, 
        bevelEnabled: true,
        bevelSegments: 10,
        steps: 10,
        bevelSize: 0.1,
        bevelThickness: 0.1,
    }
)

const material = new THREE.MeshLambertMaterial({ color: 0xeb3452, side: THREE.DoubleSide })

const draw = new THREE.Mesh(geometry, material)

draw.position.x = -1.40

scene.add(draw)

// -----------------------------

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene,
    }
)

// -----------------------------

x3.add(camera, { label: 'Camera' })
x3.add(light, { label: 'Light' })
x3.add(draw, { label: 'Coracao com curva' })

// -----------------------------

renderer.setAnimationLoop(() => {
    x3.tick()

    x3.fps(() => {
        renderer.render(scene, camera)
    })
})

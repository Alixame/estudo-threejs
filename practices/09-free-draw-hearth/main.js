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

// coraçao sem curva

const path = new THREE.Path()

path.moveTo(-0.3, 1.5)
path.lineTo(-0.9, 2.2)
path.lineTo(-1.4, 1.7)
path.lineTo(-1.9, 2.2)
path.lineTo(-2.5, 1.5)
path.lineTo(-1.4, 0.3)
path.lineTo(-0.3, 1.5)

const geometry = new THREE.BufferGeometry().setFromPoints(path.getPoints())

const material = new THREE.LineBasicMaterial({ color: 0xFFFFFF })

const draw = new THREE.Line(geometry, material)

scene.add(draw)

// coraçao com curva
const path2 = new THREE.Path()

path2.moveTo(0.3, 1.5)
path2.quadraticCurveTo(0.3, 2.2, 0.9, 2.2)
path2.quadraticCurveTo(1.3, 2.2, 1.4, 1.7)
path2.quadraticCurveTo(1.5, 2.2, 1.9, 2.2)
path2.quadraticCurveTo(2.5, 2.2, 2.5, 1.5)
path2.quadraticCurveTo(2.5, 1.0, 1.4, 0.3)
path2.quadraticCurveTo(0.3, 1.0, 0.3, 1.5)

const geometry2 = new THREE.BufferGeometry().setFromPoints(path2.getPoints())

const material2 = new THREE.LineBasicMaterial({ color: 0xFF0000 })

const draw2 = new THREE.Line(geometry2, material2)

scene.add(draw2)

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

x3.add(draw, { label: 'Coracao sem curva' })
x3.add(draw2, { label: 'Coracao com curva' })

// -----------------------------

renderer.setAnimationLoop(() => {
    x3.tick()

    x3.fps(() => {
        renderer.render(scene, camera)
    })
})

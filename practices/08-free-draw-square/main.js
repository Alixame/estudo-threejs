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

// primeiro desenho livre

const path = new THREE.Path()

path.moveTo(1, 1)
path.lineTo(1, 2)
path.lineTo(2, 2)
path.lineTo(2, 1)
path.lineTo(1, 1)

const geometry = new THREE.BufferGeometry().setFromPoints(path.getPoints())

const material = new THREE.LineBasicMaterial({ color: 0xFFFFFF })

const draw = new THREE.Line(geometry, material)

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

// -----------------------------

renderer.setAnimationLoop(() => {
    x3.tick()

    x3.fps(() => {
        renderer.render(scene, camera)
    })
})

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

const geometry = new THREE.BoxBufferGeometry()
const material = new THREE.MeshLambertMaterial()

const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

// -----------------------------

const camera = new THREE.PerspectiveCamera(
    50, // FOV
    configs.width / configs.height, // Aspect
)

camera.position.z = 5

scene.add(camera)

// -----------------------------

const light = new THREE.HemisphereLight(0xffffff, 0x020202, 1)

scene.add(light)

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

x3.add(cube, { label: 'Cube' })
x3.add(camera, { label: 'Camera' })
x3.add(light, { label: 'Light' })

// -----------------------------

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    x3.tick()

    x3.fps(() => {
        renderer.render(scene, camera)
    })
})

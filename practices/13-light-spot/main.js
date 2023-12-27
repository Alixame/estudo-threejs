const configs = {
    target: '#scene',
    width: window.innerWidth / 1.5,
    height: window.innerHeight / 1.5,
    background: 0x222222
}

const renderer = new THREE.WebGLRenderer(
    {
        antialias: true
    }
)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

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

// cubo
const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial(
        {
            color: 0x00ff00
        }
    )
)
 
cube.position.x = -2
cube.position.y = 1

cube.castShadow = true

scene.add(cube)

// floor
const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshPhongMaterial(
        {
            color: 0xffffff,
            side: THREE.DoubleSide
        },
    )
)

floor.rotation.x = THREE.MathUtils.degToRad(-90)

floor.receiveShadow = true

scene.add(floor)

// -----------------------------

const ambientLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.2)

scene.add(ambientLight)

const light = new THREE.SpotLight(
    0xffffff,
    8,
    10, // distance
    0.25, // angle
)

light.position.y = 8

light.castShadow = true

light.target = cube

scene.add(light)

// -----------------------------

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene,
    },
    {
        grid: {
            visible: false,
        },
        axes: {
            visible: false,
        },
    }
)

// -----------------------------

x3.add(camera, { label: 'Camera' })
x3.add(light, { label: 'Light' })
x3.add(cube, { label: 'Cube' })

// -----------------------------

renderer.setAnimationLoop(() => {
    x3.tick()

    const time = performance.now() * 0.001

    cube.position.x = Math.sin(time) * 2
    cube.position.z = Math.cos(time) * 2

    x3.fps(() => {
        renderer.render(scene, camera)
    })
})

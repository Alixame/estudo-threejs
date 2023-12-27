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

renderer.physicallyCorrectLights = true

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

const polyester = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'),
    normalMap: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg'),
})

const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1, 32, 32),
    polyester
)
 
sphere.position.x = -2
sphere.position.y = 1

sphere.castShadow = true

scene.add(sphere)

// floor
const metal = new THREE.MeshStandardMaterial(
    {
        transparent: true,
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg'),
        normalMap: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg'),
        alphaMap: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg'),
        metalnessMap: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg'),
        emissiveMap: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/emissive.jpg'),
        aoMap: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/occlusion.jpg'),
        roughnessMap: new THREE.TextureLoader().load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg'),
    }
)

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    metal
)

floor.rotation.x = THREE.MathUtils.degToRad(-90)

floor.receiveShadow = true

scene.add(floor)

// -----------------------------

const ambientLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1)

scene.add(ambientLight)

const light = new THREE.SpotLight(
    0xffffff,
    20,
    10, // distance
    0.3, // angle
)

light.position.y = 6

light.castShadow = true

light.target = sphere

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
x3.add(sphere, { label: 'sphere' })
x3.add(floor, { label: 'floor' })

// -----------------------------

renderer.setAnimationLoop(() => {
    x3.tick()

    sphere.rotation.y -= 0.01
    sphere.rotation.x -= 0.01

    const time = performance.now() * 0.001

    sphere.position.x = Math.sin(time) * 2
    sphere.position.z = Math.cos(time) * 2

    x3.fps(() => {
        renderer.render(scene, camera)
    })
})

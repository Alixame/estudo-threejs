// PRIMEIRA ETAPA - CRIA O RENDERIZADOR E ADICIONA NO BODY

// Configurações
const configs = {
    target: '#scene',
    width: 800,
    height: 600,
    background: 0x222222
}

// Cria o renderizador
const renderer = new THREE.WebGLRenderer()

// Define o tamanho
renderer.setSize(
    configs.width,
    configs.height
)

// Adiciona o canvas no body
document.querySelector(configs.target).appendChild(renderer.domElement)


// -----------------------------

// SEGUNDA ETAPA - CRIA A CENA

// Cria a cena
const scene = new THREE.Scene()

scene.background = new THREE.Color(configs.background)

// Cria o cubo (PARA SER UM CUBO, PRECISA TER A GEOMETRIA E O MATERIAL ASSIM VIRANDO UMA MALHA)
const geometry = new THREE.BoxBufferGeometry()
const material = new THREE.MeshBasicMaterial()

const cube = new THREE.Mesh(geometry, material)

// Adiciona o cubo na cena
scene.add(cube)

// -----------------------------

// TERCEIRA ETAPA - CRIA A CÂMERA

// Cria a câmera
const camera = new THREE.PerspectiveCamera(
    50, // FOV
    configs.width / configs.height, // Aspect
)

// Posiciona a câmera
camera.position.z = 5

// Adiciona a câmera na cena
scene.add(camera)

// -----------------------------

// QUARTA ETAPA - CRIA O LOOP DE RENDERIZAÇÃO

// Cria o loop de renderização
function render() {
    // Atualiza a cena
    renderer.render(scene, camera)

    // muda a posiçao do cubo
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    // Chama o próximo frame
    requestAnimationFrame(render)
}

// Inicia o loop de renderização
render()


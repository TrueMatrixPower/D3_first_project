export const scene = new Scene()
export const camera = new PerspectiveCamera(70, 
window.innerWidth / window.innerHeight, 0.5,9000)
// Our three renderer
let renderer: WebGLRenderer;
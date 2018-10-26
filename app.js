// GLOBAL VARIABLES

const grav = -0.001;
const amountSpheres = 10;
const spheres = [];

// SET UP SCENE

const scene = document.createElement("a-scene");
document.body.appendChild(scene);

const plane = document.createElement("a-plane");
plane.setAttribute("rotation", "-90 0 0");
plane.setAttribute("width", "100");
plane.setAttribute("height", "15");
plane.setAttribute("color", "#7BC8A4");
scene.appendChild(plane);

// SPHERE CLASS

class Sphere {
  constructor(x, y, z, r, velx = 0, vely = 0, velz = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
    this.velx = velx;
    this.vely = vely;
    this.velz = velz;
    this.sphere = document.createElement("a-sphere");
    this.sphere.setAttribute("position", `${this.x} ${this.y} ${this.z}`);
    this.sphere.setAttribute("radius", this.r);
    this.sphere.setAttribute("color", "#EF2D5E");
    scene.appendChild(this.sphere);
  }
  update() {
    this.vely += grav;
    this.x += this.velx;
    this.y += this.vely;
    this.z += this.velz;
    this.draw();
  }
  draw() {
    this.sphere.setAttribute("position", `${this.x} ${this.y} ${this.z}`);
  }
}

// INIT SPHERES

while (spheres.length < amountSpheres) {
  const x = 0;
  const y = 0;
  const z = -5;
  const r = 0.5;
  const velx = randomWithinRange(-0.05, 0.05);
  const vely = randomWithinRange(0.09, 0.11);
  const velz = randomWithinRange(-0.01, 0.01);
  const sphere = new Sphere(x, y, z, r, velx, vely, velz);
  spheres.push(sphere);
}

// RENDER LOOP

function render() {
  spheres.forEach(sphere => sphere.update());
  requestAnimationFrame(render);
}
render();

// UTILS

function randomWithinRange(min, max) {
  return Math.random() * (max - min) + min;
}

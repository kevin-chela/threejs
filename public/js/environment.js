let myMesh;
let myMesh1;

function createEnvironment(scene) {
  console.log("Adding environment");

  let texture = new THREE.TextureLoader().load("../assets/texture.png");
  let myGeometry = new THREE.BoxGeometry(1, 1, 1);
  let myMaterial = new THREE.MeshBasicMaterial({ map: texture });
  myMesh = new THREE.Mesh(myGeometry, myMaterial);
  myMesh1 = new THREE.Mesh(myGeometry, myMaterial);
  myMesh.position.set(0, 0, 0);
  myMesh1.position.set(3, 0, 0);
  scene.add(myMesh);
  scene.add(myMesh1);
}

var isBouncingUp = true;

function updateEnvironment(scene) {

  // Check if the mesh has reached the upper or lower limit
  // You can adjust these limits based on your scene dimensions
  var upperLimit = 4; // Example upper limit
  var lowerLimit = 0; // Example lower limit

    // Adjust the position of the mesh based on the bouncing direction
    if (isBouncingUp) {
      myMesh.position.y += 0.01;
      myMesh1.position.y += 0.013;

    }else{

      myMesh.position.y -= 0.01;

    }
    

  if (myMesh.position.y >= upperLimit) {
    // If the mesh reaches the upper limit, reverse the direction
    isBouncingUp = false;
  }

  if ((myMesh.position.y <= lowerLimit)) {
    // If the mesh reaches the lower limit, reverse the direction

    isBouncingUp = true;
 
  }


}
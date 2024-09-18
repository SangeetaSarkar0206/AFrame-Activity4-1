AFRAME.registerComponent('movement-controls', {
  init: function() {
    const el = this.el;
    const speed = 0.5; // Adjust the speed as needed

    // Event listener for keydown
    document.addEventListener('keydown', (event) => {
      // Get the current position of the character
      const position = el.getAttribute('position');
      let x = position.x;
      let z = position.z;

      // Update the position based on the pressed key
      if (event.key === "ArrowRight") {
        x += speed;
        };

      if (event.key === "ArrowLeft") {
          x -= speed;
        };

      if (event.key === "ArrowUp") {
          z -= speed;
        };

      if (event.key === "ArrowDown") {
          z += speed;
        };

      // Set the new position of the character
      el.setAttribute('position', {x: x, y: position.y, z: z});
    });
  }
});
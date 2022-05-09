function controlCar(scanArray) {
  if (!window.has_reset_game) {
    window.has_reset_game = true;
    window.car_position = 0;
    window.queue = [];
  }
  if (window.queue.length === 0) {
	let left, center, right;

	if (window.car_position === -1) {
	  left = 8;
	  center = 12;
	  right = 15;
	} else if (window.car_position === 0) {
	  left = 4;
	  center = 8;
	  right = 12;
	} else if (window.car_position === 1) {
	  left = 1;
	  center = 4;
	  right = 8;
	}

	left = scanArray[left];
	center = scanArray[center];
	right = scanArray[right];
	let furthest = Math.max(left, center, right);
	let closest = Math.min(left, center, right);

	console.log(left, center, right);

	let moveInDirection = (direction) => {
	  console.log("indo em direção", direction);
	  if (direction === window.car_position) {
	    window.queue.push(0); 
	  } else if (direction > window.car_position) {
	    window.queue.push(1, 1, 1, 1);
	    window.car_position += 1;
	  } else if (direction < window.car_position) {
	    window.queue.push(-1, -1, -1, -1);
	    window.car_position -= 1;
	  }
	};

	if (closest < 0)
 moveInDirection(window.car_position);
	 else if (furthest === left) moveInDirection(-1);
	 else if (furthest === center) moveInDirection(0);
	 else if (furthest === right) moveInDirection(1);	
  }

  return window.queue.pop();	
}

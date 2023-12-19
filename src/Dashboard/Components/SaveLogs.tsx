import * as React from 'react';
import Title from './Title';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import './MagicBox.css'; // Import a CSS file for additional styles

export default function Orders() {
  const boxRef = React.useRef<HTMLDivElement | null>(null);
  const lastCoordinates = React.useRef({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (boxRef.current) {
      const { clientX, clientY } = event;
      const boxRect = boxRef.current.getBoundingClientRect();
      const x = clientX - boxRect.left;
      const y = clientY - boxRect.top;

      // Calculate cursor direction
      const deltaX = x - lastCoordinates.current.x;
      const deltaY = y - lastCoordinates.current.y;
      let direction;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? 'right' : 'left';
      } else {
        direction = deltaY > 0 ? 'down' : 'up';
      }

      // Log cursor direction and coordinates
      console.log(`Cursor direction: ${direction}, Coordinates: (${x}, ${y})`);

      // Update last coordinates
      lastCoordinates.current = { x, y };
    }
  };

  const handleMouseClick = () => {
    // Log mouse click event along with current coordinates
    console.log(`Mouse clicked at Coordinates: (${lastCoordinates.current.x}, ${lastCoordinates.current.y})`);
  };

  return (
    <React.Fragment>
      <Title>Move your cursor in this magic box <AutoFixHighIcon /></Title>
      <div
        ref={boxRef}
        className="magic-box" // Apply a class for additional styling
        onMouseMove={handleMouseMove}
        onClick={handleMouseClick}
      ></div>
      <p>
        Instructions: <br></br>You can do mouse movements such as <b>up</b>, <b>down</b>, <b>left</b>, <b>right</b>, and mouse <b>click</b>.
        Each of them will be saved in the aws s3 as a logfile with a timestamp and the x, y location of the cursor in the box.
      </p>
    </React.Fragment>
  );
}

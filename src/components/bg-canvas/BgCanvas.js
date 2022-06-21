/* eslint-disable no-param-reassign */
/* eslint-disable react/no-this-in-sfc */
import { useRef, useEffect } from "react";
import { randomColor, randomIntFromRange } from "../../utils/utils";

const BgCanvas = ({ mouseDown }) => {
  const canvasRef = useRef(null);
  let canvas;
  let context;
  const alpha = useRef(1);
  const radians = useRef(0);
  const colors = ["#541690", "#FF4949", "#FF8D29", "#FFCD38"];

  // particle
  class Particle {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }

    draw = () => {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fillStyle = this.color;
      context.shadowColor = this.color;
      context.shadowBlur = 10;
      context.fill();
      context.closePath();
    };

    update = () => {
      this.draw();
    };
  }

  // Implementation
  let particles;
  const init = () => {
    particles = [];

    for (let i = 0; i < 80; i += 1) {
      const canvasWidth = canvas.width + 300;
      const canvasHeight = canvas.height + 300;
      const radius = 3 * Math.random();
      const x = Math.random() * canvasWidth - canvasWidth / 2;
      const y = Math.random() * canvasHeight - canvasHeight / 2;
      particles.push(new Particle(x, y, radius, randomColor(colors)));
    }
  };

  const animate = () => {
    window.requestAnimationFrame(animate);
    context.fillStyle = `rgba(20, 20, 20, ${alpha.current})`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.translate((canvas.width * 6) / 10, canvas.height / 2);
    context.rotate(radians.current);
    particles.forEach((particle) => {
      particle.update();
    });
    context.restore();

    radians.current += 0.0003;
    if (mouseDown.current) {
      radians.current += 0.01;
      if (alpha.current >= 0.1) {
        alpha.current -= 0.05;
      }
    } else if (!mouseDown.current && alpha.current < 1) {
      alpha.current += 0.05;
    }
  };

  // const handleMouseDown = () => {
  //   mouseDown.current = true;
  // };

  // const handleMouseUp = (e) => {
  //   mouseDown.current = false;
  // };

  useEffect(() => {
    canvas = canvasRef.current;
    context = canvas.getContext("2d");
    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    init();
    animate();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      // onMouseDown={handleMouseDown}
      // onMouseUp={handleMouseUp}
      ref={canvasRef}
    />
  );
};

export default BgCanvas;

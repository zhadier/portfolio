/* eslint-disable no-param-reassign */
/* eslint-disable react/no-this-in-sfc */
import { useRef, useEffect } from "react";
import { randomColor, randomIntFromRange } from "../../utils/utils";

const LoadingCanvas = () => {
  const canvasRef = useRef(null);

  let canvas;
  let context;

  const mouse = {
    x: window.innerWidth * (3 / 4),
    y: window.innerHeight / 2,
  };

  const colors = ["#03045E", "#00B4D8", "#90E0EF", "#CAF0F8"];

  const handleMousMmove = (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  };

  // particle
  class Particle {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.radians = Math.random() * (Math.PI * 2);
      this.velocity = 0.02;
      this.distanceFromCenter = randomIntFromRange(30, 100);
      this.lastMouse = { x, y };
    }

    draw = (lastPoint) => {
      context.beginPath();
      context.strokeStyle = this.color;
      context.lineWidth = this.radius;
      context.moveTo(lastPoint.x, lastPoint.y);
      context.lineTo(this.x, this.y);
      context.stroke();
      context.closePath();
    };

    update = () => {
      const lastPoint = { x: this.x, y: this.y };
      if (this.radians === 2 * Math.PI) {
        this.radians = 0;
      }
      this.radians += this.velocity;
      this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.02;
      this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;
      this.x =
        this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y =
        this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
      this.draw(lastPoint);
    };
  }

  // Implementation
  let particles;
  const init = () => {
    particles = [];

    for (let i = 0; i < 200; i += 1) {
      const radius = 2 * Math.random() + 3;
      particles.push(
        new Particle(
          canvas.width * (3 / 4),
          canvas.height / 2,
          radius,
          randomColor(colors)
        )
      );
    }
  };

  const animate = () => {
    window.requestAnimationFrame(animate);
    context.fillStyle = "rgba(242, 242, 252, 0.04)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
    });
  };

  useEffect(() => {
    canvas = canvasRef.current;
    context = canvas.getContext("2d");
    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    init();
    animate();
    return () => window.removeEventListener("resize", handleResize);
  }, [animate]);

  return <canvas onMouseMove={handleMousMmove} ref={canvasRef} />;
};

export default LoadingCanvas;

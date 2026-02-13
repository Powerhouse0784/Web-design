import React, { useEffect, useRef } from "react";

export const BackgroundRippleEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Ripples array
    const ripples = [];
    const maxRipples = 3;

    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 300;
        this.speed = 2;
        this.opacity = 1;
      }

      update() {
        this.radius += this.speed;
        this.opacity = 1 - this.radius / this.maxRadius;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99, 102, 241, ${this.opacity * 0.3})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      isFinished() {
        return this.radius >= this.maxRadius;
      }
    }

    // Grid of boxes
    const boxSize = 40;
    const boxes = [];

    for (let x = 0; x < canvas.width; x += boxSize) {
      for (let y = 0; y < canvas.height; y += boxSize) {
        boxes.push({
          x,
          y,
          size: boxSize,
          isHovered: false,
          rippleInfluence: 0,
        });
      }
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update boxes
      boxes.forEach((box) => {
        const distance = Math.hypot(box.x - mouseX, box.y - mouseY);
        box.isHovered = distance < 100;
      });
    };

    const handleClick = (e) => {
      if (ripples.length < maxRipples) {
        ripples.push(new Ripple(e.clientX, e.clientY));
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    // Check if dark mode
    const isDark = () => document.body.classList.contains("dark");

    // Animation loop
    const animate = () => {
      // Clear canvas with appropriate background
      ctx.fillStyle = isDark() ? "#000000" : "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      boxes.forEach((box) => {
        // Calculate ripple influence
        let totalInfluence = 0;
        ripples.forEach((ripple) => {
          const distance = Math.hypot(box.x - ripple.x, box.y - ripple.y);
          const influence = Math.max(0, 1 - distance / ripple.maxRadius);
          totalInfluence += influence * ripple.opacity;
        });

        // Set box color based on hover and ripple
        let alpha = 0.05;
        if (box.isHovered) alpha = 0.15;
        if (totalInfluence > 0) alpha += totalInfluence * 0.2;

        ctx.fillStyle = isDark()
          ? `rgba(99, 102, 241, ${alpha})`
          : `rgba(99, 102, 241, ${alpha})`;
        ctx.fillRect(box.x, box.y, box.size - 1, box.size - 1);

        // Draw border
        ctx.strokeStyle = isDark()
          ? "rgba(99, 102, 241, 0.1)"
          : "rgba(226, 232, 240, 0.3)";
        ctx.lineWidth = 1;
        ctx.strokeRect(box.x, box.y, box.size, box.size);
      });

      // Update and draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update();
        ripples[i].draw();

        if (ripples[i].isFinished()) {
          ripples.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        zIndex: 1,
      }}
    />
  );
};
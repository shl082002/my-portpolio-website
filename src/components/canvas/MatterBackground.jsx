import React, { useEffect } from "react";
import Matter from "matter-js";

const MatterBackground = () => {
  useEffect(() => {
    // Set dimensions
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use("matter-attractors");
    Matter.use("matter-wrap");

    // Module aliases
    let Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      Common = Matter.Common,
      Bodies = Matter.Bodies;

    // Create engine
    let engine = Engine.create();
    engine.world.gravity.scale = 0;

    // Create renderer
    let render = Render.create({
      element: document.getElementById("matter-container"),
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Create runner
    let runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    let world = engine.world;

    // Create a static body with an attractor
    let attractiveBody = Bodies.circle(
      dimensions.width / 2,
      dimensions.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
        render: { fillStyle: "#000", strokeStyle: "#000", lineWidth: 0 },
      }
    );

    World.add(world, attractiveBody);

    // Add floating bodies
    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, dimensions.width);
      let y = Common.random(0, dimensions.height);
      let size = Common.random(10, 50);
      let body = Bodies.polygon(x, y, Common.random(3, 6), size, {
        mass: size / 20,
        frictionAir: 0.02,
        render: { fillStyle: "#222" },
      });

      World.add(world, body);
    }

    // Mouse control
    let mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Handle window resize
    const resizeHandler = () => {
      let newWidth = window.innerWidth;
      let newHeight = window.innerHeight;
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div
      id="matter-container"
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default MatterBackground;

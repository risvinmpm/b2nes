"use client";
import { useEffect, useRef } from "react";

const ZeroGravityText = ({ selector, splitBy }) => {
  const animatedElementsRef = useRef([]);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const radius = 150;
    const maxDisplacement = 100;

    animatedElementsRef.current.forEach((el) => {
      const dx = el.originalX - mouseX;
      const dy = el.originalY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < radius) {
        const force = (1 - distance / radius) * maxDisplacement;
        el.targetX = (dx / distance) * force;
        el.targetY = (dy / distance) * force;
      } else {
        el.targetX = 0;
        el.targetY = 0;
      }
    });
  };

  useEffect(() => {
    const animatedElements = [];

    const animateTextElements = () => {
      const textContainers = document.querySelectorAll(selector);

      textContainers.forEach((textContainer) => {
        const originalText = textContainer.textContent;
        let elements = [];
        textContainer.textContent = "";

        if (splitBy === "words") {
          elements = originalText.trim().split(/\s+/);
        } else {
          for (const char of originalText) {
            elements.push(char);
          }
        }

        elements.forEach((char) => {
          const span = document.createElement("span");
          span.className = splitBy === "words" ? "word" : "letter";
          span.textContent = char;
          textContainer.appendChild(span);
        });
      });

      const spans = document.querySelectorAll(`${selector} span`);
      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        animatedElements.push({
          element: span,
          originalX: rect.left + rect.width / 2,
          originalY: rect.top + rect.height / 2,
          currentX: 0,
          currentY: 0,
          targetX: 0,
          targetY: 0,
        });
      });

      animatedElementsRef.current = animatedElements;

      const animate = () => {
        animatedElementsRef.current.forEach((el) => {
          el.currentX += (el.targetX - el.currentX) * 0.1;
          el.currentY += (el.targetY - el.currentY) * 0.1;
          el.element.style.transform = `translate(${el.currentX}px, ${el.currentY}px)`;
        });
        requestAnimationFrame(animate);
      };

      document.addEventListener("mousemove", handleMouseMove);
      animate();
    };

    requestAnimationFrame(animateTextElements);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [selector, splitBy]);

  return null;
};

export default ZeroGravityText;



// "use client";
// import { useEffect } from "react";

// const ZeroGravityText = ({ selector, splitBy }) => {
//   useEffect(() => {
//     const animatedElements = [];

//     const setup = () => {
//       const containers = document.querySelectorAll(selector);
//       containers.forEach((container) => {
//         let elements = [];
//         let type = "";

//         if (splitBy === "words") {
//           elements = container.textContent.trim().split(/\s+/);
//           type = "word";
//         } else if (splitBy === "letters") {
//           const words = container.textContent.trim().split(/\s+/);
//           words.forEach((word, i) => {
//             for (const letter of word) elements.push(letter);
//             if (i < words.length - 1) elements.push(" ");
//           });
//           type = "letter";
//         }

//         container.textContent = "";
//         elements.forEach((text, i) => {
//           const span = document.createElement("span");
//           span.classList.add(type);
//           span.textContent = text;
//           container.appendChild(span);
//           if (splitBy === "words" && i < elements.length - 1) {
//             container.appendChild(document.createTextNode(" "));
//           }

//           animatedElements.push({
//             element: span,
//             originalX: 0,
//             originalY: 0,
//             currentX: 0,
//             currentY: 0,
//             targetX: 0,
//             targetY: 0,
//           });
//         });
//       });

//       setTimeout(() => {
//         animatedElements.forEach((el) => {
//           const rect = el.element.getBoundingClientRect();
//           el.originalX = rect.left + rect.width / 2;
//           el.originalY = rect.top + rect.height / 2;
//         });
//       }, 300);

//       const handleMove = (e) => {
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;
//         const radius = 150;
//         const maxForce = 100;

//         animatedElements.forEach((el) => {
//           const dx = el.originalX - mouseX;
//           const dy = el.originalY - mouseY;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < radius) {
//             const force = (1 - dist / radius) * maxForce;
//             el.targetX = (dx / dist) * force;
//             el.targetY = (dy / dist) * force;
//           } else {
//             el.targetX = 0;
//             el.targetY = 0;
//           }
//         });
//       };

//       const animate = () => {
//         const lerp = 0.1;
//         animatedElements.forEach((el) => {
//           el.currentX += (el.targetX - el.currentX) * lerp;
//           el.currentY += (el.targetY - el.currentY) * lerp;
//           el.element.style.transform = `translate(${el.currentX}px, ${el.currentY}px)`;
//         });
//         requestAnimationFrame(animate);
//       };

//       document.addEventListener("mousemove", handleMove);
//       animate();

//       return () => {
//         document.removeEventListener("mousemove", handleMove);
//       };
//     };

//     setup();
//   }, [selector, splitBy]);

//   return null;
// };

// export default ZeroGravityText;

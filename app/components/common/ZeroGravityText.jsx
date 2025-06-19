"use client";
import { useEffect, useRef } from "react";

const ZeroGravityText = ({ selector, splitBy }) => {
  const animatedElementsRef = useRef([]);

  // Move handleMouseMove to outer scope
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
        let elements = [];
        let elementType = "";

        if (splitBy === "words") {
          elements = textContainer.textContent.trim().split(/\s+/);
          elementType = "word";
        } else if (splitBy === "letters") {
          const words = textContainer.textContent.trim().split(/\s+/);
          words.forEach((word, wordIndex) => {
            for (let i = 0; i < word.length; i++) {
              elements.push(word[i]);
            }
            if (wordIndex < words.length - 1) {
              elements.push(" ");
            }
          });
          elementType = "letter";
        }

        textContainer.textContent = "";

        elements.forEach((element, index) => {
          const span = document.createElement("span");
          span.classList.add(elementType);
          span.textContent = element;
          textContainer.appendChild(span);

          if (splitBy === "words" && index < elements.length - 1) {
            textContainer.appendChild(document.createTextNode(" "));
          }

          animatedElements.push({
            element: span,
            originalX: 0,
            originalY: 0,
            currentX: 0,
            currentY: 0,
            targetX: 0,
            targetY: 0,
          });
        });
      });

      // Save reference
      animatedElementsRef.current = animatedElements;

      // Initial position setup
      setTimeout(() => {
        animatedElements.forEach((el) => {
          const rect = el.element.getBoundingClientRect();
          el.originalX = rect.left + rect.width / 2;
          el.originalY = rect.top + rect.height / 2;
        });
      }, 100);

      // Animation loop
      const animate = () => {
        const lerpFactor = 0.1;
        animatedElements.forEach((el) => {
          el.currentX += (el.targetX - el.currentX) * lerpFactor;
          el.currentY += (el.targetY - el.currentY) * lerpFactor;
          el.element.style.transform = `translate(${el.currentX}px, ${el.currentY}px)`;
        });
        requestAnimationFrame(animate);
      };

      document.addEventListener("mousemove", handleMouseMove);
      animate();
    };

    animateTextElements();

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

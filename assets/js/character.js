/**
 * SAIM - DEVELOPER PORTFOLIO
 * Interactive 3D Developer Character Engine
 * Features:
 * - Real-time cursor / pointer tracking (Eyes, Pupils, Head & 3D Torso)
 * - Autonomous breathing and blinking cycles
 * - Hair-styling / grooming action (hand raises, brushes hair, smiles, returns)
 * - Interactive click trigger & periodic autonomous hair styling
 */

(function () {
  'use strict';

  class InteractiveCharacter {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      this.width = this.canvas.width;
      this.height = this.canvas.height;

      // Mouse tracking state
      this.targetLookX = 0; // -1 to 1
      this.targetLookY = 0; // -1 to 1
      this.currentLookX = 0;
      this.currentLookY = 0;

      // Autonomous behaviors
      this.blinkProgress = 0; // 0 = open, 1 = closed
      this.isBlinking = false;
      this.lastBlinkTime = Date.now();
      this.blinkInterval = 3500;

      // Hair setting animation state
      this.isStylingHair = false;
      this.hairActionTime = 0; // 0 to 1
      this.lastHairStyleTime = Date.now();
      this.hairStyleInterval = 8000; // auto-style every 8s

      // Breathing wave
      this.breathTime = 0;

      this.initEvents();
      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);
    }

    initEvents() {
      // Global mouse move tracking
      window.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height * 0.35; // head position

        const dx = e.clientX - charCenterX;
        const dy = e.clientY - charCenterY;

        // Normalize between -1 and 1 with gentle clamp
        this.targetLookX = Math.max(-1, Math.min(1, dx / (window.innerWidth * 0.45)));
        this.targetLookY = Math.max(-1, Math.min(1, dy / (window.innerHeight * 0.45)));
      }, { passive: true });

      // Mouse leave resets to center look
      window.addEventListener('mouseleave', () => {
        this.targetLookX = 0;
        this.targetLookY = 0;
      });

      // Canvas click triggers hair styling
      this.canvas.addEventListener('click', () => {
        this.triggerHairStyle();
      });

      // External trigger button if available
      const hairBtn = document.getElementById('btn-fix-hair');
      if (hairBtn) {
        hairBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.triggerHairStyle();
        });
      }
    }

    triggerHairStyle() {
      if (this.isStylingHair) return;
      this.isStylingHair = true;
      this.hairActionTime = 0;
      this.showStatusBadge('Styling Hair! ✨');
    }

    showStatusBadge(text) {
      const badge = document.getElementById('character-action-pill');
      if (!badge) return;
      badge.textContent = text;
      badge.classList.add('active');
      setTimeout(() => {
        badge.classList.remove('active');
        badge.textContent = 'Tracking Cursor 👁️';
      }, 2200);
    }

    update() {
      // Smooth lerp towards target look
      this.currentLookX += (this.targetLookX - this.currentLookX) * 0.08;
      this.currentLookY += (this.targetLookY - this.currentLookY) * 0.08;

      // Breathing oscillation
      this.breathTime += 0.035;

      // Blinking logic
      const now = Date.now();
      if (!this.isBlinking && now - this.lastBlinkTime > this.blinkInterval) {
        this.isBlinking = true;
        this.blinkProgress = 0;
        this.lastBlinkTime = now + (Math.random() * 2000 - 1000);
      }

      if (this.isBlinking) {
        this.blinkProgress += 0.15;
        if (this.blinkProgress >= 1) {
          this.blinkProgress = 0;
          this.isBlinking = false;
        }
      }

      // Hair setting animation progress
      if (this.isStylingHair) {
        this.hairActionTime += 0.018;
        if (this.hairActionTime >= 1) {
          this.isStylingHair = false;
          this.hairActionTime = 0;
          this.lastHairStyleTime = now;
        }
      } else if (now - this.lastHairStyleTime > this.hairStyleInterval) {
        // Auto trigger hair setting occasionally
        this.triggerHairStyle();
      }
    }

    draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      const lookX = this.currentLookX;
      const lookY = this.currentLookY;
      const breath = Math.sin(this.breathTime) * 3;

      // Center reference coordinates
      const cx = this.width / 2;
      const cy = 300;

      ctx.save();

      // Hair styling arm progress curve (sinusoidal in-out)
      let armRaise = 0;
      let hairTouch = 0;
      if (this.isStylingHair) {
        // 0 -> 0.5 (raising & touching hair) -> 1 (lowering)
        if (this.hairActionTime < 0.5) {
          armRaise = Math.sin((this.hairActionTime / 0.5) * (Math.PI / 2));
        } else {
          armRaise = Math.cos(((this.hairActionTime - 0.5) / 0.5) * (Math.PI / 2));
        }
        hairTouch = Math.sin(this.hairActionTime * Math.PI);
      }

      // -------------------------------------------------------------
      // 1. Back Aura Shadow / Body Shadow
      // -------------------------------------------------------------
      const shadowGrad = ctx.createRadialGradient(cx, 590, 20, cx, 590, 140);
      shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
      shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = shadowGrad;
      ctx.beginPath();
      ctx.ellipse(cx, 590, 140, 24, 0, 0, Math.PI * 2);
      ctx.fill();

      // -------------------------------------------------------------
      // 2. Torso & Clothes (Polo Shirt & Dark Trousers)
      // -------------------------------------------------------------
      ctx.save();
      // Body shifts slightly with mouse look
      const bodyShiftX = lookX * 9;
      const bodyTilt = lookX * 0.04;
      ctx.translate(cx + bodyShiftX, cy + 120 + breath);
      ctx.rotate(bodyTilt);

      // Dark Trousers (Waist downwards)
      ctx.fillStyle = '#11151A';
      ctx.beginPath();
      ctx.moveTo(-75, 130);
      ctx.lineTo(75, 130);
      ctx.lineTo(85, 230);
      ctx.lineTo(10, 230);
      ctx.lineTo(0, 160);
      ctx.lineTo(-10, 230);
      ctx.lineTo(-85, 230);
      ctx.closePath();
      ctx.fill();

      // Belt
      ctx.fillStyle = '#1F2630';
      ctx.fillRect(-75, 122, 150, 14);
      ctx.fillStyle = '#00F5A0';
      ctx.fillRect(-12, 122, 24, 14); // Emerald buckle

      // White Polo Shirt Torso
      const shirtGrad = ctx.createLinearGradient(-80, 0, 80, 130);
      shirtGrad.addColorStop(0, '#FFFFFF');
      shirtGrad.addColorStop(0.5, '#F1F5F9');
      shirtGrad.addColorStop(1, '#CBD5E1');
      ctx.fillStyle = shirtGrad;

      ctx.beginPath();
      ctx.moveTo(-60, -40); // left shoulder
      ctx.quadraticCurveTo(0, -50, 60, -40); // right shoulder
      ctx.lineTo(82, 124); // right waist
      ctx.lineTo(-82, 124); // left waist
      ctx.closePath();
      ctx.fill();

      // Subtle shirt fabric shadow folds
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-15, 20);
      ctx.quadraticCurveTo(10, 50, -5, 90);
      ctx.moveTo(25, 40);
      ctx.quadraticCurveTo(40, 70, 30, 110);
      ctx.stroke();

      // Left Arm (Resting with Smart Watch)
      ctx.fillStyle = shirtGrad;
      ctx.beginPath();
      ctx.moveTo(-60, -40);
      ctx.lineTo(-95, 20); // sleeve
      ctx.lineTo(-75, 30);
      ctx.lineTo(-50, -10);
      ctx.closePath();
      ctx.fill();

      // Left Forearm down to pocket
      ctx.fillStyle = '#F3D2B8'; // Warm skin
      ctx.beginPath();
      ctx.moveTo(-93, 22);
      ctx.lineTo(-72, 115);
      ctx.lineTo(-58, 115);
      ctx.lineTo(-75, 28);
      ctx.closePath();
      ctx.fill();

      // Smart Watch on Left Wrist
      ctx.fillStyle = '#060A0C';
      ctx.fillRect(-76, 90, 18, 10);
      ctx.fillStyle = '#00F5A0'; // emerald screen
      ctx.fillRect(-73, 92, 12, 6);

      // Left Hand tucked in pocket
      ctx.fillStyle = '#E8BD9F';
      ctx.beginPath();
      ctx.arc(-65, 125, 14, 0, Math.PI * 2);
      ctx.fill();

      // Right Sleeve
      ctx.fillStyle = shirtGrad;
      ctx.beginPath();
      ctx.moveTo(60, -40);
      ctx.lineTo(95, 20);
      ctx.lineTo(75, 30);
      ctx.lineTo(50, -10);
      ctx.closePath();
      ctx.fill();

      // Right Arm (Normal vs Hair Styling)
      if (armRaise === 0) {
        // Resting right forearm
        ctx.fillStyle = '#F3D2B8';
        ctx.beginPath();
        ctx.moveTo(93, 22);
        ctx.lineTo(72, 115);
        ctx.lineTo(58, 115);
        ctx.lineTo(75, 28);
        ctx.closePath();
        ctx.fill();

        // Right hand in pocket
        ctx.fillStyle = '#E8BD9F';
        ctx.beginPath();
        ctx.arc(65, 125, 14, 0, Math.PI * 2);
        ctx.fill();
      }

      // Polo Collar & Placket
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(-28, -48);
      ctx.lineTo(0, -10);
      ctx.lineTo(-4, 35);
      ctx.lineTo(4, 35);
      ctx.lineTo(0, -10);
      ctx.lineTo(28, -48);
      ctx.lineTo(15, -42);
      ctx.lineTo(0, -32);
      ctx.lineTo(-15, -42);
      ctx.closePath();
      ctx.fill();

      // Collar Wings
      ctx.fillStyle = '#F8FAFC';
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 1.5;
      // Left collar flap
      ctx.beginPath();
      ctx.moveTo(0, -30);
      ctx.lineTo(-32, -45);
      ctx.lineTo(-16, -12);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Right collar flap
      ctx.beginPath();
      ctx.moveTo(0, -30);
      ctx.lineTo(32, -45);
      ctx.lineTo(16, -12);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();

      // -------------------------------------------------------------
      // 3. Neck
      // -------------------------------------------------------------
      const neckX = cx + lookX * 12;
      const neckY = cy + 62 + breath;

      ctx.fillStyle = '#E8BD9F'; // shaded neck
      ctx.beginPath();
      ctx.moveTo(neckX - 22, neckY - 20);
      ctx.lineTo(neckX + 22, neckY - 20);
      ctx.lineTo(neckX + 24, neckY + 22);
      ctx.lineTo(neckX - 24, neckY + 22);
      ctx.closePath();
      ctx.fill();

      // -------------------------------------------------------------
      // 4. Head & Face (3D Disney/Pixar Style)
      // -------------------------------------------------------------
      ctx.save();
      const headX = cx + lookX * 18;
      const headY = cy + lookY * 12 - (hairTouch * 6);
      const headRot = lookX * 0.12 - (hairTouch * 0.08); // confident tilt when styling hair

      ctx.translate(headX, headY);
      ctx.rotate(headRot);

      // Ears
      ctx.fillStyle = '#F3D2B8';
      // Left ear
      ctx.beginPath();
      ctx.ellipse(-62, 5, 12, 18, -0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#E8BD9F';
      ctx.beginPath();
      ctx.ellipse(-62, 5, 6, 10, -0.1, 0, Math.PI * 2);
      ctx.fill();

      // Right ear
      ctx.fillStyle = '#F3D2B8';
      ctx.beginPath();
      ctx.ellipse(62, 5, 12, 18, 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#E8BD9F';
      ctx.beginPath();
      ctx.ellipse(62, 5, 6, 10, 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Face Base Oval
      const faceGrad = ctx.createRadialGradient(lookX * 10, -10, 20, 0, 10, 75);
      faceGrad.addColorStop(0, '#FFF0E5');
      faceGrad.addColorStop(0.65, '#F9D8C0');
      faceGrad.addColorStop(1, '#E8BD9F');
      ctx.fillStyle = faceGrad;

      ctx.beginPath();
      ctx.moveTo(-58, -35);
      ctx.bezierCurveTo(-65, 30, -45, 75, 0, 84); // smooth round jaw
      ctx.bezierCurveTo(45, 75, 65, 30, 58, -35);
      ctx.bezierCurveTo(50, -80, -50, -80, -58, -35);
      ctx.closePath();
      ctx.fill();

      // Soft Cheek Blush
      ctx.fillStyle = 'rgba(255, 150, 130, 0.18)';
      ctx.beginPath();
      ctx.arc(-36, 32, 16, 0, Math.PI * 2);
      ctx.arc(36, 32, 16, 0, Math.PI * 2);
      ctx.fill();

      // -------------------------------------------------------------
      // 5. Eyebrows (Dynamic & Expressive)
      // -------------------------------------------------------------
      ctx.fillStyle = '#3E2415';
      ctx.save();
      const browLift = -lookY * 3 + (hairTouch * 4); // raised brow during hair style
      // Left brow
      ctx.beginPath();
      ctx.moveTo(-45, -15 + browLift);
      ctx.quadraticCurveTo(-28, -25 + browLift, -12, -18 + browLift);
      ctx.quadraticCurveTo(-28, -20 + browLift, -45, -15 + browLift);
      ctx.fill();

      // Right brow
      ctx.beginPath();
      ctx.moveTo(12, -18 + browLift);
      ctx.quadraticCurveTo(28, -25 + browLift + (hairTouch * 3), 45, -15 + browLift);
      ctx.quadraticCurveTo(28, -20 + browLift, 12, -18 + browLift);
      ctx.fill();
      ctx.restore();

      // -------------------------------------------------------------
      // 6. Eyes (Big Pixar Style with Specular Highlights)
      // -------------------------------------------------------------
      const drawEye = (x, y, isRight) => {
        ctx.save();
        ctx.translate(x, y);

        // Eye Socket & Sclera
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(0, 0, 18, 16, 0, 0, Math.PI * 2);
        ctx.fill();

        // Iris & Pupil (Track cursor!)
        const pupilShiftX = lookX * 6.5;
        const pupilShiftY = lookY * 5.0;

        // Iris (Deep warm espresso / amber rim)
        const irisGrad = ctx.createRadialGradient(pupilShiftX, pupilShiftY, 2, pupilShiftX, pupilShiftY, 11);
        irisGrad.addColorStop(0, '#5A3219');
        irisGrad.addColorStop(0.7, '#2F170A');
        irisGrad.addColorStop(1, '#1A0C05');
        ctx.fillStyle = irisGrad;
        ctx.beginPath();
        ctx.arc(pupilShiftX, pupilShiftY, 10.5, 0, Math.PI * 2);
        ctx.fill();

        // Emerald Iris Glow Ring (Subtle tech aesthetic)
        ctx.strokeStyle = 'rgba(0, 245, 160, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(pupilShiftX, pupilShiftY, 9.5, 0, Math.PI * 2);
        ctx.stroke();

        // Dark Pupil
        ctx.fillStyle = '#060A0C';
        ctx.beginPath();
        ctx.arc(pupilShiftX, pupilShiftY, 5.5, 0, Math.PI * 2);
        ctx.fill();

        // Specular Catchlights (Gives life to eyes!)
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(pupilShiftX - 3.5, pupilShiftY - 3.5, 3.2, 0, Math.PI * 2);
        ctx.arc(pupilShiftX + 3.0, pupilShiftY + 3.0, 1.6, 0, Math.PI * 2);
        ctx.fill();

        // Eyelid / Blink Animation
        if (this.blinkProgress > 0) {
          const blinkH = Math.sin(this.blinkProgress * Math.PI) * 32;
          ctx.fillStyle = '#F3D2B8';
          ctx.beginPath();
          ctx.rect(-20, -18, 40, blinkH);
          ctx.fill();
          ctx.strokeStyle = '#D9A384';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-18, -18 + blinkH);
          ctx.lineTo(18, -18 + blinkH);
          ctx.stroke();
        }

        // Upper Eyelash line
        ctx.strokeStyle = '#2F170A';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(0, -1, 18, Math.PI * 1.1, Math.PI * 1.9);
        ctx.stroke();

        ctx.restore();
      };

      // Draw both eyes
      drawEye(-26, 0, false);
      drawEye(26, 0, true);

      // -------------------------------------------------------------
      // 7. Nose
      // -------------------------------------------------------------
      ctx.fillStyle = '#E2AA89';
      ctx.beginPath();
      ctx.moveTo(lookX * 3, 14);
      ctx.quadraticCurveTo(lookX * 4 + 7, 24, lookX * 3, 26);
      ctx.quadraticCurveTo(lookX * 3 - 6, 26, lookX * 3, 23);
      ctx.fill();

      // -------------------------------------------------------------
      // 8. Confident Smile / Mouth
      // -------------------------------------------------------------
      ctx.save();
      const smileWiden = hairTouch * 4; // bigger smile when styling hair!
      ctx.translate(lookX * 3, 46);

      // Mouth cavity
      ctx.fillStyle = '#8B2C24';
      ctx.beginPath();
      ctx.moveTo(-18 - smileWiden, 0);
      ctx.quadraticCurveTo(0, 16 + smileWiden, 18 + smileWiden, 0);
      ctx.quadraticCurveTo(0, 6, -18 - smileWiden, 0);
      ctx.closePath();
      ctx.fill();

      // White Upper Teeth
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(-12 - smileWiden * 0.7, 0);
      ctx.lineTo(12 + smileWiden * 0.7, 0);
      ctx.quadraticCurveTo(0, 7, -12 - smileWiden * 0.7, 0);
      ctx.fill();

      // Lip Outline
      ctx.strokeStyle = '#C97762';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-20 - smileWiden, 0);
      ctx.quadraticCurveTo(0, 18 + smileWiden, 20 + smileWiden, 0);
      ctx.stroke();

      ctx.restore();

      // -------------------------------------------------------------
      // 9. Lush 3D Styled Hair
      // -------------------------------------------------------------
      const hairGrad = ctx.createLinearGradient(-60, -90, 60, 20);
      hairGrad.addColorStop(0, '#532D1A');
      hairGrad.addColorStop(0.4, '#3A1D0E');
      hairGrad.addColorStop(1, '#210E05');
      ctx.fillStyle = hairGrad;

      // Back & Volume hair
      ctx.beginPath();
      ctx.moveTo(-60, -20);
      ctx.quadraticCurveTo(-75, -60, -50, -85);
      ctx.quadraticCurveTo(-20, -115, 20, -112);
      ctx.quadraticCurveTo(65, -95, 68, -45);
      ctx.quadraticCurveTo(72, -10, 60, 15);
      ctx.quadraticCurveTo(55, -20, 48, -40);
      ctx.quadraticCurveTo(0, -60, -50, -30);
      ctx.closePath();
      ctx.fill();

      // Front stylized fringe & hair tufts (moves slightly when styling hair)
      const tuftOffset = hairTouch * 8;
      ctx.beginPath();
      ctx.moveTo(-54, -40);
      ctx.quadraticCurveTo(-40, -65 + tuftOffset, -25, -35 + tuftOffset);
      ctx.quadraticCurveTo(-10, -75, 5, -38);
      ctx.quadraticCurveTo(25, -70 - tuftOffset, 42, -32 - tuftOffset);
      ctx.quadraticCurveTo(58, -50, 52, -20);
      ctx.quadraticCurveTo(20, -45, -54, -40);
      ctx.closePath();
      ctx.fill();

      // Hair highlights (Warm & Emerald rim shine)
      ctx.strokeStyle = 'rgba(255, 200, 160, 0.45)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-35, -90);
      ctx.quadraticCurveTo(-5, -105, 30, -95);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(0, 245, 160, 0.4)'; // Emerald ambient rim light
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(35, -92);
      ctx.quadraticCurveTo(62, -75, 65, -35);
      ctx.stroke();

      ctx.restore(); // end Head transform

      // -------------------------------------------------------------
      // 10. Hand & Arm Fixing Hair Animation (When active)
      // -------------------------------------------------------------
      if (armRaise > 0) {
        ctx.save();
        // Dynamic hand positioning raising to right temple/hair
        const handRestX = cx + 70;
        const handRestY = cy + 240;
        const handTargetX = cx + 45 + lookX * 10;
        const handTargetY = cy - 25 + lookY * 6;

        // Current hand position along curve
        const handX = handRestX + (handTargetX - handRestX) * armRaise;
        const handY = handRestY + (handTargetY - handRestY) * armRaise;

        // Elbow joint position
        const elbowX = cx + 110 + armRaise * 35;
        const elbowY = cy + 120 + armRaise * 10;

        // Draw Bicep & Forearm
        ctx.strokeStyle = '#F3D2B8';
        ctx.lineWidth = 26;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(cx + 60, cy + 90); // shoulder
        ctx.lineTo(elbowX, elbowY); // elbow
        ctx.lineTo(handX, handY); // wrist
        ctx.stroke();

        // Forearm shadow/tone
        ctx.strokeStyle = '#E8BD9F';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(elbowX, elbowY);
        ctx.lineTo(handX, handY);
        ctx.stroke();

        // Hand & Fingers running through hair
        ctx.fillStyle = '#F3D2B8';
        ctx.beginPath();
        ctx.arc(handX, handY, 16, 0, Math.PI * 2);
        ctx.fill();

        // Fingers brushing hair
        ctx.fillStyle = '#E8BD9F';
        for (let i = -1; i <= 2; i++) {
          ctx.beginPath();
          ctx.ellipse(handX - 6 + i * 5, handY - 12 - Math.abs(i) * 2, 4, 10, -0.25, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      ctx.restore();
    }

    animate() {
      this.update();
      this.draw();
      requestAnimationFrame(this.animate);
    }
  }

  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    window.interactiveCharacter = new InteractiveCharacter('character-canvas');
  });

})();

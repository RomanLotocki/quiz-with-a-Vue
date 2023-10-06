<template></template>

<script setup>
import confetti from 'canvas-confetti';

var scalar = 3;
var unicorn = confetti.shapeFromText({ text: '😭', scalar });

var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var skew = 8;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: [unicorn],
    gravity: randomInRange(0.4, 0.6),
    flat: true,
    scalar: [scalar],
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());
</script>
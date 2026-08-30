// Fallback markup for SparkBadge.
//
// The original component this was adapted from loads its animation via
// `sourceUrl` pointing at a hosted iframe. That asset wasn't available here,
// so this is a self-contained replacement with the same rendering contract
// (a tiny animated "signal" badge drawn on canvas, sandboxed in an iframe).
// Swap this file's export for the original markup at any time — the
// SparkBadge component itself doesn't need to change.
export const SPARK_BADGE_MARKUP = /* html */ `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body {
        width: 100%; height: 100%;
        background: transparent;
        overflow: hidden;
        font-family: ui-monospace, "IBM Plex Mono", monospace;
      }
      #stage { position: relative; width: 100%; height: 100%; }
      canvas { position: absolute; inset: 0; display: block; }
      .label {
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        text-align: center;
        pointer-events: none;
      }
      .dot {
        width: 7px; height: 7px; border-radius: 50%;
        background: #ffb454;
        box-shadow: 0 0 12px 2px rgba(255,180,84,0.75);
        animation: pulse 1.8s ease-in-out infinite;
      }
      .tag {
        font-size: 11px;
        letter-spacing: 0.12em;
        color: #e8ecef;
        opacity: 0.9;
      }
      .sub {
        font-size: 9px;
        letter-spacing: 0.18em;
        color: #5eead4;
        opacity: 0.85;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.35; transform: scale(0.75); }
      }
    </style>
  </head>
  <body>
    <div id="stage">
      <canvas id="c"></canvas>
      <div class="label">
        <div class="dot"></div>
        <div class="tag">MAHINDRA.SYS</div>
        <div class="sub">BUILDING</div>
      </div>
    </div>
    <script>
      var canvas = document.getElementById('c');
      var ctx = canvas.getContext('2d');
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var W = 0, H = 0;
      var cols = [];
      var colors = ['#ffb454', '#5eead4'];

      function resize() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        var spacing = 14;
        var count = Math.max(6, Math.floor(W / spacing));
        cols = new Array(count).fill(0).map(function (_, i) {
          return {
            x: i * spacing + spacing / 2,
            y: Math.random() * H - H,
            speed: 0.4 + Math.random() * 0.9,
            len: 20 + Math.random() * 40,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 0.15 + Math.random() * 0.35,
          };
        });
      }

      var raf;
      function tick() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 0; i < cols.length; i++) {
          var c = cols[i];
          c.y += c.speed;
          if (c.y > H + c.len) {
            c.y = -c.len;
            c.speed = 0.4 + Math.random() * 0.9;
            c.color = colors[Math.floor(Math.random() * colors.length)];
          }
          var grad = ctx.createLinearGradient(c.x, c.y - c.len, c.x, c.y);
          grad.addColorStop(0, 'rgba(0,0,0,0)');
          grad.addColorStop(1, c.color);
          ctx.strokeStyle = grad;
          ctx.globalAlpha = c.alpha;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(c.x, c.y - c.len);
          ctx.lineTo(c.x, c.y);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(tick);
      }

      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      resize();
      window.addEventListener('resize', resize);
      if (!reduceMotion) {
        tick();
      } else {
        ctx.clearRect(0, 0, W, H);
      }
      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden' && raf) {
          cancelAnimationFrame(raf);
        } else if (document.visibilityState === 'visible' && !reduceMotion) {
          tick();
        }
      });
    </script>
  </body>
</html>
`;

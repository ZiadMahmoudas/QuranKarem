        // Starfield Logic
        const canvas = document.getElementById('stars');
        const ctx = canvas.getContext('2d');
        let stars = [];

        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < 150; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5,
                    opacity: Math.random(),
                    speed: 0.002 + Math.random() * 0.005
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(s => {
                s.opacity += s.speed;
                if (s.opacity > 1 || s.opacity < 0) s.speed *= -1;
                ctx.fillStyle = `rgba(232, 204, 122, ${Math.abs(s.opacity)})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', init);
        init();
        animate();

        // Smooth Exit
        document.getElementById('enterBtn').addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            document.body.classList.add('exit-active');
            setTimeout(() => {
                window.location.href = target;
            }, 600);
        });
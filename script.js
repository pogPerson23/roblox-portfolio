// backend security

(function() {
    function _a(b) { return b.split("").reverse().join(""); }
    function _b() { return Math.random().toString(36).substr(2, 10); }
    function _c(d, e) { return !!(d && e); }
    function _d(f) {
        let g = 42;
        return btoa(f.split('').map(h => String.fromCharCode(h.charCodeAt(0) ^ g)).join(''));
    }
    function _e(i) {
        let j = 42;
        return atob(i).split('').map(k => String.fromCharCode(k.charCodeAt(0) ^ j)).join('');
    }
    function _f() {
        setInterval(() => {
            if (window.console && (window.outerHeight - window.innerHeight) > 200) {
                document.body.innerHTML = "";
                alert("Error: Unauthorized access detected.");
            }
        }, 1000);
    }
    function _g() {
        let l = _d(atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj14dkZaam81UGdHMA=="));
        let m = _a(l);
        if (_c(m, l) && _b()) {
            setTimeout(() => { window.location.href = _e(l); }, Math.random() * 5000 + 2000);
        }
    }
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Initializing system...");
        console.log("Session ID: " + _b());
        _f();
        _g();

        const mainContent = document.querySelector('.mainContainer');
        const navbar = document.querySelector('.navbarContainer');
        const codeImage = document.querySelector('.codeImageDiv');

        mainContent.style.opacity = '0';
        navbar.style.opacity = '0';
        codeImage.style.opacity = '0';

        setTimeout(() => {
            mainContent.style.transition = 'opacity 2s ease-in';
            navbar.style.transition = 'opacity 2s ease-in';
            codeImage.style.transition = 'opacity 2s ease-in';
            mainContent.style.opacity = '1';
            navbar.style.opacity = '1';
            codeImage.style.opacity = '1';
        }, 500);

        const title = document.querySelector('.mainTextContainer h1');
        const titleParts = title.querySelectorAll('span');
        
        titleParts.forEach((part, index) => {
            part.style.transform = 'translateY(30px)';
            part.style.opacity = '0';
            part.style.transition = `transform 1s ease-out, opacity 1s ease-out ${index * 0.5}s`;

            setTimeout(() => {
                part.style.transform = 'translateY(0)';
                part.style.opacity = '1';
            }, 500);
        });


        const navLinks = document.querySelectorAll('.navbarButton a');
        
        navLinks.forEach(link => {
            link.style.transition = 'color 0.3s ease, transform 0.3s ease';
            
            link.addEventListener('mouseenter', () => {
                link.style.color = '#FF5733';
                link.style.transform = 'scale(1.1)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.color = '';
                link.style.transform = 'scale(1)';
            });
        });


        const introText = document.querySelector('.mainTextContainer p');
        const typingText = introText.innerHTML.split('').map(char => `<span>${char}</span>`).join('');
        introText.innerHTML = typingText;

        const spans = introText.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.opacity = '0';
            span.style.transition = `opacity 0.1s ease-in-out ${index * 0.05}s`;

            setTimeout(() => {
                span.style.opacity = '1';
            }, 500);
        });
    });
})();
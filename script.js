document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // --- Efekt Przewijania Paska Nawigacji ---
    const topBar = document.querySelector('.top-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    });

    // Obsługa Formularza Kontaktowego
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Wysyłanie...';
            btn.disabled = true;

            // Używamy FormSubmit (zmień email na właściwy dla Krzysztofa)
            fetch("https://formsubmit.co/ajax/krzysztofszczesny79@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    imie: contactForm.querySelector('[name="imie"]').value,
                    telefon: contactForm.querySelector('[name="telefon"]').value,
                    email: contactForm.querySelector('[name="email"]').value,
                    wiadomosc: contactForm.querySelector('[name="wiadomosc"]').value,
                    _subject: "--> Nowe zapytanie ze strony Krzysztof Szczęsny <---",
                    _autoresponse: "Dziękujemy za wiadomość! Wkrótce się skontaktujemy.",
                })
            })
            .then(response => response.json())
            .then(data => {
                contactForm.innerHTML = `<div class="form-success"><h3>Dzięki!</h3><p>Wiadomość wysłana. Oddzwonię wkrótce.</p></div>`;
            })
            .catch(error => {
                console.error('Error:', error);
                btn.innerText = "Błąd. Spróbuj telefonicznie.";
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 3000);
            });
        });
    }

    // --- PWA: Obsługa Instalacji ---
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW Error:', err));
    }

    let deferredPrompt;
    const installBtn = document.getElementById('install-btn');
    const isAppInstalled = () =>
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true;

    if (installBtn && isAppInstalled()) {
        installBtn.style.display = 'none';
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn && !isAppInstalled()) installBtn.style.display = 'inline-block';
    });

    window.addEventListener('appinstalled', () => {
        if (installBtn) installBtn.style.display = 'none';
    });

    if (installBtn) {
        installBtn.addEventListener('click', () => {
            if (installBtn) installBtn.style.display = 'none';
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(() => {
                    deferredPrompt = null;
                });
            }
        });
    }

    // --- Udostępnianie ---
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const shareData = {
                title: 'Ogrodnictwo, malowanie, hydraulika – Krzysztof Szczęsny',
                text: 'Ogrodnictwo, usługi malarskie i drobne prace hydrauliczne. Szybko, solidnie, terminowo.',
                url: window.location.href
            };

            try {
                if (navigator.share) {
                    await navigator.share(shareData);
                } else if (navigator.clipboard) {
                    await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
                    shareBtn.innerText = 'Skopiowano link';
                    setTimeout(() => (shareBtn.innerText = 'Udostępnij'), 2000);
                }
            } catch (err) {
                console.error('Share error:', err);
            }
        });
    }
});

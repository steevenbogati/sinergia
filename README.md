# SINERGIA MED — Sitio web

Sitio web oficial de **SINERGIA MED · Medical Biohacking Center**, en Ambato — Ecuador.

Medicina, ciencia y tecnología de vanguardia para recuperación y bienestar:
cámara hiperbárica, criogenia, láser infrarrojo de alta intensidad, fisioterapia
avanzada y especialidades médicas.

## Tecnología

Sitio **100 % estático** (HTML + CSS + JavaScript *vanilla*). Sin frameworks,
sin build, sin backend. La única dependencia externa es **Google Fonts (Archivo)**.

## Cómo verlo en local

No necesita instalación. Basta con abrir `index.html`, o levantar un servidor
estático para que los enlaces entre páginas funcionen bien:

```bash
python3 -m http.server 8123
# luego abre http://localhost:8123
```

## Publicar con GitHub Pages

1. En GitHub: **Settings → Pages**.
2. En *Source*, elige la rama `main` y la carpeta `/ (root)`.
3. Guarda. En unos minutos el sitio estará disponible en
   `https://steevenbogati.github.io/sinergia/`.

## Estructura

```
.
├── index.html                  # Inicio
├── servicios.html              # Servicios (especializaciones, lesiones…)
├── tecnologia.html             # Tecnología (hiperbárica, criogenia, láser…)
├── quienes-somos.html          # Quiénes Somos (misión, visión, equipo)
├── contacto.html               # Contacto + mapa
├── blog.html                   # Blog
├── articulo-*.html             # 6 artículos del blog
├── columna/rodilla/…​.html      # Páginas por zona del cuerpo
├── lesiones-*.html             # Páginas por tipo de lesión
├── css/                        # Estilos (main, header, hero, sections, article…)
├── js/                         # layout.js, header.js, carousel.js, anim.js…
└── assets/
    ├── img/                    # Fotos del centro y de apoyo
    └── logos/                  # Logotipos y favicon
```

## Editar datos de contacto

El header, el footer y los elementos flotantes se inyectan desde **`js/layout.js`**.
Los datos de contacto están como constantes al inicio de ese archivo —cámbialos
una sola vez y se actualizan en todo el sitio:

```js
var WA_LINK   = 'https://wa.me/593984229440';                 // WhatsApp
var IG_LINK   = 'https://www.instagram.com/sinergia_med/';    // Instagram
var MAPS_LINK = 'https://maps.app.goo.gl/xpyZshiGyJ34z3Dy6';  // Ubicación
```

## Pendientes

- Enlaces reales de Facebook, TikTok y YouTube (hoy `href="#"`).
- Correo electrónico y horario de atención (hoy "Próximamente").
- Fotos definitivas de la cámara de criogenia (se usan imágenes de apoyo).

# Three.js

Repósitorio utilizado para salvar conteudos de estudo de three.js de Lucas Alixame

- Curso referencia:
https://www.udemy.com/share/104Wpa3@nHhnORUg3kzje96Lwq3s5OkZqt6SQt1pzjL3QewcT1pCcU-iZW5jDnEPeCPHnbuM/

## Concepts

---
---

- https://www.jsdelivr.com
- [Plano Cartesiano](https://docs.google.com/spreadsheets/d/1rxc3mpa22nT8J67FZjEXhGRrqJppAzVg4BV3KqowUWU/)
- [Slides](https://docs.google.com/presentation/d/1XYO1D7vJT-SoUxlKMV0i-s0u2eEfA27j6zP3-gFaLDQ/)

> _`F12` `CTRL + Shift + I` Developer tools (Ferramentas para desenvolvedores)_

# Template

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style type="text/css">
      html, body {
        background-color: #171717;
        margin: 0; padding: 0;
      }

      #scene {
        position: fixed;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
      }
    </style>

    <title>Three.js Course</title>
  </head>
  <body>
    <div id="scene"></div>
  </body>
</html>
```

# Three.js

> Version r126

> https://threejs.org

```html
<script src="https://cdn.jsdelivr.net/npm/three@0.126.1/build/three.min.js" integrity="sha256-RhW9lLg3YYVh/c3z+9Q8cUD5GFShsH1f7mR0lvCROpk=" crossorigin="anonymous"></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/three@0.126.1/examples/js/controls/OrbitControls.js" integrity="sha256-+ncCNttOcMopCUa47Sn26Tg06ZC2SnWoi/XikKAhnSY=" crossorigin="anonymous"></script>
```

# Three.js x3 Debugger

> Version 0.0.10

> https://www.jsdelivr.com/package/npm/three-x3

```html
<script src="https://cdn.jsdelivr.net/npm/three-x3@0.0.10/dist/x3-standalone.js" integrity="sha256-oKQUM+QPtvuvLmxpqxdxbrJAq21SZ+7hYK8WlGztXNE=" crossorigin="anonymous"></script>
```

# Resources

- https://3dtextures.me/
- https://threejs.org
- https://threejs.org/docs/
- https://threejs.org/docs/#api/en/constants/Renderer

# Textures

### polyester
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/occlusion.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/roughness.jpg

### wood
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/basecolor.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/normal.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/occlusion.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/roughness.jpg

### metal
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/emissive.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/occlusion.jpg
- https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg


# Local Images

```sh
npm install http-server -g
http-server -p 3000 --cors
```
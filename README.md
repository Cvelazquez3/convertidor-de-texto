# Convertidor de texto

Pequeña herramienta web para convertir y exportar texto a varios formatos: PDF, DOCX, RTF y TXT.

## Qué hace
- Permite escribir o pegar texto en una caja y exportarlo a varios formatos.
- Genera los archivos en el cliente y los descarga al dispositivo.

## Partes importantes
- `index.html`: interfaz de usuario — botones de exportación y el `textarea` donde se ingresa el texto.
- `style.css`: estilos y diseño (tema moderno y responsivo).
- `index.js`: lógica de la app: obtiene el texto, valida y genera/descarga archivos.
	- Usa `jspdf` para PDF.
	- Usa `docx` para DOCX.
	- Usa `FileSaver.js` para guardar blobs como archivos.

## Dependencias externas
Se cargan desde CDN en `index.html`:
- `jspdf` (generación de PDF)
- `docx` (generación de DOCX)
- `FileSaver.js` (descarga de blobs)

## Cómo ejecutar (prueba rápida)
1. Desde la carpeta del proyecto, ejecutar:

```bash
python -m http.server 8000
# Abrir http://localhost:8000 en el navegador
```

2. También puedes abrir `index.html` directamente en el navegador.

## Uso
1. Escribe o pega texto en la caja.
2. Haz clic en el botón del formato deseado (PDF, DOCX, RTF, TXT).
3. Si se solicita, ingresa un nombre de archivo; el archivo se descargará automáticamente.

## Sugerencias para mejorar
- Añadir opciones de formato (fuente, tamaño, márgenes para PDF).
- Añadir tests o verificación de compatibilidad de navegadores.

## Solución de problemas
- Si la descarga falla, revisa la consola del navegador (F12) para errores.
- Si hay restricciones por archivos locales, sirve el proyecto con `python -m http.server`.

---
Si quieres, adapto el README: añadir licencia, badges, o una sección de contribución.

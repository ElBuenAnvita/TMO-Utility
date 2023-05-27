# TMO-Utility
[Read in English](README.md) | [Legi en Esperanto](README_eo.md)

Extensión de Chrome para redirigir automáticamente los enlaces de dominios externos de TuMangaOnline al visor principal de [lectortmo.com](https://lectortmo.com)

## En pocas palabras
El script se aplica si la URL página cumple con el formato `https://(cualquier dominio)/news/(HexID)/<cascade|paginated> ...`

Si cumple con el formato y la expresión regular coincide con el `HexID`, la ubicación de la ventana será
redirigido a `https://lectortmo.com/viewer/(HexID)/<configuración actual...>`

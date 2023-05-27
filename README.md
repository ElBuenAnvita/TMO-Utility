# TMO-Utility
[Leer en Español](README_es.md) | [Legi en Esperanto](README_eo.md)

Chrome extension to automatically redirect TuMangaOnline external domain links to the main [lectortmo.com](https://lectortmo.com) viewer  

## In a nutshell
The script is applied if the URL page meets with the format `https://(any domain)/news/(HexID)/<cascade|paginated> ...`

If meets with the format, and the regex matches the `HexID`, the window location will be
redirected to `https://lectortmo.com/viewer/(HexID)/<current configuration ...>`

# session-location

Pod polem pro zadání promptu zobrazí stavový řádek, podle kterého na první pohled poznáš, kde session běží:

- **☁️ Cloudová session** – session běží v cloudovém kontejneru,
- **💻 Lokální session** – session běží na tvém počítači.

Na Windows a macOS je session vždy lokální. Na Linuxu plugin rozhoduje podle proměnné prostředí `CLAUDE_CODE_REMOTE=true`, kterou mají nastavenou cloudové session.

## Instalace

Viz README v kořeni repozitáře.

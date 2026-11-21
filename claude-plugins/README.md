# claude-plugins

Marketplace pluginů pro Claude Code a Claude Desktop (jk-htk).

## Pluginy

| Plugin | Popis |
|---|---|
| [`session-location`](plugins/session-location) | Pod polem pro prompt ukáže, jestli session běží v cloudu, nebo lokálně. |

## Instalace

**Claude Desktop:** tlačítko **+** vedle pole pro prompt → **Plugins** → **Add marketplace** → `jk-htk/claude-plugins` → **Add plugin** → `session-location`.

**Claude Code v terminálu:**

```
/plugin install session-location --marketplace jk-htk/claude-plugins
```

**Z příkazové řádky:**

```
claude plugin install session-location --marketplace jk-htk/claude-plugins
```

U privátního repozitáře musí mít počítač, na který se instaluje, uložené přihlášení Gitu ke GitHubu (např. `gh auth login` a potom `gh auth setup-git`).

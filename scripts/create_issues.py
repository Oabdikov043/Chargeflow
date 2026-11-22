#!/usr/bin/env python3
"""Create ChargeFlow GitHub Issues from issues.csv (requires GitHub CLI and authentication)."""
import argparse, csv, json, subprocess
from pathlib import Path
p=argparse.ArgumentParser()
p.add_argument('repo', help='OWNER/chargeflow')
p.add_argument('--apply', action='store_true', help='Actually create GitHub issues; default is dry-run')
a=p.parse_args()
rows=list(csv.DictReader((Path(__file__).resolve().parent.parent/'issues.csv').open(encoding='utf-8')))
if a.apply:
    command=['gh','issue','list','--repo',a.repo,'--state','all','--limit','300','--json','title']
    current=subprocess.run(command,check=True,capture_output=True,text=True)
    existing={i['title'] for i in json.loads(current.stdout)}
else: existing=set()
for r in rows:
    title=f"CF-{r['id']} · {r['title']}"
    body=(f"**Отговорник (за реално присвояване):** {r['owner']}\n\n"
          f"**Срок:** {r['due']}\n**Фаза:** {r['phase']}\n"
          f"**Приоритет:** {r['priority']}\n**Зависимости:** {r['dependencies']}\n\n"
          f"### Критерии за приемане\n{r['acceptance']}\n\n"
          f"### Проверки и реализация\n- [ ] Реализирано\n- [ ] Тествано\n- [ ] PR прегледан\n- [ ] Документацията е актуална\n")
    if title in existing: print('SKIP',title); continue
    print('CREATE' if a.apply else 'DRY RUN',title)
    if a.apply:
        subprocess.run(['gh','issue','create','--repo',a.repo,'--title',title,'--body',body],check=True)

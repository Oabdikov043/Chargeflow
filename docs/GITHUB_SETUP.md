# Настройка на GitHub за ChargeFlow

## 1. Създаване на хранилището

В GitHub: **New repository → Name: `chargeflow` → Private → Create repository**. Ако качвате готовия starter пакет, не добавяйте README на този етап, за да избегнете излишни конфликти при първия push.

## 2. Първоначално качване (от терминал)

Разархивирайте пакета, влезте в папката му и изпълнете:

```bash
git init
git branch -M main
git add .
git commit -m "chore: initial ChargeFlow repository with architecture and task plan"
git remote add origin https://github.com/OWNER/chargeflow.git
git push -u origin main
```

Сменете `OWNER` с GitHub потребителското име или организацията на екипа. За HTTPS push ще е необходим работещ GitHub login/PAT, а не GitHub паролата.

## 3. Колаборатори и проект

**Settings → Collaborators**: добавете останалите четирима. В **Projects → New project** създайте Board с колони Todo, In Progress, In Review, Done. След това свържете Issues.

## 4. Създаване на Issues

Ръчно: отворете `issues.csv` и създайте Issue за всеки ред.

Автоматично (ако GitHub CLI вече е инсталиран):

```bash
gh auth login
python3 scripts/create_issues.py OWNER/chargeflow
python3 scripts/create_issues.py OWNER/chargeflow --apply
```

Първата команда само показва какво ще се създаде (dry run). Втората създава липсващите задачи. Скриптът избягва дублиране по точно заглавие. **Не задава GitHub assignee**, защото имената `Студент 1–5` трябва да се заменят с реалните GitHub профили.

## 5. Branch и PR дисциплина

- `feature/requests-validation`, `feature/power-planner`, `feature/ocpp-gateway`, ...
- Работата по всяка задача започва с Issue, а Pull Request-ът го споменава: `Closes #12`.
- Задължително минимум един ревюиращ колега преди merge.
- За всеки Issue запишете описание, срок, критерии за приемане, реални commits и PR.
- В `main` се поддържа работеща версия. Няма директни commits към `main`, освен началния.

**Срок днес – 22.11.2026:** публикуван репозитори, качени двата Word документа и активен GitHub Project/Issues.

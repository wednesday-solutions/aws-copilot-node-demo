# Devops Jest Github Actions

---

<div>
<img src='./badges/badge-statements.svg' height="20"/>
<img src='./badges/badge-branches.svg' height="20"/>
</div>
<div>
<img src='./badges/badge-lines.svg'  height="20"/>
<img src='./badges/badge-functions.svg' height="20"/>
</div>

---

## Jest coverage reports and github annotations

- [.github/workflows/repo-health.yml](.github/workflows/repo-health.yml#L36)

## Sonarcloud

- [.github/workflows/repo-health.yml](.github/workflows/repo-health.yml#L21)

## Back Merge

- [.github/workflows/back-merge-from-main.yml](.github/workflows/back-merge-from-main.yml#L17)
- [.github/workflows/back-merge-from-qa.yml](.github/workflows/back-merge-from-qa.yml#L15)

## Badge creation

- [.github/workflows/jest-badges.yml](.github/workflows/jest-badges.yml#L22)

## Usage

### Create infrastructure

```
./scripts/setup-ecs.sh demo qa
```

Make sure that the manifest.yml has http.path: '/'

```
http:
  # Requests to this path will be forwarded to your service.
  # To match all requests you can use the "/" path.
  path: '/'
  # You can specify a custom health check path. The default is "/".
  # healthcheck: '/'
```

### Update infrastructure

```
./scripts/update-ecs.sh demo qa
```

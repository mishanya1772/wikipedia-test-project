# wikipedia-test-project

## Getting started

To make it easy for you to get started with the project, here's a basic info and list of recommended next steps.

### Folder structure <a id="structure"></a>

Structure:

```
wikipedia-test-project
├── components
│   └── Input.ts
├── helpers
│   └── context.helper.ts
│   └── users.json
│   └── users.tmpl.json
├── pageObjects
│   └── ArticlePage.ts
│   └── BaseBage.ts
│   └── LoginPage.ts
├── tests
│   └── article.page.spec.ts
│   └── login.page.spec.ts
│   └── main.page.spec.ts
├── README.md
├── playwright.config.ts
├── package.json
├── package-lock.json
```

## Dependencies
* NPM (v8+) and Node.js (v18+) are installed on your machine

## Set up locally

1. Copy `helpers/users.tmpl.json` => `helpers/users.json`
2. Add test users to the new json
3. Prepare `husky` for correct local usage with next command `npm run prepare`
4. Run tests with `npm run tests` or using a Playwright debug tool `npm run tests:debug`


### Useful links:

- [ ] [Get started with Paywright](https://playwright.dev/)
***

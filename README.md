## Migration Generation Bug

1. `npm install`
2. Start Postgres with `npm run start:postgres`
3. Build project with `npm run build`
4. Run migrations with `typeorm migration:run`
5. Run `typeorm migration:show` to verify the migrations were run
6. Edit `./src/schemas/MyExample.ts` and uncomment all code that is currently commented
7. Build project with `npm run build`
8. Run `typeorm migration:generate -n Step2`
9. Typeorm will output: `No changes in database schema were found - cannot generate a migration. To create a new empty migration use "typeorm migration:create" command`

## Versions Affected

```
typeorm version
Local installed version: 0.2.37
No global installed was found.

node --version
v14.17.0

tsc --version
Version 4.3.5
```

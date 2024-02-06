# City At Api Services
Nestjs,TypeOrm,Postgress,JWT,Marvel Api

Entity Store Repo Link: https://github.com/dhananjaysr26/city-at-entities


## Installation
1.Clone Repo
```
 git clone https://github.com/dhananjaysr26/city-at-api-services.git
```
2. get Updated entity store
```
git submodule update --init
``` 
```
 git submodule foreach git pull origin main
```
3. install dependency
```
npm install 
```

4. Create .dev.env
```

 PORT=4000

POSTGRES_HOST="localhost"
POSTGRES_PORT=5432
POSTGRES_USERNAME=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE="cityat"

MARVEL_API_PUBLIC_KEY=480049b162807ca745d90ea8b71c110f
MARVEL_API_HASH=67ad55c4b18df27a4d35d3ec367c6be3
MARVEL_API_BASE_URL=https://gateway.marvel.com/v1/public

JWT_SECRET="city12345at67890"
```
5. Create postgress DB with name cityat
6. Build Api services
```bash
npm run build
```
7. Goto Entity Store and Run the migration for Table Creation && Create .dev.env here as well
   ```bash
PORT=3010

POSTGRES_HOST="localhost"
POSTGRES_PORT=5432
POSTGRES_USERNAME=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE="cityat"
```
```bash
cd src/entity-store && npm i
```
```bash
npm run build
```
```bash
npm run migration:run
```
## 🔥 Usefull Commands 🔥
```bash
git submodule add https://github.com/dhananjaysr26/city-at-entities.git ./src/entity-store
```
```bash
git submodule foreach git pull origin main
```
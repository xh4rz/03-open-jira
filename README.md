# Next.js OpenJira App
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```

* El -d, significa __detached__

* MongoDB URL Local:
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

* Reconstruir los módulos de node y levantar Next
```
npm install
npm run dev
```

## Llenar la base de datos con información de pruebas

Lllamar a:
```
http://localhost:3000/api/seed
```
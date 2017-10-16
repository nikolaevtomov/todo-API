## Todo API

## Getting Started

```bash
npm install
npm run dev
```

```bash
http://localhost:8001
```

## API endpoints

#### Gets a list of all todos
```bash
GET /api/todo
```
#### Gets a specific todo
```bash
GET /api/todo/{id}
```
#### Creates a new todo
```bash
POST /api/todo
```
#### Updates a specific todo
```bash
PUT /api/todo/{id}
```
#### Object Sample
```bash
{
    "id": 0,
    "date": "2015-05-12T13:40:00.000Z",
    "description": "React JS",
    "completed": true
}
```

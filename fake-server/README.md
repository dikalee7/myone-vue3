# json-server start

## Project setup

```
npm install -g json-server
```

### Create a db.json file with some data

```
{
  "somedata": [
      {
          "id": 1,
          "title": "데이터1",
          "body": "내용1"
      },
      {
          "id": 2,
          "title": "데이터2",
          "body": "내용2"
      }
  ]
}
```

### Start JSON Server

```
json-server --watch db.json --port 3001
```

### Using

```
GET
http://localhost:3001/somedata
http://localhost:3001/somedata?_sort=id&_order=DESC
http://localhost:3001/somedata?_sort=id&_order=ASC
http://localhost:3001/somedata?id_gte=10
http://localhost:3001/somedata?id_lte=10
http://localhost:3001/somedata?id_ne=10
http://localhost:3001/somedata?_limit=20

POST
http://localhost:3001/somedata

    {
        "id": 3,
        "title": "데이터3",
        "body": "내용3"
    }

DELETE
http://localhost:3001/somedata/10

PUT
http://localhost:3001/somedata/1
{
    "title": "데이터1 수정",
    "body": "내용1 수정"
}
```

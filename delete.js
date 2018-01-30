const CiscoSpark = require(`ciscospark`);

const spark = CiscoSpark.init({
  credentials: {
    access_token: 'OTExMDFiNWYtMWM4YS00ZmFiLWE0ZmQtOTZhN2Y3NDljMjFkNDYwYmI2N2ItNjk4'
  }
});

var fuck = [
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svNTI4ZTUwZDktNDRiYi00MDhhLWE1MzYtYmRhZTZiMTAzMTIx",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T02:59:30.042Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svNThmODczOTgtOTliMC00ODYyLTkwYTAtNWMxYzQ1YTMzOTll",
            "name": "messageHook",
            "targetUrl": "http://2445e165.ngrok.io",
            "resource": "messages",
            "event": "created",
            "filter": "roomId=Y2lzY29zcGFyazovL3VzL1JPT00vN2E5YzQ3NzAtMDBhYi0xMWU4LTgyODMtZTM1MzI4Y2EwOTM0",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0NmZmM4ZWZkY2E3NmJiZWY2MmQ0ZGQ2YWNlYjc4ZTkzODgzNTMxMTRhNGI5OTg4NmFmMWYyYzM5MmNkNmE3N2M2",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-24T02:08:35.095Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svOTZmM2FhMDAtOTNhZS00YzUyLWJjMjYtZWE5YWJhODkwN2Q2",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T03:22:39.243Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svYTJmNmJhMmQtODJiNS00ZDJjLWI0MjQtMzNkMGJjMTBmMTQ1",
            "name": "messageHook",
            "targetUrl": "http://2445e165.ngrok.io",
            "resource": "messages",
            "event": "created",
            "filter": "roomId=Y2lzY29zcGFyazovL3VzL1JPT00vYjA4MjdmMzAtMDBhYi0xMWU4LWJmMTItMzdlOWUzZDAzMGI2",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0NmZmM4ZWZkY2E3NmJiZWY2MmQ0ZGQ2YWNlYjc4ZTkzODgzNTMxMTRhNGI5OTg4NmFmMWYyYzM5MmNkNmE3N2M2",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-24T02:10:07.841Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svYWExZGU3MzQtODA5ZS00MTQwLWJmMzctYWU0N2QxMDU4NzYw",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T03:20:17.579Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svYWU5MmYyYWUtMjExYy00MjVlLTg2NjctNjFlYjQ3ZmVkZTc3",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T03:02:27.752Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svYmI2ZTc5MGYtYmQ4NC00NjFmLWIzNWUtYTcxYmJiYTYxNGUy",
            "name": "messageHook",
            "targetUrl": "http://27.32.148.129:3001",
            "resource": "messages",
            "event": "created",
            "filter": "roomId=Y2lzY29zcGFyazovL3VzL1JPT00vNjMxM2ZjNjAtMDE5MS0xMWU4LWI0NDYtZmYwYTRjNTM2ZTgy",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0NiMmExNDMzMTUwN2U5YWQ2NGQ0NDI3ODcxMjAyMmJkNzViYTYxMmQ5NDlmNzFjNzRjNzFhNzhjNGYxOTYwODll",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-25T05:34:20.525Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svYzMwN2EwNmYtZmRiMC00NmU2LThmNmUtZmZlODk3MjcyNjkx",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T03:08:00.202Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svYzU3Zjk2NmItNzc2Yi00ZDM0LTgyNDEtNGZiODNlN2I1OWFl",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T02:51:48.010Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svZDI2MzdiZWItY2YxNi00ZWIzLTgwNWMtZGQ5NzY4ZmU5NWFk",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T01:28:49.977Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svZGI1OTY4ZTUtZjVhMi00MGViLWJiY2QtNWJlYTQxNjkwYTky",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T02:49:49.140Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svZTczYzU2NDAtOTNiYy00OTY0LWFmM2QtZDE0YzBhMzFlYjRh",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T02:55:35.101Z"
        },
        {
            "id": "Y2lzY29zcGFyazovL3VzL1dFQkhPT0svZjU4ZTExNDYtNzY0MS00M2Q3LTk0YzItMzdkZDk1MzU4YmQ5",
            "name": "Test Webhook",
            "targetUrl": "https://2608e18f.ngrok.io",
            "resource": "messages",
            "event": "created",
            "orgId": "Y2lzY29zcGFyazovL3VzL09SR0FOSVpBVElPTi82ZjYzMWM3Yi0wNGU1LTRkZmUtYjM1OS00N2Q1ZmE5ZjQ4Mzc",
            "createdBy": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS83NWViMzVkNy03Y2U1LTQzZDItYmE1ZC04ZGU5NjY2MmU3MDU",
            "appId": "Y2lzY29zcGFyazovL3VzL0FQUExJQ0FUSU9OL0MyNzljYjMwYzAyOTE4MGJiNGJkYWViYjA2MWI3OTY1Y2RhMzliNjAyOTdjODUwM2YyNjZhYmY2NmM5OTllYzFm",
            "ownedBy": "creator",
            "status": "active",
            "created": "2018-01-30T02:50:41.174Z"
        }
    ]

for (i = 0; i < fuck.length; i++) {
  var item = fuck[i];
  console.log(item.id);
  spark.webhooks.remove(item.id);
}

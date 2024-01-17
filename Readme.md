## This is the pushti-location microservice

#### base url: https://pushti-locationms.onrender.com

#### Get Division List

| API Endpoint              | HTTP Method |
| ------------------------- | :---------: |
| [https://pushti-locationms.onrender.com/division]()                |   `GET`     |

>### Request
>
>#### Request Body
>
>```json
>{
>
>}
>```
>
<br>

>### Response
>
>#### Response Code: 200 (`OK`)
>
>#### Response Body
>
>```json
>{
>   [
>       {
>           "id": "1",
>           "name": "DHAKA"
>       },
>       {
>           "id": "2",
>           "name": "BARISHAL"
>       },
>   ]
>}
>```
>


#### Get District List for a Division

| API Endpoint              | HTTP Method |
| ------------------------- | :---------: |
| [https://pushti-locationms.onrender.com/district]()                |   `POST`     |


>### Request
>
>#### Request Body
>
>```json
>{
>    "division": 1
>}
>```
>
<br>

>### Response
>
>#### Response Code: 200 (`OK`)
>
>#### Response Body
>
>```json
>{
>     [
>         {
>             "id": "1",
>             "name": "NARSINGDI"
>         },
>         {
>             "id": "2",
>             "name": "GAZIPUR"
>         },
>    ]
>}
>```
>

#### Get Upazilla List for a District

| API Endpoint              | HTTP Method |
| ------------------------- | :---------: |
| [https://pushti-locationms.onrender.com/upazilla]()                |   `POST`     |

>### Request
>
>#### Request Body
>
>```json
>{
>    "district": 2
>}
>```
>
<br>

>### Response
>
>#### Response Code: 200 (`OK`)
>
>#### Response Body
>
>```json
>{
>     [
>         {
>             "id": "1",
>             "name": "BELABO"
>         },
>         {
>             "id": "2",
>             "name": "MONOHARDI"
>         },
>    ]
>}
>```
>

#### Get Union List for a Upazilla

| API Endpoint              | HTTP Method |
| ------------------------- | :---------: |
| [https://pushti-locationms.onrender.com/union]()                |   `POST`     |

>### Request
>
>#### Request Body
>
>```json
>{
>    "upazilla": 3
>}
>```
>
<br>

>### Response
>
>#### Response Code: 200 (`OK`)
>
>#### Response Body
>
>```json
>{
>     [
>         {
>             "id": "1",
>             "name": "BELABO"
>         },
>         {
>             "id": "2",
>             "name": "MONOHARDI"
>         },
>    ]
>}
>```
>

---
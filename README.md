The purpose of this project is to be a simple demo api that can be used in demos to displaying a variety of functionality based on the service it is used for.

The base functionality is as follows...

You spin up a container with the following  Image

`dariv94/fgrdemoapi` See image options on [DockerHub](https://hub.docker.com/repository/docker/dariv94/fgrdemoapi)
And without any Envionmnet Varibles you will have the following endpoints


GET /color  which will return {"color":"blue"}

GET /number which will return {"number":"1"}

If you had ENV VAR
MYCOLOR=Somecolorgreen

then /color will return {"color":"Somecolorgreen"}

and likewise with number If you had ENV VAR
NUMBER=Somenumber

then /number will return {"number":Somenumber}

EXPOSE PORT is 4000 by default but PORT Environment Variable may be set to change that

Example
---

Default
`docker run -p 4000:4000 dariv94/fgrdemoapi:1.0.0`

Would result in /color returning HTTP 200 with {"color":"blue"} and /number returning HTTP 200 {"number":1}

With MYCOLOR & NUMBER set
`docker run -p 4000:4000 -e MYCOLOR="green" -e NUMBER="3" dariv94/fgrdemoapi:1.0.0`

Would result in /color returning HTTP 200 with {"color":"green"} and /number returning HTTP 200 {"number":3}
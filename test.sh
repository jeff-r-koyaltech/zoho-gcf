TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJab2hvIiwiaWF0IjoxNjgyNzEyNjgzfQ.MkrGu3mvSBNfOgcwuYQiI8sx9T4uW9_G90UW8yrfNw0
PAYLOAD="{ \"token\": \"${TOKEN}\", \"data\": { \"fName\": \"Abe\", \"lName\": \"Lincoln\" } }"
echo ${PAYLOAD}
curl -X POST -H 'Content-Type: application/json' http://localhost:8080 -d "${PAYLOAD}"





# curl -m 30 -X POST https://us-central1-timbersite-dev.cloudfunctions.net/zoho-leadgen \
# -H "Authorization: bearer $(gcloud auth print-identity-token)" \
# -H "Content-Type: application/json" \
# -d '{ "data": { "fName": "Abe", "lName": "Lincoln" }, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJab2hvIiwiaWF0IjoxNjgyNzEyNjgzfQ.MkrGu3mvSBNfOgcwuYQiI8sx9T4uW9_G90UW8yrfNw0" }'
const express = require("express")
const app = express()
const answers = require("./api/answers.json")
const port = 8000

app.use(express.json())
app.use(express.urlencoded())

app.get("/answers", (req, res) => {
    res.send(answers)
})

app.listen(port, () => {
    console.log(`listening on PORT ${port}`)
})


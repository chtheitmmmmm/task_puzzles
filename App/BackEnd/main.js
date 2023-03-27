const http = require('http');
const fs   = require("fs");
const path = require("path");

const frontEndRoot = path.resolve(__dirname, "../FrontEnd")
const dbEncoding   = "utf-8"
const userDBPath   = path.resolve(__dirname, 'UserDB.json')
let   userDB       = JSON.parse(fs.readFileSync(userDBPath).toString(dbEncoding))

const prepareDocs  = {
    401:  fs.readFileSync(path.resolve(frontEndRoot, '401.html')),
    403:  fs.readFileSync(path.resolve(frontEndRoot, '403.html')),
    404:  fs.readFileSync(path.resolve(frontEndRoot, '404.html')),
    405:  fs.readFileSync(path.resolve(frontEndRoot, '405.html')),
    406:  fs.readFileSync(path.resolve(frontEndRoot, '406.html')),
    main: fs.readFileSync(path.resolve(frontEndRoot, 'main.html')),
    errResponse(res, errCode) {
        res.writeHead(errCode, {'Content-Type': 'text/html'})
        res.write(this[errCode])
    }
}


// 创建一个HTTP服务器实例
const server = http.createServer(async (req, res) => {
    if (req.method === "GET") {
        const resourcePath = path.resolve(frontEndRoot, '.' + (req.url === '/' ? '/index.html' : req.url))
        if (path.relative(frontEndRoot, resourcePath) === '') {
            prepareDocs.errResponse(res, 403)
        } else {
            if (fs.existsSync(resourcePath)) {
                const stat = fs.statSync(resourcePath)
                if (stat.isFile()) {
                    if (resourcePath.match(/\.html?$/)) {
                        res.writeHead(200, {'Content-Type': 'text/html'})
                            .write(fs.readFileSync(resourcePath))
                    } else if (resourcePath.endsWith(".css")) {
                        res.writeHead(200, {'Content-Type': 'text/css'})
                            .write(fs.readFileSync(resourcePath))
                    } else if (resourcePath.endsWith(".js")) {
                        res.writeHead(200, {'Content-Type': 'text/javascript'})
                            .write(fs.readFileSync(resourcePath))
                    } else {
                        prepareDocs.errResponse(res, 406)
                    }
                } else {
                    prepareDocs.errResponse(res, 404)
                }
            } else {
                prepareDocs.errResponse(res, 404)
            }
        }
        res.end()
    } else if (req.method === "POST") {
        const apiPath = req.url;
        if (apiPath === "/register") {
            let body = ''
            req.on("data", chunk => {
                body += chunk
            })
            req.on('end', async () => {
                try {
                    body = JSON.parse(body)
                    if (body["account"] && body["password"]) {
                        if (userDB[body["account"]]) {
                            if (userDB[body["account"]] === body["password"]) {
                                res.write(prepareDocs.main.toString()
                                    .replaceAll('{{account}}', body["account"])
                                    .replaceAll('{{Welcome}}', '欢迎回来')
                                )
                            } else {
                                prepareDocs.errResponse(res, 401)
                            }
                        } else {
                            userDB[body["account"]] = body["password"]
                            res.write(prepareDocs.main.toString()
                                .replaceAll('{{account}}', body["account"])
                                .replaceAll('{{Welcome}}', '注册成功')
                            )
                            fs.writeFile(userDBPath, JSON.stringify(userDB), err => {
                                if (err) {
                                    console.log("Writing back to data base failed.")
                                } else {
                                    console.log("New user data saved.")
                                }
                            })
                        }
                    } else {
                        res.write(JSON.stringify({
                            errCode: 1,
                            errMsg: "Bad request body!"
                        }))
                    }
                } catch (e) {
                    console.log("Bad body:", body)
                }
                res.end()
            });
        } else {
            res.write(JSON.stringify({
                errCode: 2,
                errMsg: "No such api."
            }))
            res.end()
        }
    } else {
        prepareDocs.errResponse(res, 405)
    }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
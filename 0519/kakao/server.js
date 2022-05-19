const express = require("express");
const app = express();
const cors = require("cors");
const nunjucks = require("nunjucks");
const axios = require("axios");
const qs = require("qs"); // {a : 'asdf'} -> a=asdf

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
});

const client_id = "82996afc3b2796867158ddb98fcd4673";
const redirect_uri = "http://localhost:3005/auth/kakao";
const client_secret = "vsVZWMwoU8oBIdcvVo2ToWYazFnJMopM";
const host = "https://kauth.kakao.com";

app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/kakao/login", (req, res) => {
  const redirect = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
  res.redirect(redirect);
});

app.get("/auth/kakao", async (req, res) => {
  const {
    query: { code },
  } = req;
  console.log("req.query.code : " + req.query.code);

  // 1. url
  // 2. body
  // 3. headers
  const body = qs.stringify({
    grant_type: "authorization_code",
    client_id,
    redirect_uri,
    code,
    client_secret,
  });
  const headers = {
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  };
  console.log("headers : " + headers);
  const response = await axios.post(`${host}/oauth/token`, body, headers);
  console.log(response.data);

  try {
    const { access_token } = response.data;
    const url = "https://kapi.kakao.com/v2/user/me";
    const userinfo = await axios.post(url, null, {
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
      },
    });

    console.log(userinfo.data)
  } catch (e) {
    console.error(e);
  }

  res.send("hello");
});

app.listen(3005, () => {
  console.log("http://localhost:3005");
});

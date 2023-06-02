import * as express from "express";
import * as functions from "firebase-functions";
import * as httpProxy from "http-proxy";

const app = express();
const proxyRouter = express.Router();

const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  headers: {
    Authorization: `Bearer ${functions.config().twitter.token}`,
  },
  target: "https://api.twitter.com",
});

const setAccessControlAllowOriginHeader = (res: express.Response) => {
  if (process.env.NODE_ENV === "development") {
    // TODO: Fix typings
    // @ts-ignore
    res.setHeader("Access-Control-Allow-Origin", "*");
  } else {
    // TODO: Fix typings
    // @ts-ignore
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://trumpymctweetface.jessepinho.com"
    );
  }
};

proxyRouter.get("/1.1/statuses/user_timeline.json", function (req, res) {
  setAccessControlAllowOriginHeader(res);

  if (req.query.screen_name === "realDonaldTrump") {
    proxy.web(req, res);
  } else {
    res.sendStatus(403);
  }
});

proxyRouter.get("/1.1/statuses/show.json", function (req, res) {
  proxy.web(req, res);
});

app.use("/api", proxyRouter);

// TODO: Fix typings
// @ts-ignore
export const api = functions.https.onRequest(app);

require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./routes");
const connection = require("./config/connection");
const logger = require("./middlewares/logger");
const handlebarshelpers = require("./helpers/handlebarshelpers");

const PORT = process.env.PORT || 3000;

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 86400 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: connection,
  }),
};

const handlebarsOptions = { handlebarshelpers };
const hbs = expressHandlebars.create(handlebarsOptions);
const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    app.listen(PORT, () =>
      console.log(`Server Live @ http://localhost:${PORT} 🚀🚀🚀`)
    );
  } catch (error) {
    console.log(`[ERROR]: DB connection failed | ${error.message}`);
  }
};

init();

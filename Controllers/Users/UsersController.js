import {
  createAddressAdao,
  findOneAddressAdao,
  updateUserAdao,
} from "../../DAO/AddressDao.js";
import {
  addAddressUdao,
  deleteUserUdao,
  findAllUsersUdao,
  findOneUserUdao,
} from "../../DAO/UserDao.js";
import auth from "../../Middleware/authController.js";
import authenticate from "../../Middleware/authenticate.js";

const uniqueEmailCheck = (req, res) => {
  users.find({ email: req.body.email }, (err, user) => {
    if (err) res.json({ success: false, message: { uniqueEmail: false, err } });
    else {
      if (user.length !== 0)
        res.json({ success: false, message: { uniqueEmail: false, err: {} } });
      else res.json({ success: true, message: { uniqueEmail: true, err: {} } });
    }
  });
};

const UsersController = (app) => {
  //Login method defined in AuthCOntroller checks if the provided UserName and Password match
  app.post("/api/login", auth.login);
  //checks if a given username is already in the DataBase
  app.post("/api/uniqueEmail", uniqueEmailCheck);
  //Defined in AuthController adds a user
  app.post("/api/users", auth.UserRegistration);
  //Defined in Auth Controller updates a user
  app.put("/api/updateusers", auth.UserDataUpdate);
  // gets all the Users
  app.get("/api/users", async (req, res) => {
    const allUsers = await findAllUsersUdao();
    res.json(allUsers);
  });

  // has to have a by feild and type of by should be admin
  app.delete("/api/users", async (req, res) => {
    if (req.body.by.type === "Admin") {
      const status = await deleteUserUdao(req.body.user._id);
      res.json({ status });
    }
  });

  //extracts the user by Id for lookingup users when not logged in
  app.get("/api/users/:id", async (req, res) => {
    const user = await findOneUserUdao(req.params["id"]);
    if (user == null) {
      res.json({ error: "No User Found with this ID", user });
    }
    res.json({
      error: "",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        cart: user.cart,
        dateOfBirth: user.dateOfBirth,
        email: user.email,
        phone: user.phone,
        type: user.type,
      },
    });
  });

  //extracts the user by Id for lookingup users when  logged in
  app.post("/api/logged-user/", authenticate, async (req, res) => {
    const user = await findOneUserUdao(req.body.id);
    if (user == null) {
      res.json({ error: "No User Found with this ID", user });
    }
    res.json({
      error: "",
      user,
    });
  });

  //adds address to a user
  app.put("/api/add-address/", authenticate, async (req, res) => {
    let address = await findOneAddressAdao(req.body.address);
    if (address == null) {
      address = await createAddressAdao(req.body.address);
    }
    const addAddress = await updateUserAdao(address._id, req.body.uid);
    const user = await addAddressUdao(req.body.uid, address._id);
    if (user.n <= 0) {
      res.json({ error: "No User Found with this ID", user });
    }
    res.json({
      error: "",
      user,
    });
  });
};
export default UsersController;

const { query } = require("express");
var fs = require("fs");

exports.getdata = async (req, res) => {
  try {
    let data = await readFilesync("data/products.json", "utf8");
    let users = JSON.parse(data);
  
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({massege : error});
  }
};

exports.adddata = async (req, res) => {
  try {
    let data = await readFilesync("data/products.json", "utf8");
    let users = JSON.parse(data);
    let user = req.body
  
    let newuser = {}
    newuser.id = users[users.length - 1].id + 1;
    newuser.name = 
    user.name;
    newuser.email = user.email;
    newuser.gender = user.gender;
    newuser.status = user.status;
  
    users.push(newuser)
    console.log(users)
    await writeFilesync("data/products.json", JSON.stringify(users));
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({massege : error});
  }
};

exports.getonedata = async (req, res) => {
  try {
    let data = await readFilesync("data/products.json", "utf8");
    let users = JSON.parse(data);
    let id = req.params.id;
    let obj = users.find((x) => x.id == id)
  
    return res.status(200).json(obj);
    
  } catch (error) {
    return res.status(400).json({massege : error});
  }
};

exports.updatedata = async (req, res) => {
  try {
    let data = await readFilesync("data/products.json", "utf8");
    let users = JSON.parse(data);
    let id = req.query.id;
    console.log(id)
    let user = req.body
  
    let newuser = {}
    newuser.id = id;
    newuser.name = user.name;
    newuser.email = user.email;
    newuser.gender = user.gender;
    newuser.status = user.status;
    let index = users.findIndex((x) => x.id == id);
    users.splice(index, 1, newuser)
    console.log(newuser)
  
    await writeFilesync("data/products.json", JSON.stringify(users));
    return res.status(200).json(users);
    
  } catch (error) {
    return res.status(400).json({massege : error});
    
  }
};

exports.deletedata = async (req, res) => {
  try {
    let data = await readFilesync("data/products.json", "utf8");
    let users = JSON.parse(data);
  
    let id = req.query.id
    let index = users.findIndex((x) => x.id == id)
    users.splice(index, 1)
  
    await writeFilesync("data/products.json", JSON.stringify(users));
    return res.status(200).json(users);
  } catch (error) {
    return res.status(200).json(users);
  }
};

const readFilesync = (path,encoding)=>{
  return new Promise((Resolve, Reject) => {
      fs.readFile(path, encoding, function(err, data){
          if (err) {
              Reject(err)
          } else {
              Resolve(data)
          }
      })
  });
}

const writeFilesync = (path,data)=>{
  return new Promise((Resolve, Reject) => {
      fs.writeFile(path, data, function(err, data){
          if (err) {
              Reject(err)
          } else {
              Resolve(data)
          }
      })
  });
}


// exports.getonedata = (req, res) => {
//   let id = req.query.id;
//   let obj = data.find((x) => x.id == id);
//   res.status(200).json(obj);

//   return res.status(200).json(data);
// };

// exports.updatedata = (req, res) => {
//   let id = req.query.id;
//   let obj = req.body;
//   console.log("id", id);
//   console.log("obj", obj);
//   let index = data.findIndex((x) => x.id == id);
//   data.splice(index, 1, { ...obj, id: Number(id) });
//   console.log(data);

//   return res.status(200).json(data);
// };

// exports.deletedata = (req, res) => {

//   let id = req.query.id;
//   console.log("id", id);
//   let index = data.findIndex((x) => x.id == id);
//   data.splice(index, 1);

//   return res.status(200).json(data);
// };

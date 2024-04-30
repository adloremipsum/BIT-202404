const looneys = require("./looneys.js");

function all() {
  return looneys;
}

function random() {
  for (let i = 0; i < looneys.length; i++) {
    const position = Math.floor(Math.random() * looneys.length);
    const looneyRandom = looneys[position];
    return looneyRandom;
  }
}

function getLooney(looneyName) {
  for (let looney of looneys) {
    if (looney.name === looneyName) {
      return looney;
    }
  }
}

function friends(looneyName) {
  for (let looney of looneys) {
    if (looney.name === looneyName) {
      return looney.friends;
    }
  }
}

function enemies(looneyName) {
  for (let looney of looneys) {
    if (looney.name === looneyName) {
      return looney.enemies;
    }
  }
}

function names() {
  const looneysNames = [];
  for (let looney of looneys) {
    looneysNames.push(looney.name);
  }
  return looneysNames;
}

module.exports = {
  all,
  random,
  getLooney,
  friends,
  enemies,
  names,
};

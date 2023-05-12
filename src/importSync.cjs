const { loopWhile } = require("deasync");

function importNamespaceSync(id) {
  let pending = true;
  let ret;
  let err;

  void import(id).then(
    (mod) => {
      pending = false;
      ret = mod;
    },
    (e) => {
      pending = false;
      err = e;
    }
  );

  loopWhile(() => {
    console.warn(`waiting import('${id}')`);
    return pending;
  });

  if (err !== undefined) throw err;
  if (ret === undefined) throw new TypeError();
  return ret;
}

module.exports.importNamespaceSync = importNamespaceSync;

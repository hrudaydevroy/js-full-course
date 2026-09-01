const promise = Promise.resolve("Data loaded");
promise.then(console.log).catch(console.error).finally(() => console.log("Done"));

async function say() {
  console.log("999 :>> ", 999);
}
process.nextTick(() => {
  console.log("next :>> ");
});
say();
console.log("888 :>> ", 888);

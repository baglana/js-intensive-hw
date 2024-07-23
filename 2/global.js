/*
  It is necessary to reflash the global object a little.
  Consider these three functions:
  When calling alert(), the logic confirm(), prompt - alert(), confirm() - prompt() should
  work, feel free to use your own order.
  *Additionally - try to do this as briefly as possible, in the least amount of steps. (By
  action we mean any operation - creating a variable, equating, calling a method)
*/

[alert, confirm, prompt] = [confirm, prompt, alert];

alert("alert");
confirm("confirm");
prompt("prompt");

// class BaseUserService {
//   userList = [];

//   currentUser = {};

//   getUsers() {}
//   getUserById() {}
// }

class UserService extends BaseUserService {}

function BaseUserService() {
  this.userList = [];

  this.currentUser = {};
}

BaseUserService.prototype.getUsers = function () {};
BaseUserService.prototype.getUserById = function () {};

function AdminService() {}

// AdminService.prototype = new BaseUserService()
// AdminService.prototype.constructor = AdminService

// AdminService.prototype = Object.create(BaseUserService.prototype)
// AdminService.prototype.constructor = AdminService

// AdminService.prototype.__proto__ = BaseUserService.prototype;

Object.setPrototypeOf(AdminService.prototype, BaseUserService.prototype);

console.log(AdminService);
console.log(AdminService.prototype);
console.log(AdminService.prototype.constructor);

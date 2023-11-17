import bcrypt from "bcrypt";
 const createHashPassword = async(password)=> {
  // const salt = await bcrypt.genSalt(10);
  // console.log(salt); зараз достатньо веазати кількість солі другим аргументом.
const result = await bcrypt.hash(password, 10); // string with password, salt
console.log(result);
const compareResult1 = await bcrypt.compare(password, result);// порівнює пороль користувача із захешованим поролем (true)
// console.log(compareResult1);
const compareResult2 = await bcrypt.compare("123654", result);
// console.log(compareResult2)
}

export default createHashPassword;


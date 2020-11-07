async function work() {
  return await Promise.resolve('is working')
}

work().then(console.log)

const notUse = 'eslint is working!'

// lodash import
// import('lodash').then(_ => {
//     console.log('Lodash:', _.random(9, 10, true))
// })
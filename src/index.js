let dataProvider = {}
const request = require.context('./', true, /\/.*\/index.*\.js$/)
request.keys().forEach(path => {
  const module = request(path)
  path = path.replace(/(\.\/|\/index\.js)/gi, '').split('/')
  const fileName = path[0].replace(/^[a-z]/, (match) => {
    return match.toUpperCase()
  })

  dataProvider[fileName] = module
})

export default dataProvider

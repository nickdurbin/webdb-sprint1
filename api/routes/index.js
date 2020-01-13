const projectRouter = require('./projects/project-routes')
const resourceRoutes = require('./resources/resource-routes')
const taskRouter = require('./tasks/task-routes')

module.exports = server => {
  server.use("/api/projects", projectRouter)
  server.use("/api/resources", resourceRoutes)
  server.use("/api/tasks", taskRouter)
}
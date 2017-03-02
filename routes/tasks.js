var data = {
  tasks: ['Finish this lab']
};

/*
 * GET tasks page.
 */
exports.view = function(req, res){
  res.render('tasks', data);
};

exports.addTask = function(req, res){
var taskName = req.body.taskName;
  console.log(taskName);
  data.tasks.push(taskName);
  res.send(taskName);
};

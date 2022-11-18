/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  let today_date = new Date().toISOString().split("T")[0];
  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate < today_date;
    });
  };

  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === today_date;
    });
  };

  const dueLater = () => {
    return all.filter((todo) => {
      return todo.dueDate > today_date;
    });
  };

  const toDisplayableList = (l) => {
    return l
      .map((todo) => {
        x = todo.completed ? "[x]" : "[ ]";
        y = todo.dueDate == today ? "" : todo.dueDate;

        return `${x} ${todo.title} ${y}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;

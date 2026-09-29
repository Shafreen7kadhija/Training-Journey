const tasks = [
    {
        taskId: 101,
        employee: "Rahul",
        taskName: "Create Login Module",
        status: "Pending",
        priority: "High"
    },
    {
        taskId: 102,
        employee: "Priya",
        taskName: "Design Dashboard",
        status: "Completed",
        priority: "Medium"
    },
    {
        taskId: 103,
        employee: "Arun",
        taskName: "API Integration",
        status: "Pending",
        priority: "High"
    }
];


// 1. Reusable Callback-Based Task Processor

const processTasks = (tasks, callback) => {

    for (let task of tasks) {
        callback(task);
    }

};


// Display Task

const displayTask = (task) => {

    console.log(
        task.taskName +
        " - " +
        task.status
    );

};


// Display Priority

const displayPriority = (task) => {

    console.log(task.priority + " Priority");

};


// Display Status

const displayStatus = (task) => {

    console.log(task.status);

};


// Display Employee

const displayEmployee = (task) => {

    console.log(task.employee);

};


// 2. Custom Iterator

const createTaskIterator = (tasks) => {

    let index = 0;

    return {

        next: () => {

            if (index < tasks.length) {

                return {
                    value: tasks[index++],
                    done: false
                };

            }

            return {
                value: undefined,
                done: true
            };

        }

    };

};


// 3. Task Counter Using Closure

const createTaskCounter = () => {

    let count = 0;

    return () => {

        count++;

        console.log("Processed Tasks: " + count);

    };

};


// 4. Task Summary Generator

const generateTaskSummary = (tasks) => {

    const summary = {
        totalTasks: tasks.length,
        completedTasks: 0,
        pendingTasks: 0,
        highPriorityTasks: 0
    };

    for (let task of tasks) {

        if (task.status === "Completed") {
            summary.completedTasks++;
        }

        if (task.status === "Pending") {
            summary.pendingTasks++;
        }

        if (task.priority === "High") {
            summary.highPriorityTasks++;
        }

    }

    return summary;

};


// 5. Generator Function

function* taskGenerator(tasks) {

    for (let task of tasks) {

        yield task;

    }

}


// 6. Bonus - Generic Task Report

const generateTaskReport = (tasks, callback) => {

    return processTasks(tasks, callback);

};


// --------------------------------------------------
// OUTPUT / TESTING
// --------------------------------------------------

console.log("===== TASK DISPLAY =====");

processTasks(tasks, displayTask);


console.log("\n===== PRIORITY DISPLAY =====");

processTasks(tasks, displayPriority);


console.log("\n===== STATUS DISPLAY =====");

processTasks(tasks, displayStatus);


console.log("\n===== EMPLOYEE DISPLAY =====");

processTasks(tasks, displayEmployee);


console.log("\n===== ITERATOR OUTPUT =====");

const iterator = createTaskIterator(tasks);

console.log(iterator.next().value.taskName);
console.log(iterator.next().value.taskName);
console.log(iterator.next().value.taskName);


console.log("\n===== CLOSURE COUNTER =====");

const counter = createTaskCounter();

counter();
counter();
counter();


console.log("\n===== TASK SUMMARY =====");

const summary = generateTaskSummary(tasks);

console.log(summary);


console.log("\n===== GENERATOR OUTPUT =====");

const generator = taskGenerator(tasks);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


console.log("\n===== BONUS REPORT =====");

generateTaskReport(tasks, displayPriority);
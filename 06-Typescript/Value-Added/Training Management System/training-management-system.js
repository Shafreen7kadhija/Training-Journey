"use strict";
class RecentlyViewedCourses {
    courses = [];
    push(course) {
        this.courses.push(course);
    }
    pop() {
        return this.courses.pop();
    }
}
class DoubtQueue {
    doubts = [];
    enqueue(doubt) {
        this.doubts.push(doubt);
    }
    dequeue() {
        return this.doubts.shift();
    }
}
function searchTraineeById(trainees, traineeId) {
    let left = 0;
    let right = trainees.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (trainees[mid].traineeId === traineeId) {
            return trainees[mid];
        }
        if (trainees[mid].traineeId < traineeId) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return null;
}
function printLearningPath(node) {
    console.log(node.courseName);
    for (const child of node.children) {
        printLearningPath(child);
    }
}
// Sample Data
const trainees = [
    {
        traineeId: 101,
        name: "Rahul",
        course: "TypeScript"
    },
    {
        traineeId: 102,
        name: "Priya",
        course: "JavaScript"
    },
    {
        traineeId: 103,
        name: "Arun",
        course: "React"
    }
];
// Recently Viewed Courses
const recentlyViewed = new RecentlyViewedCourses();
recentlyViewed.push("JavaScript");
recentlyViewed.push("TypeScript");
recentlyViewed.push("React");
console.log("Recently Viewed:", recentlyViewed.pop());
// Doubt Queue
const doubtQueue = new DoubtQueue();
doubtQueue.enqueue("What is an interface?");
doubtQueue.enqueue("How does binary search work?");
doubtQueue.enqueue("What are generics?");
console.log("Doubt:", doubtQueue.dequeue());
// Binary Search
const trainee = searchTraineeById(trainees, 102);
console.log("Trainee:", trainee);
// Learning Path Tree
const learningPath = {
    courseName: "Programming",
    children: [
        {
            courseName: "JavaScript",
            children: []
        },
        {
            courseName: "TypeScript",
            children: [
                {
                    courseName: "Generics",
                    children: []
                }
            ]
        }
    ]
};
console.log("Learning Path:");
printLearningPath(learningPath);

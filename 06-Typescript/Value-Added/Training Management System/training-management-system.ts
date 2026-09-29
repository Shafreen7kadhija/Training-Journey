interface Trainee {
    traineeId: number;
    name: string;
    course: string;
}

class RecentlyViewedCourses {
    private courses: string[] = [];

    push(course: string): void {
        this.courses.push(course);
    }

    pop(): string | undefined {
        return this.courses.pop();
    }
}

class DoubtQueue {
    private doubts: string[] = [];

    enqueue(doubt: string): void {
        this.doubts.push(doubt);
    }

    dequeue(): string | undefined {
        return this.doubts.shift();
    }
}

function searchTraineeById(
    trainees: Trainee[],
    traineeId: number
): Trainee | null {

    let left = 0;
    let right = trainees.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (trainees[mid].traineeId === traineeId) {
            return trainees[mid];
        }

        if (trainees[mid].traineeId < traineeId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

interface LearningPathNode {
    courseName: string;
    children: LearningPathNode[];
}

function printLearningPath(
    node: LearningPathNode
): void {

    console.log(node.courseName);

    for (const child of node.children) {
        printLearningPath(child);
    }
}


// Sample Data

const trainees: Trainee[] = [
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

const learningPath: LearningPathNode = {
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
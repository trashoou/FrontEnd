function getStudent() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Anri", age: 32});
        },4000);
    });
}

const studentPromise = getStudent();

studentPromise.then((student) => {
    console.log(`Student name: ${student.name}`);
})
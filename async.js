function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

function count(number) {
    let counter = 0;
    return new Promise((resolve, reject) => {
        if (number > 10) {
            reject("Sorry, I cannot count number larger than 10 :(");
            return;
        } else if (number < 1) {
            reject("Sorry, I cannot count number less than 1 :(");
            return;
        }

        const intervalId = setInterval(() => {
            counter += 1;
            console.log(`It's ${counter} !`)
            if (counter === number) {
                clearInterval(intervalId);
                resolve(counter);
                return;
            }
        }, 1000);
    });
}

async function testWait() {
    await wait(1);
    console.log("1");

    await wait(2);
    console.log("2");
}

async function testCount() {
    const result = await count(3);
    console.log(`result is ${result}`);
    
    try {
        const result = await count(12);
        console.log(`result is ${result}`); // 不會跑到這行
    } catch (error) {
        console.error(error);
    }
}

async function test() {
    // TODO: 改寫程式，完成testWait以後才執行testCount
    // 可以改寫 test, testWait, testCount, 但不一定每個都要改才會成功

    await testWait();
    testCount();
}

test();
// Function to demonstrate the use of Promise.allSettled for handling multiple promises

/**
 * Execute and handle multiple asynchronous operations using Promise.allSettled.
 * @param {Array<Promise>} promises - An array of promises to be handled.
 * @returns {Promise<Object>} - A promise that resolves with an object containing the results.
 */
async function handlePromises(promises) {
    const results = await Promise.allSettled(promises);

    const summary = results.reduce(
        (acc, result, index) => {
            if (result.status === 'fulfilled') {
                acc.success.push({ index, value: result.value });
            } else if (result.status === 'rejected') {
                acc.failures.push({ index, reason: result.reason });
            }
            return acc;
        },
        { success: [], failures: [] }
    );

    return summary;
}

// Example usage with an array of promises
const promise1 = Promise.resolve('Success 1');
const promise2 = Promise.reject('Error 2');
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Success 3'), 1000));
const promise4 = new Promise((_, reject) => setTimeout(() => reject('Error 4'), 500));

handlePromises([promise1, promise2, promise3, promise4])
    .then(result => console.log(result))
    .catch(error => console.error('An error occurred:', error));

// Example Output:
// {
//   success: [
//     { index: 0, value: 'Success 1' },
//     { index: 2, value: 'Success 3' }
//   ],
//   failures: [
//     { index: 1, reason: 'Error 2' },
//     { index: 3, reason: 'Error 4' }
//   ]
// }

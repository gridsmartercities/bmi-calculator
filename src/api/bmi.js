
const apiUrl = process.env.REACT_APP_REST_URL;

export function callGetBmi(height, weight) {
    return fetch(`${apiUrl}/bmi?height=${height}&weight=${weight}`, {
        method: 'GET',
      });
    }
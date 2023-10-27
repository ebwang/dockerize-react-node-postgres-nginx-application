import axios from 'axios';
import faker from 'faker';


const postData = async () => {
    const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        age: faker.random.number({ min: 18, max: 99 }),
    };

    try {
        const response = await axios.post('http://localhost:3000/api/form', user);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
};

for (let i = 0; i < 1000; i++) {
    postData();
}

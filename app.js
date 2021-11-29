var faker = require('faker'); // Faker.js

api.customer  = {
    id:    random.special(4, 8),
    name:  faker.name.findName(),
    phone: faker.phone.phoneNumber("(###) ###-####"),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
    }
};
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('customers', [{
        firstName: 'yugandhara ',

        lastName: 'Chaudhari',

        email: "Yugandhara@gmail.com",

        phoneNo:9967338170,

        address:"bhusawal",

        postalCode:123456,

        password:"yugandhara@123",

        confirmPassword:"yugandhara@123",

        createdAt: new Date(),

        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

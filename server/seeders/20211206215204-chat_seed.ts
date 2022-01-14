
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    try {
      await queryInterface.bulkInsert("users", [{
        first_name: "JC",
        last_name: "Abreu",
        email: "jc_abreu",
        password: "gird",
        user_name: 'sensational',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
        // {
        //   first_name: "John",
        //   last_name: "Doe",
        //   email: "John_Doe@mail.com",
        //   password: "123456789",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   first_name: "Janet",
        //   last_name: "Lee",
        //   email: "Jlee@mail.com",
        //   password: "123456789",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // }
      ], {});

    } catch {
      console.log('could not insert users');
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    try {
      await queryInterface.bulkDelete('users', null, {});
    } catch {
      console.log("can't delete");
    }
  }
};

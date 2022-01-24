
export default {
  up: async (queryInterface: any, Sequelize: any) => {
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
      {
        first_name: "John",
        last_name: "Doe",
        email: "John_Doe@mail.com",
        password: "123456789",
        user_name: 'JonTron21',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Janet",
        last_name: "Lee",
        email: "Jlee@mail.com",
        password: "123456789",
        user_name: 'princess<3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], {});

    } catch {
      console.log('could not insert users');
    }
  },

  down: async (queryInterface: any, Sequelize: any) => {
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

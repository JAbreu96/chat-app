"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
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
            yield queryInterface.bulkInsert("users", [{
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
        }
        catch (_a) {
            console.log('could not insert users');
        }
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        try {
            yield queryInterface.bulkDelete('users', null, {});
        }
        catch (_b) {
            console.log("can't delete");
        }
    })
};
//# sourceMappingURL=20211206215204-chat_seed.js.map
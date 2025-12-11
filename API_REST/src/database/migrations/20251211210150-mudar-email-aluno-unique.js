/** @type {import('sequelize-cli').Migration} */
export function up(queryInterface, Sequelize) {
  return queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  );
}
export function down() { }

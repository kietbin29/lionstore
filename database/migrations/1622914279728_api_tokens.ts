import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ApiTokens extends BaseSchema {
  protected tableName = 't_api_tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('customer_id').unsigned().references('id').inTable('t_customers').onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('token', 64).notNullable().unique()
      table.string('ip_address', 20).nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('expires_at', { useTz: true }).nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

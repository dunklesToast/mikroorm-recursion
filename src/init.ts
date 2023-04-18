import {MikroORM, PostgreSqlDriver} from "@mikro-orm/postgresql";

export async function init() {
    const orm = await MikroORM.init<PostgreSqlDriver>({
        entities: ['./src/entities/*.ts'],
        entitiesTs: ['./src/entities/*.ts'],
        dbName: 'demo',
        type: 'postgresql',
        host:  'localhost',
        user: 'demo',
        password: 'demo',
    });

    const generator = orm.getSchemaGenerator();
    await generator.refreshDatabase();
    return orm;
}

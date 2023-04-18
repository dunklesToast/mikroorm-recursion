import {Collection, Entity, OneToMany, PrimaryKey, Property} from '@mikro-orm/core';
import { generateId } from '../helpers/id';
import {Book} from "./Book";

@Entity()
export class Author {
    @PrimaryKey({ type: 'text' })
    id = generateId();

    @Property({ type: 'string' })
    name: string;

    @OneToMany(() => Book, book => book.author)
    books = new Collection<Book>(this)
}

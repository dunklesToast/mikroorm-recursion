import {Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property} from '@mikro-orm/core';
import { generateId } from '../helpers/id';
import {Author} from "./Author";
import {Page} from "./Page";

@Entity()
export class Book {
    @PrimaryKey({ type: 'text' })
    id = generateId();

    @Property({ type: 'string' })
    title: string;

    @ManyToOne({ entity: () => Author })
    author: Author;

    @OneToMany(() => Page, page => page.book)
    pages = new Collection<Book>(this)
}

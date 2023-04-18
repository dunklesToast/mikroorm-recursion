import {Entity, ManyToOne, PrimaryKey, Property} from '@mikro-orm/core';
import { generateId } from '../helpers/id';
import {Book} from "./Book";

@Entity()
export class Page {
    @PrimaryKey({ type: 'text' })
    id = generateId();

    @Property({ type: 'string' })
    content: string;

    @ManyToOne(() => Book)
    book: Book;
}

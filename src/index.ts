import {init} from "./init";
import {Book} from "./entities/Book";
import {Author} from "./entities/Author";
import {Page} from "./entities/Page";

(async () => {
    const orm = await init();

    const em = orm.em.fork();

    const book = new Book();
    const author = new Author();
    book.title = 'The One Book';
    book.author = author;
    author.name = 'dunklesToast';

    for(let i = 0; i !== 10; i++) {
        const page = new Page();
        page.book = book;
        page.content = 'some content...';
        em.persist(page);
    }

    em.persist([book, author]);
    await em.flush();

    const pages = await em.find(Page, {});
    const page = await em.findOne(Page, {
        id: pages[0].id
    })
    console.log(JSON.stringify(page, null, 2))
    await orm.close();
})();
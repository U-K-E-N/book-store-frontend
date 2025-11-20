import type { AudioBook } from './Audiobook';
import type { KindleBook } from './KindleBook';
import type { PaperBook } from './PaperBook';

export type Book = AudioBook | KindleBook | PaperBook;

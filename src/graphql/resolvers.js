import { books } from '../data/books'
import { authors } from '../data/authors'
import { reviews } from '../data/reviews'

export const resolvers = {
    Query: {
        books() {
            return books
        },
        authors() {
            return authors 
        },
        reviews() {
            return reviews
        }
    },
    Book: {
        author: ({ author }) => {
            return authors.find( a => {
                return a.id === author
            })
        },
        reviews: ({ id }) => {
            return reviews.filter( review => {
                return review.book === id
            })
        }
    },
    Author: {
        books: ({ id }) => {
            return books.filter( book => {
                return book.author === id
            } )
        }
    },
    Review: {
        book: ({ book }) => {
            return books.find( b => {
                return b.id === book
            })
        }
    }
}
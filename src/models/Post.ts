export interface PostWP {
    post_type: 'post'
    date     : string
    modified : string
    title    : { rendered: string }
    content  : { rendered: string }
    excerpt  : { rendered: string }
    slug_en  : string
    slug_fr  : string
}

export class Post
{
    id        : number
    createdAt : string
    modifiedAt: string
    title     : string
    content   : string
    excerpt   : string
    slug      : Object

    constructor(postwp : PostWP) {
        this.id         = postwp.ID || postwp.id
        this.createdAt  = postwp.date
        this.modifiedAt = postwp.modified
        this.title      = postwp.title.rendered
        this.content    = postwp.content.rendered
        this.excerpt    = postwp.excerpt.rendered
        this.slug       = {
            en: postwp.slug_en,
            fr: postwp.slug_fr
        }
    }
}
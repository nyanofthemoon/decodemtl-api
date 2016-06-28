export interface PageWP {
    page_type: 'page'
    date     : string
    modified : string
    title    : { rendered: string }
    content  : { rendered: string }
    excerpt  : { rendered: string }
    slug_en  : string
    slug_fr  : string
}

export class Page
{
    id        : number
    createdAt : string
    modifiedAt: string
    title     : string
    content   : string
    excerpt   : string
    slug      : Object

    constructor(pagewp : PageWP) {
        this.id         = pagewp.ID || pagewp.id
        this.createdAt  = pagewp.date
        this.modifiedAt = pagewp.modified
        this.title      = pagewp.title.rendered
        this.content    = pagewp.content.rendered
        this.excerpt    = pagewp.excerpt.rendered
        this.slug       = {
            en: pagewp.slug_en,
            fr: pagewp.slug_fr
        }
    }
}
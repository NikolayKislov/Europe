import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        mainAbout: defineCollection({
            source: '**',
            type: 'data',
            schema: z.object({
                badgeText: z.string(),
                h1First: z.string(),
                h1Second: z.string(),
                h1Third: z.string(),
                description: z.string(),
                buttonLabel1: z.string(),
                buttonIcon1: z.string(),
                buttonLabel2: z.string(),
                buttonIcon2: z.string(),
                stats: z.array(
                    z.object({
                        value: z.string(),
                        label: z.string()
                    })
                ),
                image: z.string(),
                cardIcon: z.string(),
                cardTitle: z.string(),
                cardDescription: z.string(),
            })
        })
    }
})
import { defineConfig, presetUno, presetAttributify, presetMini, presetIcons } from 'unocss'

import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
    transformers: [
        transformerDirectives(),
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetMini({
            dark: "class"
        }),
        presetIcons(
            {
                collections: {
                    carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
                }
            }
        ),
    ]
})
// @ts-check
import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginTailwind from 'eslint-plugin-tailwindcss'

export default antfu(
    {
        stylistic: false,
        // plugins: [...eslintPluginTailwind.configs['flat/recommended']],
        rules: {
            'ts/consistent-type-definitions': 'off',
            'vue/block-order': [
                'error',
                {
                    order: [['template', 'script'], 'style'],
                },
            ],
        },
    },
    eslintPluginPrettierRecommended,
)

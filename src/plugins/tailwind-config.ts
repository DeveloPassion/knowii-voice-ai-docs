export default function () {
    return {
        name: 'tailwind-config-plugin',
        configurePostCss(postcssOptions: any) {
            postcssOptions.plugins.push(require('@tailwindcss/postcss'))
            return postcssOptions
        }
    }
}

// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	shortcuts: {
		full: 'w-full h-full',
		'full-v': 'w-100vw h-100vh',

		'flex-center': 'flex justify-center items-center',
		'flex-col-center': 'flex-center flex-col',
		'flex-x-between': 'flex justify-between',
		'flex-x-around': 'flex justify-around',
		'flex-x-end': 'flex justify-end',
		'flex-x-center': 'flex justify-center',
		'flex-y-center': 'flex items-center',
		'i-flex-center': 'inline-flex justify-center items-center',
		'i-flex-x-center': 'inline-flex justify-center',
		'i-flex-y-center': 'inline-flex items-center',
		'flex-col': 'flex flex-col',
		'flex-col-stretch': 'flex-col items-stretch',
		'i-flex-col': 'inline-flex flex-col',
		'i-flex-col-stretch': 'i-flex-col items-stretch',
		'flex-1-hidden': 'flex-1 overflow-hidden',

		pointer: 'cursor-pointer',
		transition: 'transition-all duration-300 ease-in-out',
		'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
		'ellipsis-text': 'nowrap-hidden overflow-ellipsis',

		'absolute-lt': 'absolute left-0 top-0',
		'absolute-lb': 'absolute left-0 bottom-0',
		'absolute-rt': 'absolute right-0 top-0',
		'absolute-rb': 'absolute right-0 bottom-0',
		'absolute-tl': 'absolute-lt',
		'absolute-tr': 'absolute-rt',
		'absolute-bl': 'absolute-lb',
		'absolute-br': 'absolute-rb',
		'absolute-center': 'absolute-lt flex-center wh-full',

		'fixed-lt': 'fixed left-0 top-0',
		'fixed-lb': 'fixed left-0 bottom-0',
		'fixed-rt': 'fixed right-0 top-0',
		'fixed-rb': 'fixed right-0 bottom-0',
		'fixed-tl': 'fixed-lt',
		'fixed-tr': 'fixed-rt',
		'fixed-bl': 'fixed-lb',
		'fixed-br': 'fixed-rb',
	},
	theme: {
		colors: {
			primary: 'var(--van-primary-color)',
			// ...
		},
	},
	// 动态使用，例如：p-${size}
	safelist: [
		// 'p-1 p-2 p-3 p-4'.split(' '),
		...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`),
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// ...
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});

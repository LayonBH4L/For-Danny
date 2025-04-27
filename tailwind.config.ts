
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				love: {
					'light': '#FFDEE2',
					'medium': '#ff719a',
					'dark': '#ea384c',
					'paper': '#fff9f9'
				},
				flower: {
					'light': '#D6BCFA',
					'medium': '#9b87f5',
					'dark': '#7E69AB'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' }
				},
				'beat': {
					'0%, 100%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(1.1)' },
					'40%': { transform: 'scale(0.9)' },
					'60%': { transform: 'scale(1.05)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bloom': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'50%': { transform: 'scale(0.5)', opacity: '0.5' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'sparkle': {
					'0%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' },
					'100%': { opacity: '0', transform: 'scale(0)' }
				},
				'card-open': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(-150deg)' }
				},
				'card-close': {
					'0%': { transform: 'rotateY(-150deg)' },
					'100%': { transform: 'rotateY(0deg)' }
				},
				'particle-up': {
					'0%': { transform: 'translateY(0) scale(0)', opacity: '0' },
					'50%': { transform: 'translateY(-50px) scale(1)', opacity: '1' },
					'100%': { transform: 'translateY(-100px) scale(0)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'beat': 'beat 1.5s ease-in-out infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'bloom': 'bloom 1s ease-out forwards',
				'fade-up': 'fade-up 0.8s ease-out',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'card-open': 'card-open 1.5s ease-out forwards',
				'card-close': 'card-close 1.5s ease-out forwards',
				'particle-up': 'particle-up 2s ease-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

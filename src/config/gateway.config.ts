export const serviceConfig = {
	users: {
		url: process.env.USERS_SERVICE_URL || 'http://localhost:3000',
		timeout: 10000 // 1 second
	},
	products: {
		url: process.env.PRODUCTS_SERVICE_URL || 'http://localhost:3001',
		timeout: 10000 // 1 second
	},
	checkout: {
		url: process.env.CHECKOUT_SERVICE_URL || 'http://localhost:3003',
		timeout: 10000 // 1 second
	},
	payments: {
		url: process.env.PAYMENTS_SERVICE_URL || 'http://localhost:3004',
		timeout: 10000 // 1 second
	}
} as const

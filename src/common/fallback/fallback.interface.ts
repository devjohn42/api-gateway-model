export interface FallbackStrategy<T> {
	execute(): Promise<T>
}

export interface FallbackOptions {
	useCache?: boolean
	chaceTimeout?: number
	defaultResponse?: any
	retryCount?: number
	retryDelay?: number
}

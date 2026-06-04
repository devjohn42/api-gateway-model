import { Module } from '@nestjs/common'
import { CacheFallbackService } from './cache-fallback'
import { DefatulFallbackService } from './default-fallback'

@Module({
	providers: [CacheFallbackService, DefatulFallbackService],
	exports: [CacheFallbackService, DefatulFallbackService]
})
export class FallbackModule {}

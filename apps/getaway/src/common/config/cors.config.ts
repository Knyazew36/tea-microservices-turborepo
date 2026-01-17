import type { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';

export function getCorsConfig(configService: ConfigService): CorsOptions {
  const allowedOriginsRaw = configService.get<string>('HTTP_CORS') ?? '';
  const allowedOrigins = allowedOriginsRaw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    // origin: (origin, callback) => {
    //   // same-origin / server-to-server / curl (no Origin header)
    //   if (!origin) return callback(null, true);

    //   // exact allow-list from env
    //   if (allowedOrigins.includes(origin)) return callback(null, true);

    //   // allow our subdomains (pm.cloudmill.ru, api.pm.cloudmill.ru, etc.)
    //   try {
    //     const { hostname, protocol } = new URL(origin);
    //     const isHttpsOrHttp = protocol === 'https:' || protocol === 'http:';
    //     if (isHttpsOrHttp && hostname.endsWith('.cloudmill.ru')) return callback(null, true);
    //     if (isHttpsOrHttp && hostname.endsWith('.bitrix24.ru')) return callback(null, true);
    //   } catch {
    //     // ignore invalid Origin
    //   }

    //   return callback(new Error('Not allowed by CORS'));
    // },

    origin:allowedOrigins,
    credentials: true,
    // methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    // allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    // exposedHeaders: ['Set-Cookie'],
  };
}

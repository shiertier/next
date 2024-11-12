"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 详细的错误日志记录
    /* eslint-disable no-console */
    console.error('错误详情:', {
      message: error.message,
      stack: error.stack,
      digest: error.digest, // Next.js 特有的错误标识符
      timestamp: new Date().toISOString(),
      url: window.location.href,
    });

    // 这里可以添加错误上报服务，例如 Sentry
    // reportError(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          抱歉，出现了一些问题！
        </h2>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-4 p-4 bg-gray-100 rounded">
            <p className="text-sm font-mono text-gray-700">
              错误信息: {error.message}
            </p>
            {error.digest && (
              <p className="text-sm font-mono text-gray-700">
                错误ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            重试
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          >
            返回首页
          </button>
        </div>
      </div>
    </div>
  );
}

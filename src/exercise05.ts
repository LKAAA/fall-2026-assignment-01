export type NetworkConfig = {
  serverUrl: string;
  port: number;
};

export type EnvironmentConfig = {
  environment: "dev" | "prod";
  timeout: number;
};

export type AppConfig = NetworkConfig & EnvironmentConfig;

export function initializeConfig(userOverrides: Partial<AppConfig>): AppConfig {
  return {
    serverUrl: userOverrides.serverUrl ? userOverrides.serverUrl : "http://localhost",
    port: userOverrides.port ? userOverrides.port : 8080,
    environment: userOverrides.environment ? userOverrides.environment : "dev",
    timeout: userOverrides.timeout ? userOverrides.timeout : 3000
  };
}

export function assembleTypesenseServerConfig(){
    const typesenseServerConfig = {
        apiKey: process.env.TYPESENSE_API_KEY ?? "xyz",
        nodes: [
            {
                host: "localhost",
                port: 8108,
                protocol: "http",
            },
        ], 
    }
    return typesenseServerConfig
}
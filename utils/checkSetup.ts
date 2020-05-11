const Config = require('../server/database/models/GlobalConfig');

export const checkSetup = async (context: any) => {
    // Check mongo for global_config collection
    try {
        const response = await Config.find();

        if (response.length === 0) {
            context.res.writeHead(302, { Location: '/setup' });
            context.res.end();
            throw Error('Collection does not exist, re-routing to setup.');
        }
    } catch (error) {
        return error;
    }

};
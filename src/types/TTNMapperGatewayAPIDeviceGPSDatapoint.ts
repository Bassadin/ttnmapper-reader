export default class TTNMapperGatewayAPIDeviceGPSDatapoint {
    constructor(
        public dev_id: string,

        public latitude: number,
        public longitude: number,
        public altitude: number,

        public gateway_id: string,
        public rssi: number,
        public snr: number,
        public spreading_factor: number,
        public hdop: number,
        public database_id: number,
        public time: Date,
        public gateway_time: Date,
    ) {}
}
